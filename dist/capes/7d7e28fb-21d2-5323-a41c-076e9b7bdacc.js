import { createRequire as __nosediveRequire } from "node:module"; const require = __nosediveRequire(import.meta.url);

// cape:nosedive-core
var from = globalThis.__nosediveCore;
if (from?.id !== "59db5434-21ad-5cd8-85a9-c6bc9652e5c2") throw new Error("nosedive-legacy was built against other capes than these: run `nosedive seed`");
var i01a1335485c67c95b7efdf2f0e03cfd6 = from.index["f2eac858-1ad1-5f3d-8250-9aea0e32f9cd"];
var i01a147171f057d019118aaa1f269f5fd = from.index["826cf4c9-5538-517e-85c8-9e039fe3d7e8"];
var i01a1901e263b7209a4b5f39a71c568b3 = from.index["d33f0545-ff49-51c6-b84d-338cc20fa0a0"];
var i01a1335480c776ba8945020d0af333eb = from.index["1bf519cb-9152-524b-8ad3-b2fb7b03593b"];
var i01a141f869c07c4da8288927a559c8ae = from.index["a39653d9-57b3-5893-b3d3-e8289922b60d"];
var i01a13354850c7ba3ba5b8ac41a7b6b11 = from.index["6b2a9b94-2897-527f-ad3a-2a8b64f660c2"];
var i01a13c760de87562b4738946402010b8 = from.index["f8f61252-af51-5bf4-bb1f-a78e24171188"];
var i01a15baf13e27bd88dc880d4871f2210 = from.index["480b043c-09ca-57c6-90cb-12cc9d55cac3"];
var i01a138b2b8ee703cab227b010f588b6a = from.index["c9249a29-3058-57d9-9088-7a2dc4c721ef"];
var i01a18e2a3b4b798d98068d4778a158e6 = from.index["389eeae8-6329-52b9-9530-265442362bc6"];
var i01a14ab1d36771eea2bc6f13bdeb0526 = from.index["e7d0d900-2198-54de-8dce-f34d9fcbf328"];
var i01a133588bcc7f8bae725ff70d8f6800 = from.index["ac5edfaf-4f0f-5ddf-9f90-c08a52425a15"];
var i01a133588b1f7d4ea13f1b5e79f02e4c = from.index["f678e7e2-d93f-5491-86d0-8eab56d5399c"];
var i01a1335483aa776cb84df698b04adc06 = from.index["12807794-bf3b-5b39-8b66-f25107612b52"];
var i01a13354894273b1be253424511ba82c = from.index["2a4c87f5-1c35-5e48-a615-1c0bf1527eb9"];
var i01a19005c109715583553072f4e38dc4 = from.index["e7dc8049-9ef9-57e8-a925-0753fa6b334f"];
var i01a1471723807d6e8ef228ad9472fff7 = from.index["0857d56c-abb2-519c-9947-3cdae7b1bbc5"];
var i01a17fba20d673c5b8dd8551943369a2 = from.index["c7516eb7-efc0-581e-978d-beed33d4cd47"];

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b131e0177e7f8518b309634ebbd8.ts
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { relative } from "node:path";
var QUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function repoDocs(hero) {
  return hero.reposDir && existsSync(hero.reposDir) ? i01a13354850c7ba3ba5b8ac41a7b6b11(hero.reposDir) : [];
}
function i01a1b131e0177e7f8518b309634ebbd8(hero, ref) {
  const repos = repoDocs(hero);
  const found = QUID.test(ref) ? repos.filter((doc) => String(doc.fm.id) === ref.toLowerCase()) : repos.filter((doc) => doc.fm.name === ref);
  if (found.length === 1) return found[0];
  if (found.length > 1) throw new Error(`${ref} names ${found.length} repos: ${found.map((doc) => String(doc.fm.id)).join(", ")}; name one by its quid`);
  throw new Error(`no repo ${ref} is registered in this hero`);
}
function git(cwd, ...args) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" });
  return { ok: result.status === 0, text: (result.status === 0 ? result.stdout : result.stderr || result.stdout || "").trim() };
}
function checkoutAt(hero, repo, ref, say) {
  const dir = i01a13c760de87562b4738946402010b8(hero, String(repo.fm.name));
  const root = relative(hero.dir, dir).replace(/\\/g, "/");
  if (existsSync(dir)) {
    const head2 = git(dir, "rev-parse", "HEAD").text;
    if (ref && git(dir, "rev-parse", "--verify", "-q", `${ref}^{commit}`).text !== head2) say.err(`nosedive: ${root} is at ${head2.slice(0, 12)}, not ${ref}, and is left there`);
    return { dir, root, head: head2 };
  }
  i01a15baf13e27bd88dc880d4871f2210(hero, repo, say);
  if (ref) {
    let target = ref;
    if (!git(dir, "rev-parse", "--verify", "-q", `${ref}^{commit}`).ok) {
      const fetched = git(dir, "fetch", "-q", "origin", ref);
      if (!fetched.ok) throw new Error(`${root}: cannot fetch ${ref} from origin: ${fetched.text}`);
      target = "FETCH_HEAD";
    }
    const moved = git(dir, "checkout", "-q", "--detach", target);
    if (!moved.ok) throw new Error(`${root}: cannot check out ${ref}: ${moved.text}`);
  }
  const head = git(dir, "rev-parse", "HEAD").text;
  if (ref) say.out(`${root}: detached at ${ref} ${head.slice(0, 12)}`);
  return { dir, root, head };
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b131e1947fa5b316b390a3be2415.ts
var WORK_ID = "01a15bb1-da9e-7d2d-aa82-5ee97257adc6";
var DIVE_BRANCH = /^nosedive-([0-9a-f]{12})-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;
function isDive(doc) {
  const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
  return kind.owner === WORK_ID && kind.name === "dive";
}
function scopesOf(hero, doc) {
  const registered = new Set(repoDocs(hero).map((repo) => String(repo.fm.id)));
  const entries2 = (Array.isArray(doc.fm.scopes) ? doc.fm.scopes : []).flatMap(
    (entry) => typeof entry === "string" ? [[entry, void 0]] : entry && typeof entry === "object" ? Object.entries(entry) : []
  );
  return entries2.filter(([repoId]) => registered.has(repoId)).map(([repoId, value]) => {
    const ref = value?.ref;
    return typeof ref === "string" ? { repoId, ref } : { repoId };
  });
}
function i01a1b131e1947fa5b316b390a3be2415(hero) {
  const parsed = DIVE_BRANCH.exec(git(hero.dir, "symbolic-ref", "-q", "--short", "HEAD").text);
  if (!parsed) return void 0;
  const [, token, id2] = parsed;
  const found = i01a138b2b8ee703cab227b010f588b6a(hero, id2);
  if (!found || found.repoDir !== hero.dir || !isDive(found)) return void 0;
  const name2 = String(found.fm.name);
  const meta = found.fm.meta ?? {};
  if (typeof meta.outcome === "string") throw new Error(`dive ${name2} is over: it ${meta.outcome}`);
  if (typeof meta.diver !== "string" || meta.diver.split("#")[1] !== token) throw new Error(`dive ${name2} is not held under this branch's token`);
  return { id: id2, doc: found, featId: typeof meta.feat === "string" ? meta.feat : void 0, scopes: scopesOf(hero, found) };
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b131e31f7b329bc1c4389343491a.ts
import { spawn } from "node:child_process";
import { existsSync as existsSync2, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { isAbsolute, join, relative as relative2 } from "node:path";
var QUID2 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
function linksOf(doc) {
  const links = Array.isArray(doc.fm.links) ? doc.fm.links : [];
  return links.flatMap(
    (entry) => entry && typeof entry === "object" ? Object.entries(entry).flatMap(([key, value]) => {
      const id2 = QUID2.exec(key)?.[0]?.toLowerCase();
      const attrs = value && typeof value === "object" ? value : {};
      return id2 ? [{ id: id2, rel: String(attrs.rel ?? ""), attrs }] : [];
    }) : []
  );
}
function heroDocs(hero) {
  const dirs = /* @__PURE__ */ new Set([...hero.roots.map((root) => root.dir), ...hero.reposDir ? [hero.reposDir] : []]);
  const docs2 = /* @__PURE__ */ new Map();
  for (const dir of dirs) if (existsSync2(dir)) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(dir)) docs2.set(String(doc.fm.id), doc);
  return docs2;
}
function scriptOf(doc) {
  const script = doc.fm.meta?.["test-script"];
  return typeof script === "string" && script ? script : void 0;
}
var RUNNER = `import { writeSync } from "node:fs";
import { pathToFileURL } from "node:url";

const mod = await import(pathToFileURL(process.env.NOSEDIVE_GATE_MODULE).href);
if (typeof mod.run !== "function") {
	console.error("gate module must export run(ctx)");
	process.exit(1);
}
const ctx = JSON.parse(process.env.NOSEDIVE_GATE_CONTEXT);
process.channel.unref();
const waiting = new Map();
process.on("message", ({ quid, doc }) => {
	const done = waiting.get(quid);
	waiting.delete(quid);
	if (waiting.size === 0) process.channel.unref();
	done(doc);
});
ctx.resolve = (quid) =>
	new Promise((resolve, reject) => {
		process.channel.ref();
		waiting.set(quid, (doc) => (doc ? resolve(doc) : reject(new Error("no kb doc has quid " + quid))));
		process.send({ quid });
	});

const outcome = await mod.run(ctx);
if (outcome === false) process.exitCode = 1;

const idleMs = Number(process.env.NOSEDIVE_GATE_IDLE_MS || 30000);
let idle;
const rearm = () => {
	clearTimeout(idle);
	idle = setTimeout(() => {
		writeSync(2, "gate produced no output for " + idleMs + "ms; forcing exit" + String.fromCharCode(10));
		process.exit(1);
	}, idleMs);
	idle.unref();
};
for (const stream of [process.stdout, process.stderr]) {
	const write = stream.write.bind(stream);
	stream.write = (...args) => {
		rearm();
		return write(...args);
	};
}
rearm();
`;
function runGate(hero, script, context, runner) {
  return new Promise((done, fail) => {
    const child = spawn(process.execPath, [runner], {
      cwd: hero.dir,
      stdio: ["inherit", "inherit", "inherit", "ipc"],
      env: { ...process.env, NOSEDIVE_GATE_MODULE: script, NOSEDIVE_GATE_CONTEXT: JSON.stringify(context) }
    });
    child.on("message", (message) => {
      const doc = i01a138b2b8ee703cab227b010f588b6a(hero, message.quid);
      child.send({ quid: message.quid, doc: doc ? { id: String(doc.fm.id), fm: doc.fm, body: doc.body, path: relative2(hero.dir, doc.path).replace(/\\/g, "/") } : null });
    });
    child.on("error", fail);
    child.on("exit", (code) => done(code ?? 1));
  });
}
async function i01a1b131e31f7b329bc1c4389343491a(hero, selected, dive, ctx) {
  if (selected.length === 0) throw new Error("no gates were selected, and running none would pass having checked nothing");
  const dir = mkdtempSync(join(tmpdir(), "nosedive-gate-"));
  const runner = join(dir, "gate-runner.mjs");
  writeFileSync(runner, RUNNER);
  const claims = /* @__PURE__ */ new Map();
  const failed = [];
  try {
    for (const { gate, by, flaky } of selected) {
      const name2 = String(gate.fm.name);
      const shown = relative2(hero.dir, gate.path).replace(/\\/g, "/");
      ctx.out(`gate ${name2} (${shown})`);
      const script = scriptOf(gate);
      const scriptPath = isAbsolute(script) ? script : join(hero.dir, script);
      if (!existsSync2(scriptPath)) {
        ctx.err(`nosedive: ${name2}'s meta.test-script ${script} is no file`);
        failed.push({ name: name2, flaky });
        continue;
      }
      if (git(hero.dir, "status", "--porcelain", "--", gate.path, scriptPath).text) ctx.err(`nosedive: ${name2}'s doc or script has uncommitted changes, which land would not accept yet`);
      const scopes = "scopes" in gate.fm ? scopesOf(hero, gate) : by ? scopesOf(hero, by) : [];
      const repos = {};
      for (const scope of scopes) {
        const repo = i01a1b131e0177e7f8518b309634ebbd8(hero, scope.repoId);
        const claim = claims.get(scope.repoId);
        if (claim) {
          if (claim.ref !== scope.ref) ctx.err(`nosedive: ${name2} wants ${String(repo.fm.name)} at ${scope.ref ?? "trunk"}, but ${claim.by} checked it out at ${claim.ref ?? "trunk"} first`);
        } else {
          const { root, head } = checkoutAt(hero, repo, scope.ref, ctx);
          ctx.err(`nosedive: ${String(repo.fm.name)} at ${head.slice(0, 12)}`);
          claims.set(scope.repoId, { ref: scope.ref, by: name2, root });
        }
        repos[String(repo.fm.name)] = { id: scope.repoId, root: claims.get(scope.repoId).root };
      }
      if (scopes.length === 0) ctx.err(`nosedive: ${name2} runs with no repos`);
      const context = {
        bridgeRoot: hero.dir,
        diveId: dive?.id ?? "",
        ...dive?.featId ? { featId: dive.featId } : {},
        gateId: String(gate.fm.id),
        introducedById: by ? String(by.fm.id) : String(gate.fm.id),
        repos
      };
      const status = await runGate(hero, scriptPath, context, runner);
      if (status === 0) ctx.out(`  passed`);
      else {
        ctx.out(flaky ? `  failed (flaky)` : `  failed`);
        failed.push({ name: name2, flaky });
      }
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
  const blocking = failed.filter((gate) => !gate.flaky);
  const warned = failed.filter((gate) => gate.flaky);
  ctx.out(`${selected.length - failed.length} of ${selected.length} gates passed`);
  if (warned.length) ctx.out(`failed, flaky: ${warned.map((gate) => gate.name).join(", ")}`);
  if (blocking.length) throw new Error(`${blocking.length} gate${blocking.length === 1 ? "" : "s"} failed: ${blocking.map((gate) => gate.name).join(", ")}`);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/iffb5aa30b4e659e68b40ad7dee378a62.ts
async function iffb5aa30b4e659e68b40ad7dee378a62(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("test works in a hero repo, and this is not one");
  const dive = i01a1b131e1947fa5b316b390a3be2415(hero);
  if (!dive) throw new Error("no dive is held here: `nosedive jump <feat or dive>` picks one up, or name the gates: `nosedive test <gate>...`");
  const docs2 = heroDocs(hero);
  const declarers = [dive.doc];
  if (args.full) {
    for (const scope of dive.scopes) declarers.push(docs2.get(scope.repoId));
    for (const id2 of reachedFeats(docs2, dive.featId)) declarers.push(docs2.get(id2));
  }
  const selected = [];
  const seen = /* @__PURE__ */ new Set();
  for (const by of declarers) {
    for (const link of linksOf(by)) {
      if (link.rel !== "test.gate" || seen.has(link.id)) continue;
      seen.add(link.id);
      const gate = docs2.get(link.id);
      if (!gate || !scriptOf(gate)) throw new Error(`${String(by.fm.name)} declares gate ${link.id}, which is no doc with a meta.test-script`);
      selected.push({ gate, by, flaky: link.attrs["test-is-flaky"] === true });
    }
  }
  await i01a1b131e31f7b329bc1c4389343491a(hero, selected, dive, ctx);
}
function reachedFeats(docs2, featId) {
  if (!featId || !docs2.has(featId)) return [];
  const edges = /* @__PURE__ */ new Map();
  const edge = (from2, to) => edges.set(from2, (edges.get(from2) ?? /* @__PURE__ */ new Set()).add(to));
  for (const [id2, doc] of docs2) for (const link of linksOf(doc)) if (link.rel.endsWith(".feat")) edge(id2, link.id), edge(link.id, id2);
  const reached = /* @__PURE__ */ new Set([featId]);
  const queue = [featId];
  while (queue.length) {
    for (const next of edges.get(queue.shift()) ?? []) {
      const doc = docs2.get(next);
      if (reached.has(next) || !doc || i01a18e2a3b4b798d98068d4778a158e6(doc).name === "dive") continue;
      reached.add(next);
      queue.push(next);
    }
  }
  return [...reached];
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i79c0bcc90fa55bff9c8e62fed26dfa9a.ts
import { existsSync as existsSync3 } from "node:fs";
import { resolve } from "node:path";
var QUID3 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
async function i79c0bcc90fa55bff9c8e62fed26dfa9a(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("test works in a hero repo, and this is not one");
  const docs2 = heroDocs(hero);
  const dive = i01a1b131e1947fa5b316b390a3be2415(hero);
  const find = (ref, what) => {
    const path = resolve(ctx.cwd, ref);
    const id2 = (existsSync3(path) ? QUID3.exec(path.replace(/.*[\\/]/, "")) : QUID3.exec(ref))?.[0]?.toLowerCase();
    const doc = id2 ? docs2.get(id2) : void 0;
    if (!doc) throw new Error(`${what} ${ref} is no doc in this hero`);
    return doc;
  };
  const via = typeof args.via === "string" ? reachable(docs2, find(args.via, "--via")) : void 0;
  const selected = [];
  for (const ref of [args.gate].flat()) {
    const gate = find(ref, "gate");
    const name2 = String(gate.fm.name);
    if (!scriptOf(gate)) throw new Error(`${name2} has no meta.test-script, so it is no gate`);
    let declared = [...docs2.values()].flatMap((doc) => linksOf(doc).filter((link) => link.id === String(gate.fm.id) && link.rel.endsWith(".gate")).map((link) => ({ doc, link })));
    if (via) {
      declared = declared.filter(({ doc }) => via.has(String(doc.fm.id)));
      if (declared.length === 0 && !("scopes" in gate.fm)) throw new Error(`no doc that ${String(args.via)} reaches declares ${name2}`);
    }
    const own = dive && declared.find(({ doc }) => String(doc.fm.id) === dive.id);
    if (own) declared = [own];
    if (declared.length > 1) {
      throw new Error(`${name2} has several declaring docs: ${declared.map(({ doc }) => `${String(doc.fm.name)} (${String(doc.fm.id)})`).join(", ")}; use --via <doc> to pick one`);
    }
    if (declared.length === 0 && !("scopes" in gate.fm)) {
      throw new Error(`no doc declares ${name2}, so it has no scopes to inherit: declare it on a feat with a .gate link, or give it scopes: [] if it needs no repo`);
    }
    const [found] = declared;
    selected.push({ gate, by: found?.doc, flaky: found?.link.attrs["test-is-flaky"] === true });
  }
  await i01a1b131e31f7b329bc1c4389343491a(hero, selected, dive, ctx);
}
function reachable(docs2, from2) {
  const reached = /* @__PURE__ */ new Set([String(from2.fm.id)]);
  const queue = [from2];
  while (queue.length) {
    for (const link of linksOf(queue.shift())) {
      const doc = docs2.get(link.id);
      if (doc && !reached.has(link.id)) reached.add(link.id), queue.push(doc);
    }
  }
  return reached;
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129c08179e5abdcc058f6a359a4.ts
async function i01a1b129c08179e5abdcc058f6a359a4(call) {
  switch (call.usage) {
    case "uffb5aa30b4e659e68b40ad7dee378a62":
      return iffb5aa30b4e659e68b40ad7dee378a62(call.args, call.ctx);
    case "u79c0bcc90fa55bff9c8e62fed26dfa9a":
      return i79c0bcc90fa55bff9c8e62fed26dfa9a(call.args, call.ctx);
    default:
      throw new Error(`test has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i552b992cd74d50a489e0b2c84fcc203b.ts
async function i552b992cd74d50a489e0b2c84fcc203b(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("hydrate-repo.workspace works in a hero repo, and this is not one");
  checkoutAt(hero, i01a1b131e0177e7f8518b309634ebbd8(hero, String(args.repo)), typeof args.at === "string" ? args.at : void 0, ctx);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129c3b876719f5521826bd5a66b.ts
async function i01a1b129c3b876719f5521826bd5a66b(call) {
  switch (call.usage) {
    case "u552b992cd74d50a489e0b2c84fcc203b":
      return i552b992cd74d50a489e0b2c84fcc203b(call.args, call.ctx);
    default:
      throw new Error(`hydrate-repo.workspace has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/idf324b14b9135de2893fffa8705388da.ts
import { existsSync as existsSync4 } from "node:fs";
import { relative as relative3 } from "node:path";
async function idf324b14b9135de2893fffa8705388da(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("dehydrate-repo.workspace works in a hero repo, and this is not one");
  const repo = i01a1b131e0177e7f8518b309634ebbd8(hero, String(args.repo));
  const dir = i01a13c760de87562b4738946402010b8(hero, String(repo.fm.name));
  if (args.force !== true || !existsSync4(dir)) return i01a17fba20d673c5b8dd8551943369a2(hero, repo, ctx);
  const cache = git(dir, "rev-parse", "--path-format=absolute", "--git-common-dir").text;
  const removed = git(cache, "worktree", "remove", "--force", "--force", dir);
  if (!removed.ok) throw new Error(`cannot remove ${dir}: ${removed.text}`);
  ctx.out(`${relative3(hero.dir, dir).replace(/\\/g, "/")}: removed`);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129c70279ed9ccced39e882d827.ts
async function i01a1b129c70279ed9ccced39e882d827(call) {
  switch (call.usage) {
    case "udf324b14b9135de2893fffa8705388da":
      return idf324b14b9135de2893fffa8705388da(call.args, call.ctx);
    default:
      throw new Error(`dehydrate-repo.workspace has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i0190147b40b25ca2b1d03135a75a3502.ts
import { existsSync as existsSync5, mkdirSync, writeFileSync as writeFileSync2 } from "node:fs";
import { join as join2, relative as relative5, resolve as resolve2 } from "node:path";

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b13770be7a7a95b5e4ae9eed1407.ts
import { relative as relative4 } from "node:path";
function i01a1b13770be7a7a95b5e4ae9eed1407(hero, version2, commit2, link, files = []) {
  const edit = i01a14ab1d36771eea2bc6f13bdeb0526(hero.dir, version2);
  const key = relative4(hero.dir, link.docPath).replace(/\\/g, "/");
  i01a133588bcc7f8bae725ff70d8f6800(edit, link.fromId, "links", (links) => i01a133588b1f7d4ea13f1b5e79f02e4c(links, { [key]: link.attrs }));
  const from2 = edit.doc(link.fromId);
  i01a1335483aa776cb84df698b04adc06(from2.path, from2.yaml, from2.body);
  i01a13354894273b1be253424511ba82c(hero.dir, [link.docPath, from2.path, ...files], i01a19005c109715583553072f4e38dc4(hero, commit2.action, commit2.what, [link.docId, link.fromId]), version2);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i0190147b40b25ca2b1d03135a75a3502.ts
var QUID4 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
function stub(script) {
  return [
    "export async function run(ctx) {",
    "	// Minted by `nosedive record.gate` and deliberately failing: return false (or throw) when what it proves does not hold.",
    `	console.error(\`gate \${ctx.gateId} is unimplemented: write the check in ${script}\`);`,
    "	return false;",
    "}",
    ""
  ].join("\n");
}
async function i0190147b40b25ca2b1d03135a75a3502(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero) throw new Error("record.gate works in a hero repo, and this is not one");
  if (!i01a147171f057d019118aaa1f269f5fd("gate", hero, ctx.capes)) throw new Error("this hero has no gate kind to mint a gate of");
  const action = args.action === void 0 ? "test" : String(args.action);
  if (action !== "test" && action !== "land") throw new Error(`--action is test or land, not ${action}`);
  const featRef = String(args.feat);
  const path = resolve2(ctx.cwd, featRef);
  const featId = (existsSync5(path) ? QUID4.exec(path.replace(/.*[\\/]/, "")) : QUID4.exec(featRef))?.[0]?.toLowerCase();
  if (!featId || !i01a1901e263b7209a4b5f39a71c568b3(hero).feats.has(featId)) throw new Error(`${featRef} is no feat of this hero`);
  const id2 = i01a1335480c776ba8945020d0af333eb();
  const script = `${relative5(hero.dir, join2(hero.kbDir, "artifacts")).replace(/\\/g, "/")}/${id2}.mjs`;
  const doc = i01a141f869c07c4da8288927a559c8ae(hero.kbDir, { kind: "gate", id: id2, gist: String(args.gist), ...typeof args.name === "string" ? { name: args.name } : {}, meta: { "test-script": script } });
  mkdirSync(join2(hero.kbDir, "artifacts"), { recursive: true });
  writeFileSync2(join2(hero.dir, script), stub(script));
  const attrs = { rel: `${action}.gate`, ...args.flaky === true ? { "test-is-flaky": true } : {} };
  i01a1b13770be7a7a95b5e4ae9eed1407(hero, ctx.capes[0].version, { action: "record.gate", what: doc.name }, { fromId: featId, docId: id2, docPath: doc.path, attrs }, [join2(hero.dir, script)]);
  ctx.out(relative5(hero.dir, doc.path).replace(/\\/g, "/"));
  ctx.out(`write its check in ${script}, then run it: nosedive test ${id2}`);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129ca537ef6973626eeeaebc87c.ts
async function i01a1b129ca537ef6973626eeeaebc87c(call) {
  switch (call.usage) {
    case "u0190147b40b25ca2b1d03135a75a3502":
      return i0190147b40b25ca2b1d03135a75a3502(call.args, call.ctx);
    default:
      throw new Error(`record.gate has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i58b390d976c95aa4bc065fbc8605e404.ts
import { appendFileSync } from "node:fs";
import { relative as relative6 } from "node:path";
var SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;
async function i58b390d976c95aa4bc065fbc8605e404(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero) throw new Error("note works in a hero repo, and this is not one");
  const words = [args.gist].flat().map(String);
  const kind = words[0]?.endsWith(":") && SLUG.test(words[0].slice(0, -1)) ? words.shift().slice(0, -1) : "memo";
  const gist = words.join(" ").trim();
  if (!gist) throw new Error("a note needs a gist");
  if (!i01a147171f057d019118aaa1f269f5fd(kind, hero, ctx.capes)) throw new Error(`this hero has no kind ${kind}`);
  let scope = typeof args.scope === "string" ? args.scope : void 0;
  if (!scope) {
    const bridge = hero.config.bridge;
    if (typeof bridge !== "string") throw new Error("name the repo the note is about with --scope <repo>: this hero's config names no bridge repo");
    scope = bridge;
  }
  const repo = i01a1b131e0177e7f8518b309634ebbd8(hero, scope);
  if (!args.scope) ctx.out(`scoped to ${String(repo.fm.name)}, the bridge repo`);
  const id2 = i01a1335480c776ba8945020d0af333eb();
  const slug = gist.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean).slice(0, 6).join("-");
  const name2 = `${slug}-${id2.slice(-6)}`;
  const title = typeof args.title === "string" ? args.title : slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, " ");
  const doc = i01a141f869c07c4da8288927a559c8ae(hero.kbDir, { kind, id: id2, name: name2, gist, title });
  if (typeof args.body === "string") appendFileSync(doc.path, `
${(await i01a1471723807d6e8ef228ad9472fff7(args.body, ctx)).trimEnd()}
`);
  i01a1b13770be7a7a95b5e4ae9eed1407(hero, ctx.capes[0].version, { action: "note", what: name2 }, { fromId: String(repo.fm.id), docId: id2, docPath: doc.path, attrs: { rel: `${kind}.note` } });
  ctx.out(relative6(hero.dir, doc.path).replace(/\\/g, "/"));
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b13078b173229a3b1e21f7e12c20.ts
async function i01a1b13078b173229a3b1e21f7e12c20(call) {
  switch (call.usage) {
    case "u58b390d976c95aa4bc065fbc8605e404":
      return i58b390d976c95aa4bc065fbc8605e404(call.args, call.ctx);
    default:
      throw new Error(`note has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b31bdffb73989a9e8bcd257167b5.ts
var STATES = ["landed", "bailed", "planned", "jumped", "packed"];
var QUID5 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
var WORK_META = /* @__PURE__ */ new Set(["diver", "packer", "outcome", "feat"]);
var entries = (list) => Array.isArray(list) ? list.filter((entry) => entry && typeof entry === "object") : [];
function i01a1b31bdffb73989a9e8bcd257167b5(dir, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(dir);
  if (!hero || hero.dir !== dir) return [];
  const docs2 = /* @__PURE__ */ new Map();
  for (const root of hero.roots) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(root.dir)) docs2.set(String(doc.fm.id), doc);
  const changed = /* @__PURE__ */ new Set();
  const targets = /* @__PURE__ */ new Map();
  for (const [id2, doc] of docs2) {
    let edited = false;
    const links = entries(doc.fm.links).map(
      (entry) => Object.fromEntries(
        Object.entries(entry).map(([key, value]) => {
          const attrs = value && typeof value === "object" ? value : {};
          const state = typeof attrs.rel === "string" ? /^(\w+)\.dive$/.exec(attrs.rel)?.[1] : void 0;
          const target = QUID5.exec(key)?.[0];
          if (!state || !STATES.includes(state) || !target) return [key, value];
          const known = targets.get(target) ?? { states: /* @__PURE__ */ new Set(), by: id2 };
          known.states.add(state);
          targets.set(target, known);
          edited = true;
          return [key, { ...attrs, rel: "dives.feat" }];
        })
      )
    );
    if (edited) {
      doc.yaml.set("links", links);
      changed.add(doc);
    }
  }
  const canonical = [...docs2.values()].map((doc) => entries(doc.fm.scopes).find((entry) => WORK_ID in entry)).find(Boolean);
  const isWorkDive = (doc) => {
    const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
    return kind.owner === WORK_ID && kind.name === "dive";
  };
  for (const [id2, { states, by }] of targets) {
    const doc = docs2.get(id2);
    if (!doc) {
      ctx.out(`legacy-dives: ${id2} is linked as a dive and is no doc here, so it is left out`);
      continue;
    }
    if (!isWorkDive(doc)) {
      doc.yaml.set("kind", "dive");
      const others = entries(doc.fm.scopes).filter((entry) => !Object.values(entry).some((value) => value?.canonical === true));
      doc.yaml.set("scopes", [...others, canonical ?? { [WORK_ID]: { canonical: true } }]);
      changed.add(doc);
    }
    const outcome = states.has("landed") ? "landed" : states.has("bailed") ? "bailed" : void 0;
    if (outcome && doc.yaml.getIn(["meta", "outcome"]) === void 0) {
      doc.yaml.setIn(["meta", "outcome"], outcome);
      changed.add(doc);
    }
    if (!doc.yaml.hasIn(["meta", "feat"])) {
      const effort = doc.yaml.getIn(["meta", "effort"]);
      const named = typeof effort === "string" ? docs2.has(effort) ? effort : [...docs2.values()].find((each) => each.fm.name === effort)?.fm.id : void 0;
      doc.yaml.setIn(["meta", "feat"], String(named ?? by));
      changed.add(doc);
    }
  }
  for (const doc of docs2.values()) {
    if (!isWorkDive(doc) && !targets.has(String(doc.fm.id))) continue;
    const meta = doc.yaml.getIn(["meta"]);
    const keys = Object.keys(doc.yaml.toJS().meta ?? {}).filter((key) => !WORK_META.has(key));
    if (!meta || keys.length === 0) continue;
    const values = doc.yaml.toJS().meta;
    const kept = keys.filter((key) => key !== "effort").map((key) => `- ${key}: ${typeof values[key] === "string" ? values[key] : JSON.stringify(values[key])}`);
    for (const key of keys) doc.yaml.deleteIn(["meta", key]);
    if (kept.length > 0) doc.body = `${doc.body.trimEnd()}

## Legacy meta

${kept.join("\n")}
`;
    changed.add(doc);
  }
  for (const doc of changed) i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, doc.body);
  if (changed.size > 0) ctx.out(`legacy-dives: ${targets.size} dive${targets.size === 1 ? "" : "s"} linked by state, ${changed.size} doc${changed.size === 1 ? "" : "s"} rewritten to work's shape`);
  return [...changed].map((doc) => doc.path);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b31be41b7a31a5918d04ef4091be.ts
import { spawnSync as spawnSync2 } from "node:child_process";
import { existsSync as existsSync6, mkdirSync as mkdirSync2, mkdtempSync as mkdtempSync2, rmSync as rmSync2 } from "node:fs";
import { homedir, tmpdir as tmpdir2 } from "node:os";
import { isAbsolute as isAbsolute2, join as join3, resolve as resolve3 } from "node:path";
var Wait = class extends Error {
};
var QUID6 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
var BRANCHES = "+refs/heads/*:refs/remotes/origin/*";
var PACKED = "+refs/nosedive/*:refs/nosedive/*";
function git2(cwd, args, env = {}) {
  const result = spawnSync2("git", args, { cwd, encoding: "utf8", env: { ...process.env, ...env } });
  return { ok: result.status === 0, text: (result.status === 0 ? result.stdout : result.stderr || result.stdout || "").trim() };
}
var linksOf2 = (doc, rel) => (Array.isArray(doc.fm.links) ? doc.fm.links : []).flatMap(
  (entry) => Object.entries(entry ?? {}).flatMap(([key, value]) => value?.rel === rel && QUID6.exec(key) ? [QUID6.exec(key)[0]] : [])
);
function cacheOf(hero, repo) {
  const cache = join3(process.env.NOSEDIVE_USER_DIR || join3(homedir(), ".nosedive"), "cache", `${String(repo.fm.id)}.git`);
  const url = String(repo.fm.meta?.remotes?.origin ?? "");
  if (!url) throw new Wait(`${String(repo.fm.name)} has no meta.remotes.origin`);
  const origin = /^[a-z][a-z0-9+.-]*:\/\/|^[^@\s/]+@[^:\s/]+:/i.test(url) || isAbsolute2(url) ? url : resolve3(hero, url);
  if (!existsSync6(cache)) {
    mkdirSync2(cache, { recursive: true });
    git2(cache, ["init", "-q", "--bare"]);
  }
  git2(cache, ["config", "remote.origin.url", origin]);
  git2(cache, ["config", "--replace-all", "remote.origin.fetch", BRANCHES]);
  git2(cache, ["config", "--add", "remote.origin.fetch", PACKED]);
  const fetched = git2(cache, ["fetch", "-q", "--prune", "origin"]);
  if (!fetched.ok) throw new Wait(`cannot fetch ${String(repo.fm.name)}: ${fetched.text}`);
  return cache;
}
function remoteHas(dir, ref, name2) {
  const listed = git2(dir, ["ls-remote", "origin", ref]);
  if (!listed.ok) throw new Wait(`cannot ask ${name2}'s origin for ${ref}: ${listed.text}`);
  return listed.text !== "";
}
function build(repo, base, patches, wip, ref, name2, identity) {
  const scratch = mkdtempSync2(join3(tmpdir2(), "nosedive-legacy-"));
  const tree = join3(scratch, "tree");
  try {
    const added = git2(repo, ["worktree", "add", "-q", "--detach", tree, base]);
    if (!added.ok) return `cannot check out ${base.slice(0, 12)}: ${added.text}`;
    for (const patch of [...patches.filter((each) => !each.dirty), ...patches.filter((each) => each.dirty)]) {
      if (!existsSync6(patch.file)) return `its patch ${patch.file} is gone`;
      const there = () => git2(tree, ["apply", "--reverse", "--check", "--binary", "--whitespace=nowarn", patch.file]).ok;
      if (patch.dirty) {
        const applied = git2(tree, ["apply", "--3way", "--index", "--binary", "--whitespace=nowarn", patch.file]);
        if (!applied.ok) {
          git2(tree, ["reset", "-q", "--hard"]);
          if (!there()) return `its uncommitted work no longer applies: ${firstLine(applied.text)}`;
        }
      } else {
        const applied = git2(tree, ["am", "-q", "-3", "--keep-cr", "--committer-date-is-author-date", "--no-verify", patch.file], identity);
        if (!applied.ok) {
          git2(tree, ["am", "--abort"]);
          if (!there()) return `a patch no longer applies: ${firstLine(applied.text)}`;
        }
      }
    }
    if (patches.some((each) => each.dirty)) {
      const committed = git2(tree, ["commit", "-q", "--allow-empty", "--no-verify", "-m", wip], identity);
      if (!committed.ok) return `cannot commit its uncommitted work: ${committed.text}`;
    }
    const pushed = git2(tree, ["push", "-q", "origin", `HEAD:${ref}`]);
    if (!pushed.ok) throw new Wait(`cannot push ${name2}'s ${ref}: ${pushed.text}`);
    return void 0;
  } finally {
    git2(repo, ["worktree", "remove", "--force", tree]);
    rmSync2(scratch, { recursive: true, force: true });
  }
}
function i01a1b31be41b7a31a5918d04ef4091be(dir, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(dir);
  if (!hero || hero.dir !== dir || !hero.id) return [];
  const docs2 = /* @__PURE__ */ new Map();
  for (const root of hero.roots) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(root.dir)) docs2.set(String(doc.fm.id), doc);
  const repos = repoDocs(hero);
  const pushed = [];
  try {
    for (const dive of docs2.values()) {
      const kind = i01a18e2a3b4b798d98068d4778a158e6(dive);
      const meta = dive.fm.meta ?? {};
      if (kind.owner !== WORK_ID || kind.name !== "dive" || meta.outcome !== void 0 && meta.outcome !== "bailed") continue;
      const name2 = String(dive.fm.name);
      const ref = `refs/nosedive/${hero.id}/dives/${String(dive.fm.id)}`;
      const wip = `pack(${name2}): work in progress`;
      const identity = { GIT_AUTHOR_NAME: "nosedive", GIT_AUTHOR_EMAIL: typeof meta.packer === "string" ? meta.packer : "noreply@nosedive.dev", GIT_COMMITTER_NAME: "nosedive", GIT_COMMITTER_EMAIL: "noreply@nosedive.dev" };
      const chains = /* @__PURE__ */ new Map();
      for (const head of linksOf2(dive, "patch")) {
        const patches = [];
        let owner2;
        const seen = /* @__PURE__ */ new Set();
        for (let id2 = head; id2 && !seen.has(id2); id2 = linksOf2(docs2.get(id2), "next")[0]) {
          seen.add(id2);
          const memo = docs2.get(id2);
          const file = memo?.fm.meta?.patch;
          if (!memo || typeof file !== "string") {
            ctx.out(`legacy-patches: ${name2}'s patch memo ${id2} is gone, so its chain is passed over`);
            owner2 = void 0;
            break;
          }
          const memoName = String(memo.fm.name);
          owner2 ??= memoName.startsWith("bridge-wip.") ? "" : memoName.slice(memoName.indexOf(".") + 1);
          patches.push({ file: join3(dir, file), dirty: memoName.startsWith("dirty.") || memoName.startsWith("bridge-wip.") });
          if (!docs2.has(linksOf2(memo, "next")[0] ?? "")) break;
        }
        if (owner2 !== void 0) chains.set(owner2, [...chains.get(owner2) ?? [], ...patches]);
      }
      for (const entry of Array.isArray(dive.fm.scopes) ? dive.fm.scopes : []) {
        for (const [repoId, scope] of Object.entries(entry ?? {})) {
          const repo = repos.find((each) => String(each.fm.id) === repoId);
          const pin = scope?.ref;
          if (!repo || typeof scope?.["work-branch"] !== "string" || typeof pin !== "string") continue;
          const repoName = String(repo.fm.name);
          const cache = cacheOf(dir, repo);
          if (remoteHas(cache, ref, repoName)) continue;
          if (!git2(cache, ["rev-parse", "--verify", "-q", `${pin}^{commit}`]).ok && !git2(cache, ["fetch", "-q", "origin", pin]).ok) {
            ctx.out(`legacy-patches: ${name2}: ${repoName}'s origin has no ${pin.slice(0, 12)}, so its work is passed over`);
            continue;
          }
          const patches = chains.get(repoName) ?? [];
          const why = build(cache, pin, patches, wip, ref, repoName, identity);
          if (why) ctx.out(`legacy-patches: ${name2}: ${repoName}: ${why}, so it is passed over`);
          else pushed.push(`${name2} ${repoName} (${patches.length} patch${patches.length === 1 ? "" : "es"})`);
        }
      }
      const own = chains.get("");
      if (own && own.length > 0) {
        const fetched = git2(dir, ["fetch", "-q", "origin"]);
        if (!fetched.ok) throw new Wait(`cannot fetch the hero: ${fetched.text}`);
        if (remoteHas(dir, ref, "the hero")) continue;
        const trunk = git2(dir, ["rev-parse", "--verify", "-q", "refs/remotes/origin/HEAD"]).text || git2(dir, ["rev-parse", "HEAD"]).text;
        const why = build(dir, trunk, own, wip, ref, "the hero", identity);
        if (why) ctx.out(`legacy-patches: ${name2}: the hero: ${why}, so it is passed over`);
        else pushed.push(`${name2} hero (${own.length} patch${own.length === 1 ? "" : "es"})`);
      }
    }
  } catch (err) {
    if (!(err instanceof Wait)) throw err;
    ctx.out(`legacy-patches: waiting, since ${err.message}${pushed.length ? `; pushed meanwhile: ${pushed.join(", ")}` : ""}`);
    return void 0;
  }
  for (const each of pushed) ctx.out(`legacy-patches: pushed ${each}`);
  return [];
}
function firstLine(text) {
  return text.split(/\r?\n/).find((line) => line.trim() && !line.startsWith("hint:")) ?? text;
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/7d7e28fb-21d2-5323-a41c-076e9b7bdacc.js.build/entry.ts
var id = "7d7e28fb-21d2-5323-a41c-076e9b7bdacc";
var owner = "01a1b128-2c08-790f-80f4-e2c40a98bfcc";
var shortName = "nosedive-legacy";
var name = "nosedive-legacy";
var commit = "bedf403f2e1b434971c31f6ae2fbe9d5630d67b7";
var version = "2026.11.7-1794019084053";
var core = "59db5434-21ad-5cd8-85a9-c6bc9652e5c2";
var needs = {};
var docs = { "01a1b129-c081-79e5-abdc-c058f6a359a4": { "kind": "action", "name": "test", "gist": "Runs gates as a check on the dive on deck, or the gates named, streaming each and exiting 1 if any gate that is not flaky failed", "usages": [{ "id": "ffb5aa30b4e659e68b40ad7dee378a62", "text": "test [--full]" }, { "id": "79c0bcc90fa55bff9c8e62fed26dfa9a", "text": "test <gate>... [--via <doc>]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-c081-79e5-abdc-c058f6a359a4\nname: test\ngist: \"Runs gates as a check on the dive on deck, or the gates named, streaming each and exiting 1 if any gate that is not flaky failed\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - test [--full]\n    - test <gate>... [--via <doc>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Test\n\n## Usage\n\nLegacy nosedive's `test` (its command doc `1e62a79d`, test@2), on a hero migrated to core, without the backlog sweep and without writing anything.\n\n## Selecting gates\n\nA gate is any doc a link names with a rel ending in `.gate` whose `meta.test-script` is a hero-relative path; its kind does not matter.\n\n- `test`: the `test.gate` links of the dive this worktree holds, found as work finds it: an open dive of work's dive kind whose `diver` carries this checkout's holder token. No dive held is refused, naming `jump` and the named form.\n- `test --full`: also every `test.gate` on the dive's feat, on each repo doc it scopes, and on every feat reached from the dive's feat through links whose rel names `.feat` as its role, in either direction. Nothing else is followed, so another dive's gates are never swept.\n- `test <gate>...`: the named gates, by quid or hero-relative path, in the order given. A gate is declared by the docs with a `.gate` link to it. One declaration is used; several are refused naming each, unless the held dive is among them, which then answers. `--via <doc>` narrows the declarers to that doc and the docs its links reach, before the held dive is considered; a gate with its own `scopes:` needs no declarer.\n\nSelecting no gates is a failure.\n\n## Running them\n\nEach gate runs in its own process, one after another, its output streamed as it comes. Its script exports `run(ctx)`; a `false` return or a throw fails it. A failing gate does not stop the run; the summary names every failure, and the exit is 1 if any gate failed whose declaring link is not `test-is-flaky: true`. A flaky failure is a warning.\n\n`ctx` is legacy's:\n\n- `bridgeRoot`: the hero's absolute path.\n- `gateId`, `introducedById`: the gate, and the doc whose link selected it.\n- `diveId`, `featId`: the held dive and its feat, empty when none.\n- `repos`: by repo `name`, `{ id, root }`, root hero-relative, for the gate's scopes: its own `scopes:` when it has the key (`[]` meaning none), else its declarer's.\n- `resolve(quid)`: the parsed doc, `{ fm, body }`; it throws when no doc has that quid.\n\nA scope's checkout is used as it is when present, saying when it is not at the scope's `ref`. A missing one is hydrated as hydrate-repo.workspace does, at the scope's `ref`, else trunk, naming the commit. The first gate to claim a repo decides its ref; a later one wanting another is named with both refs. An empty `repos` is named before its gate runs.\n\nA gate whose doc or script has uncommitted changes is named on stderr, and runs.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c08179e5abdcc058f6a359a4.ts](../src/i01a1b129c08179e5abdcc058f6a359a4.ts)\n- `test [--full]`: [impl](../src/iffb5aa30b4e659e68b40ad7dee378a62.ts), [tests](../src/iffb5aa30b4e659e68b40ad7dee378a62.test.ts)\n- `test <gate>... [--via <doc>]`: [impl](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.ts), [tests](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.test.ts)\n", "body": "# Test\n\n## Usage\n\nLegacy nosedive's `test` (its command doc `1e62a79d`, test@2), on a hero migrated to core, without the backlog sweep and without writing anything.\n\n## Selecting gates\n\nA gate is any doc a link names with a rel ending in `.gate` whose `meta.test-script` is a hero-relative path; its kind does not matter.\n\n- `test`: the `test.gate` links of the dive this worktree holds, found as work finds it: an open dive of work's dive kind whose `diver` carries this checkout's holder token. No dive held is refused, naming `jump` and the named form.\n- `test --full`: also every `test.gate` on the dive's feat, on each repo doc it scopes, and on every feat reached from the dive's feat through links whose rel names `.feat` as its role, in either direction. Nothing else is followed, so another dive's gates are never swept.\n- `test <gate>...`: the named gates, by quid or hero-relative path, in the order given. A gate is declared by the docs with a `.gate` link to it. One declaration is used; several are refused naming each, unless the held dive is among them, which then answers. `--via <doc>` narrows the declarers to that doc and the docs its links reach, before the held dive is considered; a gate with its own `scopes:` needs no declarer.\n\nSelecting no gates is a failure.\n\n## Running them\n\nEach gate runs in its own process, one after another, its output streamed as it comes. Its script exports `run(ctx)`; a `false` return or a throw fails it. A failing gate does not stop the run; the summary names every failure, and the exit is 1 if any gate failed whose declaring link is not `test-is-flaky: true`. A flaky failure is a warning.\n\n`ctx` is legacy's:\n\n- `bridgeRoot`: the hero's absolute path.\n- `gateId`, `introducedById`: the gate, and the doc whose link selected it.\n- `diveId`, `featId`: the held dive and its feat, empty when none.\n- `repos`: by repo `name`, `{ id, root }`, root hero-relative, for the gate's scopes: its own `scopes:` when it has the key (`[]` meaning none), else its declarer's.\n- `resolve(quid)`: the parsed doc, `{ fm, body }`; it throws when no doc has that quid.\n\nA scope's checkout is used as it is when present, saying when it is not at the scope's `ref`. A missing one is hydrated as hydrate-repo.workspace does, at the scope's `ref`, else trunk, naming the commit. The first gate to claim a repo decides its ref; a later one wanting another is named with both refs. An empty `repos` is named before its gate runs.\n\nA gate whose doc or script has uncommitted changes is named on stderr, and runs.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c08179e5abdcc058f6a359a4.ts](../src/i01a1b129c08179e5abdcc058f6a359a4.ts)\n- `test [--full]`: [impl](../src/iffb5aa30b4e659e68b40ad7dee378a62.ts), [tests](../src/iffb5aa30b4e659e68b40ad7dee378a62.test.ts)\n- `test <gate>... [--via <doc>]`: [impl](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.ts), [tests](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.test.ts)" }, "01a1b129-c3b8-7671-9f55-21826bd5a66b": { "kind": "action", "name": "hydrate-repo.workspace", "gist": "Checks one registered repo out into the workspace, detached at trunk or at a ref", "usages": [{ "id": "552b992cd74d50a489e0b2c84fcc203b", "text": "hydrate-repo.workspace <repo> [--at <ref>] [--read-only]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-c3b8-7671-9f55-21826bd5a66b\nname: hydrate-repo.workspace\ngist: \"Checks one registered repo out into the workspace, detached at trunk or at a ref\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - hydrate-repo.workspace <repo> [--at <ref>] [--read-only]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Hydrate repo.workspace\n\n## Usage\n\nLegacy's `hydrate-repo.workspace` on core's hydrate-repo. `<repo>` is a registered repo doc's quid or exact name; a name two docs share is refused naming both.\n\nWithout `--at`, the checkout is core's: detached at trunk, read-only. With `--at <ref>`, core hydrates it at trunk, then it is detached at the ref, fetched from origin when the cache lacks it. An existing checkout is left where it is, saying when it is not at the ref asked for.\n\n`--read-only` is accepted for legacy's callers and changes nothing: a checkout without a feat never has a branch to push.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c3b876719f5521826bd5a66b.ts](../src/i01a1b129c3b876719f5521826bd5a66b.ts)\n- `hydrate-repo.workspace <repo> [--at <ref>] [--read-only]`: [impl](../src/i552b992cd74d50a489e0b2c84fcc203b.ts), [tests](../src/i552b992cd74d50a489e0b2c84fcc203b.test.ts)\n", "body": "# Hydrate repo.workspace\n\n## Usage\n\nLegacy's `hydrate-repo.workspace` on core's hydrate-repo. `<repo>` is a registered repo doc's quid or exact name; a name two docs share is refused naming both.\n\nWithout `--at`, the checkout is core's: detached at trunk, read-only. With `--at <ref>`, core hydrates it at trunk, then it is detached at the ref, fetched from origin when the cache lacks it. An existing checkout is left where it is, saying when it is not at the ref asked for.\n\n`--read-only` is accepted for legacy's callers and changes nothing: a checkout without a feat never has a branch to push.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c3b876719f5521826bd5a66b.ts](../src/i01a1b129c3b876719f5521826bd5a66b.ts)\n- `hydrate-repo.workspace <repo> [--at <ref>] [--read-only]`: [impl](../src/i552b992cd74d50a489e0b2c84fcc203b.ts), [tests](../src/i552b992cd74d50a489e0b2c84fcc203b.test.ts)" }, "01a1b129-c702-79ed-9ccc-ed39e882d827": { "kind": "action", "name": "dehydrate-repo.workspace", "gist": "Removes one repo's checkout from the workspace once origin has its work, or regardless with --force", "usages": [{ "id": "df324b14b9135de2893fffa8705388da", "text": "dehydrate-repo.workspace <repo> [--force]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-c702-79ed-9ccc-ed39e882d827\nname: dehydrate-repo.workspace\ngist: \"Removes one repo's checkout from the workspace once origin has its work, or regardless with --force\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - dehydrate-repo.workspace <repo> [--force]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a17fba-20d6-73c5-b8dd-8551943369a2:\n      rel: uses.function\n---\n\n# Dehydrate repo.workspace\n\n## Usage\n\nLegacy's `dehydrate-repo.workspace` on core's dehydrate-repo. `<repo>` is a registered repo doc's quid or exact name, as for hydrate-repo.workspace.\n\nCore refuses to remove a checkout holding anything origin lacks. `--force` is legacy's: the worktree is removed regardless, and what it held that origin lacks goes with it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c70279ed9ccced39e882d827.ts](../src/i01a1b129c70279ed9ccced39e882d827.ts)\n- `dehydrate-repo.workspace <repo> [--force]`: [impl](../src/idf324b14b9135de2893fffa8705388da.ts), [tests](../src/idf324b14b9135de2893fffa8705388da.test.ts)\n", "body": "# Dehydrate repo.workspace\n\n## Usage\n\nLegacy's `dehydrate-repo.workspace` on core's dehydrate-repo. `<repo>` is a registered repo doc's quid or exact name, as for hydrate-repo.workspace.\n\nCore refuses to remove a checkout holding anything origin lacks. `--force` is legacy's: the worktree is removed regardless, and what it held that origin lacks goes with it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c70279ed9ccced39e882d827.ts](../src/i01a1b129c70279ed9ccced39e882d827.ts)\n- `dehydrate-repo.workspace <repo> [--force]`: [impl](../src/idf324b14b9135de2893fffa8705388da.ts), [tests](../src/idf324b14b9135de2893fffa8705388da.test.ts)" }, "01a1b129-ca53-7ef6-9736-26eeeaebc87c": { "kind": "action", "name": "record.gate", "gist": "Mints a gate: its doc, its stub script, and the link declaring it on a feat, ready to fail until somebody writes the check", "usages": [{ "id": "0190147b40b25ca2b1d03135a75a3502", "text": "record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-ca53-7ef6-9736-26eeeaebc87c\nname: record.gate\ngist: \"Mints a gate: its doc, its stub script, and the link declaring it on a feat, ready to fail until somebody writes the check\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n  - nosedive-core:01a1901e-263b-7209-a4b5-f39a71c568b3:\n      rel: uses.function\n  - nosedive-core:01a13354-80c7-76ba-8945-020d0af333eb:\n      rel: uses.function\n  - nosedive-core:01a141f8-69c0-7c4d-a828-8927a559c8ae:\n      rel: uses.function\n---\n\n# Record.gate\n\n## Usage\n\nLegacy's `record.gate` (its command doc `2c678acb`), minting only. Writes, in one commit to the hero:\n\n- a doc of the hero's `gate` kind with `meta.test-script: kb/artifacts/<gate id>.mjs`, its name `--name` or else made from the gist;\n- that script, a stub whose `run` writes the gate's id to stderr and returns `false`, so an unwritten gate is red;\n- a link to the gate on `<feat>`, rel `test.gate`, or `land.gate` with `--action land`, carrying `test-is-flaky: true` with `--flaky`.\n\n`<feat>` is a quid or hero-relative path to a doc core knows as a feat. A hero with no `gate` kind is refused. It prints the gate doc's path and the command that runs it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129ca537ef6973626eeeaebc87c.ts](../src/i01a1b129ca537ef6973626eeeaebc87c.ts)\n- `record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]`: [impl](../src/i0190147b40b25ca2b1d03135a75a3502.ts), [tests](../src/i0190147b40b25ca2b1d03135a75a3502.test.ts)\n", "body": "# Record.gate\n\n## Usage\n\nLegacy's `record.gate` (its command doc `2c678acb`), minting only. Writes, in one commit to the hero:\n\n- a doc of the hero's `gate` kind with `meta.test-script: kb/artifacts/<gate id>.mjs`, its name `--name` or else made from the gist;\n- that script, a stub whose `run` writes the gate's id to stderr and returns `false`, so an unwritten gate is red;\n- a link to the gate on `<feat>`, rel `test.gate`, or `land.gate` with `--action land`, carrying `test-is-flaky: true` with `--flaky`.\n\n`<feat>` is a quid or hero-relative path to a doc core knows as a feat. A hero with no `gate` kind is refused. It prints the gate doc's path and the command that runs it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129ca537ef6973626eeeaebc87c.ts](../src/i01a1b129ca537ef6973626eeeaebc87c.ts)\n- `record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]`: [impl](../src/i0190147b40b25ca2b1d03135a75a3502.ts), [tests](../src/i0190147b40b25ca2b1d03135a75a3502.test.ts)" }, "01a1b130-78b1-7322-9a3b-1e21f7e12c20": { "kind": "action", "name": "note", "gist": "Mints one kb doc and links it from the repo it is about", "usages": [{ "id": "58b390d976c95aa4bc065fbc8605e404", "text": "note <gist>... [--scope <repo>] [--title <title>] [--body <source>]" }], "top": true, "text": "---\nkind: action\nid: 01a1b130-78b1-7322-9a3b-1e21f7e12c20\nname: note\ngist: \"Mints one kb doc and links it from the repo it is about\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - note <gist>... [--scope <repo>] [--title <title>] [--body <source>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n  - nosedive-core:01a13354-80c7-76ba-8945-020d0af333eb:\n      rel: uses.function\n  - nosedive-core:01a141f8-69c0-7c4d-a828-8927a559c8ae:\n      rel: uses.function\n  - nosedive-core:01a14717-2380-7d6e-8ef2-28ad9472fff7:\n      rel: uses.function\n---\n\n# Note\n\n## Usage\n\nLegacy's `note` (its command doc `6274f51e`). The gist is the words given, joined by spaces. A first word ending in `:` names the note's kind, else it is a `memo`; the kind must be one the hero has.\n\nThe note is `kb/<quid>.md`, named by the gist slugged plus the id's last six hex digits, titled by the slug half, or by `--title`. `--body -` reads stdin, and `--body <file>` a file, as the text under the title.\n\n`--scope <repo>` names the registered repo it is about, by quid or exact name; without it, the repo the config's `bridge:` key names, said on stdout. That repo doc links the note, rel `<kind>.note`. Legacy took `--scope` more than once; one is taken here.\n\nThe note and the repo doc it links from are one commit.\n\n## Code\n\n- Entrypoint: [src/i01a1b13078b173229a3b1e21f7e12c20.ts](../src/i01a1b13078b173229a3b1e21f7e12c20.ts)\n- `note <gist>... [--scope <repo>] [--title <title>] [--body <source>]`: [impl](../src/i58b390d976c95aa4bc065fbc8605e404.ts), [tests](../src/i58b390d976c95aa4bc065fbc8605e404.test.ts)\n", "body": "# Note\n\n## Usage\n\nLegacy's `note` (its command doc `6274f51e`). The gist is the words given, joined by spaces. A first word ending in `:` names the note's kind, else it is a `memo`; the kind must be one the hero has.\n\nThe note is `kb/<quid>.md`, named by the gist slugged plus the id's last six hex digits, titled by the slug half, or by `--title`. `--body -` reads stdin, and `--body <file>` a file, as the text under the title.\n\n`--scope <repo>` names the registered repo it is about, by quid or exact name; without it, the repo the config's `bridge:` key names, said on stdout. That repo doc links the note, rel `<kind>.note`. Legacy took `--scope` more than once; one is taken here.\n\nThe note and the repo doc it links from are one commit.\n\n## Code\n\n- Entrypoint: [src/i01a1b13078b173229a3b1e21f7e12c20.ts](../src/i01a1b13078b173229a3b1e21f7e12c20.ts)\n- `note <gist>... [--scope <repo>] [--title <title>] [--body <source>]`: [impl](../src/i58b390d976c95aa4bc065fbc8605e404.ts), [tests](../src/i58b390d976c95aa4bc065fbc8605e404.test.ts)" }, "01a1b131-e017-7e7f-8518-b309634ebbd8": { "kind": "function", "name": "find-repo", "gist": "A repo the hero registers, by quid or exact name, and its checkout at a ref", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1b131-e017-7e7f-8518-b309634ebbd8\nname: find-repo\ngist: \"A repo the hero registers, by quid or exact name, and its checkout at a ref\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a15baf-13e2-7bd8-8dc8-80d4871f2210:\n      rel: uses.function\n---\n\n# Find repo\n\nThe repo doc in `.nosedive/repos` whose id is the quid given, or whose name is the name given; a name two docs share is refused, naming both quids.\n\n`checkoutAt` gives a repo's checkout at a ref: a missing one is made by core's hydrate-repo, read-only at trunk, then detached at the ref, fetched from origin when the cache lacks it. An existing one is left where it is, saying when it is not at the ref.\n\n## Code\n\n- Function: [src/i01a1b131e0177e7f8518b309634ebbd8.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.ts)\n- Tests: [src/i01a1b131e0177e7f8518b309634ebbd8.test.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.test.ts)\n", "body": "# Find repo\n\nThe repo doc in `.nosedive/repos` whose id is the quid given, or whose name is the name given; a name two docs share is refused, naming both quids.\n\n`checkoutAt` gives a repo's checkout at a ref: a missing one is made by core's hydrate-repo, read-only at trunk, then detached at the ref, fetched from origin when the cache lacks it. An existing one is left where it is, saying when it is not at the ref.\n\n## Code\n\n- Function: [src/i01a1b131e0177e7f8518b309634ebbd8.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.ts)\n- Tests: [src/i01a1b131e0177e7f8518b309634ebbd8.test.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.test.ts)" }, "01a1b131-e194-7fa5-b316-b390a3be2415": { "kind": "function", "name": "held-dive", "gist": "The dive this checkout holds, as work's dive branches name it: its doc, its feat id and its scopes, or nothing", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1b131-e194-7fa5-b316-b390a3be2415\nname: held-dive\ngist: \"The dive this checkout holds, as work's dive branches name it: its doc, its feat id and its scopes, or nothing\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a138b2-b8ee-703c-ab22-7b010f588b6a:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Held dive\n\nThe dive the hero's branch names as work's dive branch, `nosedive-<holder token>-<dive id>`: a doc of work's dive kind in the hero, its `meta.feat` and its scope entries keyed by registered repos, each with its `ref`. A hero on any other branch holds none. A dive that is over, or whose `diver` carries another token, is refused, as work refuses it.\n\nThis repeats work's rule rather than importing work's dive-on-deck, so the cape builds and tests against core alone; it changes when work's dive branches do.\n\n## Code\n\n- Function: [src/i01a1b131e1947fa5b316b390a3be2415.ts](../src/i01a1b131e1947fa5b316b390a3be2415.ts)\n- Tests: [src/i01a1b131e1947fa5b316b390a3be2415.test.ts](../src/i01a1b131e1947fa5b316b390a3be2415.test.ts)\n", "body": "# Held dive\n\nThe dive the hero's branch names as work's dive branch, `nosedive-<holder token>-<dive id>`: a doc of work's dive kind in the hero, its `meta.feat` and its scope entries keyed by registered repos, each with its `ref`. A hero on any other branch holds none. A dive that is over, or whose `diver` carries another token, is refused, as work refuses it.\n\nThis repeats work's rule rather than importing work's dive-on-deck, so the cape builds and tests against core alone; it changes when work's dive branches do.\n\n## Code\n\n- Function: [src/i01a1b131e1947fa5b316b390a3be2415.ts](../src/i01a1b131e1947fa5b316b390a3be2415.ts)\n- Tests: [src/i01a1b131e1947fa5b316b390a3be2415.test.ts](../src/i01a1b131e1947fa5b316b390a3be2415.test.ts)" }, "01a1b131-e31f-7b32-9bc1-c4389343491a": { "kind": "function", "name": "run-gates", "gist": "Runs gates one by one with legacy's ctx, checking their scopes out, streaming each, and fails when one that is not flaky failed", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1b131-e31f-7b32-9bc1-c4389343491a\nname: run-gates\ngist: \"Runs gates one by one with legacy's ctx, checking their scopes out, streaming each, and fails when one that is not flaky failed\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a138b2-b8ee-703c-ab22-7b010f588b6a:\n      rel: uses.function\n---\n\n# Run gates\n\nRuns gates in order with legacy's ctx, as [test](01a1b129-c081-79e5-abdc-c058f6a359a4.md) describes: each in its own node process, its output inherited so it streams, `resolve` answered over IPC, and drained after `run` as legacy's runner was, exiting after 30 seconds of silence (`NOSEDIVE_GATE_IDLE_MS`). A missing script fails its gate. After the summary it throws when a gate failed whose link is not flaky, which is how test exits 1.\n\n## Code\n\n- Function: [src/i01a1b131e31f7b329bc1c4389343491a.ts](../src/i01a1b131e31f7b329bc1c4389343491a.ts)\n- Tests: [src/i01a1b131e31f7b329bc1c4389343491a.test.ts](../src/i01a1b131e31f7b329bc1c4389343491a.test.ts)\n", "body": "# Run gates\n\nRuns gates in order with legacy's ctx, as [test](01a1b129-c081-79e5-abdc-c058f6a359a4.md) describes: each in its own node process, its output inherited so it streams, `resolve` answered over IPC, and drained after `run` as legacy's runner was, exiting after 30 seconds of silence (`NOSEDIVE_GATE_IDLE_MS`). A missing script fails its gate. After the summary it throws when a gate failed whose link is not flaky, which is how test exits 1.\n\n## Code\n\n- Function: [src/i01a1b131e31f7b329bc1c4389343491a.ts](../src/i01a1b131e31f7b329bc1c4389343491a.ts)\n- Tests: [src/i01a1b131e31f7b329bc1c4389343491a.test.ts](../src/i01a1b131e31f7b329bc1c4389343491a.test.ts)" }, "01a1b137-70be-7a7a-95b5-e4ae9eed1407": { "kind": "function", "name": "link-new-doc", "gist": "Links a newly written doc from an existing one, committing both and any files beside them as one commit", "usages": [], "top": true, "text": `---
kind: function
id: 01a1b137-70be-7a7a-95b5-e4ae9eed1407
name: link-new-doc
gist: "Links a newly written doc from an existing one, committing both and any files beside them as one commit"
scopes:
  - 01a1336b-c0b8-7cde-b7c6-285196062297:
      canonical: true
      version: 7bf363e12b620ec5e386d079712c729333bd43f4
      schema: cd1a463c46d6
links:
  - nosedive-core:01a14ab1-d367-71ee-a2bc-6f13bdeb0526:
      rel: uses.function
  - nosedive-core:01a13358-8bcc-7f8b-ae72-5ff70d8f6800:
      rel: uses.function
  - nosedive-core:01a13358-8b1f-7d4e-a13f-1b5e79f02e4c:
      rel: uses.function
  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:
      rel: uses.function
  - nosedive-core:01a13354-8942-73b1-be25-3424511ba82c:
      rel: uses.function
  - nosedive-core:01a19005-c109-7155-8355-3072f4e38dc4:
      rel: uses.function
---

# Link new doc

Adds a link to a new doc from an existing one, through core's edit, then commits the link, the new doc and any files beside it as one commit, its subject made by core's commit-subject.

## Code

- Function: [src/i01a1b13770be7a7a95b5e4ae9eed1407.ts](../src/i01a1b13770be7a7a95b5e4ae9eed1407.ts)
- Tests: [src/i01a1b13770be7a7a95b5e4ae9eed1407.test.ts](../src/i01a1b13770be7a7a95b5e4ae9eed1407.test.ts)
`, "body": "# Link new doc\n\nAdds a link to a new doc from an existing one, through core's edit, then commits the link, the new doc and any files beside it as one commit, its subject made by core's commit-subject.\n\n## Code\n\n- Function: [src/i01a1b13770be7a7a95b5e4ae9eed1407.ts](../src/i01a1b13770be7a7a95b5e4ae9eed1407.ts)\n- Tests: [src/i01a1b13770be7a7a95b5e4ae9eed1407.test.ts](../src/i01a1b13770be7a7a95b5e4ae9eed1407.test.ts)" }, "01a1b31b-dffb-7398-9a9e-8bcd257167b5": { "kind": "function", "name": "legacy-dives", "gist": "Brings a legacy hero's dives into work's shape: state.dive links become dives.feat with an outcome, memo-dives become dives again, legacy meta moves to feat or body", "usages": [], "top": true, "text": "---\nkind: migration\nid: 01a1b31b-dffb-7398-9a9e-8bcd257167b5\nname: legacy-dives\ngist: \"Brings a legacy hero's dives into work's shape: state.dive links become dives.feat with an outcome, memo-dives become dives again, legacy meta moves to feat or body\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 39c33321d487\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Legacy dives\n\nBrings a legacy hero's dives into the work cape's shape (mi feat legacy-dives), reading every doc in the hero's roots:\n\n- **State links**: a `landed.dive`, `bailed.dive`, `planned.dive`, `jumped.dive` or `packed.dive` link, from whatever doc holds it (a feat, an effort, a bug), becomes `dives.feat`, its other attributes kept (legacy-dive-states). Other `.dive` rels, such as `context.dive`, are left as they are (legacy-other-dive-rels).\n- **Outcome**: a dive any of those links calls `landed` gets `meta.outcome: landed`; else one called `bailed` gets `bailed`; planned, jumped and packed ones get none.\n- **Memo-dives**: a target whose kind is not work's dive, as legacy land left landed and bailed dives, becomes one: `kind: dive`, its canonical scope work's, copied from a dive of work's in the hero (legacy-memo-dives).\n- **Feat**: a dive with no `meta.feat` takes the id its `meta.effort` names, by id or by name, else the doc that links it.\n- **Meta**: `meta.effort` goes; any other key work's dive schema does not have (`diver`, `packer`, `outcome`, `feat`) moves into a `## Legacy meta` section of the dive's body, one `- <key>: <value>` line each (legacy-dive-meta). `diver` and `packer` are kept as they are (legacy-open-dive-diver); work's jump takes over a bare-email diver for that email (legacy-bare-diver).\n\nIt says how many links and dives it changed. Run again, it finds nothing left to change, so removing it from config is safe.\n\n## Code\n\n- Function: [src/i01a1b31bdffb73989a9e8bcd257167b5.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.ts)\n- Tests: [src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts)\n", "body": "# Legacy dives\n\nBrings a legacy hero's dives into the work cape's shape (mi feat legacy-dives), reading every doc in the hero's roots:\n\n- **State links**: a `landed.dive`, `bailed.dive`, `planned.dive`, `jumped.dive` or `packed.dive` link, from whatever doc holds it (a feat, an effort, a bug), becomes `dives.feat`, its other attributes kept (legacy-dive-states). Other `.dive` rels, such as `context.dive`, are left as they are (legacy-other-dive-rels).\n- **Outcome**: a dive any of those links calls `landed` gets `meta.outcome: landed`; else one called `bailed` gets `bailed`; planned, jumped and packed ones get none.\n- **Memo-dives**: a target whose kind is not work's dive, as legacy land left landed and bailed dives, becomes one: `kind: dive`, its canonical scope work's, copied from a dive of work's in the hero (legacy-memo-dives).\n- **Feat**: a dive with no `meta.feat` takes the id its `meta.effort` names, by id or by name, else the doc that links it.\n- **Meta**: `meta.effort` goes; any other key work's dive schema does not have (`diver`, `packer`, `outcome`, `feat`) moves into a `## Legacy meta` section of the dive's body, one `- <key>: <value>` line each (legacy-dive-meta). `diver` and `packer` are kept as they are (legacy-open-dive-diver); work's jump takes over a bare-email diver for that email (legacy-bare-diver).\n\nIt says how many links and dives it changed. Run again, it finds nothing left to change, so removing it from config is safe.\n\n## Code\n\n- Function: [src/i01a1b31bdffb73989a9e8bcd257167b5.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.ts)\n- Tests: [src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts)" }, "01a1b31b-e41b-7a31-a591-8d04ef4091be": { "kind": "function", "name": "legacy-patches", "gist": "Pushes the work a legacy hero packed as patch memos to each open or bailed dive's refs on its repos' origins, where work's jump finds it", "usages": [], "top": true, "text": "---\nkind: migration\nid: 01a1b31b-e41b-7a31-a591-8d04ef4091be\nname: legacy-patches\ngist: \"Pushes the work a legacy hero packed as patch memos to each open or bailed dive's refs on its repos' origins, where work's jump finds it\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 39c33321d487\nmeta:\n  after: 01a1b31b-dffb-7398-9a9e-8bcd257167b5\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Legacy patches\n\nTurns the work a legacy hero packed as patch memos into dive refs, where work's jump finds a dive's work (mi decisions legacy-patches-push, legacy-patches-which). It runs after [legacy-dives](01a1b31b-dffb-7398-9a9e-8bcd257167b5.md), on each dive of work's that is open or bailed:\n\n- **Each writable scope**, one with a `work-branch` and a `ref`, the commit legacy pinned it to: the patch chain the dive links for that repo (`rel: patch` to its head, `rel: next` onward, `meta.patch` naming a `git format-patch` file) is applied onto the pin with `git am`, in a scratch worktree of the user's cache of the repo; a `dirty.<repo>` patch, uncommitted work, is committed last as `pack(<dive name>): work in progress`, which jump puts back in the working tree. The result, the pin itself when there are no patches, is pushed to `refs/nosedive/<hero id>/dives/<dive id>` on the repo's origin, so jump resumes the dive where legacy would have.\n- **The hero's own**: a `bridge-wip` patch, the hero's uncommitted kb changes, is applied onto the hero's trunk as one `pack(<dive name>): work in progress` commit, pushed to the hero's own dive ref on its origin, which jump replays onto the dive's branch.\n\nA dive ref that exists already is left as it is, the work pushed there since being newer, so removing this migration from config and seeding again is safe. A patch that no longer applies, a pin origin does not have, or a patch memo that is gone is named and passed over, as retrying would not change it. A push or a fetch that fails makes the migration wait, saying what failed: nothing is recorded, and the next seed tries again, the refs it pushed already being found and left. It says what it pushed.\n\n## Code\n\n- Function: [src/i01a1b31be41b7a31a5918d04ef4091be.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.ts)\n- Tests: [src/i01a1b31be41b7a31a5918d04ef4091be.test.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.test.ts)\n", "body": "# Legacy patches\n\nTurns the work a legacy hero packed as patch memos into dive refs, where work's jump finds a dive's work (mi decisions legacy-patches-push, legacy-patches-which). It runs after [legacy-dives](01a1b31b-dffb-7398-9a9e-8bcd257167b5.md), on each dive of work's that is open or bailed:\n\n- **Each writable scope**, one with a `work-branch` and a `ref`, the commit legacy pinned it to: the patch chain the dive links for that repo (`rel: patch` to its head, `rel: next` onward, `meta.patch` naming a `git format-patch` file) is applied onto the pin with `git am`, in a scratch worktree of the user's cache of the repo; a `dirty.<repo>` patch, uncommitted work, is committed last as `pack(<dive name>): work in progress`, which jump puts back in the working tree. The result, the pin itself when there are no patches, is pushed to `refs/nosedive/<hero id>/dives/<dive id>` on the repo's origin, so jump resumes the dive where legacy would have.\n- **The hero's own**: a `bridge-wip` patch, the hero's uncommitted kb changes, is applied onto the hero's trunk as one `pack(<dive name>): work in progress` commit, pushed to the hero's own dive ref on its origin, which jump replays onto the dive's branch.\n\nA dive ref that exists already is left as it is, the work pushed there since being newer, so removing this migration from config and seeding again is safe. A patch that no longer applies, a pin origin does not have, or a patch memo that is gone is named and passed over, as retrying would not change it. A push or a fetch that fails makes the migration wait, saying what failed: nothing is recorded, and the next seed tries again, the refs it pushed already being found and left. It says what it pushed.\n\n## Code\n\n- Function: [src/i01a1b31be41b7a31a5918d04ef4091be.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.ts)\n- Tests: [src/i01a1b31be41b7a31a5918d04ef4091be.test.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.test.ts)" } };
var kinds = {};
var index = {
  "e754103d-25a6-5283-924f-1c19f40fd564": "01a1b129-c081-79e5-abdc-c058f6a359a4",
  "bfb30f5a-d940-5d9e-9763-5cc3ba20c60b": "01a1b129-c3b8-7671-9f55-21826bd5a66b",
  "c5d2a0f4-9904-52d9-ae0f-a1c92fa149df": "01a1b129-c702-79ed-9ccc-ed39e882d827",
  "4c165bcd-c155-5843-8309-fa3f8f52d564": "01a1b129-ca53-7ef6-9736-26eeeaebc87c",
  "90ea46d4-9d1f-5bfb-b80b-e039a81fb8d1": "01a1b130-78b1-7322-9a3b-1e21f7e12c20",
  "02b847dd-7cb9-568c-972b-e685c48deed4": "01a1b131-e017-7e7f-8518-b309634ebbd8",
  "134158f1-5958-5985-ba14-70f5c84b218c": "01a1b131-e194-7fa5-b316-b390a3be2415",
  "89c98c7b-c1e5-5e6e-a9ab-b292747094c9": "01a1b131-e31f-7b32-9bc1-c4389343491a",
  "009bd9ea-9b5e-55de-84d0-7666dcc10c6d": "01a1b137-70be-7a7a-95b5-e4ae9eed1407",
  "fb31f59b-c34a-5f17-ab41-bc065ae379e0": "01a1b31b-dffb-7398-9a9e-8bcd257167b5",
  "25a27990-589d-5b38-9937-189bdc680b19": "01a1b31b-e41b-7a31-a591-8d04ef4091be",
  "242d68da-d37a-5781-b762-4ada2685f726": i01a1b129c08179e5abdcc058f6a359a4,
  "14a04d13-e462-598d-9c46-aed07164b421": i01a1b129c3b876719f5521826bd5a66b,
  "1ef01c85-f615-5162-b5a0-64cb8664556c": i01a1b129c70279ed9ccced39e882d827,
  "57920f37-41e4-524b-91d8-dd8c27057230": i01a1b129ca537ef6973626eeeaebc87c,
  "80fb5c96-643c-553d-a5f8-362bf90b3445": i01a1b13078b173229a3b1e21f7e12c20,
  "9e6d0711-90af-55e8-8cc7-7e618315376a": i01a1b131e0177e7f8518b309634ebbd8,
  "7a8a0a78-96f8-5978-b499-8193c8040168": i01a1b131e1947fa5b316b390a3be2415,
  "77e0b1cd-4642-58bf-a4c3-d62a8b5af228": i01a1b131e31f7b329bc1c4389343491a,
  "2964bc7c-fe25-5ca9-b21c-e37c6abe5deb": i01a1b13770be7a7a95b5e4ae9eed1407,
  "ccf03016-28a3-5a2f-abd9-27c394653b69": i01a1b31bdffb73989a9e8bcd257167b5,
  "7096bf54-1ef7-5540-9dff-4b07b640f32a": i01a1b31be41b7a31a5918d04ef4091be
};
export {
  commit,
  core,
  docs,
  id,
  index,
  kinds,
  name,
  needs,
  owner,
  shortName,
  version
};
