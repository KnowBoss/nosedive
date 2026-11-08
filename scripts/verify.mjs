#!/usr/bin/env node
// Checks the committed bundle agrees with bundle.json: core's build is the one recorded, every shipped cape build is there and was
// made by that core at its recorded commit, every recorded test passed, and the CLI starts.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const problems = [];
const record = JSON.parse(readFileSync(join(repo, "bundle.json"), "utf8"));
const core = await import(pathToFileURL(join(repo, "dist", "core.js")).href);
if (core.id !== record.core.id || core.commit !== record.core.commit || core.version !== record.core.version) {
	problems.push(`dist/core.js is ${core.version} (${core.commit.slice(0, 7)}), bundle.json says ${record.core.version} (${record.core.commit.slice(0, 7)})`);
}
const manifestPath = join(repo, "dist", "capes", "manifest.json");
const manifest = existsSync(manifestPath) ? JSON.parse(readFileSync(manifestPath, "utf8")) : [];
for (const cape of record.capes) {
	const build = manifest.find((each) => each.id === cape.build);
	if (!build) problems.push(`${cape.name}: no build ${cape.build} in dist/capes/manifest.json`);
	else if (build.repo !== cape.repo || build.commit !== cape.commit || build.core !== core.id) problems.push(`${cape.name}: its shipped build is not ${cape.commit.slice(0, 7)} made by core ${core.id}`);
	if (!existsSync(join(repo, "dist", "capes", `${cape.build}.js`))) problems.push(`${cape.name}: dist/capes/${cape.build}.js is missing`);
}
// A bundle made with --accept-test-failures can be kept, but never published (green-bundles-only).
for (const [name, result] of Object.entries(record.tests)) if (result !== "passed") problems.push(`${name}'s tests ${result} when bundled`);
// Run from no repo at all, as a fresh install would be.
const help = spawnSync(process.execPath, [join(repo, "dist", "cli.js"), "help"], { cwd: tmpdir(), encoding: "utf8" });
if (help.status !== 0 || !help.stdout.startsWith("Usage: nosedive [--at <target>] <action>")) problems.push(`the CLI does not start: ${help.stderr || help.stdout}`);
if (problems.length > 0) {
	console.error(`verify: the bundle does not agree with bundle.json:\n  ${problems.join("\n  ")}`);
	process.exit(1);
}
console.log(`verify: core ${record.core.version} with ${record.capes.map((each) => `${each.name} ${each.commit.slice(0, 7)}`).join(", ")}`);
