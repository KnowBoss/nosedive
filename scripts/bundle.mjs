#!/usr/bin/env node
// Bundles nosedive for npm: core built at a commit, typechecked and tested, into dist/, with bundle.json naming its source commit; then
// commits them. No cape is bundled: a hero attaches one from its repo.
// Usage: node scripts/bundle.mjs [--core <git url or path>] [--commit <ref>] [--accept-test-failures] [--no-commit]
import { spawnSync } from "node:child_process";
import { cpSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const option = (name, fallback) => (args.includes(name) ? args[args.indexOf(name) + 1] : fallback);
const coreUrl = option("--core", "https://github.com/KnowBoss/nosedive-core.git");
const ref = option("--commit", "main");
const accept = args.includes("--accept-test-failures");

const run = (command, argv, cwd, env = {}) =>
	spawnSync(command, argv, { cwd, stdio: "inherit", shell: process.platform === "win32" && command === "npm", env: { ...process.env, ...env } }).status === 0;
const read = (command, argv, cwd) => spawnSync(command, argv, { cwd, encoding: "utf8" }).stdout.trim();
const fail = (what) => {
	console.error(`bundle: ${what}`);
	process.exit(1);
};
const step = (text) => console.log(`\nbundle: ${text}`);

const work = mkdtempSync(join(tmpdir(), "nosedive-bundle-"));
const user = join(work, "user");
const coreDir = join(work, "core");

step(`core from ${coreUrl} at ${ref}`);
if (!run("git", ["clone", "-q", coreUrl, coreDir], work)) fail("cloning core failed");
const commit = read("git", ["rev-parse", "--verify", "-q", `origin/${ref}^{commit}`], coreDir) || read("git", ["rev-parse", "--verify", "-q", `${ref}^{commit}`], coreDir);
if (!commit) fail(`core has no ref ${ref}`);
if (!run("git", ["checkout", "-q", "--detach", commit], coreDir)) fail("checking core out failed");
if (!run("npm", ["ci", "--no-audit", "--no-fund"], coreDir)) fail("installing core failed");
// core's suite passes with type errors, so this is what keeps them out of a bundle; --accept-test-failures does not cover it.
step("core's typecheck");
if (!run("npm", ["run", "typecheck"], coreDir)) fail("core's typecheck failed");

const tests = {};
step("core's tests");
tests["nosedive-core"] = run("npm", ["test"], coreDir, { NOSEDIVE_USER_DIR: user }) ? "passed" : "failed";
if (tests["nosedive-core"] === "failed" && !accept) fail("core's tests failed; rerun with --accept-test-failures to bundle anyway, which bundle.json records");
step("building core");
if (!run("npm", ["run", "build"], coreDir)) fail("building core failed");
const core = await import(pathToFileURL(join(coreDir, "dist", "core.js")).href);
if (core.version.endsWith("-dev")) fail(`core built as ${core.version}, from a checkout that is not clean`);

step("copying the bundle in");
const dist = join(repo, "dist");
rmSync(dist, { recursive: true, force: true });
cpSync(join(coreDir, "dist"), dist, { recursive: true });

// Core loads esbuild at run time to build every cape, as none ships, so the package needs the version core built with.
const lock = JSON.parse(readFileSync(join(coreDir, "package-lock.json"), "utf8"));
const esbuild = lock.packages["node_modules/esbuild"]?.version;
if (!esbuild) fail("core's lock file names no esbuild");
const pkgPath = join(repo, "package.json");
const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
pkg.dependencies = { ...pkg.dependencies, esbuild };
writeFileSync(pkgPath, `${JSON.stringify(pkg, null, "\t")}\n`);
if (!run("npm", ["install", "--package-lock-only", "--no-audit", "--no-fund"], repo)) fail("updating the lock file failed");

const record = {
	core: { origin: coreUrl, commit, id: core.id, version: core.version },
	tests,
	node: ">=24",
};
writeFileSync(join(repo, "bundle.json"), `${JSON.stringify(record, null, "\t")}\n`);
// Windows keeps the scratch core loaded while this script runs, so its directory may not go until later.
try {
	rmSync(work, { recursive: true, force: true });
} catch {
	console.warn(`bundle: could not remove ${work}; delete it by hand`);
}

const summary = `bundle: core ${commit.slice(0, 7)} (${core.version})`;
if (args.includes("--no-commit")) {
	console.log(`\n${summary}, not committed`);
	process.exit(0);
}
if (!run("git", ["add", "--", "dist", "bundle.json", "package.json", "package-lock.json"], repo)) fail("staging the bundle failed");
const failed = Object.entries(tests).filter(([, result]) => result === "failed").map(([name]) => name);
const message = `${summary}${failed.length ? `\n\nTests failed and were accepted: ${failed.join(", ")}` : ""}`;
if (!run("git", ["commit", "-q", "-m", message], repo)) fail("committing the bundle failed");
console.log(`\n${summary}, committed`);
