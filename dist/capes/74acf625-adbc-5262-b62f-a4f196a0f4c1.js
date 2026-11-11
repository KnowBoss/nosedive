import { createRequire as __nosediveRequire } from "node:module"; const require = __nosediveRequire(import.meta.url);

// cape:nosedive-core
var from = globalThis.__nosediveCore;
if (from?.id !== "c53be1ee-76dd-5c3b-93e5-25df8b39b9c7") throw new Error("nosedive-legacy was built against other capes than these: run `nosedive seed`");
var wornCapes = from.named["wornCapes"];
var isDurable = from.named["isDurable"];
var CORE_OWNER = from.named["CORE_OWNER"];
var hasCoAuthor = from.named["hasCoAuthor"];
var isCoAuthor = from.named["isCoAuthor"];
var featTree = from.named["featTree"];
var linkedIds = from.named["linkedIds"];
var featRoot = from.named["featRoot"];
var pinOf = from.named["pinOf"];
var coAuthor = from.named["coAuthor"];
var changed = from.named["changed"];
var i01a1335485c67c95b7efdf2f0e03cfd6 = from.index["937ef8a4-6a18-583b-940b-a98610721b23"];
var i01a147171f057d019118aaa1f269f5fd = from.index["b681bc6e-a563-544f-9afc-eaf9a9a94f4c"];
var i01a1901e263b7209a4b5f39a71c568b3 = from.index["7d1c6e61-a13c-5149-a224-4eb8d2a807b0"];
var i01a1335480c776ba8945020d0af333eb = from.index["b1613828-2281-50ef-b2d2-7dbfabbbbb77"];
var i01a141f869c07c4da8288927a559c8ae = from.index["9e2fd0f8-eb7d-5570-804d-47252f203ca3"];
var i01a13354850c7ba3ba5b8ac41a7b6b11 = from.index["e800bb60-7526-564f-b152-224b658f23cb"];
var i01a13c760de87562b4738946402010b8 = from.index["9b453ec6-620d-5973-8851-33a6c8343a95"];
var i01a15baf13e27bd88dc880d4871f2210 = from.index["e1331716-7b59-5934-b04d-960c67db8e28"];
var i01a138b2b8ee703cab227b010f588b6a = from.index["4a94cc9a-b7b4-51e4-9d22-7eb3ec42bc8d"];
var i01a18e2a3b4b798d98068d4778a158e6 = from.index["40ae04e6-1a74-50b4-a565-5af0527555ef"];
var i01a14ab1d36771eea2bc6f13bdeb0526 = from.index["52c8f17b-b193-5f77-8173-63cf593278ac"];
var i01a133588bcc7f8bae725ff70d8f6800 = from.index["3cdad4ac-1aa7-5fa6-8ed7-20326a69f60e"];
var i01a133588b1f7d4ea13f1b5e79f02e4c = from.index["bbcd21e3-20f0-5507-95c3-f10a9e050aa9"];
var i01a1335483aa776cb84df698b04adc06 = from.index["85fc6729-0668-529c-9475-1921682f84bd"];
var i01a13354894273b1be253424511ba82c = from.index["fb66a230-0227-5b98-bd20-1f389f71a40a"];
var i01a19005c109715583553072f4e38dc4 = from.index["70ea0643-f743-5d32-b84e-5fa5ad873d5b"];
var i01a141f869bf7f76b5bc81aa991ff9b9 = from.index["5a0e9734-a0f0-52ce-bbc6-2045bbcbeae3"];
var i01a13dee4b1d78f7a699c3777bf63587 = from.index["9cc61996-c391-5f42-905d-e2230ace206d"];
var i01a19005c31172b68871d4842563d310 = from.index["22edf81c-24ab-51be-88ef-51a4345aadac"];
var i01a13354845c7253a55b60bba87285d8 = from.index["f4d31075-7adf-5792-90af-b1300b421875"];
var i01a1471723807d6e8ef228ad9472fff7 = from.index["a0ea1381-8b4d-5882-be49-d8b507ed3205"];
var i01a17fba20d673c5b8dd8551943369a2 = from.index["fff4559e-13f0-5851-b960-a864944d064f"];

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b131e0177e7f8518b309634ebbd8.ts
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

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0a67a64836f167c23ffa097.ts
import { spawnSync as spawnSync3 } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync as existsSync2, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative as relative2 } from "node:path";

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/node_modules/fflate/esm/index.mjs
import { createRequire } from "module";
var require2 = createRequire("/");
var Worker;
try {
  Worker = require2("worker_threads").Worker;
} catch (e) {
}
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i = 0; i < 31; ++i) {
    b[i] = start += 1 << eb[i - 1];
  }
  var r = new i32(b[30]);
  for (var i = 1; i < 30; ++i) {
    for (var j = b[i]; j < b[i + 1]; ++j) {
      r[j] = j - b[i] << 5 | i;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = (function(cd, mb, r) {
  var s = cd.length;
  var i = 0;
  var l = new u16(mb);
  for (; i < s; ++i) {
    if (cd[i])
      ++l[cd[i] - 1];
  }
  var le = new u16(mb);
  for (i = 1; i < mb; ++i) {
    le[i] = le[i - 1] + l[i - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        var sv = i << 4 | cd[i];
        var r_1 = mb - cd[i];
        var v = le[cd[i] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i = 0; i < s; ++i) {
      if (cd[i]) {
        co[i] = rev[le[cd[i] - 1]++] >> 15 - cd[i];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flm = /* @__PURE__ */ hMap(flt, 9, 0);
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdm = /* @__PURE__ */ hMap(fdt, 5, 0);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i = 1; i < a.length; ++i) {
    if (a[i] > m)
      m = a[i];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i = 0; i < hcLen; ++i) {
          clt[clim[i]] = bits(dat, pos + i * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i = 0; i < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i = sym - 257, b = fleb[i];
          add = bits(dat, pos, (1 << b) - 1) + fl[i];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var wbits = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
};
var wbits16 = function(d, p, v) {
  v <<= p & 7;
  var o = p / 8 | 0;
  d[o] |= v;
  d[o + 1] |= v >> 8;
  d[o + 2] |= v >> 16;
};
var hTree = function(d, mb) {
  var t = [];
  for (var i = 0; i < d.length; ++i) {
    if (d[i])
      t.push({ s: i, f: d[i] });
  }
  var s = t.length;
  var t2 = t.slice();
  if (!s)
    return { t: et, l: 0 };
  if (s == 1) {
    var v = new u8(t[0].s + 1);
    v[t[0].s] = 1;
    return { t: v, l: 1 };
  }
  t.sort(function(a, b) {
    return a.f - b.f;
  });
  t.push({ s: -1, f: 25001 });
  var l = t[0], r = t[1], i0 = 0, i1 = 1, i2 = 2;
  t[0] = { s: -1, f: l.f + r.f, l, r };
  while (i1 != s - 1) {
    l = t[t[i0].f < t[i2].f ? i0++ : i2++];
    r = t[i0 != i1 && t[i0].f < t[i2].f ? i0++ : i2++];
    t[i1++] = { s: -1, f: l.f + r.f, l, r };
  }
  var maxSym = t2[0].s;
  for (var i = 1; i < s; ++i) {
    if (t2[i].s > maxSym)
      maxSym = t2[i].s;
  }
  var tr = new u16(maxSym + 1);
  var mbt = ln(t[i1 - 1], tr, 0);
  if (mbt > mb) {
    var i = 0, dt = 0;
    var lft = mbt - mb, cst = 1 << lft;
    t2.sort(function(a, b) {
      return tr[b.s] - tr[a.s] || a.f - b.f;
    });
    for (; i < s; ++i) {
      var i2_1 = t2[i].s;
      if (tr[i2_1] > mb) {
        dt += cst - (1 << mbt - tr[i2_1]);
        tr[i2_1] = mb;
      } else
        break;
    }
    dt >>= lft;
    while (dt > 0) {
      var i2_2 = t2[i].s;
      if (tr[i2_2] < mb)
        dt -= 1 << mb - tr[i2_2]++ - 1;
      else
        ++i;
    }
    for (; i >= 0 && dt; --i) {
      var i2_3 = t2[i].s;
      if (tr[i2_3] == mb) {
        --tr[i2_3];
        ++dt;
      }
    }
    mbt = mb;
  }
  return { t: new u8(tr), l: mbt };
};
var ln = function(n, l, d) {
  return n.s == -1 ? Math.max(ln(n.l, l, d + 1), ln(n.r, l, d + 1)) : l[n.s] = d;
};
var lc = function(c) {
  var s = c.length;
  while (s && !c[--s])
    ;
  var cl = new u16(++s);
  var cli = 0, cln = c[0], cls = 1;
  var w = function(v) {
    cl[cli++] = v;
  };
  for (var i = 1; i <= s; ++i) {
    if (c[i] == cln && i != s)
      ++cls;
    else {
      if (!cln && cls > 2) {
        for (; cls > 138; cls -= 138)
          w(32754);
        if (cls > 2) {
          w(cls > 10 ? cls - 11 << 5 | 28690 : cls - 3 << 5 | 12305);
          cls = 0;
        }
      } else if (cls > 3) {
        w(cln), --cls;
        for (; cls > 6; cls -= 6)
          w(8304);
        if (cls > 2)
          w(cls - 3 << 5 | 8208), cls = 0;
      }
      while (cls--)
        w(cln);
      cls = 1;
      cln = c[i];
    }
  }
  return { c: cl.subarray(0, cli), n: s };
};
var clen = function(cf, cl) {
  var l = 0;
  for (var i = 0; i < cl.length; ++i)
    l += cf[i] * cl[i];
  return l;
};
var wfblk = function(out, pos, dat) {
  var s = dat.length;
  var o = shft(pos + 2);
  out[o] = s & 255;
  out[o + 1] = s >> 8;
  out[o + 2] = out[o] ^ 255;
  out[o + 3] = out[o + 1] ^ 255;
  for (var i = 0; i < s; ++i)
    out[o + i + 4] = dat[i];
  return (o + 4 + s) * 8;
};
var wblk = function(dat, out, final, syms, lf, df, eb, li, bs, bl, p) {
  wbits(out, p++, final);
  ++lf[256];
  var _a2 = hTree(lf, 15), dlt = _a2.t, mlb = _a2.l;
  var _b2 = hTree(df, 15), ddt = _b2.t, mdb = _b2.l;
  var _c = lc(dlt), lclt = _c.c, nlc = _c.n;
  var _d = lc(ddt), lcdt = _d.c, ndc = _d.n;
  var lcfreq = new u16(19);
  for (var i = 0; i < lclt.length; ++i)
    ++lcfreq[lclt[i] & 31];
  for (var i = 0; i < lcdt.length; ++i)
    ++lcfreq[lcdt[i] & 31];
  var _e = hTree(lcfreq, 7), lct = _e.t, mlcb = _e.l;
  var nlcc = 19;
  for (; nlcc > 4 && !lct[clim[nlcc - 1]]; --nlcc)
    ;
  var flen = bl + 5 << 3;
  var ftlen = clen(lf, flt) + clen(df, fdt) + eb;
  var dtlen = clen(lf, dlt) + clen(df, ddt) + eb + 14 + 3 * nlcc + clen(lcfreq, lct) + 2 * lcfreq[16] + 3 * lcfreq[17] + 7 * lcfreq[18];
  if (bs >= 0 && flen <= ftlen && flen <= dtlen)
    return wfblk(out, p, dat.subarray(bs, bs + bl));
  var lm, ll, dm, dl;
  wbits(out, p, 1 + (dtlen < ftlen)), p += 2;
  if (dtlen < ftlen) {
    lm = hMap(dlt, mlb, 0), ll = dlt, dm = hMap(ddt, mdb, 0), dl = ddt;
    var llm = hMap(lct, mlcb, 0);
    wbits(out, p, nlc - 257);
    wbits(out, p + 5, ndc - 1);
    wbits(out, p + 10, nlcc - 4);
    p += 14;
    for (var i = 0; i < nlcc; ++i)
      wbits(out, p + 3 * i, lct[clim[i]]);
    p += 3 * nlcc;
    var lcts = [lclt, lcdt];
    for (var it = 0; it < 2; ++it) {
      var clct = lcts[it];
      for (var i = 0; i < clct.length; ++i) {
        var len = clct[i] & 31;
        wbits(out, p, llm[len]), p += lct[len];
        if (len > 15)
          wbits(out, p, clct[i] >> 5 & 127), p += clct[i] >> 12;
      }
    }
  } else {
    lm = flm, ll = flt, dm = fdm, dl = fdt;
  }
  for (var i = 0; i < li; ++i) {
    var sym = syms[i];
    if (sym > 255) {
      var len = sym >> 18 & 31;
      wbits16(out, p, lm[len + 257]), p += ll[len + 257];
      if (len > 7)
        wbits(out, p, sym >> 23 & 31), p += fleb[len];
      var dst = sym & 31;
      wbits16(out, p, dm[dst]), p += dl[dst];
      if (dst > 3)
        wbits16(out, p, sym >> 5 & 8191), p += fdeb[dst];
    } else {
      wbits16(out, p, lm[sym]), p += ll[sym];
    }
  }
  wbits16(out, p, lm[256]);
  return p + ll[256];
};
var deo = /* @__PURE__ */ new i32([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]);
var et = /* @__PURE__ */ new u8(0);
var dflt = function(dat, lvl, plvl, pre, post, st) {
  var s = st.z || dat.length;
  var o = new u8(pre + s + 5 * (1 + Math.ceil(s / 7e3)) + post);
  var w = o.subarray(pre, o.length - post);
  var lst = st.l;
  var pos = (st.r || 0) & 7;
  if (lvl) {
    if (pos)
      w[0] = st.r >> 3;
    var opt = deo[lvl - 1];
    var n = opt >> 13, c = opt & 8191;
    var msk_1 = (1 << plvl) - 1;
    var prev = st.p || new u16(32768), head = st.h || new u16(msk_1 + 1);
    var bs1_1 = Math.ceil(plvl / 3), bs2_1 = 2 * bs1_1;
    var hsh = function(i2) {
      return (dat[i2] ^ dat[i2 + 1] << bs1_1 ^ dat[i2 + 2] << bs2_1) & msk_1;
    };
    var syms = new i32(25e3);
    var lf = new u16(288), df = new u16(32);
    var lc_1 = 0, eb = 0, i = st.i || 0, li = 0, wi = st.w || 0, bs = 0;
    for (; i + 2 < s; ++i) {
      var hv = hsh(i);
      var imod = i & 32767, pimod = head[hv];
      prev[imod] = pimod;
      head[hv] = imod;
      if (wi <= i) {
        var rem = s - i;
        if ((lc_1 > 7e3 || li > 24576) && (rem > 423 || !lst)) {
          pos = wblk(dat, w, 0, syms, lf, df, eb, li, bs, i - bs, pos);
          li = lc_1 = eb = 0, bs = i;
          for (var j = 0; j < 286; ++j)
            lf[j] = 0;
          for (var j = 0; j < 30; ++j)
            df[j] = 0;
        }
        var l = 2, d = 0, ch_1 = c, dif = imod - pimod & 32767;
        if (rem > 2 && hv == hsh(i - dif)) {
          var maxn = Math.min(n, rem) - 1;
          var maxd = Math.min(32767, i);
          var ml = Math.min(258, rem);
          while (dif <= maxd && --ch_1 && imod != pimod) {
            if (dat[i + l] == dat[i + l - dif]) {
              var nl = 0;
              for (; nl < ml && dat[i + nl] == dat[i + nl - dif]; ++nl)
                ;
              if (nl > l) {
                l = nl, d = dif;
                if (nl > maxn)
                  break;
                var mmd = Math.min(dif, nl - 2);
                var md = 0;
                for (var j = 0; j < mmd; ++j) {
                  var ti = i - dif + j & 32767;
                  var pti = prev[ti];
                  var cd = ti - pti & 32767;
                  if (cd > md)
                    md = cd, pimod = ti;
                }
              }
            }
            imod = pimod, pimod = prev[imod];
            dif += imod - pimod & 32767;
          }
        }
        if (d) {
          syms[li++] = 268435456 | revfl[l] << 18 | revfd[d];
          var lin = revfl[l] & 31, din = revfd[d] & 31;
          eb += fleb[lin] + fdeb[din];
          ++lf[257 + lin];
          ++df[din];
          wi = i + l;
          ++lc_1;
        } else {
          syms[li++] = dat[i];
          ++lf[dat[i]];
        }
      }
    }
    for (i = Math.max(i, wi); i < s; ++i) {
      syms[li++] = dat[i];
      ++lf[dat[i]];
    }
    pos = wblk(dat, w, lst, syms, lf, df, eb, li, bs, i - bs, pos);
    if (!lst) {
      st.r = pos & 7 | w[pos / 8 | 0] << 3;
      pos -= 7;
      st.h = head, st.p = prev, st.i = i, st.w = wi;
    }
  } else {
    for (var i = st.w || 0; i < s + lst; i += 65535) {
      var e = i + 65535;
      if (e >= s) {
        w[pos / 8 | 0] = lst;
        e = s;
      }
      pos = wfblk(w, pos + 1, dat.subarray(i, e));
    }
    st.i = s;
  }
  return slc(o, 0, pre + shft(pos) + post);
};
var crct = /* @__PURE__ */ (function() {
  var t = new Int32Array(256);
  for (var i = 0; i < 256; ++i) {
    var c = i, k = 9;
    while (--k)
      c = (c & 1 && -306674912) ^ c >>> 1;
    t[i] = c;
  }
  return t;
})();
var crc = function() {
  var c = -1;
  return {
    p: function(d) {
      var cr = c;
      for (var i = 0; i < d.length; ++i)
        cr = crct[cr & 255 ^ d[i]] ^ cr >>> 8;
      c = cr;
    },
    d: function() {
      return ~c;
    }
  };
};
var dopt = function(dat, opt, pre, post, st) {
  if (!st) {
    st = { l: 1 };
    if (opt.dictionary) {
      var dict = opt.dictionary.subarray(-32768);
      var newDat = new u8(dict.length + dat.length);
      newDat.set(dict);
      newDat.set(dat, dict.length);
      dat = newDat;
      st.w = dict.length;
    }
  }
  return dflt(dat, opt.level == null ? 6 : opt.level, opt.mem == null ? st.l ? Math.ceil(Math.max(8, Math.min(13, Math.log(dat.length))) * 1.5) : 20 : 12 + opt.mem, pre, post, st);
};
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
var wbytes = function(d, b, v) {
  for (; v; ++b)
    d[b] = v, v >>>= 8;
};
function deflateSync(data, opts) {
  return dopt(data, opts || {}, 0, 0);
}
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var fltn = function(d, p, t, o) {
  for (var k in d) {
    var val = d[k], n = p + k, op = o;
    if (Array.isArray(val))
      op = mrg(o, val[1]), val = val[0];
    if (val instanceof u8)
      t[n] = [val, op];
    else {
      t[n += "/"] = [new u8(0), op];
      fltn(val, n, t, o);
    }
  }
};
var te = typeof TextEncoder != "undefined" && /* @__PURE__ */ new TextEncoder();
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i = 0; ; ) {
    var c = d[i++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i + eb > d.length)
      return { s: r, r: slc(d, i - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i++] & 63) << 12 | (d[i++] & 63) << 6 | d[i++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i++] & 63) << 6 | d[i++] & 63);
  }
};
function strToU8(str, latin1) {
  if (latin1) {
    var ar_1 = new u8(str.length);
    for (var i = 0; i < str.length; ++i)
      ar_1[i] = str.charCodeAt(i);
    return ar_1;
  }
  if (te)
    return te.encode(str);
  var l = str.length;
  var ar = new u8(str.length + (str.length >> 1));
  var ai = 0;
  var w = function(v) {
    ar[ai++] = v;
  };
  for (var i = 0; i < l; ++i) {
    if (ai + 5 > ar.length) {
      var n = new u8(ai + 8 + (l - i << 1));
      n.set(ar);
      ar = n;
    }
    var c = str.charCodeAt(i);
    if (c < 128 || latin1)
      w(c);
    else if (c < 2048)
      w(192 | c >> 6), w(128 | c & 63);
    else if (c > 55295 && c < 57344)
      c = 65536 + (c & 1023 << 10) | str.charCodeAt(++i) & 1023, w(240 | c >> 18), w(128 | c >> 12 & 63), w(128 | c >> 6 & 63), w(128 | c & 63);
    else
      w(224 | c >> 12), w(128 | c >> 6 & 63), w(128 | c & 63);
  }
  return slc(ar, 0, ai);
}
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i = 0; i < dat.length; i += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i, i + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl, bs = b4(d, b + 20);
  var _a2 = z && bs == 4294967295 ? z64e(d, es) : [bs, b4(d, b + 24), b4(d, b + 42)], sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + b2(d, b + 30) + b2(d, b + 32), off];
};
var z64e = function(d, b) {
  for (; b2(d, b) != 1; b += 4 + b2(d, b + 2))
    ;
  return [b8(d, b + 12), b8(d, b + 4), b8(d, b + 20)];
};
var exfl = function(ex) {
  var le = 0;
  if (ex) {
    for (var k in ex) {
      var l = ex[k].length;
      if (l > 65535)
        err(9);
      le += l + 4;
    }
  }
  return le;
};
var wzh = function(d, b, f, fn, u, c, ce, co) {
  var fl2 = fn.length, ex = f.extra, col = co && co.length;
  var exl = exfl(ex);
  wbytes(d, b, ce != null ? 33639248 : 67324752), b += 4;
  if (ce != null)
    d[b++] = 20, d[b++] = f.os;
  d[b] = 20, b += 2;
  d[b++] = f.flag << 1 | (c < 0 && 8), d[b++] = u && 8;
  d[b++] = f.compression & 255, d[b++] = f.compression >> 8;
  var dt = new Date(f.mtime == null ? Date.now() : f.mtime), y = dt.getFullYear() - 1980;
  if (y < 0 || y > 119)
    err(10);
  wbytes(d, b, y << 25 | dt.getMonth() + 1 << 21 | dt.getDate() << 16 | dt.getHours() << 11 | dt.getMinutes() << 5 | dt.getSeconds() >> 1), b += 4;
  if (c != -1) {
    wbytes(d, b, f.crc);
    wbytes(d, b + 4, c < 0 ? -c - 2 : c);
    wbytes(d, b + 8, f.size);
  }
  wbytes(d, b + 12, fl2);
  wbytes(d, b + 14, exl), b += 16;
  if (ce != null) {
    wbytes(d, b, col);
    wbytes(d, b + 6, f.attrs);
    wbytes(d, b + 10, ce), b += 14;
  }
  d.set(fn, b);
  b += fl2;
  if (exl) {
    for (var k in ex) {
      var exf = ex[k], l = exf.length;
      wbytes(d, b, +k);
      wbytes(d, b + 2, l);
      d.set(exf, b + 4), b += 4 + l;
    }
  }
  if (col)
    d.set(co, b), b += col;
  return b;
};
var wzf = function(o, b, c, d, e) {
  wbytes(o, b, 101010256);
  wbytes(o, b + 8, c);
  wbytes(o, b + 10, c);
  wbytes(o, b + 12, d);
  wbytes(o, b + 16, e);
};
function zipSync(data, opts) {
  if (!opts)
    opts = {};
  var r = {};
  var files = [];
  fltn(data, "", r, opts);
  var o = 0;
  var tot = 0;
  for (var fn in r) {
    var _a2 = r[fn], file = _a2[0], p = _a2[1];
    var compression = p.level == 0 ? 0 : 8;
    var f = strToU8(fn), s = f.length;
    var com = p.comment, m = com && strToU8(com), ms = m && m.length;
    var exl = exfl(p.extra);
    if (s > 65535)
      err(11);
    var d = compression ? deflateSync(file, p) : file, l = d.length;
    var c = crc();
    c.p(file);
    files.push(mrg(p, {
      size: file.length,
      crc: c.d(),
      c: d,
      f,
      m,
      u: s != fn.length || m && com.length != ms,
      o,
      compression
    }));
    o += 30 + s + exl + l;
    tot += 76 + 2 * (s + exl) + (ms || 0) + l;
  }
  var out = new u8(tot + 22), oe = o, cdl = tot - o;
  for (var i = 0; i < files.length; ++i) {
    var f = files[i];
    wzh(out, f.o, f, f.f, f.u, f.c.length);
    var badd = 30 + f.f.length + exfl(f.extra);
    out.set(f.c, f.o + badd);
    wzh(out, o, f, f.f, f.u, f.c.length, f.o, f.m), o += 16 + badd + (f.m ? f.m.length : 0);
  }
  wzf(out, o, files.length, cdl, oe);
  return out;
}
function unzipSync(data, opts) {
  var files = {};
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558)
      err(13);
  }
  ;
  var c = b2(data, e + 8);
  if (!c)
    return {};
  var o = b4(data, e + 16);
  var z = o == 4294967295 || c == 65535;
  if (z) {
    var ze = b4(data, e - 12);
    z = b4(data, ze) == 101075792;
    if (z) {
      c = b4(data, ze + 32);
      o = b4(data, ze + 48);
    }
  }
  var fltr = opts && opts.filter;
  for (var i = 0; i < c; ++i) {
    var _a2 = zh(data, o, z), c_2 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
    o = no;
    if (!fltr || fltr({
      name: fn,
      size: sc,
      originalSize: su,
      compression: c_2
    })) {
      if (!c_2)
        files[fn] = slc(data, b, b + sc);
      else if (c_2 == 8)
        files[fn] = inflateSync(data.subarray(b, b + sc), { out: new u8(su) });
      else
        err(14, "unknown compression type " + c_2);
    }
  }
  return files;
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0c37d27a058e908481307c3.ts
import { spawnSync as spawnSync2 } from "node:child_process";
function i01a1c72ba0c37d27a058e908481307c3(cwd, ...args) {
  const result = spawnSync2("git", args, { cwd, encoding: "utf8" });
  return { ok: result.status === 0, text: (result.status === 0 ? result.stdout : result.stderr || result.stdout || result.error?.message || "").trim() };
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0a67a64836f167c23ffa097.ts
var LEGACY_ID = "01a1b128-2c08-790f-80f4-e2c40a98bfcc";
function hasCanonical(doc) {
  return (Array.isArray(doc.fm.scopes) ? doc.fm.scopes : []).some((entry) => entry && typeof entry === "object" && Object.values(entry).some((value) => value?.canonical === true));
}
function isDive(doc) {
  const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
  return kind.name === "dive" && (kind.owner === LEGACY_ID || !hasCanonical(doc));
}
var STATE_REL = /^(planned|jumped|packed|landed|bailed)\.dive$/;
var STRONGEST = ["landed", "bailed", "packed", "jumped", "planned"];
function isOver(state) {
  return state === "landed" || state === "bailed";
}
function stateLinksOf(doc) {
  const links = Array.isArray(doc.fm.links) ? doc.fm.links : [];
  return links.flatMap(
    (entry) => Object.entries(entry ?? {}).flatMap(([key, value]) => {
      const state = typeof value?.rel === "string" ? STATE_REL.exec(value.rel)?.[1] : void 0;
      const id2 = linkedIds({ fm: { links: [{ [key]: { rel: value?.rel } }] } })[0]?.id;
      return state && id2 ? [{ key, id: id2, state }] : [];
    })
  );
}
function diveLinks(hero) {
  const docs2 = /* @__PURE__ */ new Map();
  for (const dir of /* @__PURE__ */ new Set([hero.kbDir, ...hero.roots.map((root) => root.dir)])) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(dir)) docs2.set(String(doc.fm.id), doc);
  const found = /* @__PURE__ */ new Map();
  for (const doc of docs2.values()) {
    for (const { id: id2, state } of stateLinksOf(doc)) {
      const known = found.get(id2) ?? { states: /* @__PURE__ */ new Set(), by: [] };
      known.states.add(state);
      if (!known.by.includes(doc)) known.by.push(doc);
      found.set(id2, known);
    }
  }
  return new Map([...found].map(([id2, { states, by }]) => [id2, { state: STRONGEST.find((state) => states.has(state)), by }]));
}
function moveLinks(hung, diveId, state) {
  const moved = [];
  for (const doc of hung.by) {
    const keys = new Set(stateLinksOf(doc).filter((link) => link.id === diveId && link.state !== state).map(({ key }) => key));
    if (keys.size === 0) continue;
    const links = (Array.isArray(doc.fm.links) ? doc.fm.links : []).map(
      (entry) => Object.fromEntries(Object.entries(entry ?? {}).map(([key, value]) => [key, keys.has(key) ? { ...value, rel: `${state}.dive` } : value]))
    );
    doc.yaml.set("links", links);
    i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, doc.body);
    moved.push(doc);
  }
  return moved;
}
var REBUILDABLE = /(^|\/)(node_modules|dist|build)\//;
function emailOf(hero) {
  const email = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "config", "user.email").text;
  if (!email) throw new Error("git has no user.email here, and a dive is held by one: set it with `git config user.email`");
  return email;
}
function heroBranch(hero) {
  const on = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "symbolic-ref", "-q", "--short", "HEAD");
  if (!on.ok) throw new Error("the hero is detached, so a dive's work has no branch to be named after: put the hero on a branch first");
  return on.text;
}
function tokenOf(hero, branch) {
  const email = emailOf(hero);
  const top = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rev-parse", "--show-toplevel").text;
  return createHash("sha256").update(`${top}/${branch}/${email}`).digest("hex").slice(0, 12);
}
var DIVE_BRANCH = /^nosedive-([0-9a-f]{12})-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;
function diveBranch(token, diveId) {
  return `nosedive-${token}-${diveId}`;
}
function parseDiveBranch(name2) {
  const match = DIVE_BRANCH.exec(name2);
  return match ? { token: match[1], diveId: match[2] } : void 0;
}
function diveBranches(hero) {
  const tokens = new Set(localBranches(hero).filter((branch) => !parseDiveBranch(branch)).map((branch) => tokenOf(hero, branch)));
  return localBranches(hero).flatMap((branch) => {
    const parsed = parseDiveBranch(branch);
    return parsed && tokens.has(parsed.token) ? [{ branch, ...parsed }] : [];
  });
}
function localBranches(hero) {
  return i01a1c72ba0c37d27a058e908481307c3(hero.dir, "for-each-ref", "--format=%(refname:short)", "refs/heads/").text.split("\n").filter(Boolean);
}
function homeOf(hero, token) {
  return localBranches(hero).find((branch) => !parseDiveBranch(branch) && tokenOf(hero, branch) === token);
}
function upstreamOf(hero, branch) {
  const remote = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "config", `branch.${branch}.remote`).text;
  const merge = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "config", `branch.${branch}.merge`).text;
  if (!remote || remote === "." || !merge.startsWith("refs/heads/")) return void 0;
  const name2 = merge.slice("refs/heads/".length);
  return { remote, name: name2, ref: `refs/remotes/${remote}/${name2}` };
}
function homeUpstream(hero, home) {
  const up = upstreamOf(hero, home);
  if (!up) throw new Error(`${home} has no upstream, so the dive's records would be stranded here: push it first, as \`git push -u origin ${home}\``);
  return up;
}
function fetchUpstream(hero, up) {
  i01a1c72ba0c37d27a058e908481307c3(hero.dir, "fetch", "-q", up.remote, `+refs/heads/${up.name}:${up.ref}`);
  i01a1c72ba0c37d27a058e908481307c3(hero.dir, "fetch", "-q", "--prune", "origin", "+refs/nosedive/*:refs/nosedive/*");
}
function syncHome(hero, home, up) {
  const ahead = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rev-list", "--count", `${up.ref}..refs/heads/${home}`).text;
  if (ahead !== "0") throw new Error(`${home} holds ${ahead} commit${ahead === "1" ? "" : "s"} ${up.remote}/${up.name} lacks: push ${ahead === "1" ? "it" : "them"} first`);
  if (i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rev-list", "--count", `refs/heads/${home}..${up.ref}`).text === "0") return;
  const checkedOut = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "symbolic-ref", "-q", "--short", "HEAD").text === home;
  if (checkedOut) i01a1c72ba0c37d27a058e908481307c3(hero.dir, "merge", "-q", "--ff-only", up.ref);
  else i01a1c72ba0c37d27a058e908481307c3(hero.dir, "update-ref", `refs/heads/${home}`, up.ref);
}
function fetchAll(dir) {
  i01a1c72ba0c37d27a058e908481307c3(dir, "fetch", "-q", "--prune", "origin", "+refs/heads/*:refs/remotes/origin/*", "+refs/nosedive/*:refs/nosedive/*");
}
function diveRef(hero, diveId) {
  return `refs/nosedive/${hero.id}/dives/${diveId}`;
}
function wip(dive) {
  return `pack(${String(dive.fm.name)}): work in progress`;
}
function isWip(dive, subject) {
  const name2 = String(dive.fm.name);
  return subject === `pack(${name2}): work in progress` || /^(?:feat\([^)]*\): pack |pack: )work in progress on (.*)$/.exec(subject)?.[1] === name2;
}
function isDiveRef(ref, diveId) {
  return ref.includes("/dives/") && ref.endsWith(`/${diveId}`);
}
function diveRefs(dir, diveId) {
  return i01a1c72ba0c37d27a058e908481307c3(dir, "ls-remote", "origin", "refs/nosedive/*").text.split("\n").filter(Boolean).map((line) => {
    const [sha, ref] = line.split("	");
    return { ref, sha };
  }).filter(({ ref }) => isDiveRef(ref, diveId)).sort((a, b) => Number(i01a1c72ba0c37d27a058e908481307c3(dir, "log", "-1", "--format=%ct", b.sha).text || 0) - Number(i01a1c72ba0c37d27a058e908481307c3(dir, "log", "-1", "--format=%ct", a.sha).text || 0));
}
function deleteRefs(dir, refs) {
  for (const ref of refs) {
    i01a1c72ba0c37d27a058e908481307c3(dir, "push", "-q", "origin", `:${ref}`);
    i01a1c72ba0c37d27a058e908481307c3(dir, "update-ref", "-d", ref);
  }
}
function unpushed(dir) {
  return i01a1c72ba0c37d27a058e908481307c3(dir, "log", "--format=%h %s", "HEAD", "--not", "--remotes=origin", "--glob=refs/nosedive/*").text.split("\n").filter(Boolean);
}
function orphan(hero, dir) {
  const commits = unpushed(dir);
  if (commits.length === 0) return void 0;
  const ref = `refs/nosedive/${hero.id}/orphans/${i01a1c72ba0c37d27a058e908481307c3(dir, "rev-parse", "HEAD").text}`;
  const pushed = i01a1c72ba0c37d27a058e908481307c3(dir, "push", "-q", "origin", `HEAD:${ref}`);
  if (!pushed.ok) throw new Error(`cannot push ${dir}'s commits to ${ref}: ${pushed.text}`);
  i01a1c72ba0c37d27a058e908481307c3(dir, "update-ref", ref, "HEAD");
  return { ref, commits };
}
function trunkOf(repo, dir) {
  const trunk = repo.fm.meta?.trunk;
  if (typeof trunk === "string") return trunk;
  return existsSync2(dir) && i01a1c72ba0c37d27a058e908481307c3(dir, "symbolic-ref", "-q", "--short", "refs/remotes/origin/HEAD").text.replace(/^origin\//, "") || "main";
}
function baseOf(scope) {
  const branch = `refs/remotes/origin/${scope.branch}`;
  return scope.branch && i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rev-parse", "--verify", "-q", branch).ok ? branch : `refs/remotes/origin/${scope.trunk}`;
}
function stamp(dir, range, trailers) {
  const shas = i01a1c72ba0c37d27a058e908481307c3(dir, "rev-list", "--reverse", "--topo-order", ...range).text.split("\n").filter(Boolean);
  const made = /* @__PURE__ */ new Map();
  for (const sha of shas) {
    const [an, ae, ad, cn, ce, cd, parents, tree] = i01a1c72ba0c37d27a058e908481307c3(dir, "log", "-1", "--format=%an%x00%ae%x00%aI%x00%cn%x00%ce%x00%cI%x00%P%x00%T", sha).text.split("\0");
    const message = spawnSync3("git", ["log", "-1", "--format=%B", sha], { cwd: dir, encoding: "utf8" }).stdout;
    const given = trailers.flatMap((trailer) => isCoAuthor(trailer) ? hasCoAuthor(message) ? [] : ["--if-exists", "add", "--trailer", trailer] : ["--if-exists", "doNothing", "--trailer", trailer]);
    const args = ["interpret-trailers", ...given];
    const stamped = spawnSync3("git", args, { cwd: dir, encoding: "utf8", input: message }).stdout;
    const env = { ...process.env, GIT_AUTHOR_NAME: an, GIT_AUTHOR_EMAIL: ae, GIT_AUTHOR_DATE: ad, GIT_COMMITTER_NAME: cn, GIT_COMMITTER_EMAIL: ce, GIT_COMMITTER_DATE: cd };
    const parentArgs = (parents ?? "").split(" ").filter(Boolean).flatMap((parent) => ["-p", made.get(parent) ?? parent]);
    const result = spawnSync3("git", ["commit-tree", tree, ...parentArgs], { cwd: dir, encoding: "utf8", input: stamped, env });
    if (result.status !== 0) throw new Error(`cannot stamp ${sha.slice(0, 7)} in ${dir}: ${result.stderr.trim()}`);
    made.set(sha, result.stdout.trim());
  }
  const last = shas.at(-1);
  if (last) i01a1c72ba0c37d27a058e908481307c3(dir, "update-ref", "HEAD", made.get(last));
  return shas.length;
}
function keepable(hero, dir) {
  const isSpared = spared(hero, dir);
  return i01a1c72ba0c37d27a058e908481307c3(dir, "ls-files", "--others", "--ignored", "--exclude-standard").text.split("\n").filter((file) => file && !REBUILDABLE.test(file) && !isSpared(file));
}
function spared(hero, dir) {
  const inside = [i01a13dee4b1d78f7a699c3777bf63587(dir)?.workspace, hero.workspace].flatMap((workspace) => {
    if (!workspace) return [];
    const path = relative2(dir, workspace).replace(/\\/g, "/");
    return path.startsWith("..") || isAbsolute(path) ? [] : [path ? `${path}/` : ""];
  });
  return (path) => inside.some((prefix) => path.startsWith(prefix));
}
function packsDir(hero) {
  return join(hero.dir, ".nosedive", "local", "packs");
}
function read(dir, files) {
  return Object.fromEntries(files.map((file) => [file, new Uint8Array(readFileSync(join(dir, file)))]));
}
function packIgnored(hero, featId, scope) {
  const path = join(packsDir(hero), featId, `${scope.name}.zip`);
  const files = existsSync2(scope.dir) ? keepable(hero, scope.dir) : [];
  if (files.length === 0) {
    rmSync(path, { force: true });
    return 0;
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, zipSync(read(scope.dir, files)));
  return files.length;
}
function swapIgnored(hero, featId, scope) {
  const files = keepable(hero, scope.dir);
  let orphaned;
  if (files.length > 0) {
    const current = read(scope.dir, files);
    const newest = newestPack(hero, scope.name);
    if (!newest || !same(current, unzipSync(new Uint8Array(readFileSync(newest))))) {
      orphaned = join(packsDir(hero), "orphans", `${scope.name}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.zip`);
      mkdirSync(dirname(orphaned), { recursive: true });
      writeFileSync(orphaned, zipSync(current));
    }
    for (const file of files) rmSync(join(scope.dir, file), { force: true });
  }
  const pack = join(packsDir(hero), featId, `${scope.name}.zip`);
  if (existsSync2(pack)) {
    for (const [file, bytes] of Object.entries(unzipSync(new Uint8Array(readFileSync(pack))))) {
      mkdirSync(dirname(join(scope.dir, file)), { recursive: true });
      writeFileSync(join(scope.dir, file), bytes);
    }
  }
  return orphaned;
}
function newestPack(hero, name2) {
  const dir = packsDir(hero);
  if (!existsSync2(dir)) return void 0;
  return readdirSync(dir).filter((feat) => feat !== "orphans").map((feat) => join(dir, feat, `${name2}.zip`)).filter((path) => existsSync2(path)).sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0];
}
function same(a, b) {
  const keys = Object.keys(a);
  return keys.length === Object.keys(b).length && keys.every((key) => b[key] !== void 0 && Buffer.compare(a[key], b[key]) === 0);
}
function isRepo(hero, id2) {
  const doc = heroDoc(hero, id2);
  const kind = doc && i01a18e2a3b4b798d98068d4778a158e6(doc);
  return kind?.owner === CORE_OWNER && kind.name === "repo";
}
function readScopes(hero, doc) {
  const scopes = Array.isArray(doc.fm.scopes) ? doc.fm.scopes : [];
  return scopes.flatMap((entry) => {
    if (typeof entry === "string") return isRepo(hero, entry) ? [{ repoId: entry }] : [];
    if (!entry || typeof entry !== "object") return [];
    return Object.entries(entry).filter(([repoId]) => isRepo(hero, repoId)).map(([repoId, value]) => ({
      repoId,
      branch: typeof value?.["work-branch"] === "string" ? value["work-branch"] : void 0,
      ref: typeof value?.ref === "string" ? value.ref : void 0
    }));
  });
}
function heroRef(hero, doc) {
  const entries2 = Array.isArray(doc.fm.scopes) ? doc.fm.scopes : [];
  for (const entry of entries2) {
    const value = entry && typeof entry === "object" ? entry[hero.id] : void 0;
    if (typeof value?.ref === "string") return value.ref;
  }
  return void 0;
}
function scopesWith(hero, doc, refs) {
  const scopes = readScopes(hero, doc).map((entry) => {
    const ref2 = refs.has(entry.repoId) ? refs.get(entry.repoId) : entry.ref;
    return { [entry.repoId]: { ...entry.branch ? { "work-branch": entry.branch } : {}, ...ref2 ? { ref: ref2 } : {} } };
  });
  const ref = refs.has(hero.id) ? refs.get(hero.id) : heroRef(hero, doc);
  if (ref) scopes.push({ [hero.id]: { ref } });
  return [...scopes, ...otherScopes(hero, doc)];
}
function otherScopes(hero, doc) {
  const scopes = Array.isArray(doc.fm.scopes) ? doc.fm.scopes : [];
  return scopes.filter((entry) => {
    if (typeof entry === "string") return !isRepo(hero, entry);
    if (!entry || typeof entry !== "object") return true;
    const keys = Object.keys(entry);
    if (keys.some((key) => isRepo(hero, key))) return false;
    const value = entry[keys[0]];
    const heroRef2 = keys.length === 1 && keys[0] === hero.id && Object.keys(value ?? {}).every((key) => key === "ref");
    return !heroRef2;
  });
}
function heroDoc(hero, id2) {
  const doc = i01a138b2b8ee703cab227b010f588b6a(hero, id2);
  return doc?.repoDir === hero.dir ? doc : void 0;
}
function repoDoc(hero, repoId) {
  const repo = heroDoc(hero, repoId);
  const kind = repo && i01a18e2a3b4b798d98068d4778a158e6(repo);
  if (!repo || kind?.owner !== CORE_OWNER || kind.name !== "repo") throw new Error(`${repoId} is no repo registered in the hero`);
  return repo;
}
function featIdOf(hero, dive, by) {
  const meta = dive.fm.meta ?? {};
  for (const named of [meta.feat, meta.effort]) {
    const found = typeof named === "string" ? heroDoc(hero, named) : void 0;
    if (found) return String(found.fm.id);
  }
  return by[0] ? String(by[0].fm.id) : void 0;
}
function metaOf(dive) {
  const meta = dive.fm.meta ?? {};
  const text = (value) => typeof value === "string" && value !== "null" ? value : void 0;
  return { diver: text(meta.diver), packer: text(meta.packer) };
}
function openDives(hero, links = diveLinks(hero)) {
  return [...links].flatMap(([id2, hung]) => {
    const doc = !isOver(hung.state) ? heroDoc(hero, id2) : void 0;
    return doc && isDive(doc) ? [{ doc, hung }] : [];
  });
}
function describeDive({ doc, hung }) {
  const { diver, packer } = metaOf(doc);
  const by = diver ? `, held by ${diver.split("#")[0]}` : packer ? `, packed by ${packer}` : "";
  return `${String(doc.fm.name)} (${String(doc.fm.id)}): ${hung.state}${by}`;
}
function durableFeat(hero, dive, capes) {
  const tree = featTree(hero);
  const queue = [dive.featId, ...dive.hung.by.map((doc) => String(doc.fm.id))];
  const seen = /* @__PURE__ */ new Set();
  while (queue.length > 0) {
    const id2 = queue.shift();
    if (seen.has(id2)) continue;
    seen.add(id2);
    const doc = heroDoc(hero, id2);
    if (doc) {
      const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
      const spelling = kind.owner === hero.id ? kind.name : `${kind.owner}:${kind.name}`;
      if (isDurable(i01a147171f057d019118aaa1f269f5fd(spelling, hero, capes))) return id2;
    }
    queue.push(...tree.get(id2)?.parents ?? []);
  }
  return dive.featId;
}
function keyOf(hero, doc) {
  return relative2(hero.dir, doc.path).replace(/\\/g, "/");
}
function scopesOf(hero, doc, token) {
  const id2 = String(doc.fm.id);
  return readScopes(hero, doc).map((entry) => {
    const repo = repoDoc(hero, entry.repoId);
    const name2 = String(repo.fm.name);
    const dir = i01a13c760de87562b4738946402010b8(hero, name2);
    const there = existsSync2(dir);
    const ours = there && (entry.branch ? i01a1c72ba0c37d27a058e908481307c3(dir, "symbolic-ref", "-q", "--short", "HEAD").text === diveBranch(token, id2) : true);
    return { ...entry, repo, name: name2, dir, trunk: trunkOf(repo, dir), ours };
  });
}
function i01a1c72ba0a67a64836f167c23ffa097(hero, _ctx, id2) {
  const branch = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "symbolic-ref", "-q", "--short", "HEAD").text;
  const parsed = parseDiveBranch(branch);
  const doc = parsed && heroDoc(hero, parsed.diveId);
  const hung = parsed && diveLinks(hero).get(parsed.diveId);
  if (!parsed || !doc || !hung || !(isOver(hung.state) || isDive(doc))) throw new Error("the hero is on no dive branch, so no dive is on deck: `nosedive jump <feat or dive>` picks one up");
  const name2 = String(doc.fm.name);
  if (id2 && id2 !== parsed.diveId && id2 !== name2) throw new Error(`the dive on deck is ${name2} (${parsed.diveId}), not ${id2}`);
  const { diver } = metaOf(doc);
  if (isOver(hung.state)) throw new Error(`dive ${name2} is over: it ${hung.state}`);
  if (diver?.split("#")[1] !== parsed.token) throw new Error(`dive ${name2} is ${diver ? `held by ${diver.split("#")[0]}` : "held by nobody"} under another token than ${branch}'s, as a copied branch's would be`);
  const home = homeOf(hero, parsed.token);
  if (!home) throw new Error(`dive ${name2}'s home, the branch it was jumped from, is gone: recreate it, as \`git branch <name> <commit>\``);
  const featId = featIdOf(hero, doc, hung.by) ?? parsed.diveId;
  return { hero, doc, featId, feat: heroDoc(hero, featId), hung, scopes: scopesOf(hero, doc, parsed.token), branch, token: parsed.token, home };
}
function readOnlyRefusals(dive) {
  return dive.scopes.filter((scope) => !scope.branch && scope.ours).flatMap((scope) => {
    if (unpushed(scope.dir).length > 0) return [`${scope.name} is read-only, yet has commits origin lacks`];
    if (i01a1c72ba0c37d27a058e908481307c3(scope.dir, "status", "--porcelain").text) return [`${scope.name} is read-only, yet has uncommitted changes`];
    return [];
  });
}
function localDiveRefs(dir, diveId) {
  return i01a1c72ba0c37d27a058e908481307c3(dir, "for-each-ref", "--format=%(refname)%09%(objectname)", "refs/nosedive").text.split("\n").filter(Boolean).map((line) => {
    const [ref, sha] = line.split("	");
    return { ref, sha };
  }).filter(({ ref }) => isDiveRef(ref, diveId));
}
function putDown(dive, version2) {
  const { hero, home } = dive;
  const id2 = String(dive.doc.fm.id);
  const own = diveRef(hero, id2);
  const up = homeUpstream(hero, home);
  fetchUpstream(hero, up);
  const writable = dive.scopes.filter((scope) => scope.branch && scope.ours);
  for (const scope of writable) fetchAll(scope.dir);
  const puts = [
    ...writable.map((scope) => ({ key: scope.repoId, name: scope.name, dir: scope.dir, base: baseOf(scope), recorded: scope.ref, commits: [] })),
    { key: hero.id, name: "hero", dir: hero.dir, base: `refs/heads/${home}`, recorded: heroRef(hero, dive.doc), commits: [] }
  ];
  const observed = new Map(puts.map((put) => [put.key, diveRefs(put.dir, id2)]));
  const within = (dir, sha, tip) => tip !== void 0 && i01a1c72ba0c37d27a058e908481307c3(dir, "merge-base", "--is-ancestor", sha, tip).ok;
  const moved = puts.flatMap((put) => {
    const current = observed.get(put.key);
    if (current.length === 0 && put.recorded !== void 0) return [`${put.name}: the dive's ref is gone, which this dive did not see`];
    return current.flatMap(({ ref, sha }) => {
      if (within(put.dir, sha, put.recorded) || ref === own && within(put.dir, sha, "HEAD")) return [];
      return [`${put.name}: ${ref} is at ${sha.slice(0, 7)}, which this dive did not see`];
    });
  });
  if (moved.length > 0) throw new Error(`the dive's refs moved under it, so nothing was put down:
  ${moved.join("\n  ")}`);
  for (const put of puts) {
    if (i01a1c72ba0c37d27a058e908481307c3(put.dir, "status", "--porcelain").text) {
      i01a1c72ba0c37d27a058e908481307c3(put.dir, "add", "-A");
      const committed = i01a1c72ba0c37d27a058e908481307c3(put.dir, "commit", "-q", "-m", i01a19005c31172b68871d4842563d310(wip(dive.doc), version2));
      if (!committed.ok) throw new Error(`cannot commit ${put.name}'s uncommitted work: ${committed.text}`);
    }
    put.commits = i01a1c72ba0c37d27a058e908481307c3(put.dir, "log", "--format=%h %s", put.base + "..HEAD").text.split("\n").filter(Boolean);
    if (put.commits.length > 0) {
      put.sha = i01a1c72ba0c37d27a058e908481307c3(put.dir, "rev-parse", "HEAD").text;
    }
  }
  for (const put of puts) {
    if (!put.sha) continue;
    const destination = observed.get(put.key).find(({ ref }) => ref === own);
    if (destination?.sha === put.sha) continue;
    const pushed = i01a1c72ba0c37d27a058e908481307c3(put.dir, "push", "-q", `--force-with-lease=${own}:${destination?.sha ?? ""}`, "origin", `HEAD:${own}`);
    if (!pushed.ok) throw new Error(`cannot push ${put.name}'s work to ${own}: ${pushed.text}`);
  }
  for (const put of puts) {
    const refs = observed.get(put.key);
    const deleting = put.sha ? refs.filter(({ ref }) => ref !== own) : [...refs].reverse();
    for (const { ref, sha } of deleting) {
      const removed = i01a1c72ba0c37d27a058e908481307c3(put.dir, "push", "-q", `--force-with-lease=${ref}:${sha}`, "origin", `:${ref}`);
      if (!removed.ok) throw new Error(`cannot delete ${put.name}'s ref ${ref}: ${removed.text}`);
    }
    const remaining = diveRefs(put.dir, id2);
    if (put.sha ? remaining.length !== 1 || remaining[0]?.ref !== own || remaining[0]?.sha !== put.sha : remaining.length > 0) {
      const unexpected = remaining.find(({ ref, sha }) => ref !== own || sha !== put.sha);
      throw new Error(`cannot finish cleaning ${put.name}'s dive refs${unexpected ? `: ${unexpected.ref} is at ${unexpected.sha.slice(0, 7)}` : ""}`);
    }
  }
  for (const put of puts) {
    for (const { ref } of localDiveRefs(put.dir, id2)) i01a1c72ba0c37d27a058e908481307c3(put.dir, "update-ref", "-d", ref);
    if (put.sha) i01a1c72ba0c37d27a058e908481307c3(put.dir, "update-ref", own, put.sha);
  }
  for (const scope of dive.scopes.filter((each) => each.ours)) packIgnored(hero, dive.featId, scope);
  for (const scope of writable) {
    const base = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "merge-base", "HEAD", baseOf(scope)).text || baseOf(scope);
    const isSpared = spared(hero, scope.dir);
    const ignored = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "ls-files", "--others", "--ignored", "--exclude-standard", "--directory").text.split("\n").filter((path) => path && !isSpared(path));
    i01a1c72ba0c37d27a058e908481307c3(scope.dir, "checkout", "-q", "--detach", base);
    if (ignored.length > 0) i01a1c72ba0c37d27a058e908481307c3(scope.dir, "clean", "-q", "-f", "-d", "--", ...ignored);
    i01a1c72ba0c37d27a058e908481307c3(scope.dir, "branch", "-q", "-D", dive.branch);
  }
  const switched = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "checkout", "-q", home);
  if (!switched.ok) throw new Error(`cannot switch the hero back to ${home}: ${switched.text}`);
  i01a1c72ba0c37d27a058e908481307c3(hero.dir, "branch", "-q", "-D", dive.branch);
  syncHome(hero, home, up);
  return { puts, refs: new Map(puts.map((put) => [put.key, put.sha])), own };
}
function pushRecord(hero, record) {
  const home = heroBranch(hero);
  const up = homeUpstream(hero, home);
  for (let tries = 0; ; tries++) {
    record();
    const pushed = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "push", "-q", up.remote, `HEAD:refs/heads/${up.name}`);
    if (pushed.ok) {
      i01a1c72ba0c37d27a058e908481307c3(hero.dir, "update-ref", up.ref, "HEAD");
      return;
    }
    i01a1c72ba0c37d27a058e908481307c3(hero.dir, "reset", "-q", "--hard", "HEAD^");
    if (tries === 2) throw new Error(`cannot push the hero's record to ${up.remote}/${up.name}: ${pushed.text}`);
    fetchUpstream(hero, up);
    const rebased = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rebase", "-q", up.ref);
    if (!rebased.ok) {
      i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rebase", "--abort");
      throw new Error(`the hero's work conflicts with ${up.remote}/${up.name} as it moved: ${rebased.text}`);
    }
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b131e1947fa5b316b390a3be2415.ts
var WORK_ID = "01a15bb1-da9e-7d2d-aa82-5ee97257adc6";
var DIVE_BRANCH2 = /^nosedive-([0-9a-f]{12})-([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;
function isDive2(doc) {
  const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
  return kind.owner === WORK_ID && kind.name === "dive" || isDive(doc);
}
function scopesOf2(hero, doc) {
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
  const parsed = DIVE_BRANCH2.exec(git(hero.dir, "symbolic-ref", "-q", "--short", "HEAD").text);
  if (!parsed) return void 0;
  const [, token, id2] = parsed;
  const found = i01a138b2b8ee703cab227b010f588b6a(hero, id2);
  if (!found || found.repoDir !== hero.dir) return void 0;
  const hung = diveLinks(hero).get(id2);
  if (!isDive2(found) && !(hung && isOver(hung.state))) return void 0;
  const name2 = String(found.fm.name);
  const meta = found.fm.meta ?? {};
  const over = hung ? isOver(hung.state) ? hung.state : void 0 : typeof meta.outcome === "string" ? meta.outcome : void 0;
  if (over) throw new Error(`dive ${name2} is over: it ${over}`);
  if (typeof meta.diver !== "string" || meta.diver.split("#")[1] !== token) throw new Error(`dive ${name2} is not held under this branch's token`);
  return { id: id2, doc: found, featId: featIdOf(hero, found, hung?.by ?? []) ?? (typeof meta.feat === "string" ? meta.feat : void 0), scopes: scopesOf2(hero, found) };
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b131e31f7b329bc1c4389343491a.ts
import { spawn } from "node:child_process";
import { existsSync as existsSync3, mkdtempSync, rmSync as rmSync2, writeFileSync as writeFileSync2 } from "node:fs";
import { tmpdir } from "node:os";
import { isAbsolute as isAbsolute2, join as join2, relative as relative3 } from "node:path";
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
  for (const dir of dirs) if (existsSync3(dir)) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(dir)) docs2.set(String(doc.fm.id), doc);
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
      child.send({ quid: message.quid, doc: doc ? { id: String(doc.fm.id), fm: doc.fm, body: doc.body, path: relative3(hero.dir, doc.path).replace(/\\/g, "/") } : null });
    });
    child.on("error", fail);
    child.on("exit", (code) => done(code ?? 1));
  });
}
async function i01a1b131e31f7b329bc1c4389343491a(hero, selected, dive, ctx) {
  if (selected.length === 0) throw new Error("no gates were selected, and running none would pass having checked nothing");
  const dir = mkdtempSync(join2(tmpdir(), "nosedive-gate-"));
  const runner = join2(dir, "gate-runner.mjs");
  writeFileSync2(runner, RUNNER);
  const claims = /* @__PURE__ */ new Map();
  const failed = [];
  try {
    for (const { gate, by, flaky } of selected) {
      const name2 = String(gate.fm.name);
      const shown = relative3(hero.dir, gate.path).replace(/\\/g, "/");
      ctx.out(`gate ${name2} (${shown})`);
      const script = scriptOf(gate);
      const scriptPath = isAbsolute2(script) ? script : join2(hero.dir, script);
      if (!existsSync3(scriptPath)) {
        ctx.err(`nosedive: ${name2}'s meta.test-script ${script} is no file`);
        failed.push({ name: name2, flaky });
        continue;
      }
      if (git(hero.dir, "status", "--porcelain", "--", gate.path, scriptPath).text) ctx.err(`nosedive: ${name2}'s doc or script has uncommitted changes, which land would not accept yet`);
      const scopes = "scopes" in gate.fm ? scopesOf2(hero, gate) : by ? scopesOf2(hero, by) : [];
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
    rmSync2(dir, { recursive: true, force: true });
  }
  const blocking = failed.filter((gate) => !gate.flaky);
  const warned = failed.filter((gate) => gate.flaky);
  ctx.out(`${selected.length - failed.length} of ${selected.length} gates passed`);
  if (warned.length) ctx.out(`failed, flaky: ${warned.map((gate) => gate.name).join(", ")}`);
  if (blocking.length) throw new Error(`${blocking.length} gate${blocking.length === 1 ? "" : "s"} failed: ${blocking.map((gate) => gate.name).join(", ")}`);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/iffb5aa30b4e659e68b40ad7dee378a62.ts
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

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i79c0bcc90fa55bff9c8e62fed26dfa9a.ts
import { existsSync as existsSync4 } from "node:fs";
import { resolve } from "node:path";
var QUID3 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;
async function i79c0bcc90fa55bff9c8e62fed26dfa9a(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("test works in a hero repo, and this is not one");
  const docs2 = heroDocs(hero);
  const dive = i01a1b131e1947fa5b316b390a3be2415(hero);
  const find = (ref, what) => {
    const path = resolve(ctx.cwd, ref);
    const id2 = (existsSync4(path) ? QUID3.exec(path.replace(/.*[\\/]/, "")) : QUID3.exec(ref))?.[0]?.toLowerCase();
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

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129c08179e5abdcc058f6a359a4.ts
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

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i552b992cd74d50a489e0b2c84fcc203b.ts
async function i552b992cd74d50a489e0b2c84fcc203b(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("hydrate-repo.workspace works in a hero repo, and this is not one");
  checkoutAt(hero, i01a1b131e0177e7f8518b309634ebbd8(hero, String(args.repo)), typeof args.at === "string" ? args.at : void 0, ctx);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129c3b876719f5521826bd5a66b.ts
async function i01a1b129c3b876719f5521826bd5a66b(call) {
  switch (call.usage) {
    case "u552b992cd74d50a489e0b2c84fcc203b":
      return i552b992cd74d50a489e0b2c84fcc203b(call.args, call.ctx);
    default:
      throw new Error(`hydrate-repo.workspace has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/idf324b14b9135de2893fffa8705388da.ts
import { existsSync as existsSync5 } from "node:fs";
import { relative as relative4 } from "node:path";
async function idf324b14b9135de2893fffa8705388da(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("dehydrate-repo.workspace works in a hero repo, and this is not one");
  const repo = i01a1b131e0177e7f8518b309634ebbd8(hero, String(args.repo));
  const dir = i01a13c760de87562b4738946402010b8(hero, String(repo.fm.name));
  if (args.force !== true || !existsSync5(dir)) return i01a17fba20d673c5b8dd8551943369a2(hero, repo, ctx);
  const cache = git(dir, "rev-parse", "--path-format=absolute", "--git-common-dir").text;
  const removed = git(cache, "worktree", "remove", "--force", "--force", dir);
  if (!removed.ok) throw new Error(`cannot remove ${dir}: ${removed.text}`);
  ctx.out(`${relative4(hero.dir, dir).replace(/\\/g, "/")}: removed`);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129c70279ed9ccced39e882d827.ts
async function i01a1b129c70279ed9ccced39e882d827(call) {
  switch (call.usage) {
    case "udf324b14b9135de2893fffa8705388da":
      return idf324b14b9135de2893fffa8705388da(call.args, call.ctx);
    default:
      throw new Error(`dehydrate-repo.workspace has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i0190147b40b25ca2b1d03135a75a3502.ts
import { existsSync as existsSync6, mkdirSync as mkdirSync2, writeFileSync as writeFileSync3 } from "node:fs";
import { join as join3, relative as relative6, resolve as resolve2 } from "node:path";

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b13770be7a7a95b5e4ae9eed1407.ts
import { relative as relative5 } from "node:path";
function i01a1b13770be7a7a95b5e4ae9eed1407(hero, version2, commit2, link, files = []) {
  const edit = i01a14ab1d36771eea2bc6f13bdeb0526(hero.dir, version2);
  const key = relative5(hero.dir, link.docPath).replace(/\\/g, "/");
  i01a133588bcc7f8bae725ff70d8f6800(edit, link.fromId, "links", (links) => i01a133588b1f7d4ea13f1b5e79f02e4c(links, { [key]: link.attrs }));
  const from2 = edit.doc(link.fromId);
  i01a1335483aa776cb84df698b04adc06(from2.path, from2.yaml, from2.body);
  i01a13354894273b1be253424511ba82c(hero.dir, [link.docPath, from2.path, ...files], i01a19005c109715583553072f4e38dc4(hero, commit2.action, commit2.what, [link.docId, link.fromId]), version2);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i0190147b40b25ca2b1d03135a75a3502.ts
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
  const featId = (existsSync6(path) ? QUID4.exec(path.replace(/.*[\\/]/, "")) : QUID4.exec(featRef))?.[0]?.toLowerCase();
  if (!featId || !i01a1901e263b7209a4b5f39a71c568b3(hero).feats.has(featId)) throw new Error(`${featRef} is no feat of this hero`);
  const id2 = i01a1335480c776ba8945020d0af333eb();
  const script = `${relative6(hero.dir, join3(hero.kbDir, "artifacts")).replace(/\\/g, "/")}/${id2}.mjs`;
  const doc = i01a141f869c07c4da8288927a559c8ae(hero.kbDir, { kind: "gate", id: id2, gist: String(args.gist), ...typeof args.name === "string" ? { name: args.name } : {}, meta: { "test-script": script } });
  mkdirSync2(join3(hero.kbDir, "artifacts"), { recursive: true });
  writeFileSync3(join3(hero.dir, script), stub(script));
  const attrs = { rel: `${action}.gate`, ...args.flaky === true ? { "test-is-flaky": true } : {} };
  i01a1b13770be7a7a95b5e4ae9eed1407(hero, ctx.capes[0].version, { action: "record.gate", what: doc.name }, { fromId: featId, docId: id2, docPath: doc.path, attrs }, [join3(hero.dir, script)]);
  ctx.out(relative6(hero.dir, doc.path).replace(/\\/g, "/"));
  ctx.out(`write its check in ${script}, then run it: nosedive test ${id2}`);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b129ca537ef6973626eeeaebc87c.ts
async function i01a1b129ca537ef6973626eeeaebc87c(call) {
  switch (call.usage) {
    case "u0190147b40b25ca2b1d03135a75a3502":
      return i0190147b40b25ca2b1d03135a75a3502(call.args, call.ctx);
    default:
      throw new Error(`record.gate has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i58b390d976c95aa4bc065fbc8605e404.ts
import { appendFileSync } from "node:fs";
import { relative as relative7 } from "node:path";
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
  ctx.out(relative7(hero.dir, doc.path).replace(/\\/g, "/"));
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b13078b173229a3b1e21f7e12c20.ts
async function i01a1b13078b173229a3b1e21f7e12c20(call) {
  switch (call.usage) {
    case "u58b390d976c95aa4bc065fbc8605e404":
      return i58b390d976c95aa4bc065fbc8605e404(call.args, call.ctx);
    default:
      throw new Error(`note has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b31bdffb73989a9e8bcd257167b5.ts
var STATES = ["landed", "bailed", "planned", "jumped", "packed"];
var QUID5 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
var WORK_META = /* @__PURE__ */ new Set(["diver", "packer", "outcome", "feat"]);
var WORK_REPO = "01a15ba8-0bff-7ce3-83dc-e08af3633e26";
var entries = (list) => Array.isArray(list) ? list.filter((entry) => entry && typeof entry === "object") : [];
function wearsWork(hero, core2) {
  if (wornCapes(hero).some((cape) => cape.id === WORK_REPO)) return true;
  return core2 !== void 0 && i01a141f869bf7f76b5bc81aa991ff9b9(hero, core2).some((cape) => cape.build?.owner === WORK_ID);
}
function i01a1b31bdffb73989a9e8bcd257167b5(dir, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(dir);
  if (!hero || hero.dir !== dir) return [];
  if (!wearsWork(hero, ctx.capes[0])) return [];
  const docs2 = /* @__PURE__ */ new Map();
  for (const root of hero.roots) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(root.dir)) docs2.set(String(doc.fm.id), doc);
  const changed2 = /* @__PURE__ */ new Set();
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
      changed2.add(doc);
    }
  }
  const owner2 = WORK_ID;
  const canonical = [...docs2.values()].map((doc) => entries(doc.fm.scopes).find((entry) => owner2 in entry)).find(Boolean);
  const isTargetDive = (doc) => {
    const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
    return kind.owner === owner2 && kind.name === "dive";
  };
  for (const [id2, { states, by }] of targets) {
    const doc = docs2.get(id2);
    if (!doc) {
      ctx.out(`legacy-dives: ${id2} is linked as a dive and is no doc here, so it is left out`);
      continue;
    }
    if (!isTargetDive(doc)) {
      doc.yaml.set("kind", "dive");
      const others = entries(doc.fm.scopes).filter((entry) => !Object.values(entry).some((value) => value?.canonical === true));
      doc.yaml.set("scopes", [...others, canonical ?? { [owner2]: { canonical: true } }]);
      changed2.add(doc);
    }
    const outcome = states.has("landed") ? "landed" : states.has("bailed") ? "bailed" : void 0;
    if (outcome && doc.yaml.getIn(["meta", "outcome"]) === void 0) {
      doc.yaml.setIn(["meta", "outcome"], outcome);
      changed2.add(doc);
    }
    if (!doc.yaml.hasIn(["meta", "feat"])) {
      const effort = doc.yaml.getIn(["meta", "effort"]);
      const named = typeof effort === "string" ? docs2.has(effort) ? effort : [...docs2.values()].find((each) => each.fm.name === effort)?.fm.id : void 0;
      doc.yaml.setIn(["meta", "feat"], String(named ?? by));
      changed2.add(doc);
    }
  }
  for (const doc of docs2.values()) {
    if (!isTargetDive(doc) && !targets.has(String(doc.fm.id))) continue;
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
    changed2.add(doc);
  }
  for (const doc of changed2) i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, doc.body);
  if (changed2.size > 0) ctx.out(`legacy-dives: ${targets.size} dive${targets.size === 1 ? "" : "s"} linked by state, ${changed2.size} doc${changed2.size === 1 ? "" : "s"} rewritten to work's shape`);
  return [...changed2].map((doc) => doc.path);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1b31be41b7a31a5918d04ef4091be.ts
import { spawnSync as spawnSync4 } from "node:child_process";
import { existsSync as existsSync7, mkdirSync as mkdirSync3, mkdtempSync as mkdtempSync2, rmSync as rmSync3 } from "node:fs";
import { homedir, tmpdir as tmpdir2 } from "node:os";
import { isAbsolute as isAbsolute3, join as join4, resolve as resolve3 } from "node:path";
var Wait = class extends Error {
};
var QUID6 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
var BRANCHES = "+refs/heads/*:refs/remotes/origin/*";
var PACKED = "+refs/nosedive/*:refs/nosedive/*";
function git2(cwd, args, env = {}) {
  const result = spawnSync4("git", args, { cwd, encoding: "utf8", env: { ...process.env, ...env } });
  return { ok: result.status === 0, text: (result.status === 0 ? result.stdout : result.stderr || result.stdout || "").trim() };
}
var linksOf2 = (doc, rel) => (Array.isArray(doc.fm.links) ? doc.fm.links : []).flatMap(
  (entry) => Object.entries(entry ?? {}).flatMap(([key, value]) => value?.rel === rel && QUID6.exec(key) ? [QUID6.exec(key)[0]] : [])
);
function cacheOf(hero, repo) {
  const cache = join4(process.env.NOSEDIVE_USER_DIR || join4(homedir(), ".nosedive"), "cache", `${String(repo.fm.id)}.git`);
  const url = String(repo.fm.meta?.remotes?.origin ?? "");
  if (!url) throw new Wait(`${String(repo.fm.name)} has no meta.remotes.origin`);
  const origin = /^[a-z][a-z0-9+.-]*:\/\/|^[^@\s/]+@[^:\s/]+:/i.test(url) || isAbsolute3(url) ? url : resolve3(hero, url);
  if (!existsSync7(cache)) {
    mkdirSync3(cache, { recursive: true });
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
function build(repo, base, patches, wip2, ref, name2, identity) {
  const scratch = mkdtempSync2(join4(tmpdir2(), "nosedive-legacy-"));
  const tree = join4(scratch, "tree");
  try {
    const added = git2(repo, ["worktree", "add", "-q", "--detach", tree, base]);
    if (!added.ok) return `cannot check out ${base.slice(0, 12)}: ${added.text}`;
    for (const patch of [...patches.filter((each) => !each.dirty), ...patches.filter((each) => each.dirty)]) {
      if (!existsSync7(patch.file)) return `its patch ${patch.file} is gone`;
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
      const committed = git2(tree, ["commit", "-q", "--allow-empty", "--no-verify", "-m", wip2], identity);
      if (!committed.ok) return `cannot commit its uncommitted work: ${committed.text}`;
    }
    const pushed = git2(tree, ["push", "-q", "origin", `HEAD:${ref}`]);
    if (!pushed.ok) throw new Wait(`cannot push ${name2}'s ${ref}: ${pushed.text}`);
    return void 0;
  } finally {
    git2(repo, ["worktree", "remove", "--force", tree]);
    rmSync3(scratch, { recursive: true, force: true });
  }
}
function i01a1b31be41b7a31a5918d04ef4091be(dir, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(dir);
  if (!hero || hero.dir !== dir || !hero.id) return [];
  const docs2 = /* @__PURE__ */ new Map();
  for (const root of hero.roots) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(root.dir)) docs2.set(String(doc.fm.id), doc);
  const repos = repoDocs(hero);
  const pushed = [];
  const hanging = diveLinks(hero);
  try {
    for (const dive of docs2.values()) {
      const meta = dive.fm.meta ?? {};
      const hung = hanging.get(String(dive.fm.id));
      const open = hung ? hung.state !== "landed" : isDive2(dive) && (meta.outcome === void 0 || meta.outcome === "bailed");
      if (!open) continue;
      const name2 = String(dive.fm.name);
      const ref = `refs/nosedive/${hero.id}/dives/${String(dive.fm.id)}`;
      const wip2 = `pack(${name2}): work in progress`;
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
          patches.push({ file: join4(dir, file), dirty: memoName.startsWith("dirty.") || memoName.startsWith("bridge-wip.") });
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
          const why = build(cache, pin, patches, wip2, ref, repoName, identity);
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
        const why = build(dir, trunk, own, wip2, ref, "the hero", identity);
        if (why) ctx.out(`legacy-patches: ${name2}: the hero: ${why}, so it is passed over`);
        else pushed.push(`${name2} hero (${own.length} patch${own.length === 1 ? "" : "es"})`);
      }
    }
  } catch (err2) {
    if (!(err2 instanceof Wait)) throw err2;
    ctx.out(`legacy-patches: waiting, since ${err2.message}${pushed.length ? `; pushed meanwhile: ${pushed.join(", ")}` : ""}`);
    return void 0;
  }
  for (const each of pushed) ctx.out(`legacy-patches: pushed ${each}`);
  return [];
}
function firstLine(text) {
  return text.split(/\r?\n/).find((line) => line.trim() && !line.startsWith("hint:")) ?? text;
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i0e2024913efd5dc8afe194f5650bda20.ts
import { existsSync as existsSync8 } from "node:fs";
import { relative as relative8 } from "node:path";

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0b57a0c80e3fdd641d001a8.ts
function i01a1c72ba0b57a0c80e3fdd641d001a8(hero, doc, change, version2) {
  for (const [key, value] of Object.entries(change.meta ?? {})) {
    if (value === null) doc.yaml.deleteIn(["meta", key]);
    else doc.yaml.setIn(["meta", key], value);
  }
  const meta = doc.yaml.toJS().meta;
  if (meta && Object.keys(meta).length === 0) doc.yaml.delete("meta");
  if (change.scopes) doc.yaml.set("scopes", change.scopes);
  const body = `${doc.body.replace(/\n*$/, "\n")}
## ${(/* @__PURE__ */ new Date()).toISOString()} ${change.label}

${change.lines.join("\n")}
`;
  i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, body);
  doc.body = body;
  const linkers = change.state ? moveLinks(diveLinks(hero).get(String(doc.fm.id)) ?? { state: change.state, by: [] }, String(doc.fm.id), change.state) : [];
  i01a13354894273b1be253424511ba82c(hero.dir, [.../* @__PURE__ */ new Set([doc.path, ...linkers.map((linker) => linker.path), ...change.also ?? []])], `${change.action}(${String(doc.fm.name)}): ${change.summary}`, version2);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i0e2024913efd5dc8afe194f5650bda20.ts
var LISTED = /^(?:.*[\\/])?([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.md$/i;
async function i0e2024913efd5dc8afe194f5650bda20(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("jump works in a hero repo, and this is not one: `nosedive seed` makes one");
  const me = emailOf(hero);
  const sure = args.sure === true;
  const named = (doc) => `${String(doc.fm.name)} (${String(doc.fm.id)})`;
  const on = heroBranch(hero);
  let target;
  let home;
  let token;
  let mode;
  let hung;
  const deck = parseDiveBranch(on);
  const deckDoc = deck && heroDoc(hero, deck.diveId);
  const deckHung = deck && diveLinks(hero).get(deck.diveId);
  if (deck && deckDoc && deckHung && (isOver(deckHung.state) || isDive(deckDoc))) {
    if (typeof args.ref === "string" && args.ref !== deck.diveId) throw new Error(`the hero is on dive ${named(deckDoc)}'s branch: pack, land or bail it first`);
    refuseOver(hero, deckDoc, deckHung.state, on, deck.token);
    target = deckDoc;
    hung = deckHung;
    token = deck.token;
    home = homeOf(hero, token) ?? missingHome(deckDoc);
    mode = "again";
  } else {
    home = on;
    if (i01a1c72ba0c37d27a058e908481307c3(hero.dir, "status", "--porcelain").text) throw new Error("the hero has uncommitted changes, and jump switches its branch: commit them first (jump-needs-clean-tree)");
    const up = homeUpstream(hero, home);
    fetchUpstream(hero, up);
    syncHome(hero, home, up);
    token = tokenOf(hero, home);
    const holder2 = `${me}#${token}`;
    const links = diveLinks(hero);
    const open = openDives(hero, links);
    if (typeof args.ref === "string") {
      const found = heroDoc(hero, args.ref.replace(LISTED, "$1").toLowerCase());
      if (!found) throw new Error(`no doc ${args.ref} in the hero on ${home}`);
      target = found;
      hung = links.get(String(found.fm.id));
      if (!hung && isDive(found)) throw new Error(`dive ${String(found.fm.name)} hangs from no doc: none links it \`planned.dive\`, \`jumped.dive\`, \`packed.dive\`, \`landed.dive\` or \`bailed.dive\`, so link it from its feat first`);
    } else {
      const held = open.filter(({ doc }) => metaOf(doc).diver === holder2);
      const free = open.filter(({ doc }) => !metaOf(doc).diver && (metaOf(doc).packer ?? me) === me);
      const waiting = held.length > 0 ? held : free;
      if (waiting.length !== 1) throw new Error(waiting.length === 0 ? `no dive waits for you here: \`nosedive jump <feat or dive>\` names one${open.length > 0 ? `; the hero's open dives:
  ${open.map(describeDive).join("\n  ")}` : ""}` : `${waiting.length} dives wait for you, so name one:
  ${waiting.map(describeDive).join("\n  ")}`);
      target = waiting[0].doc;
      hung = waiting[0].hung;
    }
    const branches = diveBranches(hero);
    const mine = branches.find((each) => each.diveId === String(target.fm.id));
    if (branches.length > 0 && !mine) throw new Error(`this checkout has dive branch ${branches[0].branch}: switch to it, then pack, land or bail it first`);
    if (mine) {
      refuseOver(hero, target, hung?.state, mine.branch, mine.token);
      const switched = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "checkout", "-q", mine.branch);
      if (!switched.ok) throw new Error(`cannot put the hero on ${mine.branch}: ${switched.text}`);
      token = mine.token;
      home = homeOf(hero, token) ?? missingHome(target);
      mode = "again";
    } else if (hung) {
      const meta = metaOf(target);
      if (isOver(hung.state)) throw new Error(`dive ${String(target.fm.name)} is over: it ${hung.state}`);
      if (!isDive(target)) throw new Error(`${String(target.fm.name)} is linked as a dive but is no dive of legacy's: ${String(target.fm.kind)} is not its kind`);
      if (meta.diver && meta.diver !== holder2 && !bareDiverIs(meta.diver, me)) {
        const [email, other] = meta.diver.split("#");
        if (!other) throw new Error(`dive ${String(target.fm.name)} is held by ${email}, in no checkout in particular: only a checkout whose git user.email is ${email} can take it over (legacy-bare-diver)`);
        const from2 = homeOf(hero, other);
        throw new Error(`dive ${String(target.fm.name)} is held by ${email}${from2 ? ` from ${from2} in this checkout: switch to it, then jump it` : email === me ? " in another checkout of the hero: pack it there" : ""} (held-by-checkout)`);
      }
      if (!meta.diver && meta.packer && meta.packer !== me && !sure) throw new Error(`dive ${String(target.fm.name)} was packed by ${meta.packer}: jump it --sure to take it over, its work in progress included (take-over-with-sure)`);
      mode = meta.diver === holder2 ? "rebuild" : "record";
    } else {
      if (!featRoot(hero, String(target.fm.id))) throw new Error(`${String(target.fm.name)} is no feat: nothing reaches it from a root of the hero through a .feat link; link it from a feat first`);
      const dives = heldDives(target);
      if (dives.length > 0) {
        const id2 = String(target.fm.id);
        throw new Error(
          `${String(target.fm.name)} has ${dives.length === 1 ? "a dive" : `${dives.length} dives`} on it (${dives.join(", ")}), so a bare jump would start it over, --sure or not: finish and drop ${dives.length === 1 ? "it" : "them"} first, or plan another dive saying what it does, then jump that:
  nosedive crud nosedive-legacy:dive <gist> --meta:feat ${id2} --section:Brief -
  nosedive jump <dive>`
        );
      }
      const off = offFringe(hero, target, ctx);
      if (off && !sure) throw new Error(`${off}, so next does not list it: jump it --sure to start a dive on it anyway (sure-off-fringe)`);
      mode = "record";
    }
  }
  const isDive3 = hung !== void 0;
  const again = mode !== "record";
  const diveId = isDive3 ? String(target.fm.id) : i01a1335480c776ba8945020d0af333eb();
  const branch = diveBranch(token, diveId);
  const holder = `${me}#${token}`;
  const plan = readScopes(hero, target).map((entry) => {
    const repo = repoDoc(hero, entry.repoId);
    const name2 = String(repo.fm.name);
    const dir = i01a13c760de87562b4738946402010b8(hero, name2);
    const local = entry.branch ? branch : void 0;
    const at2 = existsSync8(dir) ? i01a1c72ba0c37d27a058e908481307c3(dir, "symbolic-ref", "-q", "--short", "HEAD") : void 0;
    const settled = local ? at2?.text === local : at2 !== void 0 && !at2.ok && again;
    return { ...entry, repo, name: name2, dir, shown: relative8(hero.dir, dir).replace(/\\/g, "/"), local, settled };
  });
  const refused = plan.filter((scope) => existsSync8(scope.dir) && !scope.settled && i01a1c72ba0c37d27a058e908481307c3(scope.dir, "status", "--porcelain").text).map((scope) => `${scope.shown} has uncommitted changes or untracked files`);
  if (refused.length > 0) throw new Error(`jump would lose work, so nothing moved:
  ${refused.join("\n  ")}`);
  const at = isDive3 ? void 0 : featRoot(hero, String(target.fm.id));
  if (!isDive3) diveKind(hero, ctx);
  const featId = hung && featIdOf(hero, target, hung.by) || String(target.fm.id);
  const lines = [];
  const moved = [];
  for (const scope of plan) {
    if (scope.settled) continue;
    const notes = [];
    if (!existsSync8(scope.dir)) {
      i01a15baf13e27bd88dc880d4871f2210(hero, scope.repo, { out: () => void 0, err: ctx.err });
      fetchAll(scope.dir);
    } else {
      fetchAll(scope.dir);
      const kept = orphan(hero, scope.dir);
      if (kept) notes.push(`its ${kept.commits.length} commit${kept.commits.length === 1 ? "" : "s"} origin lacked kept on ${kept.ref}`);
    }
    const repoTrunk = trunkOf(scope.repo, scope.dir);
    if (scope.local) switchTo(scope.dir, scope.local, scope.branch, repoTrunk);
    else i01a1c72ba0c37d27a058e908481307c3(scope.dir, "checkout", "-q", "--detach", `refs/remotes/origin/${repoTrunk}`);
    moved.push(scope);
    if (scope.local) {
      const packed = newestRef(scope.dir, diveId);
      if (packed && !i01a1c72ba0c37d27a058e908481307c3(scope.dir, "merge-base", "--is-ancestor", packed, "HEAD").ok) {
        if (!i01a1c72ba0c37d27a058e908481307c3(scope.dir, "merge-base", "--is-ancestor", "HEAD", packed).ok) {
          const kept = orphan(hero, scope.dir);
          if (kept) notes.push(`its local commits kept on ${kept.ref}`);
        }
        i01a1c72ba0c37d27a058e908481307c3(scope.dir, "reset", "-q", "--hard", packed);
      }
      const workBranch = `refs/remotes/origin/${scope.branch}`;
      if (i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rev-parse", "--verify", "-q", workBranch).ok && !i01a1c72ba0c37d27a058e908481307c3(scope.dir, "merge-base", "--is-ancestor", workBranch, "HEAD").ok) {
        const rebased = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rebase", "-q", workBranch);
        if (!rebased.ok) {
          i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rebase", "--abort");
          throw new Error(`${scope.name}'s work conflicts with ${scope.branch}, so nothing was recorded: rebase ${scope.local} onto it in ${scope.shown}, then jump ${diveId} again
${rebased.text}`);
        }
        notes.push(`rebased onto ${scope.branch}`);
      }
    }
    const head = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rev-parse", "--short", "HEAD").text;
    lines.push(`- ${scope.name}: ${scope.shown} on ${head}${scope.branch ? `, working ${scope.branch}` : ", read-only"}${notes.length > 0 ? `; ${notes.join("; ")}` : ""}`);
  }
  const heroPacked = newestRef(hero.dir, diveId);
  if (mode === "record") {
    const refs = new Map(plan.filter((scope) => scope.local).map((scope) => [scope.repoId, newestRef(scope.dir, diveId)]));
    refs.set(hero.id, heroPacked);
    const replayed = heroPacked ? i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rev-list", "--count", heroPacked, "--not", `refs/heads/${home}`).text : "0";
    if (replayed !== "0") lines.push(`- hero: ${replayed} commit${replayed === "1" ? "" : "s"} replayed`);
    pushRecord(hero, () => {
      const also = [];
      if (!isDive3) {
        const feat2 = heroDoc(hero, String(target.fm.id));
        mintDive(hero, at, feat2, diveId, ctx);
        also.push(feat2.path);
      }
      const dive2 = heroDoc(hero, diveId);
      if (!dive2 || !isDive(dive2)) throw new Error(`${diveId} is no dive in the hero`);
      const { diver } = metaOf(dive2);
      if (diver && diver !== holder && !bareDiverIs(diver, me)) throw new Error(`dive ${String(dive2.fm.name)} was picked up by ${diver.split("#")[0]} meanwhile`);
      i01a1c72ba0b57a0c80e3fdd641d001a8(hero, dive2, { action: "jump", label: "jumped", state: "jumped", summary: `${me} picked it up`, meta: { diver: holder, packer: null }, scopes: scopesWith(hero, dive2, refs), lines: [`${me} picked it up.`, "", ...lines], also }, ctx.capes[0].version);
    });
  }
  if (mode !== "again") {
    i01a1c72ba0c37d27a058e908481307c3(hero.dir, "branch", "-q", "-f", branch, "HEAD");
    const switched = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "checkout", "-q", branch);
    if (!switched.ok) throw new Error(`cannot put the hero on ${branch}: ${switched.text}`);
    if (heroPacked && !i01a1c72ba0c37d27a058e908481307c3(hero.dir, "merge-base", "--is-ancestor", heroPacked, "HEAD").ok) {
      const since = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "merge-base", heroPacked, "HEAD").text;
      const picked = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "cherry-pick", "--allow-empty", `${since}..${heroPacked}`);
      if (!picked.ok) {
        i01a1c72ba0c37d27a058e908481307c3(hero.dir, "cherry-pick", "--abort");
        throw new Error(`the dive's packed hero work conflicts with ${home}, so the hero is on ${branch} without it: it stays on ${heroPacked.slice(0, 7)}, to cherry-pick by hand
${picked.text}`);
      }
    }
  }
  const dive = heroDoc(hero, diveId);
  for (const scope of moved) {
    const orphaned = swapIgnored(hero, featId, scope);
    if (orphaned) ctx.out(`${scope.name}: ignored files from other work kept in ${relative8(hero.dir, orphaned).replace(/\\/g, "/")}`);
  }
  for (const dir of [hero.dir, ...plan.map((scope) => scope.dir)]) {
    if (isWip(dive, i01a1c72ba0c37d27a058e908481307c3(dir, "log", "-1", "--format=%s").text)) i01a1c72ba0c37d27a058e908481307c3(dir, "reset", "-q", "--mixed", "HEAD^");
  }
  const shown = (path) => relative8(ctx.cwd, path).replace(/\\/g, "/");
  const feat = heroDoc(hero, featId);
  ctx.out(`dive  ${shown(dive.path)}`);
  if (feat) ctx.out(`feat  ${shown(feat.path)}`);
  for (const scope of plan) ctx.out(`${scope.name}  ${shown(scope.dir)}`);
  const brief = /(?:^|\n)## Brief\n/.test(dive.body) || !feat ? dive : feat;
  ctx.out(`Now do the dive's work, from its brief, ${shown(brief.path)}, to its feat's Done when; pack or land it only when the pilot asks.`);
}
function refuseOver(hero, dive, state, branch, token) {
  if (!state || !isOver(state)) return;
  const home = homeOf(hero, token);
  throw new Error(`dive ${String(dive.fm.name)} is over: it ${state}; to leave its branch, switch to its home${home ? `, ${home}` : ""}, the branch it was jumped from, and delete ${branch}`);
}
function missingHome(dive) {
  throw new Error(`dive ${String(dive.fm.name)}'s home, the branch it was jumped from, is gone: recreate it, as \`git branch <name> <commit>\``);
}
function heldDives(doc) {
  return stateLinksOf(doc).map(({ key, state }) => `${key} (${state})`);
}
function offFringe(hero, doc, ctx) {
  const kind = i01a18e2a3b4b798d98068d4778a158e6(doc, hero.id);
  const spelling = kind.owner === hero.id ? kind.name : `${kind.owner}:${kind.name}`;
  if (isDurable(i01a147171f057d019118aaa1f269f5fd(spelling, hero, ctx.capes))) return `${String(doc.fm.name)} is durable`;
  const links = Array.isArray(doc.fm.links) ? doc.fm.links : [];
  const children = links.filter((entry) => entry && typeof entry === "object" && Object.values(entry).some((value) => typeof value?.rel === "string" && value.rel.endsWith(".feat") && value.rel !== "parent.feat"));
  if (children.length > 0) return `${String(doc.fm.name)} has ${children.length} child doc${children.length === 1 ? "" : "s"}, so it is no leaf`;
  return void 0;
}
function newestRef(dir, diveId) {
  const ref = i01a1c72ba0c37d27a058e908481307c3(dir, "for-each-ref", "--sort=-committerdate", "--format=%(objectname) %(refname)", "refs/nosedive").text.split("\n").find((line) => isDiveRef(line, diveId));
  return ref?.split(" ")[0];
}
function switchTo(dir, local, workBranch, trunk) {
  if (!i01a1c72ba0c37d27a058e908481307c3(dir, "rev-parse", "--verify", "-q", `refs/heads/${local}`).ok) {
    const start = [`refs/remotes/origin/${workBranch}`, `refs/remotes/origin/${trunk}`].find((ref) => i01a1c72ba0c37d27a058e908481307c3(dir, "rev-parse", "--verify", "-q", ref).ok);
    i01a1c72ba0c37d27a058e908481307c3(dir, "branch", "-q", "--no-track", local, start);
  }
  i01a1c72ba0c37d27a058e908481307c3(dir, "config", `branch.${local}.remote`, "origin");
  i01a1c72ba0c37d27a058e908481307c3(dir, "config", `branch.${local}.merge`, `refs/heads/${workBranch}`);
  const switched = i01a1c72ba0c37d27a058e908481307c3(dir, "checkout", "-q", local);
  if (!switched.ok) throw new Error(`cannot put ${dir} on ${local}: ${switched.text}`);
}
function mintDive(hero, dir, feat, id2, ctx) {
  const name2 = `${id2.slice(-6)}.${String(feat.fm.name)}`;
  const scopes = readScopes(hero, feat).map((entry) => ({ [entry.repoId]: entry.branch ? { "work-branch": entry.branch } : {} }));
  const { owner: owner2, pin } = diveKind(hero, ctx);
  if (owner2 !== hero.id) scopes.push({ [owner2]: { canonical: true, ...pin } });
  const minted = i01a141f869c07c4da8288927a559c8ae(dir, { kind: "dive", id: id2, name: name2, gist: `An attempt to complete ${String(feat.fm.name)}`, title: name2, meta: { feat: String(feat.fm.id) } });
  const doc = heroDoc(hero, minted.id);
  doc.yaml.set("scopes", scopes);
  i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, doc.body);
  const links = Array.isArray(feat.fm.links) ? feat.fm.links : [];
  feat.yaml.set("links", [...links, { [keyOf(hero, doc)]: { rel: "jumped.dive" } }]);
  i01a1335483aa776cb84df698b04adc06(feat.path, feat.yaml, feat.body);
}
function diveKind(hero, ctx) {
  const kind = i01a147171f057d019118aaa1f269f5fd(`${LEGACY_ID}:dive`, hero, ctx.capes);
  if (!kind) throw new Error("nosedive-legacy:dive names no kind here: the hero must wear the legacy cape");
  return { owner: kind.owner, pin: pinOf(kind, hero) };
}
function bareDiverIs(diver, email) {
  return !diver.includes("#") && diver === email;
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/ia65e6ec583fa51079af219fd79e4ad87.ts
async function ia65e6ec583fa51079af219fd79e4ad87(args, ctx) {
  return i0e2024913efd5dc8afe194f5650bda20({ ...args, sure: true }, ctx);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba06b7cfd9e5f710dc60e4a37.ts
async function i01a1c72ba06b7cfd9e5f710dc60e4a37(call) {
  switch (call.usage) {
    case "u0e2024913efd5dc8afe194f5650bda20":
      return i0e2024913efd5dc8afe194f5650bda20(call.args, call.ctx);
    case "ua65e6ec583fa51079af219fd79e4ad87":
      return ia65e6ec583fa51079af219fd79e4ad87(call.args, call.ctx);
    default:
      throw new Error(`jump has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i5f74ee87748f528b9fd9b00a48c2275b.ts
async function i5f74ee87748f528b9fd9b00a48c2275b(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("pack works in a hero repo, and this is not one");
  const dive = i01a1c72ba0a67a64836f167c23ffa097(hero, ctx, typeof args.dive === "string" ? args.dive : void 0);
  const me = emailOf(hero);
  const refused = readOnlyRefusals(dive);
  if (refused.length > 0) throw new Error(`read-only scopes hold work with nowhere to go, so nothing was packed:
  ${refused.join("\n  ")}`);
  const { puts, refs, own } = putDown(dive, ctx.capes[0].version);
  const lines = puts.map((put) => put.sha ? `- ${put.name}: ${put.commits.length} commit${put.commits.length === 1 ? "" : "s"} kept on ${own} at ${put.sha.slice(0, 7)}` : `- ${put.name}: no work`);
  const id2 = String(dive.doc.fm.id);
  pushRecord(hero, () => {
    const doc = heroDoc(hero, id2);
    i01a1c72ba0b57a0c80e3fdd641d001a8(hero, doc, { action: "pack", label: "packed", state: "packed", summary: `${me} put it down`, meta: { diver: null, packer: me }, scopes: scopesWith(hero, doc, refs), lines: [`${me} put it down.`, "", ...lines] }, ctx.capes[0].version);
  });
  ctx.out(`packed ${String(dive.doc.fm.name)}${lines.length > 0 ? `
${lines.join("\n")}` : ""}`);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0797d52baaa1a9bba46a525.ts
async function i01a1c72ba0797d52baaa1a9bba46a525(call) {
  switch (call.usage) {
    case "u5f74ee87748f528b9fd9b00a48c2275b":
      return i5f74ee87748f528b9fd9b00a48c2275b(call.args, call.ctx);
    default:
      throw new Error(`pack has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/ia159fdc01ac85e4f831dc1c523787ce6.ts
async function ia159fdc01ac85e4f831dc1c523787ce6(args, ctx) {
  const reason = String(args.reason ?? "").trim();
  if (!reason) throw new Error("bail needs a reason: --reason <why>");
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("bail works in a hero repo, and this is not one");
  const dive = i01a1c72ba0a67a64836f167c23ffa097(hero, ctx, typeof args.dive === "string" ? args.dive : void 0);
  const me = emailOf(hero);
  const { puts, refs, own } = putDown(dive, ctx.capes[0].version);
  const lines = [`${me} bailed: ${reason}`, "", ...puts.map((put) => `- ${put.name}: ${put.sha ? `held ${[...put.commits].reverse().join("; ")}, kept on ${own}` : "held no commits"}`)];
  const id2 = String(dive.doc.fm.id);
  pushRecord(hero, () => {
    const doc = heroDoc(hero, id2);
    i01a1c72ba0b57a0c80e3fdd641d001a8(hero, doc, { action: "bail", label: "bailed", state: "bailed", summary: reason, meta: { diver: null }, scopes: scopesWith(hero, doc, refs), lines }, ctx.capes[0].version);
  });
  ctx.out(`bailed ${String(dive.doc.fm.name)}`);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba088715da4fe90ea388bb097.ts
async function i01a1c72ba088715da4fe90ea388bb097(call) {
  switch (call.usage) {
    case "ua159fdc01ac85e4f831dc1c523787ce6":
      return ia159fdc01ac85e4f831dc1c523787ce6(call.args, call.ctx);
    default:
      throw new Error(`bail has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i3b8461aa9eac5f10837c2515b5231e78.ts
import { relative as relative9 } from "node:path";
async function i3b8461aa9eac5f10837c2515b5231e78(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("land works in a hero repo, and this is not one");
  const dive = i01a1c72ba0a67a64836f167c23ffa097(hero, ctx, typeof args.dive === "string" ? args.dive : void 0);
  const me = emailOf(hero);
  const id2 = String(dive.doc.fm.id);
  const writable = dive.scopes.filter((scope) => scope.branch && scope.ours);
  const refused = readOnlyRefusals(dive);
  if (i01a1c72ba0c37d27a058e908481307c3(hero.dir, "status", "--porcelain").text) refused.push("the hero has uncommitted changes: commit them first");
  const { home } = dive;
  const up = homeUpstream(hero, home);
  fetchUpstream(hero, up);
  try {
    syncHome(hero, home, up);
  } catch (error) {
    refused.push(error.message);
  }
  const published = /* @__PURE__ */ new Map();
  for (const scope of writable) {
    const shown = relative9(hero.dir, scope.dir).replace(/\\/g, "/");
    if (i01a1c72ba0c37d27a058e908481307c3(scope.dir, "status", "--porcelain").text) refused.push(`${shown} has uncommitted changes: commit them first`);
    const tip2 = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "ls-remote", "origin", `refs/heads/${scope.branch}`).text.split("	")[0];
    if (tip2) published.set(scope.name, tip2);
    if (tip2 && !i01a1c72ba0c37d27a058e908481307c3(scope.dir, "merge-base", "--is-ancestor", tip2, "HEAD").ok) {
      i01a1c72ba0c37d27a058e908481307c3(scope.dir, "fetch", "-q", "origin");
      refused.push(`${scope.branch} in ${scope.name} has moved to ${tip2.slice(0, 7)}, which this dive's work does not contain: pack, then jump ${id2}, which rebases the work onto it`);
    }
  }
  if (refused.length > 0) throw new Error(`nothing was landed:
  ${refused.join("\n  ")}`);
  const trailers = [`Nosedive-Dive: ${id2}`, `Nosedive-Feat: ${durableFeat(hero, dive, ctx.capes)}`, coAuthor(ctx.capes[0].version)];
  const lines = [];
  for (const scope of writable) {
    const base = published.get(scope.name) ?? `refs/remotes/origin/${scope.trunk}`;
    if (i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rev-list", "--count", `${base}..HEAD`).text === "0") {
      lines.push(`- ${scope.name}: unchanged`);
      continue;
    }
    stamp(scope.dir, ["HEAD", "--not", "--remotes=origin"], trailers);
    const head = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "rev-parse", "HEAD").text;
    const pushed = i01a1c72ba0c37d27a058e908481307c3(scope.dir, "push", "-q", "origin", `HEAD:refs/heads/${scope.branch}`);
    if (!pushed.ok) throw new Error(`cannot push ${scope.name} to ${scope.branch}: ${pushed.text}`);
    i01a1c72ba0c37d27a058e908481307c3(scope.dir, "update-ref", `refs/remotes/origin/${scope.branch}`, head);
    lines.push(`- ${scope.name}: pushed ${head.slice(0, 7)} to ${scope.branch}`);
  }
  const rebased = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rebase", "-q", `refs/heads/${home}`);
  if (!rebased.ok) {
    i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rebase", "--abort");
    throw new Error(`the hero's work conflicts with ${home}; its scopes landed, the hero did not: rebase ${dive.branch} onto ${home}, then land ${id2} again
${rebased.text}`);
  }
  const heroWork = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rev-list", "--count", `refs/heads/${home}..HEAD`).text;
  if (heroWork !== "0") {
    stamp(hero.dir, ["HEAD", "--not", `refs/heads/${home}`, "--remotes=origin"], trailers);
    lines.push(`- hero: ${heroWork} commit${heroWork === "1" ? "" : "s"} onto ${home}`);
  }
  const tip = i01a1c72ba0c37d27a058e908481307c3(hero.dir, "rev-parse", "HEAD").text;
  i01a1c72ba0c37d27a058e908481307c3(hero.dir, "checkout", "-q", home);
  i01a1c72ba0c37d27a058e908481307c3(hero.dir, "merge", "-q", "--ff-only", tip);
  i01a1c72ba0c37d27a058e908481307c3(hero.dir, "branch", "-q", "-D", dive.branch);
  const cleared = new Map([...dive.scopes.map((scope) => [scope.repoId, void 0]), [hero.id, void 0]]);
  pushRecord(hero, () => {
    const doc = heroDoc(hero, id2);
    i01a1c72ba0b57a0c80e3fdd641d001a8(hero, doc, { action: "land", label: "landed", state: "landed", summary: `${me} landed it`, meta: { diver: null }, scopes: scopesWith(hero, doc, cleared), lines: [`${me} landed it.`, "", ...lines] }, ctx.capes[0].version);
  });
  const featId = dive.featId;
  deleteRefs(hero.dir, diveRefs(hero.dir, id2).map(({ ref }) => ref));
  for (const scope of dive.scopes.filter((each) => each.ours)) {
    packIgnored(hero, featId, scope);
    deleteRefs(scope.dir, diveRefs(scope.dir, id2).map(({ ref }) => ref));
    if (!scope.branch) continue;
    i01a1c72ba0c37d27a058e908481307c3(scope.dir, "checkout", "-q", "--detach");
    i01a1c72ba0c37d27a058e908481307c3(scope.dir, "branch", "-q", "-D", dive.branch);
  }
  ctx.out(`landed ${String(dive.doc.fm.name)}${lines.length > 0 ? `
${lines.join("\n")}` : ""}`);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0977036ae1a496002396328.ts
async function i01a1c72ba0977036ae1a496002396328(call) {
  switch (call.usage) {
    case "u3b8461aa9eac5f10837c2515b5231e78":
      return i3b8461aa9eac5f10837c2515b5231e78(call.args, call.ctx);
    default:
      throw new Error(`land has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0e174878930a64e361790a6.ts
async function i01a1c72ba0e174878930a64e361790a6(ctx) {
  i01a1c72ba0a67a64836f167c23ffa097(ctx.bridge, ctx, ctx.doc.id);
  const summary = typeof ctx.args.summary === "string" ? ctx.args.summary.trimEnd() : "";
  const next = typeof ctx.args.next === "string" ? ctx.args.next : "";
  const label = typeof ctx.args.label === "string" ? ctx.args.label : "";
  if (/[\r\n]/.test(next)) throw new Error("--next must be one line");
  if (!summary.trim() && !next.trim()) throw new Error("turn needs a summary or --next");
  const lines = [...summary ? [summary] : [], ...next ? [`Next: ${next}`] : []];
  const heading = `${(/* @__PURE__ */ new Date()).toISOString()}${label ? ` ${label}` : ""}`;
  ctx.doc.body = `${ctx.doc.body.replace(/\n*$/, "\n")}
## ${heading}

${lines.join("\n")}
`;
  ctx.edit.change(ctx.doc);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i6164926c34715ab39455948b647cbb0e.ts
async function i6164926c34715ab39455948b647cbb0e(ctx) {
  return i01a1c72ba0e174878930a64e361790a6(ctx);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0d2794783de8f2dd490283a.ts
async function i01a1c72ba0d2794783de8f2dd490283a(call) {
  switch (call.usage) {
    case "u6164926c34715ab39455948b647cbb0e": {
      if (!call.gate) throw new Error("turn runs through pass");
      const args = { ...call.gate.args };
      if (args.summary === "-") args.summary = await call.ctx.stdin();
      return i6164926c34715ab39455948b647cbb0e({ ...call.gate, args });
    }
    default:
      throw new Error(`turn has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i98e9ab6e1535570abad65bf95895aa3d.ts
var metaOf2 = (state) => state.fm.meta ?? {};
async function i98e9ab6e1535570abad65bf95895aa3d(ctx) {
  const { before, after } = ctx;
  if (!before) return;
  const name2 = String(before.fm.name);
  const meta = metaOf2(before);
  const state = diveLinks(ctx.bridge).get(ctx.doc.id)?.state;
  if (!after) {
    if (state && isOver(state)) return;
    if (typeof meta.diver === "string" && meta.diver) {
      throw new Error(`dive ${name2} is held by ${meta.diver.split("#")[0]}: it is not over, so it is not dropped; land or bail it first`);
    }
    if (typeof meta.packer === "string" && meta.packer) {
      throw new Error(`dive ${name2} was packed by ${meta.packer}, unfinished: jump it and finish it, landing or bailing it, then drop it`);
    }
    if (state === "jumped" || state === "packed") throw new Error(`dive ${name2} is ${state}, unfinished: jump it and finish it, landing or bailing it, then drop it`);
    return;
  }
  if (after.fm.name !== before.fm.name) throw new Error(`dive ${name2} is named after its feat, so it takes no other name: its gist says what it is for`);
  const jumped = Boolean(meta.diver || meta.packer || state && state !== "planned");
  if (jumped && changed(before, after, "meta.feat")) {
    throw new Error(`dive ${name2} was jumped on its feat, so it keeps it: bail it, and mint a dive on the other feat`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i7c5c26ef056c5803a6607b86db00c4d0.ts
async function i7c5c26ef056c5803a6607b86db00c4d0(ctx) {
  const { before, after, doc, bridge: hero } = ctx;
  if (!after) return;
  const became = !before || !isDive({ ...doc, fm: before.fm });
  const moved = before !== void 0 && !became && changed(before, after, "meta.feat");
  if (!became && !moved) return;
  const hung = diveLinks(hero).get(doc.id);
  const named = after.fm.meta?.feat;
  const featId = typeof named === "string" ? named : hung?.by[0] && String(hung.by[0].fm.id);
  if (!featId) throw new Error("a dive hangs from its feat: name it with --meta:feat <feat>");
  const feat = ctx.edit.doc(featId);
  const key = keyOf(hero, doc);
  const wanted = readScopes(hero, feat);
  const patch = {};
  for (const { repoId } of readScopes(hero, { ...doc, fm: after.fm })) if (!wanted.some((entry) => entry.repoId === repoId)) patch[repoId] = null;
  for (const entry of wanted) patch[entry.repoId] = { "work-branch": entry.branch ?? null };
  if (Object.keys(patch).length > 0) ctx.crud(doc.id, "scopes", patch);
  for (const linker of hung?.by ?? []) {
    if (String(linker.fm.id) !== feat.id) for (const link of stateLinksOf(linker).filter((each) => each.id === doc.id)) ctx.crud(String(linker.fm.id), "links", { [link.key]: null });
  }
  ctx.crud(feat.id, "links", { [key]: { rel: `${hung?.state ?? "planned"}.dive` } });
  const name2 = `${doc.id.slice(-6)}.${String(feat.fm.name)}`;
  const old = !moved && after.fm.name === `${String(feat.fm.name)}.${doc.id.slice(-6)}`;
  if (after.fm.name !== name2 && !old) ctx.crud(doc.id, "name", name2);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1c72ba0f07508a3987c47eef04568.ts
async function i01a1c72ba0f07508a3987c47eef04568(call) {
  switch (call.usage) {
    case "u98e9ab6e1535570abad65bf95895aa3d":
      return i98e9ab6e1535570abad65bf95895aa3d(call.gate);
    case "u7c5c26ef056c5803a6607b86db00c4d0":
      return i7c5c26ef056c5803a6607b86db00c4d0(call.gate);
    default:
      throw new Error(`dive-shape has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/src/01a1b13e-111d-73de-8f7d-41b47af07703/src/i01a1cb89380779298b9fa95284af753a.ts
var QUID7 = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
function stateOf(dive) {
  const outcome = dive.fm.meta?.outcome;
  if (outcome === "landed" || outcome === "bailed") return outcome;
  const { diver, packer } = metaOf(dive);
  return diver ? "jumped" : packer ? "packed" : "planned";
}
function i01a1cb89380779298b9fa95284af753a(dir, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(dir);
  if (!hero || hero.dir !== dir || wearsWork(hero, ctx.capes[0])) return [];
  const docs2 = /* @__PURE__ */ new Map();
  for (const root of hero.roots) for (const doc of i01a13354850c7ba3ba5b8ac41a7b6b11(root.dir)) docs2.set(String(doc.fm.id), doc);
  const changed2 = /* @__PURE__ */ new Set();
  const dives = /* @__PURE__ */ new Set();
  for (const doc of docs2.values()) {
    let edited = false;
    const links = (Array.isArray(doc.fm.links) ? doc.fm.links : []).map(
      (entry) => Object.fromEntries(
        Object.entries(entry ?? {}).map(([key, value]) => {
          const attrs = value && typeof value === "object" ? value : {};
          const dive = attrs.rel === "dives.feat" ? docs2.get(QUID7.exec(key)?.[0] ?? "") : void 0;
          if (!dive || !isDive(dive)) return [key, value];
          dives.add(dive);
          edited = true;
          return [key, { ...attrs, rel: `${stateOf(dive)}.dive` }];
        })
      )
    );
    if (edited) {
      doc.yaml.set("links", links);
      changed2.add(doc);
    }
  }
  for (const dive of dives) {
    if (!dive.yaml.hasIn(["meta", "outcome"])) continue;
    dive.yaml.deleteIn(["meta", "outcome"]);
    const meta = dive.yaml.toJS().meta;
    if (meta && Object.keys(meta).length === 0) dive.yaml.delete("meta");
    changed2.add(dive);
  }
  for (const doc of changed2) i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, doc.body);
  if (changed2.size > 0) ctx.out(`legacy-dives-restored: ${dives.size} dive${dives.size === 1 ? "" : "s"} linked by state again, ${changed2.size} doc${changed2.size === 1 ? "" : "s"} rewritten`);
  return [...changed2].map((doc) => doc.path);
}

// ../nosedive-bundle-YRQ4CZ/hero/.nosedive/capes/74acf625-adbc-5262-b62f-a4f196a0f4c1.js.build/entry.ts
var id = "74acf625-adbc-5262-b62f-a4f196a0f4c1";
var owner = "01a1b128-2c08-790f-80f4-e2c40a98bfcc";
var shortName = "nosedive-legacy";
var name = "nosedive-legacy";
var commit = "b74024c8d55135b94838bda094744e7ad8047caf";
var version = "2026.11.11-1794420672932";
var core = "c53be1ee-76dd-5c3b-93e5-25df8b39b9c7";
var needs = {};
var docs = { "01a1b129-c081-79e5-abdc-c058f6a359a4": { "kind": "action", "name": "test", "gist": "Runs gates as a check on the dive on deck, or the gates named, streaming each and exiting 1 if any gate that is not flaky failed", "usages": [{ "id": "ffb5aa30b4e659e68b40ad7dee378a62", "text": "test [--full]" }, { "id": "79c0bcc90fa55bff9c8e62fed26dfa9a", "text": "test <gate>... [--via <doc>]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-c081-79e5-abdc-c058f6a359a4\nname: test\ngist: \"Runs gates as a check on the dive on deck, or the gates named, streaming each and exiting 1 if any gate that is not flaky failed\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - test [--full]\n    - test <gate>... [--via <doc>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Test\n\n## Usage\n\nLegacy nosedive's `test` (its command doc `1e62a79d`, test@2), on a hero migrated to core, without the backlog sweep and without writing anything.\n\n## Selecting gates\n\nA gate is any doc a link names with a rel ending in `.gate` whose `meta.test-script` is a hero-relative path; its kind does not matter.\n\n- `test`: the `test.gate` links of the dive this worktree holds, found as the loop finds it: an open dive of legacy's dive kind, as legacy nosedive wrote it, or of work's, whose `diver` carries this checkout's holder token (see held-dive). No dive held is refused, naming `jump` and the named form.\n- `test --full`: also every `test.gate` on the dive's feat, on each repo doc it scopes, and on every feat reached from the dive's feat through links whose rel names `.feat` as its role, in either direction. Nothing else is followed, so another dive's gates are never swept.\n- `test <gate>...`: the named gates, by quid or hero-relative path, in the order given. A gate is declared by the docs with a `.gate` link to it. One declaration is used; several are refused naming each, unless the held dive is among them, which then answers. `--via <doc>` narrows the declarers to that doc and the docs its links reach, before the held dive is considered; a gate with its own `scopes:` needs no declarer.\n\nSelecting no gates is a failure.\n\n## Running them\n\nEach gate runs in its own process, one after another, its output streamed as it comes. Its script exports `run(ctx)`; a `false` return or a throw fails it. A failing gate does not stop the run; the summary names every failure, and the exit is 1 if any gate failed whose declaring link is not `test-is-flaky: true`. A flaky failure is a warning.\n\n`ctx` is legacy's:\n\n- `bridgeRoot`: the hero's absolute path.\n- `gateId`, `introducedById`: the gate, and the doc whose link selected it.\n- `diveId`, `featId`: the held dive and its feat, empty when none.\n- `repos`: by repo `name`, `{ id, root }`, root hero-relative, for the gate's scopes: its own `scopes:` when it has the key (`[]` meaning none), else its declarer's.\n- `resolve(quid)`: the parsed doc, `{ fm, body }`; it throws when no doc has that quid.\n\nA scope's checkout is used as it is when present, saying when it is not at the scope's `ref`. A missing one is hydrated as hydrate-repo.workspace does, at the scope's `ref`, else trunk, naming the commit. The first gate to claim a repo decides its ref; a later one wanting another is named with both refs. An empty `repos` is named before its gate runs.\n\nA gate whose doc or script has uncommitted changes is named on stderr, and runs.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c08179e5abdcc058f6a359a4.ts](../src/i01a1b129c08179e5abdcc058f6a359a4.ts)\n- `test [--full]`: [impl](../src/iffb5aa30b4e659e68b40ad7dee378a62.ts), [tests](../src/iffb5aa30b4e659e68b40ad7dee378a62.test.ts)\n- `test <gate>... [--via <doc>]`: [impl](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.ts), [tests](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.test.ts)\n", "body": "# Test\n\n## Usage\n\nLegacy nosedive's `test` (its command doc `1e62a79d`, test@2), on a hero migrated to core, without the backlog sweep and without writing anything.\n\n## Selecting gates\n\nA gate is any doc a link names with a rel ending in `.gate` whose `meta.test-script` is a hero-relative path; its kind does not matter.\n\n- `test`: the `test.gate` links of the dive this worktree holds, found as the loop finds it: an open dive of legacy's dive kind, as legacy nosedive wrote it, or of work's, whose `diver` carries this checkout's holder token (see held-dive). No dive held is refused, naming `jump` and the named form.\n- `test --full`: also every `test.gate` on the dive's feat, on each repo doc it scopes, and on every feat reached from the dive's feat through links whose rel names `.feat` as its role, in either direction. Nothing else is followed, so another dive's gates are never swept.\n- `test <gate>...`: the named gates, by quid or hero-relative path, in the order given. A gate is declared by the docs with a `.gate` link to it. One declaration is used; several are refused naming each, unless the held dive is among them, which then answers. `--via <doc>` narrows the declarers to that doc and the docs its links reach, before the held dive is considered; a gate with its own `scopes:` needs no declarer.\n\nSelecting no gates is a failure.\n\n## Running them\n\nEach gate runs in its own process, one after another, its output streamed as it comes. Its script exports `run(ctx)`; a `false` return or a throw fails it. A failing gate does not stop the run; the summary names every failure, and the exit is 1 if any gate failed whose declaring link is not `test-is-flaky: true`. A flaky failure is a warning.\n\n`ctx` is legacy's:\n\n- `bridgeRoot`: the hero's absolute path.\n- `gateId`, `introducedById`: the gate, and the doc whose link selected it.\n- `diveId`, `featId`: the held dive and its feat, empty when none.\n- `repos`: by repo `name`, `{ id, root }`, root hero-relative, for the gate's scopes: its own `scopes:` when it has the key (`[]` meaning none), else its declarer's.\n- `resolve(quid)`: the parsed doc, `{ fm, body }`; it throws when no doc has that quid.\n\nA scope's checkout is used as it is when present, saying when it is not at the scope's `ref`. A missing one is hydrated as hydrate-repo.workspace does, at the scope's `ref`, else trunk, naming the commit. The first gate to claim a repo decides its ref; a later one wanting another is named with both refs. An empty `repos` is named before its gate runs.\n\nA gate whose doc or script has uncommitted changes is named on stderr, and runs.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c08179e5abdcc058f6a359a4.ts](../src/i01a1b129c08179e5abdcc058f6a359a4.ts)\n- `test [--full]`: [impl](../src/iffb5aa30b4e659e68b40ad7dee378a62.ts), [tests](../src/iffb5aa30b4e659e68b40ad7dee378a62.test.ts)\n- `test <gate>... [--via <doc>]`: [impl](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.ts), [tests](../src/i79c0bcc90fa55bff9c8e62fed26dfa9a.test.ts)" }, "01a1b129-c3b8-7671-9f55-21826bd5a66b": { "kind": "action", "name": "hydrate-repo.workspace", "gist": "Checks one registered repo out into the workspace, detached at trunk or at a ref", "usages": [{ "id": "552b992cd74d50a489e0b2c84fcc203b", "text": "hydrate-repo.workspace <repo> [--at <ref>] [--read-only]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-c3b8-7671-9f55-21826bd5a66b\nname: hydrate-repo.workspace\ngist: \"Checks one registered repo out into the workspace, detached at trunk or at a ref\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - hydrate-repo.workspace <repo> [--at <ref>] [--read-only]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Hydrate repo.workspace\n\n## Usage\n\nLegacy's `hydrate-repo.workspace` on core's hydrate-repo. `<repo>` is a registered repo doc's quid or exact name; a name two docs share is refused naming both.\n\nWithout `--at`, the checkout is core's: detached at trunk, read-only. With `--at <ref>`, core hydrates it at trunk, then it is detached at the ref, fetched from origin when the cache lacks it. An existing checkout is left where it is, saying when it is not at the ref asked for.\n\n`--read-only` is accepted for legacy's callers and changes nothing: a checkout without a feat never has a branch to push.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c3b876719f5521826bd5a66b.ts](../src/i01a1b129c3b876719f5521826bd5a66b.ts)\n- `hydrate-repo.workspace <repo> [--at <ref>] [--read-only]`: [impl](../src/i552b992cd74d50a489e0b2c84fcc203b.ts), [tests](../src/i552b992cd74d50a489e0b2c84fcc203b.test.ts)\n", "body": "# Hydrate repo.workspace\n\n## Usage\n\nLegacy's `hydrate-repo.workspace` on core's hydrate-repo. `<repo>` is a registered repo doc's quid or exact name; a name two docs share is refused naming both.\n\nWithout `--at`, the checkout is core's: detached at trunk, read-only. With `--at <ref>`, core hydrates it at trunk, then it is detached at the ref, fetched from origin when the cache lacks it. An existing checkout is left where it is, saying when it is not at the ref asked for.\n\n`--read-only` is accepted for legacy's callers and changes nothing: a checkout without a feat never has a branch to push.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c3b876719f5521826bd5a66b.ts](../src/i01a1b129c3b876719f5521826bd5a66b.ts)\n- `hydrate-repo.workspace <repo> [--at <ref>] [--read-only]`: [impl](../src/i552b992cd74d50a489e0b2c84fcc203b.ts), [tests](../src/i552b992cd74d50a489e0b2c84fcc203b.test.ts)" }, "01a1b129-c702-79ed-9ccc-ed39e882d827": { "kind": "action", "name": "dehydrate-repo.workspace", "gist": "Removes one repo's checkout from the workspace once origin has its work, or regardless with --force", "usages": [{ "id": "df324b14b9135de2893fffa8705388da", "text": "dehydrate-repo.workspace <repo> [--force]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-c702-79ed-9ccc-ed39e882d827\nname: dehydrate-repo.workspace\ngist: \"Removes one repo's checkout from the workspace once origin has its work, or regardless with --force\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - dehydrate-repo.workspace <repo> [--force]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a17fba-20d6-73c5-b8dd-8551943369a2:\n      rel: uses.function\n---\n\n# Dehydrate repo.workspace\n\n## Usage\n\nLegacy's `dehydrate-repo.workspace` on core's dehydrate-repo. `<repo>` is a registered repo doc's quid or exact name, as for hydrate-repo.workspace.\n\nCore refuses to remove a checkout holding anything origin lacks. `--force` is legacy's: the worktree is removed regardless, and what it held that origin lacks goes with it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c70279ed9ccced39e882d827.ts](../src/i01a1b129c70279ed9ccced39e882d827.ts)\n- `dehydrate-repo.workspace <repo> [--force]`: [impl](../src/idf324b14b9135de2893fffa8705388da.ts), [tests](../src/idf324b14b9135de2893fffa8705388da.test.ts)\n", "body": "# Dehydrate repo.workspace\n\n## Usage\n\nLegacy's `dehydrate-repo.workspace` on core's dehydrate-repo. `<repo>` is a registered repo doc's quid or exact name, as for hydrate-repo.workspace.\n\nCore refuses to remove a checkout holding anything origin lacks. `--force` is legacy's: the worktree is removed regardless, and what it held that origin lacks goes with it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129c70279ed9ccced39e882d827.ts](../src/i01a1b129c70279ed9ccced39e882d827.ts)\n- `dehydrate-repo.workspace <repo> [--force]`: [impl](../src/idf324b14b9135de2893fffa8705388da.ts), [tests](../src/idf324b14b9135de2893fffa8705388da.test.ts)" }, "01a1b129-ca53-7ef6-9736-26eeeaebc87c": { "kind": "action", "name": "record.gate", "gist": "Mints a gate: its doc, its stub script, and the link declaring it on a feat, ready to fail until somebody writes the check", "usages": [{ "id": "0190147b40b25ca2b1d03135a75a3502", "text": "record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]" }], "top": true, "text": "---\nkind: action\nid: 01a1b129-ca53-7ef6-9736-26eeeaebc87c\nname: record.gate\ngist: \"Mints a gate: its doc, its stub script, and the link declaring it on a feat, ready to fail until somebody writes the check\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n  - nosedive-core:01a1901e-263b-7209-a4b5-f39a71c568b3:\n      rel: uses.function\n  - nosedive-core:01a13354-80c7-76ba-8945-020d0af333eb:\n      rel: uses.function\n  - nosedive-core:01a141f8-69c0-7c4d-a828-8927a559c8ae:\n      rel: uses.function\n---\n\n# Record.gate\n\n## Usage\n\nLegacy's `record.gate` (its command doc `2c678acb`), minting only. Writes, in one commit to the hero:\n\n- a doc of the hero's `gate` kind with `meta.test-script: kb/artifacts/<gate id>.mjs`, its name `--name` or else made from the gist;\n- that script, a stub whose `run` writes the gate's id to stderr and returns `false`, so an unwritten gate is red;\n- a link to the gate on `<feat>`, rel `test.gate`, or `land.gate` with `--action land`, carrying `test-is-flaky: true` with `--flaky`.\n\n`<feat>` is a quid or hero-relative path to a doc core knows as a feat. A hero with no `gate` kind is refused. It prints the gate doc's path and the command that runs it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129ca537ef6973626eeeaebc87c.ts](../src/i01a1b129ca537ef6973626eeeaebc87c.ts)\n- `record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]`: [impl](../src/i0190147b40b25ca2b1d03135a75a3502.ts), [tests](../src/i0190147b40b25ca2b1d03135a75a3502.test.ts)\n", "body": "# Record.gate\n\n## Usage\n\nLegacy's `record.gate` (its command doc `2c678acb`), minting only. Writes, in one commit to the hero:\n\n- a doc of the hero's `gate` kind with `meta.test-script: kb/artifacts/<gate id>.mjs`, its name `--name` or else made from the gist;\n- that script, a stub whose `run` writes the gate's id to stderr and returns `false`, so an unwritten gate is red;\n- a link to the gate on `<feat>`, rel `test.gate`, or `land.gate` with `--action land`, carrying `test-is-flaky: true` with `--flaky`.\n\n`<feat>` is a quid or hero-relative path to a doc core knows as a feat. A hero with no `gate` kind is refused. It prints the gate doc's path and the command that runs it.\n\n## Code\n\n- Entrypoint: [src/i01a1b129ca537ef6973626eeeaebc87c.ts](../src/i01a1b129ca537ef6973626eeeaebc87c.ts)\n- `record.gate --gist <gist> --feat <feat> [--name <name>] [--action <action>] [--flaky]`: [impl](../src/i0190147b40b25ca2b1d03135a75a3502.ts), [tests](../src/i0190147b40b25ca2b1d03135a75a3502.test.ts)" }, "01a1b130-78b1-7322-9a3b-1e21f7e12c20": { "kind": "action", "name": "note", "gist": "Mints one kb doc and links it from the repo it is about", "usages": [{ "id": "58b390d976c95aa4bc065fbc8605e404", "text": "note <gist>... [--scope <repo>] [--title <title>] [--body <source>]" }], "top": true, "text": "---\nkind: action\nid: 01a1b130-78b1-7322-9a3b-1e21f7e12c20\nname: note\ngist: \"Mints one kb doc and links it from the repo it is about\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - note <gist>... [--scope <repo>] [--title <title>] [--body <source>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n  - nosedive-core:01a13354-80c7-76ba-8945-020d0af333eb:\n      rel: uses.function\n  - nosedive-core:01a141f8-69c0-7c4d-a828-8927a559c8ae:\n      rel: uses.function\n  - nosedive-core:01a14717-2380-7d6e-8ef2-28ad9472fff7:\n      rel: uses.function\n---\n\n# Note\n\n## Usage\n\nLegacy's `note` (its command doc `6274f51e`). The gist is the words given, joined by spaces. A first word ending in `:` names the note's kind, else it is a `memo`; the kind must be one the hero has.\n\nThe note is `kb/<quid>.md`, named by the gist slugged plus the id's last six hex digits, titled by the slug half, or by `--title`. `--body -` reads stdin, and `--body <file>` a file, as the text under the title.\n\n`--scope <repo>` names the registered repo it is about, by quid or exact name; without it, the repo the config's `bridge:` key names, said on stdout. That repo doc links the note, rel `<kind>.note`. Legacy took `--scope` more than once; one is taken here.\n\nThe note and the repo doc it links from are one commit.\n\n## Code\n\n- Entrypoint: [src/i01a1b13078b173229a3b1e21f7e12c20.ts](../src/i01a1b13078b173229a3b1e21f7e12c20.ts)\n- `note <gist>... [--scope <repo>] [--title <title>] [--body <source>]`: [impl](../src/i58b390d976c95aa4bc065fbc8605e404.ts), [tests](../src/i58b390d976c95aa4bc065fbc8605e404.test.ts)\n", "body": "# Note\n\n## Usage\n\nLegacy's `note` (its command doc `6274f51e`). The gist is the words given, joined by spaces. A first word ending in `:` names the note's kind, else it is a `memo`; the kind must be one the hero has.\n\nThe note is `kb/<quid>.md`, named by the gist slugged plus the id's last six hex digits, titled by the slug half, or by `--title`. `--body -` reads stdin, and `--body <file>` a file, as the text under the title.\n\n`--scope <repo>` names the registered repo it is about, by quid or exact name; without it, the repo the config's `bridge:` key names, said on stdout. That repo doc links the note, rel `<kind>.note`. Legacy took `--scope` more than once; one is taken here.\n\nThe note and the repo doc it links from are one commit.\n\n## Code\n\n- Entrypoint: [src/i01a1b13078b173229a3b1e21f7e12c20.ts](../src/i01a1b13078b173229a3b1e21f7e12c20.ts)\n- `note <gist>... [--scope <repo>] [--title <title>] [--body <source>]`: [impl](../src/i58b390d976c95aa4bc065fbc8605e404.ts), [tests](../src/i58b390d976c95aa4bc065fbc8605e404.test.ts)" }, "01a1b131-e017-7e7f-8518-b309634ebbd8": { "kind": "function", "name": "find-repo", "gist": "A repo the hero registers, by quid or exact name, and its checkout at a ref", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1b131-e017-7e7f-8518-b309634ebbd8\nname: find-repo\ngist: \"A repo the hero registers, by quid or exact name, and its checkout at a ref\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a15baf-13e2-7bd8-8dc8-80d4871f2210:\n      rel: uses.function\n---\n\n# Find repo\n\nThe repo doc in `.nosedive/repos` whose id is the quid given, or whose name is the name given; a name two docs share is refused, naming both quids.\n\n`checkoutAt` gives a repo's checkout at a ref: a missing one is made by core's hydrate-repo, read-only at trunk, then detached at the ref, fetched from origin when the cache lacks it. An existing one is left where it is, saying when it is not at the ref.\n\n## Code\n\n- Function: [src/i01a1b131e0177e7f8518b309634ebbd8.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.ts)\n- Tests: [src/i01a1b131e0177e7f8518b309634ebbd8.test.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.test.ts)\n", "body": "# Find repo\n\nThe repo doc in `.nosedive/repos` whose id is the quid given, or whose name is the name given; a name two docs share is refused, naming both quids.\n\n`checkoutAt` gives a repo's checkout at a ref: a missing one is made by core's hydrate-repo, read-only at trunk, then detached at the ref, fetched from origin when the cache lacks it. An existing one is left where it is, saying when it is not at the ref.\n\n## Code\n\n- Function: [src/i01a1b131e0177e7f8518b309634ebbd8.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.ts)\n- Tests: [src/i01a1b131e0177e7f8518b309634ebbd8.test.ts](../src/i01a1b131e0177e7f8518b309634ebbd8.test.ts)" }, "01a1b131-e194-7fa5-b316-b390a3be2415": { "kind": "function", "name": "held-dive", "gist": "The dive this checkout holds, as the loop's dive branches name it, legacy's or work's: its doc, its feat id and its scopes, or nothing", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1b131-e194-7fa5-b316-b390a3be2415\nname: held-dive\ngist: \"The dive this checkout holds, as the loop's dive branches name it, legacy's or work's: its doc, its feat id and its scopes, or nothing\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a138b2-b8ee-703c-ab22-7b010f588b6a:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Held dive\n\nThe dive the hero's branch names as a dive branch, `nosedive-<holder token>-<dive id>`: a doc of legacy's dive kind in the hero, as legacy nosedive wrote it, or of work's, which names its dive branches alike, its feat and its scope entries keyed by registered repos, each with its `ref`. A hero on any other branch holds none. A dive that is over, or whose `diver` carries another token, is refused, as the loop refuses it.\n\nEither shape is read as it is. A legacy dive hangs from a doc by a state link, over once it says landed or bailed, even for the memo legacy nosedive left; its feat is `meta.feat`, else `meta.effort`, else the doc that links it. A work dive has no state link, hangs by `dives.feat`, names its feat in `meta.feat` and is over by `meta.outcome`: a dive with a state link takes its end from that link, any other from its outcome.\n\nIt takes work's dives too so `test` runs a dive's gates in a hero wearing both capes, whichever loop jumped it (see dive, Wearing work too). It repeats the loop's rule rather than calling legacy's dive-on-deck, which refuses where test only finds nothing; it changes when the dive branches do.\n\n## Code\n\n- Function: [src/i01a1b131e1947fa5b316b390a3be2415.ts](../src/i01a1b131e1947fa5b316b390a3be2415.ts)\n- Tests: [src/i01a1b131e1947fa5b316b390a3be2415.test.ts](../src/i01a1b131e1947fa5b316b390a3be2415.test.ts)\n", "body": "# Held dive\n\nThe dive the hero's branch names as a dive branch, `nosedive-<holder token>-<dive id>`: a doc of legacy's dive kind in the hero, as legacy nosedive wrote it, or of work's, which names its dive branches alike, its feat and its scope entries keyed by registered repos, each with its `ref`. A hero on any other branch holds none. A dive that is over, or whose `diver` carries another token, is refused, as the loop refuses it.\n\nEither shape is read as it is. A legacy dive hangs from a doc by a state link, over once it says landed or bailed, even for the memo legacy nosedive left; its feat is `meta.feat`, else `meta.effort`, else the doc that links it. A work dive has no state link, hangs by `dives.feat`, names its feat in `meta.feat` and is over by `meta.outcome`: a dive with a state link takes its end from that link, any other from its outcome.\n\nIt takes work's dives too so `test` runs a dive's gates in a hero wearing both capes, whichever loop jumped it (see dive, Wearing work too). It repeats the loop's rule rather than calling legacy's dive-on-deck, which refuses where test only finds nothing; it changes when the dive branches do.\n\n## Code\n\n- Function: [src/i01a1b131e1947fa5b316b390a3be2415.ts](../src/i01a1b131e1947fa5b316b390a3be2415.ts)\n- Tests: [src/i01a1b131e1947fa5b316b390a3be2415.test.ts](../src/i01a1b131e1947fa5b316b390a3be2415.test.ts)" }, "01a1b131-e31f-7b32-9bc1-c4389343491a": { "kind": "function", "name": "run-gates", "gist": "Runs gates one by one with legacy's ctx, checking their scopes out, streaming each, and fails when one that is not flaky failed", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1b131-e31f-7b32-9bc1-c4389343491a\nname: run-gates\ngist: \"Runs gates one by one with legacy's ctx, checking their scopes out, streaming each, and fails when one that is not flaky failed\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a138b2-b8ee-703c-ab22-7b010f588b6a:\n      rel: uses.function\n---\n\n# Run gates\n\nRuns gates in order with legacy's ctx, as [test](01a1b129-c081-79e5-abdc-c058f6a359a4.md) describes: each in its own node process, its output inherited so it streams, `resolve` answered over IPC, and drained after `run` as legacy's runner was, exiting after 30 seconds of silence (`NOSEDIVE_GATE_IDLE_MS`). A missing script fails its gate. After the summary it throws when a gate failed whose link is not flaky, which is how test exits 1.\n\n## Code\n\n- Function: [src/i01a1b131e31f7b329bc1c4389343491a.ts](../src/i01a1b131e31f7b329bc1c4389343491a.ts)\n- Tests: [src/i01a1b131e31f7b329bc1c4389343491a.test.ts](../src/i01a1b131e31f7b329bc1c4389343491a.test.ts)\n", "body": "# Run gates\n\nRuns gates in order with legacy's ctx, as [test](01a1b129-c081-79e5-abdc-c058f6a359a4.md) describes: each in its own node process, its output inherited so it streams, `resolve` answered over IPC, and drained after `run` as legacy's runner was, exiting after 30 seconds of silence (`NOSEDIVE_GATE_IDLE_MS`). A missing script fails its gate. After the summary it throws when a gate failed whose link is not flaky, which is how test exits 1.\n\n## Code\n\n- Function: [src/i01a1b131e31f7b329bc1c4389343491a.ts](../src/i01a1b131e31f7b329bc1c4389343491a.ts)\n- Tests: [src/i01a1b131e31f7b329bc1c4389343491a.test.ts](../src/i01a1b131e31f7b329bc1c4389343491a.test.ts)" }, "01a1b137-70be-7a7a-95b5-e4ae9eed1407": { "kind": "function", "name": "link-new-doc", "gist": "Links a newly written doc from an existing one, committing both and any files beside them as one commit", "usages": [], "top": true, "text": `---
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
`, "body": "# Link new doc\n\nAdds a link to a new doc from an existing one, through core's edit, then commits the link, the new doc and any files beside it as one commit, its subject made by core's commit-subject.\n\n## Code\n\n- Function: [src/i01a1b13770be7a7a95b5e4ae9eed1407.ts](../src/i01a1b13770be7a7a95b5e4ae9eed1407.ts)\n- Tests: [src/i01a1b13770be7a7a95b5e4ae9eed1407.test.ts](../src/i01a1b13770be7a7a95b5e4ae9eed1407.test.ts)" }, "01a1b31b-dffb-7398-9a9e-8bcd257167b5": { "kind": "function", "name": "legacy-dives", "gist": "Retired: changes nothing in a hero that wears legacy and not work, whose dives legacy's loop reads as legacy nosedive wrote them; in one wearing work, brings its dives into work's shape: state.dive links become dives.feat with an outcome, memo-dives become dives again, legacy meta moves to feat or body", "usages": [], "top": true, "text": "---\nkind: migration\nid: 01a1b31b-dffb-7398-9a9e-8bcd257167b5\nname: legacy-dives\ngist: \"Retired: changes nothing in a hero that wears legacy and not work, whose dives legacy's loop reads as legacy nosedive wrote them; in one wearing work, brings its dives into work's shape: state.dive links become dives.feat with an outcome, memo-dives become dives again, legacy meta moves to feat or body\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 39c33321d487\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n  - nosedive-core:01a141f8-69bf-7f76-b5bc-81aa991ff9b9:\n      rel: uses.function\n---\n\n# Legacy dives\n\nRetired (legacy-keeps-dive-shape). Legacy's jump, pack, land and bail read dives as legacy nosedive left them, state links and meta alike (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape), so seeding a hero that wears legacy and not work rewrites no dive: this migration stays declared, so a hero config that lists it still reads, and returns no changes, saying nothing. A hero this migration converted before it was retired gets its state links back from [legacy-dives-restored](01a1cb89-3807-7929-8b9f-a95284af753a.md).\n\nIt still converts a hero wearing work, whose loop reads work's shape, not legacy nosedive's (mi feat legacy-dives), reading every doc in the hero's roots: that is the one move from legacy to work. A hero wears work when a cape its base wears is registered by work's repo doc, `01a15ba8-0bff-7ce3-83dc-e08af3633e26` as core's legacy-capes writes it, or was built from work. \"The dive kind\" below is work's.\n\n- **State links**: a `landed.dive`, `bailed.dive`, `planned.dive`, `jumped.dive` or `packed.dive` link, from whatever doc holds it (a feat, an effort, a bug), becomes `dives.feat`, its other attributes kept (legacy-dive-states). Other `.dive` rels, such as `context.dive`, are left as they are (legacy-other-dive-rels).\n- **Outcome**: a dive any of those links calls `landed` gets `meta.outcome: landed`; else one called `bailed` gets `bailed`; planned, jumped and packed ones get none.\n- **Memo-dives**: a target whose kind is not the dive kind, as legacy land left landed and bailed dives, becomes one: `kind: dive`, its canonical scope the kind's owner's, copied from a dive of that kind in the hero (legacy-memo-dives).\n- **Feat**: a dive with no `meta.feat` takes the id its `meta.effort` names, by id or by name, else the doc that links it.\n- **Meta**: `meta.effort` goes; any other key the dive schema does not have (`diver`, `packer`, `outcome`, `feat`) moves into a `## Legacy meta` section of the dive's body, one `- <key>: <value>` line each (legacy-dive-meta). `diver` and `packer` are kept as they are (legacy-open-dive-diver); jump takes over a bare-email diver for that email (legacy-bare-diver).\n\nIt says how many links and dives it changed. Run again, it finds nothing left to change, so removing it from config is safe, and so is leaving it in a hero that wears legacy alone.\n\n## Code\n\n- Function: [src/i01a1b31bdffb73989a9e8bcd257167b5.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.ts)\n- Tests: [src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts)\n", "body": "# Legacy dives\n\nRetired (legacy-keeps-dive-shape). Legacy's jump, pack, land and bail read dives as legacy nosedive left them, state links and meta alike (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape), so seeding a hero that wears legacy and not work rewrites no dive: this migration stays declared, so a hero config that lists it still reads, and returns no changes, saying nothing. A hero this migration converted before it was retired gets its state links back from [legacy-dives-restored](01a1cb89-3807-7929-8b9f-a95284af753a.md).\n\nIt still converts a hero wearing work, whose loop reads work's shape, not legacy nosedive's (mi feat legacy-dives), reading every doc in the hero's roots: that is the one move from legacy to work. A hero wears work when a cape its base wears is registered by work's repo doc, `01a15ba8-0bff-7ce3-83dc-e08af3633e26` as core's legacy-capes writes it, or was built from work. \"The dive kind\" below is work's.\n\n- **State links**: a `landed.dive`, `bailed.dive`, `planned.dive`, `jumped.dive` or `packed.dive` link, from whatever doc holds it (a feat, an effort, a bug), becomes `dives.feat`, its other attributes kept (legacy-dive-states). Other `.dive` rels, such as `context.dive`, are left as they are (legacy-other-dive-rels).\n- **Outcome**: a dive any of those links calls `landed` gets `meta.outcome: landed`; else one called `bailed` gets `bailed`; planned, jumped and packed ones get none.\n- **Memo-dives**: a target whose kind is not the dive kind, as legacy land left landed and bailed dives, becomes one: `kind: dive`, its canonical scope the kind's owner's, copied from a dive of that kind in the hero (legacy-memo-dives).\n- **Feat**: a dive with no `meta.feat` takes the id its `meta.effort` names, by id or by name, else the doc that links it.\n- **Meta**: `meta.effort` goes; any other key the dive schema does not have (`diver`, `packer`, `outcome`, `feat`) moves into a `## Legacy meta` section of the dive's body, one `- <key>: <value>` line each (legacy-dive-meta). `diver` and `packer` are kept as they are (legacy-open-dive-diver); jump takes over a bare-email diver for that email (legacy-bare-diver).\n\nIt says how many links and dives it changed. Run again, it finds nothing left to change, so removing it from config is safe, and so is leaving it in a hero that wears legacy alone.\n\n## Code\n\n- Function: [src/i01a1b31bdffb73989a9e8bcd257167b5.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.ts)\n- Tests: [src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts](../src/i01a1b31bdffb73989a9e8bcd257167b5.test.ts)" }, "01a1b31b-e41b-7a31-a591-8d04ef4091be": { "kind": "function", "name": "legacy-patches", "gist": "Pushes the work a legacy hero packed as patch memos to each open or bailed dive's refs on its repos' origins, where jump finds it", "usages": [], "top": true, "text": "---\nkind: migration\nid: 01a1b31b-e41b-7a31-a591-8d04ef4091be\nname: legacy-patches\ngist: \"Pushes the work a legacy hero packed as patch memos to each open or bailed dive's refs on its repos' origins, where jump finds it\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 39c33321d487\nmeta:\n  after: 01a1b31b-dffb-7398-9a9e-8bcd257167b5\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n---\n\n# Legacy patches\n\nTurns the work a legacy hero packed as patch memos into dive refs, where jump, legacy's or work's, finds a dive's work (mi decisions legacy-patches-push, legacy-patches-which). It runs after [legacy-dives](01a1b31b-dffb-7398-9a9e-8bcd257167b5.md), on each dive that is open or bailed: a doc a hero doc links `planned.dive`, `jumped.dive`, `packed.dive` or `bailed.dive`, as legacy nosedive left it, whatever its kind, a bailed one being a memo; in a hero wearing work, where legacy-dives has made work's dives, a dive of work's or legacy's kind with no state link and no landed outcome. It rewrites no doc, so it stays for a hero that wears legacy alone:\n\n- **Each writable scope**, one with a `work-branch` and a `ref`, the commit legacy pinned it to: the patch chain the dive links for that repo (`rel: patch` to its head, `rel: next` onward, `meta.patch` naming a `git format-patch` file) is applied onto the pin with `git am`, in a scratch worktree of the user's cache of the repo; a `dirty.<repo>` patch, uncommitted work, is committed last as `pack(<dive name>): work in progress`, which jump puts back in the working tree. The result, the pin itself when there are no patches, is pushed to `refs/nosedive/<hero id>/dives/<dive id>` on the repo's origin, so jump resumes the dive where legacy would have.\n- **The hero's own**: a `bridge-wip` patch, the hero's uncommitted kb changes, is applied onto the hero's trunk as one `pack(<dive name>): work in progress` commit, pushed to the hero's own dive ref on its origin, which jump replays onto the dive's branch.\n\nA dive ref that exists already is left as it is, the work pushed there since being newer, so removing this migration from config and seeding again is safe. A patch that no longer applies, a pin origin does not have, or a patch memo that is gone is named and passed over, as retrying would not change it. A push or a fetch that fails makes the migration wait, saying what failed: nothing is recorded, and the next seed tries again, the refs it pushed already being found and left. It says what it pushed.\n\n## Code\n\n- Function: [src/i01a1b31be41b7a31a5918d04ef4091be.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.ts)\n- Tests: [src/i01a1b31be41b7a31a5918d04ef4091be.test.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.test.ts)\n", "body": "# Legacy patches\n\nTurns the work a legacy hero packed as patch memos into dive refs, where jump, legacy's or work's, finds a dive's work (mi decisions legacy-patches-push, legacy-patches-which). It runs after [legacy-dives](01a1b31b-dffb-7398-9a9e-8bcd257167b5.md), on each dive that is open or bailed: a doc a hero doc links `planned.dive`, `jumped.dive`, `packed.dive` or `bailed.dive`, as legacy nosedive left it, whatever its kind, a bailed one being a memo; in a hero wearing work, where legacy-dives has made work's dives, a dive of work's or legacy's kind with no state link and no landed outcome. It rewrites no doc, so it stays for a hero that wears legacy alone:\n\n- **Each writable scope**, one with a `work-branch` and a `ref`, the commit legacy pinned it to: the patch chain the dive links for that repo (`rel: patch` to its head, `rel: next` onward, `meta.patch` naming a `git format-patch` file) is applied onto the pin with `git am`, in a scratch worktree of the user's cache of the repo; a `dirty.<repo>` patch, uncommitted work, is committed last as `pack(<dive name>): work in progress`, which jump puts back in the working tree. The result, the pin itself when there are no patches, is pushed to `refs/nosedive/<hero id>/dives/<dive id>` on the repo's origin, so jump resumes the dive where legacy would have.\n- **The hero's own**: a `bridge-wip` patch, the hero's uncommitted kb changes, is applied onto the hero's trunk as one `pack(<dive name>): work in progress` commit, pushed to the hero's own dive ref on its origin, which jump replays onto the dive's branch.\n\nA dive ref that exists already is left as it is, the work pushed there since being newer, so removing this migration from config and seeding again is safe. A patch that no longer applies, a pin origin does not have, or a patch memo that is gone is named and passed over, as retrying would not change it. A push or a fetch that fails makes the migration wait, saying what failed: nothing is recorded, and the next seed tries again, the refs it pushed already being found and left. It says what it pushed.\n\n## Code\n\n- Function: [src/i01a1b31be41b7a31a5918d04ef4091be.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.ts)\n- Tests: [src/i01a1b31be41b7a31a5918d04ef4091be.test.ts](../src/i01a1b31be41b7a31a5918d04ef4091be.test.ts)" }, "01a1c72b-a06b-7cfd-9e5f-710dc60e4a37": { "kind": "action", "name": "jump", "gist": "Picks a dive up, or starts one on a feat: checks its repos out for it, on its local branch or read-only at trunk", "usages": [{ "id": "0e2024913efd5dc8afe194f5650bda20", "text": "jump [<ref>]" }, { "id": "a65e6ec583fa51079af219fd79e4ad87", "text": "jump [<ref>] --sure" }], "top": true, "text": "---\nkind: action\nid: 01a1c72b-a06b-7cfd-9e5f-710dc60e4a37\nname: jump\ngist: \"Picks a dive up, or starts one on a feat: checks its repos out for it, on its local branch or read-only at trunk\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - jump [<ref>]\n    - jump [<ref>] --sure\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-845c-7253-a55b-60bba87285d8:\n      rel: uses.function\n  - nosedive-core:01a141f8-69c0-7c4d-a828-8927a559c8ae:\n      rel: uses.function\n  - nosedive-core:01a13354-80c7-76ba-8945-020d0af333eb:\n      rel: uses.function\n  - nosedive-core:01a15baf-13e2-7bd8-8dc8-80d4871f2210:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n---\n\n# Jump\n\n## Usage\n\nWork's jump as its main had it at 260eb82, on legacy's own dive kind and the dives legacy nosedive wrote: a dive hangs from its feat by a state link, `planned.dive`, `jumped.dive`, `packed.dive`, `landed.dive` or `bailed.dive`, whose rel jump moves, and its meta is read as it is (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent jumps when the pilot says to: \"jump\", \"jump on <thing>\", \"work on <thing>\" and the like, never on its own initiative.\n\n`<ref>` is a feat's or a dive's quid. A feat is any doc one of the hero's roots reaches through links whose rel ends `.feat`, a root of kind cape aside, since its feats are actions, a memo unless it has a kind of its own; a doc nothing reaches that way is refused, naming how to link it in. Its `scopes` name the repos it works in, legacy's shape: an entry keyed by a repo doc's quid, with `work-branch` naming the branch its work goes to, and an entry with none, or a bare quid, read-only. A dive's read-only scope is written as an entry with none (`<repo>: {}`), which core reads a bare quid as.\n\nUncommitted changes: off a dive branch, an unclean hero tree is refused (jump-needs-clean-tree); on any path, a scope checkout jump would move that has uncommitted changes or untracked files is refused, each named, before anything moves. A checkout already where the dive wants it, as on a dive branch, is left as it is, changes and all. A checkout jump moves has its ignored files swapped for the feat's pack, and pack's work-in-progress commit on this dive is undone, so packed work comes back uncommitted.\n\nJump ends by telling the agent that jumped to do the dive's work now, from its brief to its feat's Done when, and to pack or land it only when the pilot asks.\n\nWhile the dive is on deck:\n\n- Commit freely in a writable scope's checkout, in small commits, and heed what its hooks say. Never push one: land publishes to the feat's work branch, and pack and bail to the dive's refs. Nothing blocks a push, as legacy's sentinel did, so the restraint is the agent's.\n- Commit nothing in a read-only scope: pack and land refuse what it holds, which has nowhere to go.\n- Hero docs the dive changes are committed on the hero's dive branch; land takes them to its home.\n- Record progress with `pass --turn <dive> <summary>`. Leave the brief as it is: it records what the dive was started for.\n\n## Where it is jumped from\n\nA dive is jumped from a branch of the hero, its home, and everything hero-side for it goes there (records-on-jumped-branch): the jump, pack, land and bail records, and the hero's commits when it lands, each pushed to the home's upstream. Branches of the hero do not know of each other's dives until they are merged; trunk is one such branch. Jump puts the hero on the dive's branch, `nosedive-<token>-<dive id>`, the token being the home's holder token, its 12 hex digits (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), cut from the home's tip after the jump record, and every writable scope's checkout on a branch of the same name (dive-branches). Pack, land and bail switch the hero back to its home, found as the local branch whose holder token the dive branch names (loop-returns-home).\n\n## On a dive branch\n\nOn a dive branch, jump takes only that branch's dive, with or without `<ref>`, and records nothing: each scope whose checkout is missing or elsewhere is put where the dive wants it, and a checkout already there is left as it is, so no commit on any of them is lost; another `<ref>` is refused: pack, land or bail it first (one-dive-branch-per-checkout).\n\nA dive that is over, landed or bailed, is refused on every path, before anything changes: named by its quid, as the dive on a dive branch the hero is on, and as the dive of a dive branch this checkout has left over. The refusal names how it ended and, where its branch is still here, says to leave it: switch to its home, the branch it was jumped from, and delete the branch. Pack, land and bail refuse an over dive, so one taken up again could never be put down.\n\n## Off a dive branch\n\nThe branch the hero is on is the home. Refused, naming why, before anything moves:\n\n- while the hero's working tree is not clean (jump-needs-clean-tree);\n- when the home has no upstream, so the dive's records would be stranded in a local branch: push it first, as `git push -u origin <branch>`;\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind: push them first;\n- while this checkout has a dive branch, any `<ref>` but its dive: pack, land or bail it first; its own dive's `<ref>` switches the hero onto it and goes on as on a dive branch (one-dive-branch-per-checkout).\n\nA `<ref>` is a doc's quid, its name, or a path ending `<quid>.md`, as `next` prints beside it (listed-paths-accepted).\n\nWithout `<ref>`, jump takes the one open dive this checkout holds without a branch, else the one nobody holds that the pilot packed or nobody has touched, a dive being open while its link is `planned.dive`, `jumped.dive` or `packed.dive`. `next` lists a dive too, under the doc that links it, but a bare jump still refuses, with none or several, naming each: several, the dives that wait; none, every open dive of the hero, with its state and who holds or packed it.\n\n- **A dive**: refused when it is over, its link landed or bailed; when another checkout holds it, naming the branch of this checkout it is held from when it is one, else `pack it there` (held-by-checkout); a diver legacy wrote, a bare email with no token, holds it in no checkout in particular, so a checkout whose git user.email it is takes it over and anyone else is refused, naming the email (legacy-bare-diver); and, without `--sure`, when another email packed it: `--sure` takes it over, its work in progress included (take-over-with-sure). A dive this checkout holds whose branch is gone is jumped again without a record: its branch is cut from the home's tip and its packed hero work replayed, so only what was never packed is lost.\n- **A feat**: a bare attempt at all of it (feat-jumps-bare). Refused while the feat links any dive by a state link, over or not, `--sure` included, since a bare jump would start the feat over: the refusal says to finish and drop those dives, or to plan another dive saying what it does, `nosedive crud nosedive-legacy:dive <gist> --meta:feat <feat> --section:Brief -`, and jump that. Otherwise, without `--sure`, refused unless `next` would list it, a non-durable leaf: a durable doc, or one with another link whose rel ends `.feat` other than `parent.feat`, takes `--sure` (sure-off-fringe). It mints a dive on it (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), named `<last 6 hex of its id>.<feat name>` (dive-name-hex-first), gisted \"An attempt to complete <feat name>\", copying its scopes, naming the feat in its `meta.feat`, and linking it from the feat as `jumped.dive`; then jumps it. The feat, its `## Dropped` included, is that dive's brief.\n\nThen, in order:\n\n1. A checkout to be moved with uncommitted changes or untracked files is refused, naming each, before anything moves.\n2. The jump record, `jump(<dive name>): <summary>`, is committed on the home: the dive minted when jumping a feat, `diver` set to `<email>#<token>`, `packer` cleared, each writable scope's `ref` set to the dive's newest ref on its origin, or cleared when there is none, which replaces the pin legacy nosedive wrote, a `## <timestamp> jumped` section, and the dive's link moved to `jumped.dive` on the docs that hold it, in the same commit. The rest of the dive's meta, `effort` and any key of the pilot's included, is left as it is, and so is a `feat` it lacks: the dive's feat is the one its meta names or the doc that links it. It is pushed to the home's upstream; when that moved meanwhile, jump drops the record, fetches and fast-forwards, refuses if someone else now holds the dive, and records again.\n3. The hero's dive branch is cut there and checked out, and the dive's newest ref on the hero's origin, its packed hero work, is cherry-picked onto it. A conflict aborts the pick and leaves the hero on the dive branch at the record, naming the ref the work is on.\n4. Each writable scope's checkout is put on the dive branch, hydrated detached with core's hydrate-repo when missing, then switched; moved when there for other work, its commits origin lacks pushed to an orphan ref first. Where the dive's newest ref holds what the branch lacks, the branch moves to it; when the work branch on origin has moved on, the work is rebased onto it, a conflict aborting the rebase. Each read-only scope's checkout is detached at origin's trunk.\n\nThen each checkout moved from other work has its ignored files swapped for the feat's pack (see dive), never those under a configured workspace (see pack), and pack's `work in progress` commit is undone, when it names this dive, as `pack(<dive name>): work in progress` or, as pack named it while feats grouped the loop's commits, `feat(<feat name>): pack work in progress on <dive name>`; another dive's is left alone in the hero and each scope, so the work it held comes back uncommitted. It prints the dive's path, its feat's and each checkout's.\n\nOn every path that succeeds, on a dive branch included, it then prints `Now do the dive's work, from its brief, <path>, to its feat's Done when; pack or land it only when the pilot asks.`, the brief being the dive's when it has a `## Brief`, else its feat (jump-starts-the-work).\n\n## Canonical dives\n\nA feat's dive is minted as `nosedive-legacy:dive` (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), found with find-kind and pinned with core's pin-of, so the dive carries legacy's canonical scope; a schema that is not published refuses the jump before any checkout moves. Dives and feats are recognised by doc-kind, never by the text of `kind`.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba06b7cfd9e5f710dc60e4a37.ts](../src/i01a1c72ba06b7cfd9e5f710dc60e4a37.ts)\n- `jump [<ref>]`: [impl](../src/i0e2024913efd5dc8afe194f5650bda20.ts), [tests](../src/i0e2024913efd5dc8afe194f5650bda20.test.ts)\n- `jump [<ref>] --sure`: [impl](../src/ia65e6ec583fa51079af219fd79e4ad87.ts), [tests](../src/ia65e6ec583fa51079af219fd79e4ad87.test.ts)\n", "body": "# Jump\n\n## Usage\n\nWork's jump as its main had it at 260eb82, on legacy's own dive kind and the dives legacy nosedive wrote: a dive hangs from its feat by a state link, `planned.dive`, `jumped.dive`, `packed.dive`, `landed.dive` or `bailed.dive`, whose rel jump moves, and its meta is read as it is (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent jumps when the pilot says to: \"jump\", \"jump on <thing>\", \"work on <thing>\" and the like, never on its own initiative.\n\n`<ref>` is a feat's or a dive's quid. A feat is any doc one of the hero's roots reaches through links whose rel ends `.feat`, a root of kind cape aside, since its feats are actions, a memo unless it has a kind of its own; a doc nothing reaches that way is refused, naming how to link it in. Its `scopes` name the repos it works in, legacy's shape: an entry keyed by a repo doc's quid, with `work-branch` naming the branch its work goes to, and an entry with none, or a bare quid, read-only. A dive's read-only scope is written as an entry with none (`<repo>: {}`), which core reads a bare quid as.\n\nUncommitted changes: off a dive branch, an unclean hero tree is refused (jump-needs-clean-tree); on any path, a scope checkout jump would move that has uncommitted changes or untracked files is refused, each named, before anything moves. A checkout already where the dive wants it, as on a dive branch, is left as it is, changes and all. A checkout jump moves has its ignored files swapped for the feat's pack, and pack's work-in-progress commit on this dive is undone, so packed work comes back uncommitted.\n\nJump ends by telling the agent that jumped to do the dive's work now, from its brief to its feat's Done when, and to pack or land it only when the pilot asks.\n\nWhile the dive is on deck:\n\n- Commit freely in a writable scope's checkout, in small commits, and heed what its hooks say. Never push one: land publishes to the feat's work branch, and pack and bail to the dive's refs. Nothing blocks a push, as legacy's sentinel did, so the restraint is the agent's.\n- Commit nothing in a read-only scope: pack and land refuse what it holds, which has nowhere to go.\n- Hero docs the dive changes are committed on the hero's dive branch; land takes them to its home.\n- Record progress with `pass --turn <dive> <summary>`. Leave the brief as it is: it records what the dive was started for.\n\n## Where it is jumped from\n\nA dive is jumped from a branch of the hero, its home, and everything hero-side for it goes there (records-on-jumped-branch): the jump, pack, land and bail records, and the hero's commits when it lands, each pushed to the home's upstream. Branches of the hero do not know of each other's dives until they are merged; trunk is one such branch. Jump puts the hero on the dive's branch, `nosedive-<token>-<dive id>`, the token being the home's holder token, its 12 hex digits (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), cut from the home's tip after the jump record, and every writable scope's checkout on a branch of the same name (dive-branches). Pack, land and bail switch the hero back to its home, found as the local branch whose holder token the dive branch names (loop-returns-home).\n\n## On a dive branch\n\nOn a dive branch, jump takes only that branch's dive, with or without `<ref>`, and records nothing: each scope whose checkout is missing or elsewhere is put where the dive wants it, and a checkout already there is left as it is, so no commit on any of them is lost; another `<ref>` is refused: pack, land or bail it first (one-dive-branch-per-checkout).\n\nA dive that is over, landed or bailed, is refused on every path, before anything changes: named by its quid, as the dive on a dive branch the hero is on, and as the dive of a dive branch this checkout has left over. The refusal names how it ended and, where its branch is still here, says to leave it: switch to its home, the branch it was jumped from, and delete the branch. Pack, land and bail refuse an over dive, so one taken up again could never be put down.\n\n## Off a dive branch\n\nThe branch the hero is on is the home. Refused, naming why, before anything moves:\n\n- while the hero's working tree is not clean (jump-needs-clean-tree);\n- when the home has no upstream, so the dive's records would be stranded in a local branch: push it first, as `git push -u origin <branch>`;\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind: push them first;\n- while this checkout has a dive branch, any `<ref>` but its dive: pack, land or bail it first; its own dive's `<ref>` switches the hero onto it and goes on as on a dive branch (one-dive-branch-per-checkout).\n\nA `<ref>` is a doc's quid, its name, or a path ending `<quid>.md`, as `next` prints beside it (listed-paths-accepted).\n\nWithout `<ref>`, jump takes the one open dive this checkout holds without a branch, else the one nobody holds that the pilot packed or nobody has touched, a dive being open while its link is `planned.dive`, `jumped.dive` or `packed.dive`. `next` lists a dive too, under the doc that links it, but a bare jump still refuses, with none or several, naming each: several, the dives that wait; none, every open dive of the hero, with its state and who holds or packed it.\n\n- **A dive**: refused when it is over, its link landed or bailed; when another checkout holds it, naming the branch of this checkout it is held from when it is one, else `pack it there` (held-by-checkout); a diver legacy wrote, a bare email with no token, holds it in no checkout in particular, so a checkout whose git user.email it is takes it over and anyone else is refused, naming the email (legacy-bare-diver); and, without `--sure`, when another email packed it: `--sure` takes it over, its work in progress included (take-over-with-sure). A dive this checkout holds whose branch is gone is jumped again without a record: its branch is cut from the home's tip and its packed hero work replayed, so only what was never packed is lost.\n- **A feat**: a bare attempt at all of it (feat-jumps-bare). Refused while the feat links any dive by a state link, over or not, `--sure` included, since a bare jump would start the feat over: the refusal says to finish and drop those dives, or to plan another dive saying what it does, `nosedive crud nosedive-legacy:dive <gist> --meta:feat <feat> --section:Brief -`, and jump that. Otherwise, without `--sure`, refused unless `next` would list it, a non-durable leaf: a durable doc, or one with another link whose rel ends `.feat` other than `parent.feat`, takes `--sure` (sure-off-fringe). It mints a dive on it (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), named `<last 6 hex of its id>.<feat name>` (dive-name-hex-first), gisted \"An attempt to complete <feat name>\", copying its scopes, naming the feat in its `meta.feat`, and linking it from the feat as `jumped.dive`; then jumps it. The feat, its `## Dropped` included, is that dive's brief.\n\nThen, in order:\n\n1. A checkout to be moved with uncommitted changes or untracked files is refused, naming each, before anything moves.\n2. The jump record, `jump(<dive name>): <summary>`, is committed on the home: the dive minted when jumping a feat, `diver` set to `<email>#<token>`, `packer` cleared, each writable scope's `ref` set to the dive's newest ref on its origin, or cleared when there is none, which replaces the pin legacy nosedive wrote, a `## <timestamp> jumped` section, and the dive's link moved to `jumped.dive` on the docs that hold it, in the same commit. The rest of the dive's meta, `effort` and any key of the pilot's included, is left as it is, and so is a `feat` it lacks: the dive's feat is the one its meta names or the doc that links it. It is pushed to the home's upstream; when that moved meanwhile, jump drops the record, fetches and fast-forwards, refuses if someone else now holds the dive, and records again.\n3. The hero's dive branch is cut there and checked out, and the dive's newest ref on the hero's origin, its packed hero work, is cherry-picked onto it. A conflict aborts the pick and leaves the hero on the dive branch at the record, naming the ref the work is on.\n4. Each writable scope's checkout is put on the dive branch, hydrated detached with core's hydrate-repo when missing, then switched; moved when there for other work, its commits origin lacks pushed to an orphan ref first. Where the dive's newest ref holds what the branch lacks, the branch moves to it; when the work branch on origin has moved on, the work is rebased onto it, a conflict aborting the rebase. Each read-only scope's checkout is detached at origin's trunk.\n\nThen each checkout moved from other work has its ignored files swapped for the feat's pack (see dive), never those under a configured workspace (see pack), and pack's `work in progress` commit is undone, when it names this dive, as `pack(<dive name>): work in progress` or, as pack named it while feats grouped the loop's commits, `feat(<feat name>): pack work in progress on <dive name>`; another dive's is left alone in the hero and each scope, so the work it held comes back uncommitted. It prints the dive's path, its feat's and each checkout's.\n\nOn every path that succeeds, on a dive branch included, it then prints `Now do the dive's work, from its brief, <path>, to its feat's Done when; pack or land it only when the pilot asks.`, the brief being the dive's when it has a `## Brief`, else its feat (jump-starts-the-work).\n\n## Canonical dives\n\nA feat's dive is minted as `nosedive-legacy:dive` (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), found with find-kind and pinned with core's pin-of, so the dive carries legacy's canonical scope; a schema that is not published refuses the jump before any checkout moves. Dives and feats are recognised by doc-kind, never by the text of `kind`.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba06b7cfd9e5f710dc60e4a37.ts](../src/i01a1c72ba06b7cfd9e5f710dc60e4a37.ts)\n- `jump [<ref>]`: [impl](../src/i0e2024913efd5dc8afe194f5650bda20.ts), [tests](../src/i0e2024913efd5dc8afe194f5650bda20.test.ts)\n- `jump [<ref>] --sure`: [impl](../src/ia65e6ec583fa51079af219fd79e4ad87.ts), [tests](../src/ia65e6ec583fa51079af219fd79e4ad87.test.ts)" }, "01a1c72b-a079-7d52-baaa-1a9bba46a525": { "kind": "action", "name": "pack", "gist": "Puts the dive on deck down for anyone, on any hero repo, to jump again: its work pushed to its refs, its ignored files packed for its feat, its checkouts left at their base", "usages": [{ "id": "5f74ee87748f528b9fd9b00a48c2275b", "text": "pack [<dive>]" }], "top": true, "text": "---\nkind: action\nid: 01a1c72b-a079-7d52-baaa-1a9bba46a525\nname: pack\ngist: \"Puts the dive on deck down for anyone, on any hero repo, to jump again: its work pushed to its refs, its ignored files packed for its feat, its checkouts left at their base\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - pack [<dive>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Pack\n\n## Usage\n\nWork's pack as its main had it at 260eb82, on legacy's dive kind and the dives legacy nosedive wrote (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent packs only when the pilot asks: to pack, park or pause the dive, hand it off, or switch to another feat. Packed, nothing is on deck, and the dive comes back with `jump <dive>`, from this checkout or any other of the hero, its uncommitted work included.\n\nA read-only scope holding work refuses the pack, below; the recourse is to take that work out of the checkout, or to keep it on a feat that scopes the repo with a work branch, in a dive of its own.\n\n`<dive>`, when given, must be the dive on deck: the one the hero's dive branch names (see dive-on-deck). Refused off a dive branch (loop-returns-home), and when the dive's home is gone: recreate it.\n\nRefused, before anything moves, when a read-only scope has commits origin lacks or uncommitted changes: they have nowhere to go.\n\nEach writable scope whose checkout is on the dive's local branch, and the hero, has its uncommitted changes, untracked files included, committed as `pack(<dive name>): work in progress`, with the nosedive co-author trailer (see commit-message); its bookkeeping commit in the hero reads `pack(<dive name>): <summary>`. Its work is pushed to its ref on origin, `refs/nosedive/<hero id>/dives/<dive id>`, deleting any other ref of the dive. Before anything moves, each ref of the dive on origin must hold the dive's newest ref as the dive doc recorded it at the last jump or pack (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), or older work of the dive; the dive's own ref may also hold a commit the checkout has, its own earlier publish, so a retry goes on. Any other refuses the pack, naming it. The record is the dive doc's, never local refs, which any fetch into a repo's shared cache moves. It publishes the destination ref first, leased against what it just checked; only after that succeeds does it delete other refs, each under its own lease. With no work, every ref is deleted under lease. Publication or cleanup failures refuse to put the dive down, keep local work recoverable, and can be safely retried after partial updates or deletions. A ref of the dive pushed since then refuses the pack, naming it.\n\nEach such checkout has its ignored files packed for its feat and is left detached at its base, where its branch meets the work branch on origin, else trunk, its local branch deleted; ignored files the base does not ignore are removed, since they would read as untracked work. Nothing under a configured workspace is packed or removed: the checkout's own, as its repo's config names it, or the hero's when it lies inside the checkout, so a hero checked out as a scope keeps its workspace and every checkout in it. The hero is switched back to the dive's home, the branch it was jumped from (see jump), and its dive branch deleted.\n\nIt moves `diver` to `packer`, sets each scope's `ref` to what it pushed, appends a `## <timestamp> packed` section with each scope's work, moves the dive's link to `packed.dive` on the docs that hold it, and commits that, the rest of the dive's meta untouched, on the home, pushed to its upstream, fetching and making it again on the new tip when the upstream moved meanwhile (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0797d52baaa1a9bba46a525.ts](../src/i01a1c72ba0797d52baaa1a9bba46a525.ts)\n- `pack [<dive>]`: [impl](../src/i5f74ee87748f528b9fd9b00a48c2275b.ts), [tests](../src/i5f74ee87748f528b9fd9b00a48c2275b.test.ts)\n", "body": "# Pack\n\n## Usage\n\nWork's pack as its main had it at 260eb82, on legacy's dive kind and the dives legacy nosedive wrote (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent packs only when the pilot asks: to pack, park or pause the dive, hand it off, or switch to another feat. Packed, nothing is on deck, and the dive comes back with `jump <dive>`, from this checkout or any other of the hero, its uncommitted work included.\n\nA read-only scope holding work refuses the pack, below; the recourse is to take that work out of the checkout, or to keep it on a feat that scopes the repo with a work branch, in a dive of its own.\n\n`<dive>`, when given, must be the dive on deck: the one the hero's dive branch names (see dive-on-deck). Refused off a dive branch (loop-returns-home), and when the dive's home is gone: recreate it.\n\nRefused, before anything moves, when a read-only scope has commits origin lacks or uncommitted changes: they have nowhere to go.\n\nEach writable scope whose checkout is on the dive's local branch, and the hero, has its uncommitted changes, untracked files included, committed as `pack(<dive name>): work in progress`, with the nosedive co-author trailer (see commit-message); its bookkeeping commit in the hero reads `pack(<dive name>): <summary>`. Its work is pushed to its ref on origin, `refs/nosedive/<hero id>/dives/<dive id>`, deleting any other ref of the dive. Before anything moves, each ref of the dive on origin must hold the dive's newest ref as the dive doc recorded it at the last jump or pack (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), or older work of the dive; the dive's own ref may also hold a commit the checkout has, its own earlier publish, so a retry goes on. Any other refuses the pack, naming it. The record is the dive doc's, never local refs, which any fetch into a repo's shared cache moves. It publishes the destination ref first, leased against what it just checked; only after that succeeds does it delete other refs, each under its own lease. With no work, every ref is deleted under lease. Publication or cleanup failures refuse to put the dive down, keep local work recoverable, and can be safely retried after partial updates or deletions. A ref of the dive pushed since then refuses the pack, naming it.\n\nEach such checkout has its ignored files packed for its feat and is left detached at its base, where its branch meets the work branch on origin, else trunk, its local branch deleted; ignored files the base does not ignore are removed, since they would read as untracked work. Nothing under a configured workspace is packed or removed: the checkout's own, as its repo's config names it, or the hero's when it lies inside the checkout, so a hero checked out as a scope keeps its workspace and every checkout in it. The hero is switched back to the dive's home, the branch it was jumped from (see jump), and its dive branch deleted.\n\nIt moves `diver` to `packer`, sets each scope's `ref` to what it pushed, appends a `## <timestamp> packed` section with each scope's work, moves the dive's link to `packed.dive` on the docs that hold it, and commits that, the rest of the dive's meta untouched, on the home, pushed to its upstream, fetching and making it again on the new tip when the upstream moved meanwhile (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0797d52baaa1a9bba46a525.ts](../src/i01a1c72ba0797d52baaa1a9bba46a525.ts)\n- `pack [<dive>]`: [impl](../src/i5f74ee87748f528b9fd9b00a48c2275b.ts), [tests](../src/i5f74ee87748f528b9fd9b00a48c2275b.test.ts)" }, "01a1c72b-a088-715d-a4fe-90ea388bb097": { "kind": "action", "name": "bail", "gist": "Abandons the dive on deck, recording why and what it held", "usages": [{ "id": "a159fdc01ac85e4f831dc1c523787ce6", "text": "bail [<dive>] --reason <why>" }], "top": true, "text": "---\nkind: action\nid: 01a1c72b-a088-715d-a4fe-90ea388bb097\nname: bail\ngist: \"Abandons the dive on deck, recording why and what it held\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - bail [<dive>] --reason <why>\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Bail\n\n## Usage\n\nWork's bail as its main had it at 260eb82, on legacy's dive kind and the dives legacy nosedive wrote (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent bails only when the pilot says the dive should be abandoned rather than packed or landed. The reason is recorded in full on the dive: say what the next attempt needs to know, such as the slice found too big to review. A bailed dive is over, and its refs stay, so the commits its bailed section names by sha can be checked out again.\n\n`--reason` is required; `<dive>`, when given, must be the dive on deck. Refused off a dive branch, and when the dive's home is gone (loop-returns-home).\n\nIt puts the dive down as pack does (see [pack](01a1c72b-a079-7d52-baaa-1a9bba46a525.md)): uncommitted changes committed as work in progress, the work published to the dive's refs using pack's lease-guarded, publish-before-delete procedure, ignored files packed for its feat, each checkout left detached at its base with its local branch deleted, and the hero switched back to the dive's home, its dive branch deleted. It does not require atomic-push support. A publication or cleanup failure leaves local work recoverable and safe to retry before local branches or checkouts are removed. The refs stay: a bailed dive's refs are what an audit finds of it.\n\nIts bookkeeping commit in the hero reads `bail(<dive name>): <reason>`, and the work in progress it commits is pack's. It appends a `## <timestamp> bailed` section, with the reason and, per scope, the commits it held by sha and subject with the ref holding them. It moves the dive's link to `bailed.dive` on the docs that hold it, which is how it ends, clears `diver`, sets each scope's `ref`, and commits that, the rest of the dive's meta untouched, on the home, pushed to its upstream (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba088715da4fe90ea388bb097.ts](../src/i01a1c72ba088715da4fe90ea388bb097.ts)\n- `bail [<dive>] --reason <why>`: [impl](../src/ia159fdc01ac85e4f831dc1c523787ce6.ts), [tests](../src/ia159fdc01ac85e4f831dc1c523787ce6.test.ts)\n", "body": "# Bail\n\n## Usage\n\nWork's bail as its main had it at 260eb82, on legacy's dive kind and the dives legacy nosedive wrote (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent bails only when the pilot says the dive should be abandoned rather than packed or landed. The reason is recorded in full on the dive: say what the next attempt needs to know, such as the slice found too big to review. A bailed dive is over, and its refs stay, so the commits its bailed section names by sha can be checked out again.\n\n`--reason` is required; `<dive>`, when given, must be the dive on deck. Refused off a dive branch, and when the dive's home is gone (loop-returns-home).\n\nIt puts the dive down as pack does (see [pack](01a1c72b-a079-7d52-baaa-1a9bba46a525.md)): uncommitted changes committed as work in progress, the work published to the dive's refs using pack's lease-guarded, publish-before-delete procedure, ignored files packed for its feat, each checkout left detached at its base with its local branch deleted, and the hero switched back to the dive's home, its dive branch deleted. It does not require atomic-push support. A publication or cleanup failure leaves local work recoverable and safe to retry before local branches or checkouts are removed. The refs stay: a bailed dive's refs are what an audit finds of it.\n\nIts bookkeeping commit in the hero reads `bail(<dive name>): <reason>`, and the work in progress it commits is pack's. It appends a `## <timestamp> bailed` section, with the reason and, per scope, the commits it held by sha and subject with the ref holding them. It moves the dive's link to `bailed.dive` on the docs that hold it, which is how it ends, clears `diver`, sets each scope's `ref`, and commits that, the rest of the dive's meta untouched, on the home, pushed to its upstream (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba088715da4fe90ea388bb097.ts](../src/i01a1c72ba088715da4fe90ea388bb097.ts)\n- `bail [<dive>] --reason <why>`: [impl](../src/ia159fdc01ac85e4f831dc1c523787ce6.ts), [tests](../src/ia159fdc01ac85e4f831dc1c523787ce6.test.ts)" }, "01a1c72b-a097-7036-ae1a-496002396328": { "kind": "action", "name": "land", "gist": "Publishes the dive on deck: each repo's work pushed to its feat's work branch", "usages": [{ "id": "3b8461aa9eac5f10837c2515b5231e78", "text": "land [<dive>]" }], "top": true, "text": "---\nkind: action\nid: 01a1c72b-a097-7036-ae1a-496002396328\nname: land\ngist: \"Publishes the dive on deck: each repo's work pushed to its feat's work branch\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - land [<dive>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Land\n\n## Usage\n\nWork's land as its main had it at 260eb82, on legacy's dive kind and the dives legacy nosedive wrote (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent lands only when the pilot says to: \"land\", \"ship <thing>\" and the like. Land runs no gates, as legacy's land ran its `land.gate`s: run `nosedive test` first, `--full` for the feat's gates too, and land once they pass. A landed dive is over: it is never jumped again.\n\nEach refusal below names what to do. A work branch that moved is never pushed past: `pack`, then `jump` the dive, which rebases its work onto the branch, then land again; never `git push --force`, which would drop what the other push added.\n\n`<dive>`, when given, must be the dive on deck. Refused, before anything is pushed:\n\n- off a dive branch, or when the dive's home is gone: recreate it (loop-returns-home);\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind;\n\n- while the hero or a checkout has uncommitted changes, naming each: commit them first;\n- while a read-only scope has commits origin lacks;\n- while a work branch has moved to a commit the scope's HEAD does not contain. The recourse is `pack`, then `jump`, which rebases the work onto the branch.\n\nEach commit it publishes that no branch on origin holds is stamped first with `Nosedive-Dive: <dive id>`, `Nosedive-Feat: <id>`, the first durable feat ancestor of the dive's feat or of the doc that links it (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), and the nosedive co-author trailer (see commit-message), where the commit lacks them. A commit that carries a nosedive co-author already, of any version, from an earlier stamp or a rebase, gets no second; another's co-author does not stand in for it. The hero's record, `land(<dive name>): <summary>`, carries it too.\n\nEach writable scope whose checkout is on the dive's local branch and holds work its work branch lacks is pushed to it, a fast-forward or the branch's creation; any other is unchanged. Then each scope's ignored files are packed for its feat, every ref of the dive is deleted on origin, and each checkout is left detached at what it holds, its local branch deleted.\n\nThe hero's own work, the commits on its dive branch, rides to the dive's home (records-on-jumped-branch): the dive branch is rebased onto the home, its commits stamped, the hero switched back to the home, fast-forwarded to them, and its dive branch deleted; then the dive's link moved to `landed.dive` on the docs that hold it, which is how it ends, `diver` cleared and a `## <timestamp> landed` section recording each push are committed on top, the rest of the dive's meta untouched, and the home is pushed to its upstream, rebased onto it first when it moved meanwhile. So the hero's work for the dive sits between its jump and land records.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0977036ae1a496002396328.ts](../src/i01a1c72ba0977036ae1a496002396328.ts)\n- `land [<dive>]`: [impl](../src/i3b8461aa9eac5f10837c2515b5231e78.ts), [tests](../src/i3b8461aa9eac5f10837c2515b5231e78.test.ts)\n", "body": "# Land\n\n## Usage\n\nWork's land as its main had it at 260eb82, on legacy's dive kind and the dives legacy nosedive wrote (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). An agent lands only when the pilot says to: \"land\", \"ship <thing>\" and the like. Land runs no gates, as legacy's land ran its `land.gate`s: run `nosedive test` first, `--full` for the feat's gates too, and land once they pass. A landed dive is over: it is never jumped again.\n\nEach refusal below names what to do. A work branch that moved is never pushed past: `pack`, then `jump` the dive, which rebases its work onto the branch, then land again; never `git push --force`, which would drop what the other push added.\n\n`<dive>`, when given, must be the dive on deck. Refused, before anything is pushed:\n\n- off a dive branch, or when the dive's home is gone: recreate it (loop-returns-home);\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind;\n\n- while the hero or a checkout has uncommitted changes, naming each: commit them first;\n- while a read-only scope has commits origin lacks;\n- while a work branch has moved to a commit the scope's HEAD does not contain. The recourse is `pack`, then `jump`, which rebases the work onto the branch.\n\nEach commit it publishes that no branch on origin holds is stamped first with `Nosedive-Dive: <dive id>`, `Nosedive-Feat: <id>`, the first durable feat ancestor of the dive's feat or of the doc that links it (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)), and the nosedive co-author trailer (see commit-message), where the commit lacks them. A commit that carries a nosedive co-author already, of any version, from an earlier stamp or a rebase, gets no second; another's co-author does not stand in for it. The hero's record, `land(<dive name>): <summary>`, carries it too.\n\nEach writable scope whose checkout is on the dive's local branch and holds work its work branch lacks is pushed to it, a fast-forward or the branch's creation; any other is unchanged. Then each scope's ignored files are packed for its feat, every ref of the dive is deleted on origin, and each checkout is left detached at what it holds, its local branch deleted.\n\nThe hero's own work, the commits on its dive branch, rides to the dive's home (records-on-jumped-branch): the dive branch is rebased onto the home, its commits stamped, the hero switched back to the home, fast-forwarded to them, and its dive branch deleted; then the dive's link moved to `landed.dive` on the docs that hold it, which is how it ends, `diver` cleared and a `## <timestamp> landed` section recording each push are committed on top, the rest of the dive's meta untouched, and the home is pushed to its upstream, rebased onto it first when it moved meanwhile. So the hero's work for the dive sits between its jump and land records.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0977036ae1a496002396328.ts](../src/i01a1c72ba0977036ae1a496002396328.ts)\n- `land [<dive>]`: [impl](../src/i3b8461aa9eac5f10837c2515b5231e78.ts), [tests](../src/i3b8461aa9eac5f10837c2515b5231e78.test.ts)" }, "01a1c72b-a0a6-7a64-836f-167c23ffa097": { "kind": "function", "name": "dive-on-deck", "gist": "The dive the hero's dive branch names: its doc, its home, its feat, and each scope with its repo, checkout, trunk and work branch", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1c72b-a0a6-7a64-836f-167c23ffa097\nname: dive-on-deck\ngist: \"The dive the hero's dive branch names: its doc, its home, its feat, and each scope with its repo, checkout, trunk and work branch\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a138b2-b8ee-703c-ab22-7b010f588b6a:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n  - nosedive-core:01a1901e-263b-7209-a4b5-f39a71c568b3:\n      rel: uses.function\n  - nosedive-core:01a13dee-4b1d-78f7-a699-c3777bf63587:\n      rel: uses.function\n---\n\n# Dive on deck\n\nFinds the dive on deck from the hero's branch (dive-branches), among the open dives: the docs of legacy's dive kind that a doc of the hero links `planned.dive`, `jumped.dive` or `packed.dive`, which legacy, not core, reads, core's feat-tree following no such link (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape): a branch `nosedive-<token>-<dive id>` whose dive id names an open dive in the hero, and whose `diver` carries that token; and its home, the local branch whose holder token is that token (loop-returns-home). It returns them with the dive's state and the docs that link it, its feat, which `meta.feat` or `meta.effort` names, else the doc that links it, and its scopes. A dive whose link says landed or bailed is over, and refused so. Given a dive's quid, it refuses unless that is the one. Off a dive branch it refuses, naming `jump`; a dive branch whose dive is over or held by another token, as a copied branch's would be, is refused, as is a home that is gone: recreate it.\n\nEach scope carries its repo doc, its checkout, the repo's trunk, the work branch, if any, and whether its checkout is the dive's: on the dive branch when writable, present when read-only. Nothing is hydrated or moved.\n\n## Kind identity and scopes\n\nDocs are told apart by core's doc-kind, not by the text of `kind`: a dive is a doc whose name is `dive` and whose canonical owner is legacy or none, as legacy nosedive wrote it, not work, a repo doc is core's by its place in `.nosedive/repos`, and a cape root is skipped when walking feats. The kind of a feat is found with find-kind, spelled in the hero's terms, to learn whether it is durable; a dive's first durable ancestor is sought from its feat and from each doc that links it, through core's feat-tree, which reaches those from their parents.\n\nOnly an entry keyed by a repo doc the hero registers is a work scope. Every other entry is not the loop's to read: the one with `canonical: true` naming the owner of the doc's kind, and any meta entry keyed by a seeded id carrying `version`, `schema` or `meta`. None is checked out, and when a dive's refs are rewritten each is kept exactly as parsed.\n\n## Code\n\n- Function: [src/i01a1c72ba0a67a64836f167c23ffa097.ts](../src/i01a1c72ba0a67a64836f167c23ffa097.ts)\n- Tests: [src/i01a1c72ba0a67a64836f167c23ffa097.test.ts](../src/i01a1c72ba0a67a64836f167c23ffa097.test.ts)\n", "body": "# Dive on deck\n\nFinds the dive on deck from the hero's branch (dive-branches), among the open dives: the docs of legacy's dive kind that a doc of the hero links `planned.dive`, `jumped.dive` or `packed.dive`, which legacy, not core, reads, core's feat-tree following no such link (see [dive](01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape): a branch `nosedive-<token>-<dive id>` whose dive id names an open dive in the hero, and whose `diver` carries that token; and its home, the local branch whose holder token is that token (loop-returns-home). It returns them with the dive's state and the docs that link it, its feat, which `meta.feat` or `meta.effort` names, else the doc that links it, and its scopes. A dive whose link says landed or bailed is over, and refused so. Given a dive's quid, it refuses unless that is the one. Off a dive branch it refuses, naming `jump`; a dive branch whose dive is over or held by another token, as a copied branch's would be, is refused, as is a home that is gone: recreate it.\n\nEach scope carries its repo doc, its checkout, the repo's trunk, the work branch, if any, and whether its checkout is the dive's: on the dive branch when writable, present when read-only. Nothing is hydrated or moved.\n\n## Kind identity and scopes\n\nDocs are told apart by core's doc-kind, not by the text of `kind`: a dive is a doc whose name is `dive` and whose canonical owner is legacy or none, as legacy nosedive wrote it, not work, a repo doc is core's by its place in `.nosedive/repos`, and a cape root is skipped when walking feats. The kind of a feat is found with find-kind, spelled in the hero's terms, to learn whether it is durable; a dive's first durable ancestor is sought from its feat and from each doc that links it, through core's feat-tree, which reaches those from their parents.\n\nOnly an entry keyed by a repo doc the hero registers is a work scope. Every other entry is not the loop's to read: the one with `canonical: true` naming the owner of the doc's kind, and any meta entry keyed by a seeded id carrying `version`, `schema` or `meta`. None is checked out, and when a dive's refs are rewritten each is kept exactly as parsed.\n\n## Code\n\n- Function: [src/i01a1c72ba0a67a64836f167c23ffa097.ts](../src/i01a1c72ba0a67a64836f167c23ffa097.ts)\n- Tests: [src/i01a1c72ba0a67a64836f167c23ffa097.test.ts](../src/i01a1c72ba0a67a64836f167c23ffa097.test.ts)" }, "01a1c72b-a0b5-7a0c-80e3-fdd641d001a8": { "kind": "function", "name": "record-dive", "gist": "Writes a dive's changes: meta set, a dated section appended, committed to the hero", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a1c72b-a0b5-7a0c-80e3-fdd641d001a8\nname: record-dive\ngist: \"Writes a dive's changes: meta set, a dated section appended, committed to the hero\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\nlinks:\n  - nosedive-core:01a13354-845c-7253-a55b-60bba87285d8:\n      rel: uses.function\n  - nosedive-core:01a13354-8942-73b1-be25-3424511ba82c:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n  - nosedive-core:01a19005-c109-7155-8355-3072f4e38dc4:\n      rel: uses.function\n  - nosedive-core:01a19005-c311-72b6-8871-d4842563d310:\n      rel: uses.function\n---\n\n# Record dive\n\nEvery change an action makes to a dive goes through it: the meta it sets (null clears a field; the rest of the meta is left as it is), the state its link moves to on every doc that holds one (the action's: jumped, packed, landed or bailed), a `## <timestamp> <label>` section appended (labels `jumped`, `packed`, `landed`, `bailed`; timestamp ISO 8601 UTC with `Z`, as pass --turn heads its own) with the lines it is given, and any other hero docs it is handed, with the docs whose link it moved, all committed to the hero in one commit, `<action>(<dive name>): <summary>`, the loop's command first and the dive it acted on, whatever feat the hero holds (loop-command-subjects), which ends with the nosedive co-author trailer (see commit-message) like every commit the loop makes in the hero. It is given the core version for that trailer. Dives written with the old `## Jumped <timestamp>` headings stay as they are; nothing in the loop reads sections by heading. Pushing is the action's: each puts its commit on the hero's trunk on origin.\n\n## Code\n\n- Function: [src/i01a1c72ba0b57a0c80e3fdd641d001a8.ts](../src/i01a1c72ba0b57a0c80e3fdd641d001a8.ts)\n- Tests: [src/i01a1c72ba0b57a0c80e3fdd641d001a8.test.ts](../src/i01a1c72ba0b57a0c80e3fdd641d001a8.test.ts)\n", "body": "# Record dive\n\nEvery change an action makes to a dive goes through it: the meta it sets (null clears a field; the rest of the meta is left as it is), the state its link moves to on every doc that holds one (the action's: jumped, packed, landed or bailed), a `## <timestamp> <label>` section appended (labels `jumped`, `packed`, `landed`, `bailed`; timestamp ISO 8601 UTC with `Z`, as pass --turn heads its own) with the lines it is given, and any other hero docs it is handed, with the docs whose link it moved, all committed to the hero in one commit, `<action>(<dive name>): <summary>`, the loop's command first and the dive it acted on, whatever feat the hero holds (loop-command-subjects), which ends with the nosedive co-author trailer (see commit-message) like every commit the loop makes in the hero. It is given the core version for that trailer. Dives written with the old `## Jumped <timestamp>` headings stay as they are; nothing in the loop reads sections by heading. Pushing is the action's: each puts its commit on the hero's trunk on origin.\n\n## Code\n\n- Function: [src/i01a1c72ba0b57a0c80e3fdd641d001a8.ts](../src/i01a1c72ba0b57a0c80e3fdd641d001a8.ts)\n- Tests: [src/i01a1c72ba0b57a0c80e3fdd641d001a8.test.ts](../src/i01a1c72ba0b57a0c80e3fdd641d001a8.test.ts)" }, "01a1c72b-a0c3-7d27-a058-e908481307c3": { "kind": "function", "name": "run-git", "gist": "Runs git in a directory and returns whether it worked and what it said", "usages": [], "top": true, "text": '---\nkind: function\nid: 01a1c72b-a0c3-7d27-a058-e908481307c3\nname: run-git\ngist: "Runs git in a directory and returns whether it worked and what it said"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: cd1a463c46d6\n---\n\n# Run git\n\nRuns `git` with the given arguments in a directory, returning whether it exited 0 and its trimmed output: stdout on success, stderr otherwise.\n\n## Code\n\n- Function: [src/i01a1c72ba0c37d27a058e908481307c3.ts](../src/i01a1c72ba0c37d27a058e908481307c3.ts)\n- Tests: [src/i01a1c72ba0c37d27a058e908481307c3.test.ts](../src/i01a1c72ba0c37d27a058e908481307c3.test.ts)\n', "body": "# Run git\n\nRuns `git` with the given arguments in a directory, returning whether it exited 0 and its trimmed output: stdout on success, stderr otherwise.\n\n## Code\n\n- Function: [src/i01a1c72ba0c37d27a058e908481307c3.ts](../src/i01a1c72ba0c37d27a058e908481307c3.ts)\n- Tests: [src/i01a1c72ba0c37d27a058e908481307c3.test.ts](../src/i01a1c72ba0c37d27a058e908481307c3.test.ts)" }, "01a1c72b-a0d2-7947-83de-8f2dd490283a": { "kind": "action", "name": "turn", "gist": "Records progress on the dive held by this worktree", "usages": [{ "id": "6164926c34715ab39455948b647cbb0e", "text": "pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]" }], "top": true, "text": "---\nkind: action\nid: 01a1c72b-a0d2-7947-83de-8f2dd490283a\nname: turn\ngist: \"Records progress on the dive held by this worktree\"\nmeta:\n  usages:\n    - pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nlinks:\n  - kb/01a1c72b-a0e1-7487-8930-a64e361790a6.md:\n      rel: child.feat\n---\n\n# Turn\n\n## Usage\n\n`pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]` records progress on the dive on deck, the one the hero's dive branch names, as found by dive-on-deck. A different dive is refused. `-` as summary reads stdin.\n\nAppend a section headed `## <ISO 8601 timestamp>[ <label>]`, then the summary when given, then `Next: <gist>` when given. Use core's hero-zone timestamp helper once available; until then use UTC with `Z`. Refuse when neither summary nor next is given, or next contains more than one line. Two turns append in order. Edit through pass so each turn makes one ordinary pass commit. The gate sets no commit subject; core's pass owns it.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0d2794783de8f2dd490283a.ts](../src/i01a1c72ba0d2794783de8f2dd490283a.ts)\n- `pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]`: [impl](../src/i6164926c34715ab39455948b647cbb0e.ts)\n", "body": "# Turn\n\n## Usage\n\n`pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]` records progress on the dive on deck, the one the hero's dive branch names, as found by dive-on-deck. A different dive is refused. `-` as summary reads stdin.\n\nAppend a section headed `## <ISO 8601 timestamp>[ <label>]`, then the summary when given, then `Next: <gist>` when given. Use core's hero-zone timestamp helper once available; until then use UTC with `Z`. Refuse when neither summary nor next is given, or next contains more than one line. Two turns append in order. Edit through pass so each turn makes one ordinary pass commit. The gate sets no commit subject; core's pass owns it.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0d2794783de8f2dd490283a.ts](../src/i01a1c72ba0d2794783de8f2dd490283a.ts)\n- `pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]`: [impl](../src/i6164926c34715ab39455948b647cbb0e.ts)" }, "01a1c72b-a0e1-7487-8930-a64e361790a6": { "kind": "function", "name": "record-turn", "gist": "Appends a progress turn to the held dive through the current pass edit", "usages": [], "top": true, "text": `---
kind: function
id: 01a1c72b-a0e1-7487-8930-a64e361790a6
name: record-turn
gist: "Appends a progress turn to the held dive through the current pass edit"
scopes:
  - 01a1336b-c0b8-7cde-b7c6-285196062297:
      canonical: true
      version: 7bf363e12b620ec5e386d079712c729333bd43f4
      schema: cd1a463c46d6
links:
  - kb/01a1c72b-a0a6-7a64-836f-167c23ffa097.md:
      rel: uses.function
---

# Record turn

Finds the passing dive through dive-on-deck, refusing unless it is the dive on deck. Validates a nonempty summary or next, and a next gist without line breaks. Appends the UTC ISO timestamp (until core's hero-zone helper lands), optional label, summary and Next gist through the current pass edit. It writes no files or commits directly. The gate entrypoint reads a stdin summary before calling it. Integration tests exercise it through the real launcher and pass, including one commit per turn.

## Code

- Function: [src/i01a1c72ba0e174878930a64e361790a6.ts](../src/i01a1c72ba0e174878930a64e361790a6.ts)
- Tests: [src/i01a1c72ba0e174878930a64e361790a6.test.ts](../src/i01a1c72ba0e174878930a64e361790a6.test.ts)
`, "body": "# Record turn\n\nFinds the passing dive through dive-on-deck, refusing unless it is the dive on deck. Validates a nonempty summary or next, and a next gist without line breaks. Appends the UTC ISO timestamp (until core's hero-zone helper lands), optional label, summary and Next gist through the current pass edit. It writes no files or commits directly. The gate entrypoint reads a stdin summary before calling it. Integration tests exercise it through the real launcher and pass, including one commit per turn.\n\n## Code\n\n- Function: [src/i01a1c72ba0e174878930a64e361790a6.ts](../src/i01a1c72ba0e174878930a64e361790a6.ts)\n- Tests: [src/i01a1c72ba0e174878930a64e361790a6.test.ts](../src/i01a1c72ba0e174878930a64e361790a6.test.ts)" }, "01a1c72b-a0f0-7508-a398-7c47eef04568": { "kind": "action", "name": "dive-shape", "gist": "Keeps a dive in its feat's shape however crud changes it: minted with its feat's scopes and linked from its feat, moved only before it is jumped, and dropped only when it is over or never jumped", "usages": [{ "id": "98e9ab6e1535570abad65bf95895aa3d", "text": "before crud dive" }, { "id": "7c5c26ef056c5803a6607b86db00c4d0", "text": "after crud dive" }], "top": true, "text": "---\nkind: action\nid: 01a1c72b-a0f0-7508-a398-7c47eef04568\nname: dive-shape\ngist: \"Keeps a dive in its feat's shape however crud changes it: minted with its feat's scopes and linked from its feat, moved only before it is jumped, and dropped only when it is over or never jumped\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - before crud dive\n    - after crud dive\n---\n\n# Dive shape\n\n## Usage\n\nThe dive kind links this gate `crud.gate` (see core's crud-gates), so a dive made or changed by crud keeps the shape jump gives one it mints: `meta.feat` names its feat (or, with none, the doc that already links it), its scopes are its feat's, and its feat links it `planned.dive`, the state link legacy nosedive wrote (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). A dive can so be minted with crud, briefed in its body, and jumped later by anyone.\n\n- **Before**: an edit that changes a dive's name is refused: its feat names it, and its gist says what it is for. A drop of a dive that is not over, its link neither landed nor bailed, with a `diver` or a `packer` or its link jumped or packed, is refused: jump it and finish it, landing or bailing it; one never jumped, or over, goes, once core finds its feat records it (drops-recorded). A change of `meta.feat` is refused once the dive was jumped, having a `diver`, a `packer` or a link that is not `planned.dive`: its branches and refs are its feat's.\n- **After**: a dive minted, or a doc made a dive, gets its feat's repo scopes, each with the feat's work branch, the feat's `planned.dive` link (its state kept if a doc links it already), and its name, `<last 6 hex of its id>.<feat name>`, as jump names a dive, replacing any crud gave it but `<feat name>.<last 6 hex of its id>`, the name dives were minted with before they went hex first, which it keeps (dive-name-hex-first); a dive whose `meta.feat` changed has its scopes replaced by the new feat's, its link moved there from the docs that held it, and is renamed after it, hex first (dive-names-derived). Its other scope entries, its kind's canonical one among them, are kept.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0f07508a3987c47eef04568.ts](../src/i01a1c72ba0f07508a3987c47eef04568.ts)\n- `before crud dive`: [impl](../src/i98e9ab6e1535570abad65bf95895aa3d.ts), [tests](../src/i98e9ab6e1535570abad65bf95895aa3d.test.ts)\n- `after crud dive`: [impl](../src/i7c5c26ef056c5803a6607b86db00c4d0.ts), [tests](../src/i7c5c26ef056c5803a6607b86db00c4d0.test.ts)\n", "body": "# Dive shape\n\n## Usage\n\nThe dive kind links this gate `crud.gate` (see core's crud-gates), so a dive made or changed by crud keeps the shape jump gives one it mints: `meta.feat` names its feat (or, with none, the doc that already links it), its scopes are its feat's, and its feat links it `planned.dive`, the state link legacy nosedive wrote (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md), Shape). A dive can so be minted with crud, briefed in its body, and jumped later by anyone.\n\n- **Before**: an edit that changes a dive's name is refused: its feat names it, and its gist says what it is for. A drop of a dive that is not over, its link neither landed nor bailed, with a `diver` or a `packer` or its link jumped or packed, is refused: jump it and finish it, landing or bailing it; one never jumped, or over, goes, once core finds its feat records it (drops-recorded). A change of `meta.feat` is refused once the dive was jumped, having a `diver`, a `packer` or a link that is not `planned.dive`: its branches and refs are its feat's.\n- **After**: a dive minted, or a doc made a dive, gets its feat's repo scopes, each with the feat's work branch, the feat's `planned.dive` link (its state kept if a doc links it already), and its name, `<last 6 hex of its id>.<feat name>`, as jump names a dive, replacing any crud gave it but `<feat name>.<last 6 hex of its id>`, the name dives were minted with before they went hex first, which it keeps (dive-name-hex-first); a dive whose `meta.feat` changed has its scopes replaced by the new feat's, its link moved there from the docs that held it, and is renamed after it, hex first (dive-names-derived). Its other scope entries, its kind's canonical one among them, are kept.\n\n## Code\n\n- Entrypoint: [src/i01a1c72ba0f07508a3987c47eef04568.ts](../src/i01a1c72ba0f07508a3987c47eef04568.ts)\n- `before crud dive`: [impl](../src/i98e9ab6e1535570abad65bf95895aa3d.ts), [tests](../src/i98e9ab6e1535570abad65bf95895aa3d.test.ts)\n- `after crud dive`: [impl](../src/i7c5c26ef056c5803a6607b86db00c4d0.ts), [tests](../src/i7c5c26ef056c5803a6607b86db00c4d0.test.ts)" }, "01a1cb89-3807-7929-8b9f-a95284af753a": { "kind": "function", "name": "legacy-dives-restored", "gist": "Gives a legacy hero an earlier legacy-dives converted its dives' state links back, so legacy's loop finds them again", "usages": [], "top": true, "text": "---\nkind: migration\nid: 01a1cb89-3807-7929-8b9f-a95284af753a\nname: legacy-dives-restored\ngist: \"Gives a legacy hero an earlier legacy-dives converted its dives' state links back, so legacy's loop finds them again\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 39c33321d487\nmeta:\n  after: 01a1b31b-e41b-7a31-a591-8d04ef4091be\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-850c-7ba3-ba5b-8ac41a7b6b11:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n---\n\n# Legacy dives restored\n\nUndoes, for a hero that wears legacy and not work, what [legacy-dives](01a1b31b-dffb-7398-9a9e-8bcd257167b5.md) did before it was retired (legacy-keeps-dive-shape). That version rewrote each state link to `dives.feat` and gave landed and bailed dives `meta.outcome`, a shape legacy's loop no longer reads: such dives are not listed as open, and jump refuses them as hanging from no doc. Legacy's loop at that version minted dives the same way, so they are restored too.\n\n- **Links**: a `dives.feat` link, from whatever doc in the hero's roots holds it, to a dive of legacy's (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)) becomes the state link the dive's meta says it stood for, its other attributes kept: `landed.dive` or `bailed.dive` by `meta.outcome`; else `jumped.dive` when it has a diver, `packed.dive` when it has a packer, and `planned.dive` when it has neither. A `dives.feat` link to any other doc is left as it is.\n- **Outcome**: each dive so relinked loses `meta.outcome`, which the loop neither reads nor writes.\n- **Left as they are**: the dive's kind and canonical entry, which legacy's dive kind accepts; `meta.feat`, which the loop reads first; and a `## Legacy meta` section, whose values legacy-dives wrote as text. Where several docs linked one dive by different states, legacy-dives kept only the strongest, which every link now takes, as the loop moves them.\n\nA hero that wears work is left as it is, since work's loop reads `dives.feat`, and so is a hero with no such link, so it says nothing on a fresh hero, and run again it finds nothing to change. A hero that has already seeded gets it with `nosedive seed --migrate`. It says how many dives and docs it changed.\n\n## Code\n\n- Function: [src/i01a1cb89380779298b9fa95284af753a.ts](../src/i01a1cb89380779298b9fa95284af753a.ts)\n- Tests: [src/i01a1cb89380779298b9fa95284af753a.test.ts](../src/i01a1cb89380779298b9fa95284af753a.test.ts)\n", "body": "# Legacy dives restored\n\nUndoes, for a hero that wears legacy and not work, what [legacy-dives](01a1b31b-dffb-7398-9a9e-8bcd257167b5.md) did before it was retired (legacy-keeps-dive-shape). That version rewrote each state link to `dives.feat` and gave landed and bailed dives `meta.outcome`, a shape legacy's loop no longer reads: such dives are not listed as open, and jump refuses them as hanging from no doc. Legacy's loop at that version minted dives the same way, so they are restored too.\n\n- **Links**: a `dives.feat` link, from whatever doc in the hero's roots holds it, to a dive of legacy's (see [dive](../.nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md)) becomes the state link the dive's meta says it stood for, its other attributes kept: `landed.dive` or `bailed.dive` by `meta.outcome`; else `jumped.dive` when it has a diver, `packed.dive` when it has a packer, and `planned.dive` when it has neither. A `dives.feat` link to any other doc is left as it is.\n- **Outcome**: each dive so relinked loses `meta.outcome`, which the loop neither reads nor writes.\n- **Left as they are**: the dive's kind and canonical entry, which legacy's dive kind accepts; `meta.feat`, which the loop reads first; and a `## Legacy meta` section, whose values legacy-dives wrote as text. Where several docs linked one dive by different states, legacy-dives kept only the strongest, which every link now takes, as the loop moves them.\n\nA hero that wears work is left as it is, since work's loop reads `dives.feat`, and so is a hero with no such link, so it says nothing on a fresh hero, and run again it finds nothing to change. A hero that has already seeded gets it with `nosedive seed --migrate`. It says how many dives and docs it changed.\n\n## Code\n\n- Function: [src/i01a1cb89380779298b9fa95284af753a.ts](../src/i01a1cb89380779298b9fa95284af753a.ts)\n- Tests: [src/i01a1cb89380779298b9fa95284af753a.test.ts](../src/i01a1cb89380779298b9fa95284af753a.test.ts)" } };
var kinds = { "dive": { "schema": { "type": "object", "properties": { "diver": { "type": ["string", "null"] }, "packer": { "type": ["string", "null"] }, "feat": { "type": "string" }, "effort": { "type": "string" } } }, "next": ["planned.dive", "jumped.dive", "packed.dive", "landed.dive", "bailed.dive"], "links": [{ "kb/01a1c72b-a0d2-7947-83de-8f2dd490283a.md": { "rel": "turn.gate" } }, { "kb/01a1c72b-a0f0-7508-a398-7c47eef04568.md": { "rel": "crud.gate" } }], "id": "01a1c72b-a065-7e5b-9c4f-271115cffbe5", "file": ".nosedive/kinds/01a1c72b-a065-7e5b-9c4f-271115cffbe5.md", "digest": "41712191d445", "dropWhen": "It was jumped and is over, its link `landed.dive` or `bailed.dive`; and what its log learned is kept where it lasts: each decision made and each lesson worth keeping recorded on the durable doc it concerns, the feature or area its feat works toward, never only in the dive, whose log goes with it. A bailed dive's reason is such a lesson when the next attempt needs it, as a slice found too big to review. One held or packed is not dropped: jump it and finish it. Whoever drops it, having read it, records what it completed on the doc that links it, `nosedive crud <linking doc> --section:Dropped.<dive> -`, then `nosedive crud --drop <dive>`, which takes the state link with it, as `meta.next` declares it (drop-takes-declared-links).", "version": "b74024c8d55135b94838bda094744e7ad8047caf", "published": true } };
var index = {
  "b5d65135-bbaa-5808-89ae-24a2f5ac6804": "01a1b129-c081-79e5-abdc-c058f6a359a4",
  "b23304d2-003e-53f5-a1cb-507cf3bca5fc": "01a1b129-c3b8-7671-9f55-21826bd5a66b",
  "fea9a36d-a19e-56dd-af02-778c0318da23": "01a1b129-c702-79ed-9ccc-ed39e882d827",
  "749fdbba-35ff-5b1b-b42a-b4844029519f": "01a1b129-ca53-7ef6-9736-26eeeaebc87c",
  "8398d8f7-fd2e-5975-8ede-68a93a3d6874": "01a1b130-78b1-7322-9a3b-1e21f7e12c20",
  "fbc87887-e897-5cdc-a26a-2947f8605158": "01a1b131-e017-7e7f-8518-b309634ebbd8",
  "ede43d26-6d2f-5e30-bb9d-2cf6686cf599": "01a1b131-e194-7fa5-b316-b390a3be2415",
  "f3c1884d-414e-5062-b16b-82fe521bc9fc": "01a1b131-e31f-7b32-9bc1-c4389343491a",
  "498f433f-715d-56b2-b2a3-878e337b30f4": "01a1b137-70be-7a7a-95b5-e4ae9eed1407",
  "0d6825cc-6bff-583b-a4f9-6f690e052f4f": "01a1b31b-dffb-7398-9a9e-8bcd257167b5",
  "59132e27-4690-574f-ae34-2a3c89ac2847": "01a1b31b-e41b-7a31-a591-8d04ef4091be",
  "e4da8297-17ff-5589-b854-a82389b53f26": "01a1c72b-a06b-7cfd-9e5f-710dc60e4a37",
  "bfc50fb8-5c54-5643-a3a4-03304e84c2cb": "01a1c72b-a079-7d52-baaa-1a9bba46a525",
  "823c0d9e-6c2f-5297-a8f3-99145a69ca03": "01a1c72b-a088-715d-a4fe-90ea388bb097",
  "126b4f41-8449-5a8d-b505-d8015657c25d": "01a1c72b-a097-7036-ae1a-496002396328",
  "55dff26b-df56-5351-b51d-3ef56cb5a522": "01a1c72b-a0a6-7a64-836f-167c23ffa097",
  "73a6f90a-8b29-5018-b55b-e55a15614525": "01a1c72b-a0b5-7a0c-80e3-fdd641d001a8",
  "0b7e647d-379c-5040-833d-62a9ba138fb2": "01a1c72b-a0c3-7d27-a058-e908481307c3",
  "405a3a42-e3bd-577c-920b-1a09ef22d2fb": "01a1c72b-a0d2-7947-83de-8f2dd490283a",
  "7a4a0af2-07bc-511c-a7bc-46d95b9c2bf9": "01a1c72b-a0e1-7487-8930-a64e361790a6",
  "4890d4ee-5431-5be6-8e0b-6b0479d30617": "01a1c72b-a0f0-7508-a398-7c47eef04568",
  "3941fe17-16b0-5e82-9af2-f4004a6f9155": "01a1cb89-3807-7929-8b9f-a95284af753a",
  "59e1ce49-aebc-5291-ae1f-09f2ee039aa6": i01a1b129c08179e5abdcc058f6a359a4,
  "1be63048-289c-51c3-a54b-b6333dfdf60d": i01a1b129c3b876719f5521826bd5a66b,
  "b3d159c5-0fd2-531d-a8f2-4387dbbaf6e6": i01a1b129c70279ed9ccced39e882d827,
  "9c07f3e4-60ce-55de-9b90-8cf1adf2f430": i01a1b129ca537ef6973626eeeaebc87c,
  "8b94cf0c-6e82-5d11-b94c-2e6a97a89e26": i01a1b13078b173229a3b1e21f7e12c20,
  "c3be0d40-68ce-5b28-bccb-fba956c89d1b": i01a1b131e0177e7f8518b309634ebbd8,
  "2920a673-e717-5134-83fa-05d13fda4ca3": i01a1b131e1947fa5b316b390a3be2415,
  "2fce341d-cbc0-518c-8286-24b0b42c0147": i01a1b131e31f7b329bc1c4389343491a,
  "07b436de-b2d7-5cc4-bd79-ea061c89354f": i01a1b13770be7a7a95b5e4ae9eed1407,
  "05de486d-a817-598d-ae99-719cf817ab31": i01a1b31bdffb73989a9e8bcd257167b5,
  "6d7613f1-4da0-5d1e-9c07-6856a3cc988d": i01a1b31be41b7a31a5918d04ef4091be,
  "b95c6981-3d2f-5c10-a547-7b541cc971fe": i01a1c72ba06b7cfd9e5f710dc60e4a37,
  "51084bba-bd10-50da-9e6f-1344173ecbfa": i01a1c72ba0797d52baaa1a9bba46a525,
  "0bb5d3f6-fda7-5866-8471-08416ac4f23e": i01a1c72ba088715da4fe90ea388bb097,
  "ab7b7fec-ae53-5568-a2da-3973f04f338e": i01a1c72ba0977036ae1a496002396328,
  "21f207eb-5754-54f6-8a5c-97c9ea1134c7": i01a1c72ba0a67a64836f167c23ffa097,
  "56f2b344-5224-5f24-8491-216a75b6d0b4": i01a1c72ba0b57a0c80e3fdd641d001a8,
  "e813262f-3782-570a-962e-a695b38140fc": i01a1c72ba0c37d27a058e908481307c3,
  "ceec0ec6-64da-5cf1-82c8-054c957ffde3": i01a1c72ba0d2794783de8f2dd490283a,
  "083f18c0-93a8-5c67-946f-e6d8d166de09": i01a1c72ba0e174878930a64e361790a6,
  "64194ed3-c09e-5513-8c98-afe33cfe4825": i01a1c72ba0f07508a3987c47eef04568,
  "b1b9ad20-0588-572f-b852-81f0a002c313": i01a1cb89380779298b9fa95284af753a
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
