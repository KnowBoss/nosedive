#!/usr/bin/env node
// Checks the committed bundle agrees with bundle.json: core's build is the one recorded, no cape is shipped, every recorded test
// passed, and the CLI starts.
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
// No cape ships: a hero attaches one from its repo.
if (record.capes !== undefined) problems.push("bundle.json lists capes, but the bundle ships none");
if (existsSync(join(repo, "dist", "capes"))) problems.push("dist/capes exists, but the bundle ships no capes");
// A bundle made with --accept-test-failures can be kept, but never published (green-bundles-only).
for (const [name, result] of Object.entries(record.tests)) if (result !== "passed") problems.push(`${name}'s tests ${result} when bundled`);
// Run from no repo at all, as a fresh install would be.
const help = spawnSync(process.execPath, [join(repo, "dist", "cli.js"), "help"], { cwd: tmpdir(), encoding: "utf8" });
if (help.status !== 0 || !help.stdout.startsWith("Usage: nosedive [--at <target>] <action>")) problems.push(`the CLI does not start: ${help.stderr || help.stdout}`);
if (problems.length > 0) {
	console.error(`verify: the bundle does not agree with bundle.json:\n  ${problems.join("\n  ")}`);
	process.exit(1);
}
console.log(`verify: core ${record.core.version} (${record.core.commit.slice(0, 7)})`);
