import { createRequire as __nosediveRequire } from "node:module"; const require = __nosediveRequire(import.meta.url);

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/if8cb5f3d6de95b8ea88d25f745af7b03.ts
import { existsSync as existsSync2 } from "node:fs";
import { relative as relative2 } from "node:path";

// cape:nosedive-core
var from = globalThis.__nosediveCore;
if (from?.id !== "59db5434-21ad-5cd8-85a9-c6bc9652e5c2") throw new Error("nosedive-work was built against other capes than these: run `nosedive seed`");
var changed = from.named["changed"];
var isDurable = from.named["isDurable"];
var CORE_OWNER = from.named["CORE_OWNER"];
var hasCoAuthor = from.named["hasCoAuthor"];
var isCoAuthor = from.named["isCoAuthor"];
var featTree = from.named["featTree"];
var coAuthor = from.named["coAuthor"];
var featRoot = from.named["featRoot"];
var pinOf = from.named["pinOf"];
var i01a138b2b8ee703cab227b010f588b6a = from.index["c9249a29-3058-57d9-9088-7a2dc4c721ef"];
var i01a13c760de87562b4738946402010b8 = from.index["f8f61252-af51-5bf4-bb1f-a78e24171188"];
var i01a13dee4b1d78f7a699c3777bf63587 = from.index["7937b993-8324-5663-a522-10cc7afaa949"];
var i01a147171f057d019118aaa1f269f5fd = from.index["826cf4c9-5538-517e-85c8-9e039fe3d7e8"];
var i01a18e2a3b4b798d98068d4778a158e6 = from.index["389eeae8-6329-52b9-9530-265442362bc6"];
var i01a1901e263b7209a4b5f39a71c568b3 = from.index["d33f0545-ff49-51c6-b84d-338cc20fa0a0"];
var i01a19005c31172b68871d4842563d310 = from.index["50c0a8a4-8e77-5082-846f-7b0098c3c68d"];
var i01a13354845c7253a55b60bba87285d8 = from.index["3bd61b42-315b-5536-983f-042110cd072c"];
var i01a13354894273b1be253424511ba82c = from.index["2a4c87f5-1c35-5e48-a615-1c0bf1527eb9"];
var i01a1335483aa776cb84df698b04adc06 = from.index["12807794-bf3b-5b39-8b66-f25107612b52"];
var i01a1335485c67c95b7efdf2f0e03cfd6 = from.index["f2eac858-1ad1-5f3d-8250-9aea0e32f9cd"];
var i01a141f869c07c4da8288927a559c8ae = from.index["a39653d9-57b3-5893-b3d3-e8289922b60d"];
var i01a1335480c776ba8945020d0af333eb = from.index["1bf519cb-9152-524b-8ad3-b2fb7b03593b"];
var i01a15baf13e27bd88dc880d4871f2210 = from.index["480b043c-09ca-57c6-90cb-12cc9d55cac3"];

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb27be9786f91885a2f0a0fa08e.ts
import { spawnSync as spawnSync2 } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { dirname, isAbsolute, join, relative } from "node:path";

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/node_modules/fflate/esm/index.mjs
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

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb27f1471549b097c2e37805132.ts
import { spawnSync } from "node:child_process";
function i01a15bb27f1471549b097c2e37805132(cwd, ...args) {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" });
  return { ok: result.status === 0, text: (result.status === 0 ? result.stdout : result.stderr || result.stdout || result.error?.message || "").trim() };
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb27be9786f91885a2f0a0fa08e.ts
var WORK_ID = "01a15bb1-da9e-7d2d-aa82-5ee97257adc6";
function isDive(doc) {
  const kind = i01a18e2a3b4b798d98068d4778a158e6(doc);
  return kind.owner === WORK_ID && kind.name === "dive";
}
var REBUILDABLE = /(^|\/)(node_modules|dist|build)\//;
function emailOf(hero) {
  const email = i01a15bb27f1471549b097c2e37805132(hero.dir, "config", "user.email").text;
  if (!email) throw new Error("git has no user.email here, and a dive is held by one: set it with `git config user.email`");
  return email;
}
function heroBranch(hero) {
  const on = i01a15bb27f1471549b097c2e37805132(hero.dir, "symbolic-ref", "-q", "--short", "HEAD");
  if (!on.ok) throw new Error("the hero is detached, so a dive's work has no branch to be named after: put the hero on a branch first");
  return on.text;
}
function tokenOf(hero, branch) {
  const email = emailOf(hero);
  const top = i01a15bb27f1471549b097c2e37805132(hero.dir, "rev-parse", "--show-toplevel").text;
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
  return i01a15bb27f1471549b097c2e37805132(hero.dir, "for-each-ref", "--format=%(refname:short)", "refs/heads/").text.split("\n").filter(Boolean);
}
function homeOf(hero, token) {
  return localBranches(hero).find((branch) => !parseDiveBranch(branch) && tokenOf(hero, branch) === token);
}
function upstreamOf(hero, branch) {
  const remote = i01a15bb27f1471549b097c2e37805132(hero.dir, "config", `branch.${branch}.remote`).text;
  const merge = i01a15bb27f1471549b097c2e37805132(hero.dir, "config", `branch.${branch}.merge`).text;
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
  i01a15bb27f1471549b097c2e37805132(hero.dir, "fetch", "-q", up.remote, `+refs/heads/${up.name}:${up.ref}`);
  i01a15bb27f1471549b097c2e37805132(hero.dir, "fetch", "-q", "--prune", "origin", "+refs/nosedive/*:refs/nosedive/*");
}
function syncHome(hero, home, up) {
  const ahead = i01a15bb27f1471549b097c2e37805132(hero.dir, "rev-list", "--count", `${up.ref}..refs/heads/${home}`).text;
  if (ahead !== "0") throw new Error(`${home} holds ${ahead} commit${ahead === "1" ? "" : "s"} ${up.remote}/${up.name} lacks: push ${ahead === "1" ? "it" : "them"} first`);
  if (i01a15bb27f1471549b097c2e37805132(hero.dir, "rev-list", "--count", `refs/heads/${home}..${up.ref}`).text === "0") return;
  const checkedOut = i01a15bb27f1471549b097c2e37805132(hero.dir, "symbolic-ref", "-q", "--short", "HEAD").text === home;
  if (checkedOut) i01a15bb27f1471549b097c2e37805132(hero.dir, "merge", "-q", "--ff-only", up.ref);
  else i01a15bb27f1471549b097c2e37805132(hero.dir, "update-ref", `refs/heads/${home}`, up.ref);
}
function fetchAll(dir) {
  i01a15bb27f1471549b097c2e37805132(dir, "fetch", "-q", "--prune", "origin", "+refs/heads/*:refs/remotes/origin/*", "+refs/nosedive/*:refs/nosedive/*");
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
  return i01a15bb27f1471549b097c2e37805132(dir, "ls-remote", "origin", "refs/nosedive/*").text.split("\n").filter(Boolean).map((line) => {
    const [sha, ref] = line.split("	");
    return { ref, sha };
  }).filter(({ ref }) => isDiveRef(ref, diveId)).sort((a, b) => Number(i01a15bb27f1471549b097c2e37805132(dir, "log", "-1", "--format=%ct", b.sha).text || 0) - Number(i01a15bb27f1471549b097c2e37805132(dir, "log", "-1", "--format=%ct", a.sha).text || 0));
}
function deleteRefs(dir, refs) {
  for (const ref of refs) {
    i01a15bb27f1471549b097c2e37805132(dir, "push", "-q", "origin", `:${ref}`);
    i01a15bb27f1471549b097c2e37805132(dir, "update-ref", "-d", ref);
  }
}
function unpushed(dir) {
  return i01a15bb27f1471549b097c2e37805132(dir, "log", "--format=%h %s", "HEAD", "--not", "--remotes=origin", "--glob=refs/nosedive/*").text.split("\n").filter(Boolean);
}
function orphan(hero, dir) {
  const commits = unpushed(dir);
  if (commits.length === 0) return void 0;
  const ref = `refs/nosedive/${hero.id}/orphans/${i01a15bb27f1471549b097c2e37805132(dir, "rev-parse", "HEAD").text}`;
  const pushed = i01a15bb27f1471549b097c2e37805132(dir, "push", "-q", "origin", `HEAD:${ref}`);
  if (!pushed.ok) throw new Error(`cannot push ${dir}'s commits to ${ref}: ${pushed.text}`);
  i01a15bb27f1471549b097c2e37805132(dir, "update-ref", ref, "HEAD");
  return { ref, commits };
}
function trunkOf(repo, dir) {
  const trunk = repo.fm.meta?.trunk;
  if (typeof trunk === "string") return trunk;
  return existsSync(dir) && i01a15bb27f1471549b097c2e37805132(dir, "symbolic-ref", "-q", "--short", "refs/remotes/origin/HEAD").text.replace(/^origin\//, "") || "main";
}
function baseOf(scope) {
  const branch = `refs/remotes/origin/${scope.branch}`;
  return scope.branch && i01a15bb27f1471549b097c2e37805132(scope.dir, "rev-parse", "--verify", "-q", branch).ok ? branch : `refs/remotes/origin/${scope.trunk}`;
}
function stamp(dir, range, trailers) {
  const shas = i01a15bb27f1471549b097c2e37805132(dir, "rev-list", "--reverse", "--topo-order", ...range).text.split("\n").filter(Boolean);
  const made = /* @__PURE__ */ new Map();
  for (const sha of shas) {
    const [an, ae, ad, cn, ce, cd, parents, tree] = i01a15bb27f1471549b097c2e37805132(dir, "log", "-1", "--format=%an%x00%ae%x00%aI%x00%cn%x00%ce%x00%cI%x00%P%x00%T", sha).text.split("\0");
    const message = spawnSync2("git", ["log", "-1", "--format=%B", sha], { cwd: dir, encoding: "utf8" }).stdout;
    const given = trailers.flatMap((trailer) => isCoAuthor(trailer) ? hasCoAuthor(message) ? [] : ["--if-exists", "add", "--trailer", trailer] : ["--if-exists", "doNothing", "--trailer", trailer]);
    const args = ["interpret-trailers", ...given];
    const stamped = spawnSync2("git", args, { cwd: dir, encoding: "utf8", input: message }).stdout;
    const env = { ...process.env, GIT_AUTHOR_NAME: an, GIT_AUTHOR_EMAIL: ae, GIT_AUTHOR_DATE: ad, GIT_COMMITTER_NAME: cn, GIT_COMMITTER_EMAIL: ce, GIT_COMMITTER_DATE: cd };
    const parentArgs = (parents ?? "").split(" ").filter(Boolean).flatMap((parent) => ["-p", made.get(parent) ?? parent]);
    const result = spawnSync2("git", ["commit-tree", tree, ...parentArgs], { cwd: dir, encoding: "utf8", input: stamped, env });
    if (result.status !== 0) throw new Error(`cannot stamp ${sha.slice(0, 7)} in ${dir}: ${result.stderr.trim()}`);
    made.set(sha, result.stdout.trim());
  }
  const last = shas.at(-1);
  if (last) i01a15bb27f1471549b097c2e37805132(dir, "update-ref", "HEAD", made.get(last));
  return shas.length;
}
function keepable(hero, dir) {
  const isSpared = spared(hero, dir);
  return i01a15bb27f1471549b097c2e37805132(dir, "ls-files", "--others", "--ignored", "--exclude-standard").text.split("\n").filter((file) => file && !REBUILDABLE.test(file) && !isSpared(file));
}
function spared(hero, dir) {
  const inside = [i01a13dee4b1d78f7a699c3777bf63587(dir)?.workspace, hero.workspace].flatMap((workspace) => {
    if (!workspace) return [];
    const path = relative(dir, workspace).replace(/\\/g, "/");
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
  const files = existsSync(scope.dir) ? keepable(hero, scope.dir) : [];
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
  if (existsSync(pack)) {
    for (const [file, bytes] of Object.entries(unzipSync(new Uint8Array(readFileSync(pack))))) {
      mkdirSync(dirname(join(scope.dir, file)), { recursive: true });
      writeFileSync(join(scope.dir, file), bytes);
    }
  }
  return orphaned;
}
function newestPack(hero, name2) {
  const dir = packsDir(hero);
  if (!existsSync(dir)) return void 0;
  return readdirSync(dir).filter((feat) => feat !== "orphans").map((feat) => join(dir, feat, `${name2}.zip`)).filter((path) => existsSync(path)).sort((a, b) => statSync(b).mtimeMs - statSync(a).mtimeMs)[0];
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
  const entries = Array.isArray(doc.fm.scopes) ? doc.fm.scopes : [];
  for (const entry of entries) {
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
function featOf(dive) {
  return String(dive.fm.meta?.feat);
}
function metaOf(dive) {
  const meta = dive.fm.meta ?? {};
  const text = (value) => typeof value === "string" ? value : void 0;
  return { diver: text(meta.diver), packer: text(meta.packer), outcome: text(meta.outcome) };
}
function openDives(hero) {
  const walk = i01a1901e263b7209a4b5f39a71c568b3(hero);
  return [...walk.feats.keys()].flatMap((id2) => {
    const doc = walk.docs.get(id2);
    return doc && isDive(doc) && !metaOf(doc).outcome ? [doc] : [];
  });
}
function durableFeat(hero, dive, capes) {
  const tree = featTree(hero);
  const queue = [featOf(dive)];
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
  return featOf(dive);
}
function keyOf(hero, doc) {
  return relative(hero.dir, doc.path).replace(/\\/g, "/");
}
function scopesOf(hero, doc, token) {
  const id2 = String(doc.fm.id);
  return readScopes(hero, doc).map((entry) => {
    const repo = repoDoc(hero, entry.repoId);
    const name2 = String(repo.fm.name);
    const dir = i01a13c760de87562b4738946402010b8(hero, name2);
    const there = existsSync(dir);
    const ours = there && (entry.branch ? i01a15bb27f1471549b097c2e37805132(dir, "symbolic-ref", "-q", "--short", "HEAD").text === diveBranch(token, id2) : true);
    return { ...entry, repo, name: name2, dir, trunk: trunkOf(repo, dir), ours };
  });
}
function i01a15bb27be9786f91885a2f0a0fa08e(hero, _ctx, id2) {
  const branch = i01a15bb27f1471549b097c2e37805132(hero.dir, "symbolic-ref", "-q", "--short", "HEAD").text;
  const parsed = parseDiveBranch(branch);
  const doc = parsed && heroDoc(hero, parsed.diveId);
  if (!parsed || !doc || !isDive(doc)) throw new Error("the hero is on no dive branch, so no dive is on deck: `nosedive jump <feat or dive>` picks one up");
  const name2 = String(doc.fm.name);
  if (id2 && id2 !== parsed.diveId && id2 !== name2) throw new Error(`the dive on deck is ${name2} (${parsed.diveId}), not ${id2}`);
  const { diver, outcome } = metaOf(doc);
  if (outcome) throw new Error(`dive ${name2} is over: it ${outcome}`);
  if (diver?.split("#")[1] !== parsed.token) throw new Error(`dive ${name2} is ${diver ? `held by ${diver.split("#")[0]}` : "held by nobody"} under another token than ${branch}'s, as a copied branch's would be`);
  const home = homeOf(hero, parsed.token);
  if (!home) throw new Error(`dive ${name2}'s home, the branch it was jumped from, is gone: recreate it, as \`git branch <name> <commit>\``);
  return { hero, doc, feat: heroDoc(hero, featOf(doc)), scopes: scopesOf(hero, doc, parsed.token), branch, token: parsed.token, home };
}
function readOnlyRefusals(dive) {
  return dive.scopes.filter((scope) => !scope.branch && scope.ours).flatMap((scope) => {
    if (unpushed(scope.dir).length > 0) return [`${scope.name} is read-only, yet has commits origin lacks`];
    if (i01a15bb27f1471549b097c2e37805132(scope.dir, "status", "--porcelain").text) return [`${scope.name} is read-only, yet has uncommitted changes`];
    return [];
  });
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
  const moved = puts.flatMap((put) => {
    const newest = observed.get(put.key)[0];
    return newest?.sha === put.recorded ? [] : [`${put.name}: ${newest ? `${newest.ref} is at ${newest.sha.slice(0, 7)}` : "the dive's ref is gone"}, which this dive did not see`];
  });
  if (moved.length > 0) throw new Error(`the dive's refs moved under it, so nothing was put down:
  ${moved.join("\n  ")}`);
  for (const put of puts) {
    if (i01a15bb27f1471549b097c2e37805132(put.dir, "status", "--porcelain").text) {
      i01a15bb27f1471549b097c2e37805132(put.dir, "add", "-A");
      const committed = i01a15bb27f1471549b097c2e37805132(put.dir, "commit", "-q", "-m", i01a19005c31172b68871d4842563d310(wip(dive.doc), version2));
      if (!committed.ok) throw new Error(`cannot commit ${put.name}'s uncommitted work: ${committed.text}`);
    }
    put.commits = i01a15bb27f1471549b097c2e37805132(put.dir, "log", "--format=%h %s", put.base + "..HEAD").text.split("\n").filter(Boolean);
    const refs = observed.get(put.key);
    const leases = refs.flatMap(({ ref, sha }) => [`--force-with-lease=${ref}:${sha}`, ...ref === own && put.commits.length > 0 ? [] : [`:${ref}`]]);
    if (put.commits.length > 0) {
      if (!refs.some(({ ref }) => ref === own)) leases.push(`--force-with-lease=${own}:`);
      leases.push(`HEAD:${own}`);
    }
    if (leases.length > 0) {
      const pushed = i01a15bb27f1471549b097c2e37805132(put.dir, "push", "-q", "--atomic", "origin", ...leases);
      if (!pushed.ok) throw new Error(`cannot push ${put.name}'s work to ${own}: ${pushed.text}`);
    }
    for (const { ref } of refs) if (ref !== own) i01a15bb27f1471549b097c2e37805132(put.dir, "update-ref", "-d", ref);
    if (put.commits.length > 0) {
      put.sha = i01a15bb27f1471549b097c2e37805132(put.dir, "rev-parse", "HEAD").text;
      i01a15bb27f1471549b097c2e37805132(put.dir, "update-ref", own, put.sha);
    } else i01a15bb27f1471549b097c2e37805132(put.dir, "update-ref", "-d", own);
  }
  for (const scope of dive.scopes.filter((each) => each.ours)) packIgnored(hero, featOf(dive.doc), scope);
  for (const scope of writable) {
    const base = i01a15bb27f1471549b097c2e37805132(scope.dir, "merge-base", "HEAD", baseOf(scope)).text || baseOf(scope);
    const isSpared = spared(hero, scope.dir);
    const ignored = i01a15bb27f1471549b097c2e37805132(scope.dir, "ls-files", "--others", "--ignored", "--exclude-standard", "--directory").text.split("\n").filter((path) => path && !isSpared(path));
    i01a15bb27f1471549b097c2e37805132(scope.dir, "checkout", "-q", "--detach", base);
    if (ignored.length > 0) i01a15bb27f1471549b097c2e37805132(scope.dir, "clean", "-q", "-f", "-d", "--", ...ignored);
    i01a15bb27f1471549b097c2e37805132(scope.dir, "branch", "-q", "-D", dive.branch);
  }
  const switched = i01a15bb27f1471549b097c2e37805132(hero.dir, "checkout", "-q", home);
  if (!switched.ok) throw new Error(`cannot switch the hero back to ${home}: ${switched.text}`);
  i01a15bb27f1471549b097c2e37805132(hero.dir, "branch", "-q", "-D", dive.branch);
  syncHome(hero, home, up);
  return { puts, refs: new Map(puts.map((put) => [put.key, put.sha])), own };
}
function pushRecord(hero, record) {
  const home = heroBranch(hero);
  const up = homeUpstream(hero, home);
  for (let tries = 0; ; tries++) {
    record();
    const pushed = i01a15bb27f1471549b097c2e37805132(hero.dir, "push", "-q", up.remote, `HEAD:refs/heads/${up.name}`);
    if (pushed.ok) {
      i01a15bb27f1471549b097c2e37805132(hero.dir, "update-ref", up.ref, "HEAD");
      return;
    }
    i01a15bb27f1471549b097c2e37805132(hero.dir, "reset", "-q", "--hard", "HEAD^");
    if (tries === 2) throw new Error(`cannot push the hero's record to ${up.remote}/${up.name}: ${pushed.text}`);
    fetchUpstream(hero, up);
    const rebased = i01a15bb27f1471549b097c2e37805132(hero.dir, "rebase", "-q", up.ref);
    if (!rebased.ok) {
      i01a15bb27f1471549b097c2e37805132(hero.dir, "rebase", "--abort");
      throw new Error(`the hero's work conflicts with ${up.remote}/${up.name} as it moved: ${rebased.text}`);
    }
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb27d7c72258e54d02070189892.ts
function i01a15bb27d7c72258e54d02070189892(hero, doc, change, version2) {
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
  i01a13354894273b1be253424511ba82c(hero.dir, [doc.path, ...change.also ?? []], `${change.action}(${String(doc.fm.name)}): ${change.summary}`, version2);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/if8cb5f3d6de95b8ea88d25f745af7b03.ts
var LISTED = /^(?:.*[\\/])?([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\.md$/i;
async function if8cb5f3d6de95b8ea88d25f745af7b03(args, ctx) {
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
  const deck = parseDiveBranch(on);
  const deckDoc = deck && heroDoc(hero, deck.diveId);
  if (deck && deckDoc && isDive(deckDoc)) {
    if (typeof args.ref === "string" && args.ref !== deck.diveId) throw new Error(`the hero is on dive ${named(deckDoc)}'s branch: pack, land or bail it first`);
    target = deckDoc;
    token = deck.token;
    home = homeOf(hero, token) ?? missingHome(deckDoc);
    mode = "again";
  } else {
    home = on;
    if (i01a15bb27f1471549b097c2e37805132(hero.dir, "status", "--porcelain").text) throw new Error("the hero has uncommitted changes, and jump switches its branch: commit them first (jump-needs-clean-tree)");
    const up = homeUpstream(hero, home);
    fetchUpstream(hero, up);
    syncHome(hero, home, up);
    token = tokenOf(hero, home);
    const holder2 = `${me}#${token}`;
    const open = openDives(hero);
    if (typeof args.ref === "string") {
      const found = heroDoc(hero, args.ref.replace(LISTED, "$1").toLowerCase());
      if (!found) throw new Error(`no doc ${args.ref} in the hero on ${home}`);
      target = found;
    } else {
      const held = open.filter((doc) => metaOf(doc).diver === holder2);
      const free = open.filter((doc) => !metaOf(doc).diver && (metaOf(doc).packer ?? me) === me);
      const waiting = held.length > 0 ? held : free;
      if (waiting.length !== 1) throw new Error(waiting.length === 0 ? "no dive waits for you here: `nosedive jump <feat or dive>` names one" : `${waiting.length} dives wait for you, so name one:
  ${waiting.map(named).join("\n  ")}`);
      target = waiting[0];
    }
    const branches = diveBranches(hero);
    const mine = branches.find((each) => each.diveId === String(target.fm.id));
    if (branches.length > 0 && !mine) throw new Error(`this checkout has dive branch ${branches[0].branch}: switch to it, then pack, land or bail it first`);
    if (mine) {
      const switched = i01a15bb27f1471549b097c2e37805132(hero.dir, "checkout", "-q", mine.branch);
      if (!switched.ok) throw new Error(`cannot put the hero on ${mine.branch}: ${switched.text}`);
      token = mine.token;
      home = homeOf(hero, token) ?? missingHome(target);
      mode = "again";
    } else if (isDive(target)) {
      const meta = metaOf(target);
      if (meta.outcome) throw new Error(`dive ${String(target.fm.name)} is over: it ${meta.outcome}`);
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
      const dives = diveLinks(target);
      if (dives.length > 0) {
        const id2 = String(target.fm.id);
        throw new Error(
          `${String(target.fm.name)} has ${dives.length === 1 ? "a dive" : `${dives.length} dives`} on it (${dives.join(", ")}), so a bare jump would start it over, --sure or not: finish and drop ${dives.length === 1 ? "it" : "them"} first, or plan another dive saying what it does, then jump that:
  nosedive crud work:dive <gist> --meta:feat ${id2} --section:Brief -
  nosedive jump <dive>`
        );
      }
      const off = offFringe(hero, target, ctx);
      if (off && !sure) throw new Error(`${off}, so next does not list it: jump it --sure to start a dive on it anyway (sure-off-fringe)`);
      mode = "record";
    }
  }
  const isDive2 = isDive(target);
  const again = mode !== "record";
  const diveId = isDive2 ? String(target.fm.id) : i01a1335480c776ba8945020d0af333eb();
  const branch = diveBranch(token, diveId);
  const holder = `${me}#${token}`;
  const plan = readScopes(hero, target).map((entry) => {
    const repo = repoDoc(hero, entry.repoId);
    const name2 = String(repo.fm.name);
    const dir = i01a13c760de87562b4738946402010b8(hero, name2);
    const local = entry.branch ? branch : void 0;
    const at2 = existsSync2(dir) ? i01a15bb27f1471549b097c2e37805132(dir, "symbolic-ref", "-q", "--short", "HEAD") : void 0;
    const settled = local ? at2?.text === local : at2 !== void 0 && !at2.ok && again;
    return { ...entry, repo, name: name2, dir, shown: relative2(hero.dir, dir).replace(/\\/g, "/"), local, settled };
  });
  const refused = plan.filter((scope) => existsSync2(scope.dir) && !scope.settled && i01a15bb27f1471549b097c2e37805132(scope.dir, "status", "--porcelain").text).map((scope) => `${scope.shown} has uncommitted changes or untracked files`);
  if (refused.length > 0) throw new Error(`jump would lose work, so nothing moved:
  ${refused.join("\n  ")}`);
  const at = isDive2 ? void 0 : featRoot(hero, String(target.fm.id));
  if (!isDive2) diveKind(hero, ctx);
  const featId = isDive2 ? featOf(target) : String(target.fm.id);
  const lines = [];
  const moved = [];
  for (const scope of plan) {
    if (scope.settled) continue;
    const notes = [];
    if (!existsSync2(scope.dir)) {
      i01a15baf13e27bd88dc880d4871f2210(hero, scope.repo, { out: () => void 0, err: ctx.err });
      fetchAll(scope.dir);
    } else {
      fetchAll(scope.dir);
      const kept = orphan(hero, scope.dir);
      if (kept) notes.push(`its ${kept.commits.length} commit${kept.commits.length === 1 ? "" : "s"} origin lacked kept on ${kept.ref}`);
    }
    const repoTrunk = trunkOf(scope.repo, scope.dir);
    if (scope.local) switchTo(scope.dir, scope.local, scope.branch, repoTrunk);
    else i01a15bb27f1471549b097c2e37805132(scope.dir, "checkout", "-q", "--detach", `refs/remotes/origin/${repoTrunk}`);
    moved.push(scope);
    if (scope.local) {
      const packed = newestRef(scope.dir, diveId);
      if (packed && !i01a15bb27f1471549b097c2e37805132(scope.dir, "merge-base", "--is-ancestor", packed, "HEAD").ok) {
        if (!i01a15bb27f1471549b097c2e37805132(scope.dir, "merge-base", "--is-ancestor", "HEAD", packed).ok) {
          const kept = orphan(hero, scope.dir);
          if (kept) notes.push(`its local commits kept on ${kept.ref}`);
        }
        i01a15bb27f1471549b097c2e37805132(scope.dir, "reset", "-q", "--hard", packed);
      }
      const workBranch = `refs/remotes/origin/${scope.branch}`;
      if (i01a15bb27f1471549b097c2e37805132(scope.dir, "rev-parse", "--verify", "-q", workBranch).ok && !i01a15bb27f1471549b097c2e37805132(scope.dir, "merge-base", "--is-ancestor", workBranch, "HEAD").ok) {
        const rebased = i01a15bb27f1471549b097c2e37805132(scope.dir, "rebase", "-q", workBranch);
        if (!rebased.ok) {
          i01a15bb27f1471549b097c2e37805132(scope.dir, "rebase", "--abort");
          throw new Error(`${scope.name}'s work conflicts with ${scope.branch}, so nothing was recorded: rebase ${scope.local} onto it in ${scope.shown}, then jump ${diveId} again
${rebased.text}`);
        }
        notes.push(`rebased onto ${scope.branch}`);
      }
    }
    const head = i01a15bb27f1471549b097c2e37805132(scope.dir, "rev-parse", "--short", "HEAD").text;
    lines.push(`- ${scope.name}: ${scope.shown} on ${head}${scope.branch ? `, working ${scope.branch}` : ", read-only"}${notes.length > 0 ? `; ${notes.join("; ")}` : ""}`);
  }
  const heroPacked = newestRef(hero.dir, diveId);
  if (mode === "record") {
    const refs = new Map(plan.filter((scope) => scope.local).map((scope) => [scope.repoId, newestRef(scope.dir, diveId)]));
    refs.set(hero.id, heroPacked);
    const replayed = heroPacked ? i01a15bb27f1471549b097c2e37805132(hero.dir, "rev-list", "--count", heroPacked, "--not", `refs/heads/${home}`).text : "0";
    if (replayed !== "0") lines.push(`- hero: ${replayed} commit${replayed === "1" ? "" : "s"} replayed`);
    pushRecord(hero, () => {
      const also = [];
      if (!isDive2) {
        const feat2 = heroDoc(hero, String(target.fm.id));
        mintDive(hero, at, feat2, diveId, ctx);
        also.push(feat2.path);
      }
      const dive2 = heroDoc(hero, diveId);
      if (!dive2 || !isDive(dive2)) throw new Error(`${diveId} is no dive in the hero`);
      const { diver } = metaOf(dive2);
      if (diver && diver !== holder && !bareDiverIs(diver, me)) throw new Error(`dive ${String(dive2.fm.name)} was picked up by ${diver.split("#")[0]} meanwhile`);
      i01a15bb27d7c72258e54d02070189892(hero, dive2, { action: "jump", label: "jumped", summary: `${me} picked it up`, meta: { diver: holder, packer: null }, scopes: scopesWith(hero, dive2, refs), lines: [`${me} picked it up.`, "", ...lines], also }, ctx.capes[0].version);
    });
  }
  if (mode !== "again") {
    i01a15bb27f1471549b097c2e37805132(hero.dir, "branch", "-q", "-f", branch, "HEAD");
    const switched = i01a15bb27f1471549b097c2e37805132(hero.dir, "checkout", "-q", branch);
    if (!switched.ok) throw new Error(`cannot put the hero on ${branch}: ${switched.text}`);
    if (heroPacked && !i01a15bb27f1471549b097c2e37805132(hero.dir, "merge-base", "--is-ancestor", heroPacked, "HEAD").ok) {
      const since = i01a15bb27f1471549b097c2e37805132(hero.dir, "merge-base", heroPacked, "HEAD").text;
      const picked = i01a15bb27f1471549b097c2e37805132(hero.dir, "cherry-pick", "--allow-empty", `${since}..${heroPacked}`);
      if (!picked.ok) {
        i01a15bb27f1471549b097c2e37805132(hero.dir, "cherry-pick", "--abort");
        throw new Error(`the dive's packed hero work conflicts with ${home}, so the hero is on ${branch} without it: it stays on ${heroPacked.slice(0, 7)}, to cherry-pick by hand
${picked.text}`);
      }
    }
  }
  const dive = heroDoc(hero, diveId);
  for (const scope of moved) {
    const orphaned = swapIgnored(hero, featId, scope);
    if (orphaned) ctx.out(`${scope.name}: ignored files from other work kept in ${relative2(hero.dir, orphaned).replace(/\\/g, "/")}`);
  }
  for (const dir of [hero.dir, ...plan.map((scope) => scope.dir)]) {
    if (isWip(dive, i01a15bb27f1471549b097c2e37805132(dir, "log", "-1", "--format=%s").text)) i01a15bb27f1471549b097c2e37805132(dir, "reset", "-q", "--mixed", "HEAD^");
  }
  const shown = (path) => relative2(ctx.cwd, path).replace(/\\/g, "/");
  const feat = heroDoc(hero, featId);
  ctx.out(`dive  ${shown(dive.path)}`);
  if (feat) ctx.out(`feat  ${shown(feat.path)}`);
  for (const scope of plan) ctx.out(`${scope.name}  ${shown(scope.dir)}`);
}
function missingHome(dive) {
  throw new Error(`dive ${String(dive.fm.name)}'s home, the branch it was jumped from, is gone: recreate it, as \`git branch <name> <commit>\``);
}
function diveLinks(doc) {
  const links = Array.isArray(doc.fm.links) ? doc.fm.links : [];
  return links.flatMap((entry) => Object.entries(entry ?? {}).filter(([, value]) => value?.rel === "dives.feat").map(([target]) => target));
}
function offFringe(hero, doc, ctx) {
  const kind = i01a18e2a3b4b798d98068d4778a158e6(doc, hero.id);
  const spelling = kind.owner === hero.id ? kind.name : `${kind.owner}:${kind.name}`;
  if (isDurable(i01a147171f057d019118aaa1f269f5fd(spelling, hero, ctx.capes))) return `${String(doc.fm.name)} is durable`;
  const links = Array.isArray(doc.fm.links) ? doc.fm.links : [];
  const children = links.filter((entry) => entry && typeof entry === "object" && Object.values(entry).some((value) => typeof value?.rel === "string" && value.rel.endsWith(".feat") && value.rel !== "parent.feat"));
  if (children.length > 0) return `${String(doc.fm.name)} has ${children.length} child doc${children.length === 1 ? "" : "s"}, dives included, so it is no leaf`;
  return void 0;
}
function newestRef(dir, diveId) {
  const ref = i01a15bb27f1471549b097c2e37805132(dir, "for-each-ref", "--sort=-committerdate", "--format=%(objectname) %(refname)", "refs/nosedive").text.split("\n").find((line) => isDiveRef(line, diveId));
  return ref?.split(" ")[0];
}
function switchTo(dir, local, workBranch, trunk) {
  if (!i01a15bb27f1471549b097c2e37805132(dir, "rev-parse", "--verify", "-q", `refs/heads/${local}`).ok) {
    const start = [`refs/remotes/origin/${workBranch}`, `refs/remotes/origin/${trunk}`].find((ref) => i01a15bb27f1471549b097c2e37805132(dir, "rev-parse", "--verify", "-q", ref).ok);
    i01a15bb27f1471549b097c2e37805132(dir, "branch", "-q", "--no-track", local, start);
  }
  i01a15bb27f1471549b097c2e37805132(dir, "config", `branch.${local}.remote`, "origin");
  i01a15bb27f1471549b097c2e37805132(dir, "config", `branch.${local}.merge`, `refs/heads/${workBranch}`);
  const switched = i01a15bb27f1471549b097c2e37805132(dir, "checkout", "-q", local);
  if (!switched.ok) throw new Error(`cannot put ${dir} on ${local}: ${switched.text}`);
}
function mintDive(hero, dir, feat, id2, ctx) {
  const name2 = `${String(feat.fm.name)}.${id2.slice(-6)}`;
  const scopes = readScopes(hero, feat).map((entry) => ({ [entry.repoId]: entry.branch ? { "work-branch": entry.branch } : {} }));
  const { owner: owner2, pin } = diveKind(hero, ctx);
  if (owner2 !== hero.id) scopes.push({ [owner2]: { canonical: true, ...pin } });
  const minted = i01a141f869c07c4da8288927a559c8ae(dir, { kind: "dive", id: id2, name: name2, gist: `An attempt to complete ${String(feat.fm.name)}`, title: name2, meta: { feat: String(feat.fm.id) } });
  const doc = heroDoc(hero, minted.id);
  doc.yaml.set("scopes", scopes);
  i01a1335483aa776cb84df698b04adc06(doc.path, doc.yaml, doc.body);
  const links = Array.isArray(feat.fm.links) ? feat.fm.links : [];
  feat.yaml.set("links", [...links, { [keyOf(hero, doc)]: { rel: "dives.feat" } }]);
  i01a1335483aa776cb84df698b04adc06(feat.path, feat.yaml, feat.body);
}
function diveKind(hero, ctx) {
  const kind = i01a147171f057d019118aaa1f269f5fd(`${WORK_ID}:dive`, hero, ctx.capes);
  if (!kind) throw new Error("work:dive names no kind here: the hero must wear the work cape");
  return { owner: kind.owner, pin: pinOf(kind, hero) };
}
function bareDiverIs(diver, email) {
  return !diver.includes("#") && diver === email;
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/id0c2bbb0213e5e2881b4bdea31efc027.ts
async function id0c2bbb0213e5e2881b4bdea31efc027(args, ctx) {
  return if8cb5f3d6de95b8ea88d25f745af7b03({ ...args, sure: true }, ctx);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb2736b7eac84a73389e72d9590.ts
async function i01a15bb2736b7eac84a73389e72d9590(call) {
  switch (call.usage) {
    case "uf8cb5f3d6de95b8ea88d25f745af7b03":
      return if8cb5f3d6de95b8ea88d25f745af7b03(call.args, call.ctx);
    case "ud0c2bbb0213e5e2881b4bdea31efc027":
      return id0c2bbb0213e5e2881b4bdea31efc027(call.args, call.ctx);
    default:
      throw new Error(`jump has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i0735c57383365d4ca5395ea24f5b0649.ts
async function i0735c57383365d4ca5395ea24f5b0649(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("pack works in a hero repo, and this is not one");
  const dive = i01a15bb27be9786f91885a2f0a0fa08e(hero, ctx, typeof args.dive === "string" ? args.dive : void 0);
  const me = emailOf(hero);
  const refused = readOnlyRefusals(dive);
  if (refused.length > 0) throw new Error(`read-only scopes hold work with nowhere to go, so nothing was packed:
  ${refused.join("\n  ")}`);
  const { puts, refs, own } = putDown(dive, ctx.capes[0].version);
  const lines = puts.map((put) => put.sha ? `- ${put.name}: ${put.commits.length} commit${put.commits.length === 1 ? "" : "s"} kept on ${own} at ${put.sha.slice(0, 7)}` : `- ${put.name}: no work`);
  const id2 = String(dive.doc.fm.id);
  pushRecord(hero, () => {
    const doc = heroDoc(hero, id2);
    i01a15bb27d7c72258e54d02070189892(hero, doc, { action: "pack", label: "packed", summary: `${me} put it down`, meta: { diver: null, packer: me }, scopes: scopesWith(hero, doc, refs), lines: [`${me} put it down.`, "", ...lines] }, ctx.capes[0].version);
  });
  ctx.out(`packed ${String(dive.doc.fm.name)}${lines.length > 0 ? `
${lines.join("\n")}` : ""}`);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb27501731a9e9c1e41b96c3dde.ts
async function i01a15bb27501731a9e9c1e41b96c3dde(call) {
  switch (call.usage) {
    case "u0735c57383365d4ca5395ea24f5b0649":
      return i0735c57383365d4ca5395ea24f5b0649(call.args, call.ctx);
    default:
      throw new Error(`pack has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/iffc777778a63553ba90babcc038eb748.ts
async function iffc777778a63553ba90babcc038eb748(args, ctx) {
  const reason = String(args.reason ?? "").trim();
  if (!reason) throw new Error("bail needs a reason: --reason <why>");
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("bail works in a hero repo, and this is not one");
  const dive = i01a15bb27be9786f91885a2f0a0fa08e(hero, ctx, typeof args.dive === "string" ? args.dive : void 0);
  const me = emailOf(hero);
  const { puts, refs, own } = putDown(dive, ctx.capes[0].version);
  const lines = [`${me} bailed: ${reason}`, "", ...puts.map((put) => `- ${put.name}: ${put.sha ? `held ${[...put.commits].reverse().join("; ")}, kept on ${own}` : "held no commits"}`)];
  const id2 = String(dive.doc.fm.id);
  pushRecord(hero, () => {
    const doc = heroDoc(hero, id2);
    i01a15bb27d7c72258e54d02070189892(hero, doc, { action: "bail", label: "bailed", summary: reason, meta: { diver: null, outcome: "bailed" }, scopes: scopesWith(hero, doc, refs), lines }, ctx.capes[0].version);
  });
  ctx.out(`bailed ${String(dive.doc.fm.name)}`);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb276d17aa2b4e5dcc260c69c00.ts
async function i01a15bb276d17aa2b4e5dcc260c69c00(call) {
  switch (call.usage) {
    case "uffc777778a63553ba90babcc038eb748":
      return iffc777778a63553ba90babcc038eb748(call.args, call.ctx);
    default:
      throw new Error(`bail has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i2bcf8d7ee2645df5b261ee1b2135d190.ts
import { relative as relative3 } from "node:path";
async function i2bcf8d7ee2645df5b261ee1b2135d190(args, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(ctx.cwd);
  if (!hero?.workspace) throw new Error("land works in a hero repo, and this is not one");
  const dive = i01a15bb27be9786f91885a2f0a0fa08e(hero, ctx, typeof args.dive === "string" ? args.dive : void 0);
  const me = emailOf(hero);
  const id2 = String(dive.doc.fm.id);
  const writable = dive.scopes.filter((scope) => scope.branch && scope.ours);
  const refused = readOnlyRefusals(dive);
  if (i01a15bb27f1471549b097c2e37805132(hero.dir, "status", "--porcelain").text) refused.push("the hero has uncommitted changes: commit them first");
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
    const shown = relative3(hero.dir, scope.dir).replace(/\\/g, "/");
    if (i01a15bb27f1471549b097c2e37805132(scope.dir, "status", "--porcelain").text) refused.push(`${shown} has uncommitted changes: commit them first`);
    const tip2 = i01a15bb27f1471549b097c2e37805132(scope.dir, "ls-remote", "origin", `refs/heads/${scope.branch}`).text.split("	")[0];
    if (tip2) published.set(scope.name, tip2);
    if (tip2 && !i01a15bb27f1471549b097c2e37805132(scope.dir, "merge-base", "--is-ancestor", tip2, "HEAD").ok) {
      i01a15bb27f1471549b097c2e37805132(scope.dir, "fetch", "-q", "origin");
      refused.push(`${scope.branch} in ${scope.name} has moved to ${tip2.slice(0, 7)}, which this dive's work does not contain: pack, then jump ${id2}, which rebases the work onto it`);
    }
  }
  if (refused.length > 0) throw new Error(`nothing was landed:
  ${refused.join("\n  ")}`);
  const trailers = [`Nosedive-Dive: ${id2}`, `Nosedive-Feat: ${durableFeat(hero, dive.doc, ctx.capes)}`, coAuthor(ctx.capes[0].version)];
  const lines = [];
  for (const scope of writable) {
    const base = published.get(scope.name) ?? `refs/remotes/origin/${scope.trunk}`;
    if (i01a15bb27f1471549b097c2e37805132(scope.dir, "rev-list", "--count", `${base}..HEAD`).text === "0") {
      lines.push(`- ${scope.name}: unchanged`);
      continue;
    }
    stamp(scope.dir, ["HEAD", "--not", "--remotes=origin"], trailers);
    const head = i01a15bb27f1471549b097c2e37805132(scope.dir, "rev-parse", "HEAD").text;
    const pushed = i01a15bb27f1471549b097c2e37805132(scope.dir, "push", "-q", "origin", `HEAD:refs/heads/${scope.branch}`);
    if (!pushed.ok) throw new Error(`cannot push ${scope.name} to ${scope.branch}: ${pushed.text}`);
    i01a15bb27f1471549b097c2e37805132(scope.dir, "update-ref", `refs/remotes/origin/${scope.branch}`, head);
    lines.push(`- ${scope.name}: pushed ${head.slice(0, 7)} to ${scope.branch}`);
  }
  const rebased = i01a15bb27f1471549b097c2e37805132(hero.dir, "rebase", "-q", `refs/heads/${home}`);
  if (!rebased.ok) {
    i01a15bb27f1471549b097c2e37805132(hero.dir, "rebase", "--abort");
    throw new Error(`the hero's work conflicts with ${home}; its scopes landed, the hero did not: rebase ${dive.branch} onto ${home}, then land ${id2} again
${rebased.text}`);
  }
  const heroWork = i01a15bb27f1471549b097c2e37805132(hero.dir, "rev-list", "--count", `refs/heads/${home}..HEAD`).text;
  if (heroWork !== "0") {
    stamp(hero.dir, ["HEAD", "--not", `refs/heads/${home}`, "--remotes=origin"], trailers);
    lines.push(`- hero: ${heroWork} commit${heroWork === "1" ? "" : "s"} onto ${home}`);
  }
  const tip = i01a15bb27f1471549b097c2e37805132(hero.dir, "rev-parse", "HEAD").text;
  i01a15bb27f1471549b097c2e37805132(hero.dir, "checkout", "-q", home);
  i01a15bb27f1471549b097c2e37805132(hero.dir, "merge", "-q", "--ff-only", tip);
  i01a15bb27f1471549b097c2e37805132(hero.dir, "branch", "-q", "-D", dive.branch);
  const cleared = new Map([...dive.scopes.map((scope) => [scope.repoId, void 0]), [hero.id, void 0]]);
  pushRecord(hero, () => {
    const doc = heroDoc(hero, id2);
    i01a15bb27d7c72258e54d02070189892(hero, doc, { action: "land", label: "landed", summary: `${me} landed it`, meta: { diver: null, outcome: "landed" }, scopes: scopesWith(hero, doc, cleared), lines: [`${me} landed it.`, "", ...lines] }, ctx.capes[0].version);
  });
  const featId = featOf(dive.doc);
  deleteRefs(hero.dir, diveRefs(hero.dir, id2).map(({ ref }) => ref));
  for (const scope of dive.scopes.filter((each) => each.ours)) {
    packIgnored(hero, featId, scope);
    deleteRefs(scope.dir, diveRefs(scope.dir, id2).map(({ ref }) => ref));
    if (!scope.branch) continue;
    i01a15bb27f1471549b097c2e37805132(scope.dir, "checkout", "-q", "--detach");
    i01a15bb27f1471549b097c2e37805132(scope.dir, "branch", "-q", "-D", dive.branch);
  }
  ctx.out(`landed ${String(dive.doc.fm.name)}${lines.length > 0 ? `
${lines.join("\n")}` : ""}`);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a15bb2786d79589f53bf95a2f06ff0.ts
async function i01a15bb2786d79589f53bf95a2f06ff0(call) {
  switch (call.usage) {
    case "u2bcf8d7ee2645df5b261ee1b2135d190":
      return i2bcf8d7ee2645df5b261ee1b2135d190(call.args, call.ctx);
    default:
      throw new Error(`land has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a18f6b14f97ca38a091f6b31317223.ts
async function i01a18f6b14f97ca38a091f6b31317223(ctx) {
  i01a15bb27be9786f91885a2f0a0fa08e(ctx.bridge, ctx, ctx.doc.id);
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

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i479700c5af155d8f9c0d2a0f4bea5c41.ts
async function i479700c5af155d8f9c0d2a0f4bea5c41(ctx) {
  return i01a18f6b14f97ca38a091f6b31317223(ctx);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a18f4542c670ccb111f6bd564e1f50.ts
async function i01a18f4542c670ccb111f6bd564e1f50(call) {
  switch (call.usage) {
    case "u479700c5af155d8f9c0d2a0f4bea5c41": {
      if (!call.gate) throw new Error("turn runs through pass");
      const args = { ...call.gate.args };
      if (args.summary === "-") args.summary = await call.ctx.stdin();
      return i479700c5af155d8f9c0d2a0f4bea5c41({ ...call.gate, args });
    }
    default:
      throw new Error(`turn has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a1b3d8387a7abf826280910ae9fdbb.ts
import { existsSync as existsSync3, readdirSync as readdirSync2 } from "node:fs";
import { join as join2 } from "node:path";
var SLASHED = /^nosedive\/([0-9a-f]{12})\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})$/;
function i01a1b3d8387a7abf826280910ae9fdbb(dir, ctx) {
  const hero = i01a1335485c67c95b7efdf2f0e03cfd6(dir);
  if (!hero || hero.dir !== dir) return [];
  const branches = (at) => i01a15bb27f1471549b097c2e37805132(at, "for-each-ref", "--format=%(refname:short)", "refs/heads/").text.split("\n").filter(Boolean);
  const tokens = new Set(branches(dir).filter((branch) => !SLASHED.test(branch)).map((branch) => tokenOf(hero, branch)));
  const checkouts = hero.workspace && existsSync3(hero.workspace) ? readdirSync2(hero.workspace).map((name2) => join2(hero.workspace, name2)).filter((at) => existsSync3(join2(at, ".git"))) : [];
  let renamed = 0;
  for (const at of [dir, ...checkouts]) {
    for (const branch of branches(at)) {
      const [, token, diveId] = SLASHED.exec(branch) ?? [];
      if (!token || !diveId || !tokens.has(token)) continue;
      const moved = i01a15bb27f1471549b097c2e37805132(at, "branch", "-m", branch, diveBranch(token, diveId));
      if (!moved.ok) throw new Error(`cannot rename ${branch} in ${at}: ${moved.text}`);
      renamed += 1;
    }
  }
  if (renamed > 0) ctx.out(`dive-branch-dashes: renamed ${renamed} dive branch${renamed === 1 ? "" : "es"} to nosedive-<token>-<dive id>`);
  return [];
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i16b8d55a332958f3b47989994ca5c52c.ts
var metaOf2 = (state) => state.fm.meta ?? {};
async function i16b8d55a332958f3b47989994ca5c52c(ctx) {
  const { before, after } = ctx;
  if (!before) return;
  const name2 = String(before.fm.name);
  const meta = metaOf2(before);
  if (!after) {
    if (meta.outcome !== void 0) return;
    if (typeof meta.diver === "string" && meta.diver) {
      throw new Error(`dive ${name2} is held by ${meta.diver.split("#")[0]}: it is not over, so it is not dropped; land or bail it first`);
    }
    if (typeof meta.packer === "string" && meta.packer) {
      throw new Error(`dive ${name2} was packed by ${meta.packer}, unfinished: jump it and finish it, landing or bailing it, then drop it`);
    }
    return;
  }
  if (after.fm.name !== before.fm.name) throw new Error(`dive ${name2} is named after its feat, so it takes no other name: its gist says what it is for`);
  const jumped = Boolean(meta.diver || meta.packer || meta.outcome);
  if (jumped && changed(before, after, "meta.feat")) {
    throw new Error(`dive ${name2} was jumped on its feat, so it keeps it: bail it, and mint a dive on the other feat`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i012ea2e903345c02b1cc8786221f93cd.ts
async function i012ea2e903345c02b1cc8786221f93cd(ctx) {
  const { before, after, doc, bridge: hero } = ctx;
  if (!after) return;
  const became = !before || !isDive({ ...doc, fm: before.fm });
  const moved = before !== void 0 && !became && changed(before, after, "meta.feat");
  if (!became && !moved) return;
  const featId = String(after.fm.meta?.feat);
  const feat = ctx.edit.doc(featId);
  const key = keyOf(hero, doc);
  const wanted = readScopes(hero, feat);
  const patch = {};
  for (const { repoId } of readScopes(hero, { ...doc, fm: after.fm })) if (!wanted.some((entry) => entry.repoId === repoId)) patch[repoId] = null;
  for (const entry of wanted) patch[entry.repoId] = { "work-branch": entry.branch ?? null };
  if (Object.keys(patch).length > 0) ctx.crud(doc.id, "scopes", patch);
  if (moved) {
    const from2 = String(before.fm.meta?.feat);
    ctx.crud(from2, "links", { [key]: null });
  }
  ctx.crud(feat.id, "links", { [key]: { rel: "dives.feat" } });
  const name2 = `${String(feat.fm.name)}.${doc.id.slice(-6)}`;
  if (after.fm.name !== name2) ctx.crud(doc.id, "name", name2);
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/src/01a15ba8-0bff-7ce3-83dc-e08af3633e26/src/i01a1b45b04a079a494fed25a3665456d.ts
async function i01a1b45b04a079a494fed25a3665456d(call) {
  switch (call.usage) {
    case "u16b8d55a332958f3b47989994ca5c52c":
      return i16b8d55a332958f3b47989994ca5c52c(call.gate);
    case "u012ea2e903345c02b1cc8786221f93cd":
      return i012ea2e903345c02b1cc8786221f93cd(call.gate);
    default:
      throw new Error(`dive-shape has no impl for ${call.usage}`);
  }
}

// ../nosedive-bundle-UUp7TC/hero/.nosedive/capes/6b606009-7b26-5a84-8db6-3d9bff204dde.js.build/entry.ts
var id = "6b606009-7b26-5a84-8db6-3d9bff204dde";
var owner = "01a15bb1-da9e-7d2d-aa82-5ee97257adc6";
var shortName = "work";
var name = "nosedive-work";
var commit = "f3c449cfdcff28c865805c5c129be0feb67dfcb7";
var version = "2026.11.7-1794081991900";
var core = "59db5434-21ad-5cd8-85a9-c6bc9652e5c2";
var needs = {};
var docs = { "01a15bb2-736b-7eac-84a7-3389e72d9590": { "kind": "action", "name": "jump", "gist": "Picks a dive up, or starts one on a feat: checks its repos out for it, on its local branch or read-only at trunk", "usages": [{ "id": "f8cb5f3d6de95b8ea88d25f745af7b03", "text": "jump [<ref>]" }, { "id": "d0c2bbb0213e5e2881b4bdea31efc027", "text": "jump [<ref>] --sure" }], "top": true, "text": "---\nkind: action\nid: 01a15bb2-736b-7eac-84a7-3389e72d9590\nname: jump\ngist: \"Picks a dive up, or starts one on a feat: checks its repos out for it, on its local branch or read-only at trunk\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\nmeta:\n  usages:\n    - jump [<ref>]\n    - jump [<ref>] --sure\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - nosedive-core:01a13354-845c-7253-a55b-60bba87285d8:\n      rel: uses.function\n  - nosedive-core:01a141f8-69c0-7c4d-a828-8927a559c8ae:\n      rel: uses.function\n  - nosedive-core:01a13354-80c7-76ba-8945-020d0af333eb:\n      rel: uses.function\n  - nosedive-core:01a15baf-13e2-7bd8-8dc8-80d4871f2210:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n---\n\n# Jump\n\n## Usage\n\n`<ref>` is a feat's or a dive's quid. A feat is any doc one of the hero's roots reaches through links whose rel ends `.feat`, a root of kind cape aside, since its feats are actions, a memo unless it has a kind of its own; a doc nothing reaches that way is refused, naming how to link it in. Its `scopes` name the repos it works in, legacy's shape: an entry keyed by a repo doc's quid, with `work-branch` naming the branch its work goes to, and an entry with none, or a bare quid, read-only. A dive's read-only scope is written as an entry with none (`<repo>: {}`), which core reads a bare quid as.\n\n## Where it is jumped from\n\nA dive is jumped from a branch of the hero, its home, and everything hero-side for it goes there (records-on-jumped-branch): the jump, pack, land and bail records, and the hero's commits when it lands, each pushed to the home's upstream. Branches of the hero do not know of each other's dives until they are merged; trunk is one such branch. Jump puts the hero on the dive's branch, `nosedive-<token>-<dive id>`, the token being the home's holder token, its 12 hex digits (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), cut from the home's tip after the jump record, and every writable scope's checkout on a branch of the same name (dive-branches). Pack, land and bail switch the hero back to its home, found as the local branch whose holder token the dive branch names (loop-returns-home).\n\n## On a dive branch\n\nOn a dive branch, jump takes only that branch's dive, with or without `<ref>`, and records nothing: each scope whose checkout is missing or elsewhere is put where the dive wants it, and a checkout already there is left as it is, so no commit on any of them is lost; another `<ref>` is refused: pack, land or bail it first (one-dive-branch-per-checkout).\n\n## Off a dive branch\n\nThe branch the hero is on is the home. Refused, naming why, before anything moves:\n\n- while the hero's working tree is not clean (jump-needs-clean-tree);\n- when the home has no upstream, so the dive's records would be stranded in a local branch: push it first, as `git push -u origin <branch>`;\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind: push them first;\n- while this checkout has a dive branch, any `<ref>` but its dive: pack, land or bail it first; its own dive's `<ref>` switches the hero onto it and goes on as on a dive branch (one-dive-branch-per-checkout).\n\nA `<ref>` is a doc's quid, its name, or a path ending `<quid>.md`, as `next` prints beside it (listed-paths-accepted).\n\nWithout `<ref>`, jump takes the one open dive this checkout holds without a branch, else the one nobody holds that the pilot packed or nobody has touched; with none or several, it refuses, naming each.\n\n- **A dive**: refused when it is over; when another checkout holds it, naming the branch of this checkout it is held from when it is one, else `pack it there` (held-by-checkout); a diver legacy wrote, a bare email with no token, holds it in no checkout in particular, so a checkout whose git user.email it is takes it over and anyone else is refused, naming the email (legacy-bare-diver); and, without `--sure`, when another email packed it: `--sure` takes it over, its work in progress included (take-over-with-sure). A dive this checkout holds whose branch is gone is jumped again without a record: its branch is cut from the home's tip and its packed hero work replayed, so only what was never packed is lost.\n- **A feat**: a bare attempt at all of it (feat-jumps-bare). Refused while the feat links any dive `dives.feat`, over or not, `--sure` included, since a bare jump would start the feat over: the refusal says to finish and drop those dives, or to plan another dive saying what it does, `nosedive crud work:dive <gist> --meta:feat <feat> --section:Brief -`, and jump that. Otherwise, without `--sure`, refused unless `next` would list it, a non-durable leaf: a durable doc, or one with another link whose rel ends `.feat` other than `parent.feat`, takes `--sure` (sure-off-fringe). It mints a dive on it (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), gisted \"An attempt to complete <feat name>\", copying its scopes, naming the feat in its `meta.feat`, and linking it from the feat as `dives.feat`; then jumps it. The feat, its `## Dropped` included, is that dive's brief.\n\nThen, in order:\n\n1. A checkout to be moved with uncommitted changes or untracked files is refused, naming each, before anything moves.\n2. The jump record, `jump(<dive name>): <summary>`, is committed on the home: the dive minted when jumping a feat, `diver` set to `<email>#<token>`, `packer` cleared, each scope's `ref` set to the dive's newest ref on its origin, and a `## <timestamp> jumped` section. It is pushed to the home's upstream; when that moved meanwhile, jump drops the record, fetches and fast-forwards, refuses if someone else now holds the dive, and records again.\n3. The hero's dive branch is cut there and checked out, and the dive's newest ref on the hero's origin, its packed hero work, is cherry-picked onto it. A conflict aborts the pick and leaves the hero on the dive branch at the record, naming the ref the work is on.\n4. Each writable scope's checkout is put on the dive branch, hydrated detached with core's hydrate-repo when missing, then switched; moved when there for other work, its commits origin lacks pushed to an orphan ref first. Where the dive's newest ref holds what the branch lacks, the branch moves to it; when the work branch on origin has moved on, the work is rebased onto it, a conflict aborting the rebase. Each read-only scope's checkout is detached at origin's trunk.\n\nThen each checkout moved from other work has its ignored files swapped for the feat's pack (see dive), never those under a configured workspace (see pack), and pack's `work in progress` commit is undone, when it names this dive, as `pack(<dive name>): work in progress` or, as pack named it while feats grouped the loop's commits, `feat(<feat name>): pack work in progress on <dive name>`; another dive's is left alone in the hero and each scope, so the work it held comes back uncommitted. It prints the dive's path, its feat's and each checkout's.\n\n## Canonical dives\n\nA feat's dive is minted as `work:dive` (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), found with find-kind and pinned with core's pin-of, so the dive carries work's canonical scope; a schema that is not published refuses the jump before any checkout moves. Dives and feats are recognised by doc-kind, never by the text of `kind`.\n\n## Code\n\n- Entrypoint: [src/i01a15bb2736b7eac84a73389e72d9590.ts](../src/i01a15bb2736b7eac84a73389e72d9590.ts)\n- `jump [<ref>]`: [impl](../src/if8cb5f3d6de95b8ea88d25f745af7b03.ts), [tests](../src/if8cb5f3d6de95b8ea88d25f745af7b03.test.ts)\n- `jump [<ref>] --sure`: [impl](../src/id0c2bbb0213e5e2881b4bdea31efc027.ts), [tests](../src/id0c2bbb0213e5e2881b4bdea31efc027.test.ts)\n", "body": "# Jump\n\n## Usage\n\n`<ref>` is a feat's or a dive's quid. A feat is any doc one of the hero's roots reaches through links whose rel ends `.feat`, a root of kind cape aside, since its feats are actions, a memo unless it has a kind of its own; a doc nothing reaches that way is refused, naming how to link it in. Its `scopes` name the repos it works in, legacy's shape: an entry keyed by a repo doc's quid, with `work-branch` naming the branch its work goes to, and an entry with none, or a bare quid, read-only. A dive's read-only scope is written as an entry with none (`<repo>: {}`), which core reads a bare quid as.\n\n## Where it is jumped from\n\nA dive is jumped from a branch of the hero, its home, and everything hero-side for it goes there (records-on-jumped-branch): the jump, pack, land and bail records, and the hero's commits when it lands, each pushed to the home's upstream. Branches of the hero do not know of each other's dives until they are merged; trunk is one such branch. Jump puts the hero on the dive's branch, `nosedive-<token>-<dive id>`, the token being the home's holder token, its 12 hex digits (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), cut from the home's tip after the jump record, and every writable scope's checkout on a branch of the same name (dive-branches). Pack, land and bail switch the hero back to its home, found as the local branch whose holder token the dive branch names (loop-returns-home).\n\n## On a dive branch\n\nOn a dive branch, jump takes only that branch's dive, with or without `<ref>`, and records nothing: each scope whose checkout is missing or elsewhere is put where the dive wants it, and a checkout already there is left as it is, so no commit on any of them is lost; another `<ref>` is refused: pack, land or bail it first (one-dive-branch-per-checkout).\n\n## Off a dive branch\n\nThe branch the hero is on is the home. Refused, naming why, before anything moves:\n\n- while the hero's working tree is not clean (jump-needs-clean-tree);\n- when the home has no upstream, so the dive's records would be stranded in a local branch: push it first, as `git push -u origin <branch>`;\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind: push them first;\n- while this checkout has a dive branch, any `<ref>` but its dive: pack, land or bail it first; its own dive's `<ref>` switches the hero onto it and goes on as on a dive branch (one-dive-branch-per-checkout).\n\nA `<ref>` is a doc's quid, its name, or a path ending `<quid>.md`, as `next` prints beside it (listed-paths-accepted).\n\nWithout `<ref>`, jump takes the one open dive this checkout holds without a branch, else the one nobody holds that the pilot packed or nobody has touched; with none or several, it refuses, naming each.\n\n- **A dive**: refused when it is over; when another checkout holds it, naming the branch of this checkout it is held from when it is one, else `pack it there` (held-by-checkout); a diver legacy wrote, a bare email with no token, holds it in no checkout in particular, so a checkout whose git user.email it is takes it over and anyone else is refused, naming the email (legacy-bare-diver); and, without `--sure`, when another email packed it: `--sure` takes it over, its work in progress included (take-over-with-sure). A dive this checkout holds whose branch is gone is jumped again without a record: its branch is cut from the home's tip and its packed hero work replayed, so only what was never packed is lost.\n- **A feat**: a bare attempt at all of it (feat-jumps-bare). Refused while the feat links any dive `dives.feat`, over or not, `--sure` included, since a bare jump would start the feat over: the refusal says to finish and drop those dives, or to plan another dive saying what it does, `nosedive crud work:dive <gist> --meta:feat <feat> --section:Brief -`, and jump that. Otherwise, without `--sure`, refused unless `next` would list it, a non-durable leaf: a durable doc, or one with another link whose rel ends `.feat` other than `parent.feat`, takes `--sure` (sure-off-fringe). It mints a dive on it (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), gisted \"An attempt to complete <feat name>\", copying its scopes, naming the feat in its `meta.feat`, and linking it from the feat as `dives.feat`; then jumps it. The feat, its `## Dropped` included, is that dive's brief.\n\nThen, in order:\n\n1. A checkout to be moved with uncommitted changes or untracked files is refused, naming each, before anything moves.\n2. The jump record, `jump(<dive name>): <summary>`, is committed on the home: the dive minted when jumping a feat, `diver` set to `<email>#<token>`, `packer` cleared, each scope's `ref` set to the dive's newest ref on its origin, and a `## <timestamp> jumped` section. It is pushed to the home's upstream; when that moved meanwhile, jump drops the record, fetches and fast-forwards, refuses if someone else now holds the dive, and records again.\n3. The hero's dive branch is cut there and checked out, and the dive's newest ref on the hero's origin, its packed hero work, is cherry-picked onto it. A conflict aborts the pick and leaves the hero on the dive branch at the record, naming the ref the work is on.\n4. Each writable scope's checkout is put on the dive branch, hydrated detached with core's hydrate-repo when missing, then switched; moved when there for other work, its commits origin lacks pushed to an orphan ref first. Where the dive's newest ref holds what the branch lacks, the branch moves to it; when the work branch on origin has moved on, the work is rebased onto it, a conflict aborting the rebase. Each read-only scope's checkout is detached at origin's trunk.\n\nThen each checkout moved from other work has its ignored files swapped for the feat's pack (see dive), never those under a configured workspace (see pack), and pack's `work in progress` commit is undone, when it names this dive, as `pack(<dive name>): work in progress` or, as pack named it while feats grouped the loop's commits, `feat(<feat name>): pack work in progress on <dive name>`; another dive's is left alone in the hero and each scope, so the work it held comes back uncommitted. It prints the dive's path, its feat's and each checkout's.\n\n## Canonical dives\n\nA feat's dive is minted as `work:dive` (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), found with find-kind and pinned with core's pin-of, so the dive carries work's canonical scope; a schema that is not published refuses the jump before any checkout moves. Dives and feats are recognised by doc-kind, never by the text of `kind`.\n\n## Code\n\n- Entrypoint: [src/i01a15bb2736b7eac84a73389e72d9590.ts](../src/i01a15bb2736b7eac84a73389e72d9590.ts)\n- `jump [<ref>]`: [impl](../src/if8cb5f3d6de95b8ea88d25f745af7b03.ts), [tests](../src/if8cb5f3d6de95b8ea88d25f745af7b03.test.ts)\n- `jump [<ref>] --sure`: [impl](../src/id0c2bbb0213e5e2881b4bdea31efc027.ts), [tests](../src/id0c2bbb0213e5e2881b4bdea31efc027.test.ts)" }, "01a15bb2-7501-731a-9e9c-1e41b96c3dde": { "kind": "action", "name": "pack", "gist": "Puts the dive on deck down for anyone, on any hero repo, to jump again: its work pushed to its refs, its ignored files packed for its feat, its checkouts left at their base", "usages": [{ "id": "0735c57383365d4ca5395ea24f5b0649", "text": "pack [<dive>]" }], "top": true, "text": "---\nkind: action\nid: 01a15bb2-7501-731a-9e9c-1e41b96c3dde\nname: pack\ngist: \"Puts the dive on deck down for anyone, on any hero repo, to jump again: its work pushed to its refs, its ignored files packed for its feat, its checkouts left at their base\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\nmeta:\n  usages:\n    - pack [<dive>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Pack\n\n## Usage\n\n`<dive>`, when given, must be the dive on deck: the one the hero's dive branch names (see dive-on-deck). Refused off a dive branch (loop-returns-home), and when the dive's home is gone: recreate it.\n\nRefused, before anything moves, when a read-only scope has commits origin lacks or uncommitted changes: they have nowhere to go.\n\nEach writable scope whose checkout is on the dive's local branch, and the hero, has its uncommitted changes, untracked files included, committed as `pack(<dive name>): work in progress`, with the nosedive co-author trailer (see commit-message); its bookkeeping commit in the hero reads `pack(<dive name>): <summary>`. Its work is pushed to its ref on origin, `refs/nosedive/<hero id>/dives/<dive id>`, deleting any other ref of the dive, all in one atomic push leased against what the dive's newest ref was when last jumped or packed (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)); with no work, every ref of the dive is deleted. A ref of the dive pushed since then refuses the pack, naming it.\n\nEach such checkout has its ignored files packed for its feat and is left detached at its base, where its branch meets the work branch on origin, else trunk, its local branch deleted; ignored files the base does not ignore are removed, since they would read as untracked work. Nothing under a configured workspace is packed or removed: the checkout's own, as its repo's config names it, or the hero's when it lies inside the checkout, so a hero checked out as a scope keeps its workspace and every checkout in it. The hero is switched back to the dive's home, the branch it was jumped from (see jump), and its dive branch deleted.\n\nIt moves `diver` to `packer`, sets each scope's `ref` to what it pushed, appends a `## <timestamp> packed` section with each scope's work, and commits that on the home, pushed to its upstream, fetching and making it again on the new tip when the upstream moved meanwhile (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a15bb27501731a9e9c1e41b96c3dde.ts](../src/i01a15bb27501731a9e9c1e41b96c3dde.ts)\n- `pack [<dive>]`: [impl](../src/i0735c57383365d4ca5395ea24f5b0649.ts), [tests](../src/i0735c57383365d4ca5395ea24f5b0649.test.ts)\n", "body": "# Pack\n\n## Usage\n\n`<dive>`, when given, must be the dive on deck: the one the hero's dive branch names (see dive-on-deck). Refused off a dive branch (loop-returns-home), and when the dive's home is gone: recreate it.\n\nRefused, before anything moves, when a read-only scope has commits origin lacks or uncommitted changes: they have nowhere to go.\n\nEach writable scope whose checkout is on the dive's local branch, and the hero, has its uncommitted changes, untracked files included, committed as `pack(<dive name>): work in progress`, with the nosedive co-author trailer (see commit-message); its bookkeeping commit in the hero reads `pack(<dive name>): <summary>`. Its work is pushed to its ref on origin, `refs/nosedive/<hero id>/dives/<dive id>`, deleting any other ref of the dive, all in one atomic push leased against what the dive's newest ref was when last jumped or packed (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)); with no work, every ref of the dive is deleted. A ref of the dive pushed since then refuses the pack, naming it.\n\nEach such checkout has its ignored files packed for its feat and is left detached at its base, where its branch meets the work branch on origin, else trunk, its local branch deleted; ignored files the base does not ignore are removed, since they would read as untracked work. Nothing under a configured workspace is packed or removed: the checkout's own, as its repo's config names it, or the hero's when it lies inside the checkout, so a hero checked out as a scope keeps its workspace and every checkout in it. The hero is switched back to the dive's home, the branch it was jumped from (see jump), and its dive branch deleted.\n\nIt moves `diver` to `packer`, sets each scope's `ref` to what it pushed, appends a `## <timestamp> packed` section with each scope's work, and commits that on the home, pushed to its upstream, fetching and making it again on the new tip when the upstream moved meanwhile (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a15bb27501731a9e9c1e41b96c3dde.ts](../src/i01a15bb27501731a9e9c1e41b96c3dde.ts)\n- `pack [<dive>]`: [impl](../src/i0735c57383365d4ca5395ea24f5b0649.ts), [tests](../src/i0735c57383365d4ca5395ea24f5b0649.test.ts)" }, "01a15bb2-76d1-7aa2-b4e5-dcc260c69c00": { "kind": "action", "name": "bail", "gist": "Abandons the dive on deck, recording why and what it held", "usages": [{ "id": "ffc777778a63553ba90babcc038eb748", "text": "bail [<dive>] --reason <why>" }], "top": true, "text": "---\nkind: action\nid: 01a15bb2-76d1-7aa2-b4e5-dcc260c69c00\nname: bail\ngist: \"Abandons the dive on deck, recording why and what it held\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\nmeta:\n  usages:\n    - bail [<dive>] --reason <why>\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Bail\n\n## Usage\n\n`--reason` is required; `<dive>`, when given, must be the dive on deck. Refused off a dive branch, and when the dive's home is gone (loop-returns-home).\n\nIt puts the dive down as pack does (see [pack](01a15bb2-7501-731a-9e9c-1e41b96c3dde.md)): uncommitted changes committed as work in progress, the work pushed to the dive's refs, ignored files packed for its feat, each checkout left detached at its base with its local branch deleted, and the hero switched back to the dive's home, its dive branch deleted. The refs stay: a bailed dive's refs are what an audit finds of it.\n\nIts bookkeeping commit in the hero reads `bail(<dive name>): <reason>`, and the work in progress it commits is pack's. It appends a `## <timestamp> bailed` section, with the reason and, per scope, the commits it held by sha and subject with the ref holding them. It sets `outcome: bailed`, clears `diver`, sets each scope's `ref`, and commits that on the home, pushed to its upstream (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a15bb276d17aa2b4e5dcc260c69c00.ts](../src/i01a15bb276d17aa2b4e5dcc260c69c00.ts)\n- `bail [<dive>] --reason <why>`: [impl](../src/iffc777778a63553ba90babcc038eb748.ts), [tests](../src/iffc777778a63553ba90babcc038eb748.test.ts)\n", "body": "# Bail\n\n## Usage\n\n`--reason` is required; `<dive>`, when given, must be the dive on deck. Refused off a dive branch, and when the dive's home is gone (loop-returns-home).\n\nIt puts the dive down as pack does (see [pack](01a15bb2-7501-731a-9e9c-1e41b96c3dde.md)): uncommitted changes committed as work in progress, the work pushed to the dive's refs, ignored files packed for its feat, each checkout left detached at its base with its local branch deleted, and the hero switched back to the dive's home, its dive branch deleted. The refs stay: a bailed dive's refs are what an audit finds of it.\n\nIts bookkeeping commit in the hero reads `bail(<dive name>): <reason>`, and the work in progress it commits is pack's. It appends a `## <timestamp> bailed` section, with the reason and, per scope, the commits it held by sha and subject with the ref holding them. It sets `outcome: bailed`, clears `diver`, sets each scope's `ref`, and commits that on the home, pushed to its upstream (records-on-jumped-branch).\n\n## Code\n\n- Entrypoint: [src/i01a15bb276d17aa2b4e5dcc260c69c00.ts](../src/i01a15bb276d17aa2b4e5dcc260c69c00.ts)\n- `bail [<dive>] --reason <why>`: [impl](../src/iffc777778a63553ba90babcc038eb748.ts), [tests](../src/iffc777778a63553ba90babcc038eb748.test.ts)" }, "01a15bb2-786d-7958-9f53-bf95a2f06ff0": { "kind": "action", "name": "land", "gist": "Publishes the dive on deck: each repo's work pushed to its feat's work branch", "usages": [{ "id": "2bcf8d7ee2645df5b261ee1b2135d190", "text": "land [<dive>]" }], "top": true, "text": "---\nkind: action\nid: 01a15bb2-786d-7958-9f53-bf95a2f06ff0\nname: land\ngist: \"Publishes the dive on deck: each repo's work pushed to its feat's work branch\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\nmeta:\n  usages:\n    - land [<dive>]\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n---\n\n# Land\n\n## Usage\n\n`<dive>`, when given, must be the dive on deck. Refused, before anything is pushed:\n\n- off a dive branch, or when the dive's home is gone: recreate it (loop-returns-home);\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind;\n\n- while the hero or a checkout has uncommitted changes, naming each: commit them first;\n- while a read-only scope has commits origin lacks;\n- while a work branch has moved to a commit the scope's HEAD does not contain. The recourse is `pack`, then `jump`, which rebases the work onto the branch.\n\nEach commit it publishes that no branch on origin holds is stamped first with `Nosedive-Dive: <dive id>`, `Nosedive-Feat: <id>`, the dive's first durable feat ancestor (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), and the nosedive co-author trailer (see commit-message), where the commit lacks them. A commit that carries a nosedive co-author already, of any version, from an earlier stamp or a rebase, gets no second; another's co-author does not stand in for it. The hero's record, `land(<dive name>): <summary>`, carries it too.\n\nEach writable scope whose checkout is on the dive's local branch and holds work its work branch lacks is pushed to it, a fast-forward or the branch's creation; any other is unchanged. Then each scope's ignored files are packed for its feat, every ref of the dive is deleted on origin, and each checkout is left detached at what it holds, its local branch deleted.\n\nThe hero's own work, the commits on its dive branch, rides to the dive's home (records-on-jumped-branch): the dive branch is rebased onto the home, its commits stamped, the hero switched back to the home, fast-forwarded to them, and its dive branch deleted; then `outcome: landed` set, `diver` cleared and a `## <timestamp> landed` section recording each push are committed on top, and the home is pushed to its upstream, rebased onto it first when it moved meanwhile. So the hero's work for the dive sits between its jump and land records.\n\n## Code\n\n- Entrypoint: [src/i01a15bb2786d79589f53bf95a2f06ff0.ts](../src/i01a15bb2786d79589f53bf95a2f06ff0.ts)\n- `land [<dive>]`: [impl](../src/i2bcf8d7ee2645df5b261ee1b2135d190.ts), [tests](../src/i2bcf8d7ee2645df5b261ee1b2135d190.test.ts)\n", "body": "# Land\n\n## Usage\n\n`<dive>`, when given, must be the dive on deck. Refused, before anything is pushed:\n\n- off a dive branch, or when the dive's home is gone: recreate it (loop-returns-home);\n- when the home holds commits its upstream lacks, after fetching it and fast-forwarding a home that is behind;\n\n- while the hero or a checkout has uncommitted changes, naming each: commit them first;\n- while a read-only scope has commits origin lacks;\n- while a work branch has moved to a commit the scope's HEAD does not contain. The recourse is `pack`, then `jump`, which rebases the work onto the branch.\n\nEach commit it publishes that no branch on origin holds is stamped first with `Nosedive-Dive: <dive id>`, `Nosedive-Feat: <id>`, the dive's first durable feat ancestor (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)), and the nosedive co-author trailer (see commit-message), where the commit lacks them. A commit that carries a nosedive co-author already, of any version, from an earlier stamp or a rebase, gets no second; another's co-author does not stand in for it. The hero's record, `land(<dive name>): <summary>`, carries it too.\n\nEach writable scope whose checkout is on the dive's local branch and holds work its work branch lacks is pushed to it, a fast-forward or the branch's creation; any other is unchanged. Then each scope's ignored files are packed for its feat, every ref of the dive is deleted on origin, and each checkout is left detached at what it holds, its local branch deleted.\n\nThe hero's own work, the commits on its dive branch, rides to the dive's home (records-on-jumped-branch): the dive branch is rebased onto the home, its commits stamped, the hero switched back to the home, fast-forwarded to them, and its dive branch deleted; then `outcome: landed` set, `diver` cleared and a `## <timestamp> landed` section recording each push are committed on top, and the home is pushed to its upstream, rebased onto it first when it moved meanwhile. So the hero's work for the dive sits between its jump and land records.\n\n## Code\n\n- Entrypoint: [src/i01a15bb2786d79589f53bf95a2f06ff0.ts](../src/i01a15bb2786d79589f53bf95a2f06ff0.ts)\n- `land [<dive>]`: [impl](../src/i2bcf8d7ee2645df5b261ee1b2135d190.ts), [tests](../src/i2bcf8d7ee2645df5b261ee1b2135d190.test.ts)" }, "01a15bb2-7be9-786f-9188-5a2f0a0fa08e": { "kind": "function", "name": "dive-on-deck", "gist": "The dive the hero's dive branch names: its doc, its home, its feat, and each scope with its repo, checkout, trunk and work branch", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a15bb2-7be9-786f-9188-5a2f0a0fa08e\nname: dive-on-deck\ngist: \"The dive the hero's dive branch names: its doc, its home, its feat, and each scope with its repo, checkout, trunk and work branch\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\nlinks:\n  - nosedive-core:01a138b2-b8ee-703c-ab22-7b010f588b6a:\n      rel: uses.function\n  - nosedive-core:01a13c76-0de8-7562-b473-8946402010b8:\n      rel: uses.function\n  - nosedive-core:01a14717-1f05-7d01-9118-aaa1f269f5fd:\n      rel: uses.function\n  - nosedive-core:01a18e2a-3b4b-798d-9806-8d4778a158e6:\n      rel: uses.function\n  - nosedive-core:01a1901e-263b-7209-a4b5-f39a71c568b3:\n      rel: uses.function\n  - nosedive-core:01a13dee-4b1d-78f7-a699-c3777bf63587:\n      rel: uses.function\n---\n\n# Dive on deck\n\nFinds the dive on deck from the hero's branch (dive-branches), among the open dives: the docs of work's dive kind that core's feat-tree reaches, as a feat links them `dives.feat`, with no `meta.outcome`, which work, not core, picks out by kind: a branch `nosedive-<token>-<dive id>` whose dive id names an open dive in the hero, and whose `diver` carries that token (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)); and its home, the local branch whose holder token is that token (loop-returns-home). It returns them with the feat the dive's `meta.feat` names and its scopes. Given a dive's quid, it refuses unless that is the one. Off a dive branch it refuses, naming `jump`; a dive branch whose dive is over or held by another token, as a copied branch's would be, is refused, as is a home that is gone: recreate it.\n\nEach scope carries its repo doc, its checkout, the repo's trunk, the work branch, if any, and whether its checkout is the dive's: on the dive branch when writable, present when read-only. Nothing is hydrated or moved.\n\n## Kind identity and scopes\n\nDocs are told apart by core's doc-kind, not by the text of `kind`: a dive is a doc whose owner is work and whose name is `dive`, a repo doc is core's by its place in `.nosedive/repos`, and a cape root is skipped when walking feats. The kind of a feat is found with find-kind, spelled in the hero's terms, to learn whether it is durable.\n\nOnly an entry keyed by a repo doc the hero registers is a work scope. Every other entry is not work's to read: the one with `canonical: true` naming the owner of the doc's kind, and any meta entry keyed by a seeded id carrying `version`, `schema` or `meta`. None is checked out, and when a dive's refs are rewritten each is kept exactly as parsed.\n\n## Code\n\n- Function: [src/i01a15bb27be9786f91885a2f0a0fa08e.ts](../src/i01a15bb27be9786f91885a2f0a0fa08e.ts)\n- Tests: [src/i01a15bb27be9786f91885a2f0a0fa08e.test.ts](../src/i01a15bb27be9786f91885a2f0a0fa08e.test.ts)\n", "body": "# Dive on deck\n\nFinds the dive on deck from the hero's branch (dive-branches), among the open dives: the docs of work's dive kind that core's feat-tree reaches, as a feat links them `dives.feat`, with no `meta.outcome`, which work, not core, picks out by kind: a branch `nosedive-<token>-<dive id>` whose dive id names an open dive in the hero, and whose `diver` carries that token (see [dive](01a15bb2-5092-7858-90dd-e6c5b1b45254.md)); and its home, the local branch whose holder token is that token (loop-returns-home). It returns them with the feat the dive's `meta.feat` names and its scopes. Given a dive's quid, it refuses unless that is the one. Off a dive branch it refuses, naming `jump`; a dive branch whose dive is over or held by another token, as a copied branch's would be, is refused, as is a home that is gone: recreate it.\n\nEach scope carries its repo doc, its checkout, the repo's trunk, the work branch, if any, and whether its checkout is the dive's: on the dive branch when writable, present when read-only. Nothing is hydrated or moved.\n\n## Kind identity and scopes\n\nDocs are told apart by core's doc-kind, not by the text of `kind`: a dive is a doc whose owner is work and whose name is `dive`, a repo doc is core's by its place in `.nosedive/repos`, and a cape root is skipped when walking feats. The kind of a feat is found with find-kind, spelled in the hero's terms, to learn whether it is durable.\n\nOnly an entry keyed by a repo doc the hero registers is a work scope. Every other entry is not work's to read: the one with `canonical: true` naming the owner of the doc's kind, and any meta entry keyed by a seeded id carrying `version`, `schema` or `meta`. None is checked out, and when a dive's refs are rewritten each is kept exactly as parsed.\n\n## Code\n\n- Function: [src/i01a15bb27be9786f91885a2f0a0fa08e.ts](../src/i01a15bb27be9786f91885a2f0a0fa08e.ts)\n- Tests: [src/i01a15bb27be9786f91885a2f0a0fa08e.test.ts](../src/i01a15bb27be9786f91885a2f0a0fa08e.test.ts)" }, "01a15bb2-7d7c-7225-8e54-d02070189892": { "kind": "function", "name": "record-dive", "gist": "Writes a dive's changes: meta set, a dated section appended, committed to the hero", "usages": [], "top": true, "text": "---\nkind: function\nid: 01a15bb2-7d7c-7225-8e54-d02070189892\nname: record-dive\ngist: \"Writes a dive's changes: meta set, a dated section appended, committed to the hero\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\nlinks:\n  - nosedive-core:01a13354-845c-7253-a55b-60bba87285d8:\n      rel: uses.function\n  - nosedive-core:01a13354-8942-73b1-be25-3424511ba82c:\n      rel: uses.function\n  - nosedive-core:01a13354-83aa-776c-b84d-f698b04adc06:\n      rel: uses.function\n  - nosedive-core:01a19005-c109-7155-8355-3072f4e38dc4:\n      rel: uses.function\n  - nosedive-core:01a19005-c311-72b6-8871-d4842563d310:\n      rel: uses.function\n---\n\n# Record dive\n\nEvery change an action makes to a dive goes through it: the meta it sets (null clears a field), a `## <timestamp> <label>` section appended (labels `jumped`, `packed`, `landed`, `bailed`; timestamp ISO 8601 UTC with `Z`, as pass --turn heads its own) with the lines it is given, and any other hero docs it is handed, all committed to the hero in one commit, `<action>(<dive name>): <summary>`, the loop's command first and the dive it acted on, whatever feat the hero holds (loop-command-subjects), which ends with the nosedive co-author trailer (see commit-message) like every commit the loop makes in the hero. It is given the core version for that trailer. Dives written with the old `## Jumped <timestamp>` headings stay as they are; nothing in the loop reads sections by heading. Pushing is the action's: each puts its commit on the hero's trunk on origin.\n\n## Code\n\n- Function: [src/i01a15bb27d7c72258e54d02070189892.ts](../src/i01a15bb27d7c72258e54d02070189892.ts)\n- Tests: [src/i01a15bb27d7c72258e54d02070189892.test.ts](../src/i01a15bb27d7c72258e54d02070189892.test.ts)\n", "body": "# Record dive\n\nEvery change an action makes to a dive goes through it: the meta it sets (null clears a field), a `## <timestamp> <label>` section appended (labels `jumped`, `packed`, `landed`, `bailed`; timestamp ISO 8601 UTC with `Z`, as pass --turn heads its own) with the lines it is given, and any other hero docs it is handed, all committed to the hero in one commit, `<action>(<dive name>): <summary>`, the loop's command first and the dive it acted on, whatever feat the hero holds (loop-command-subjects), which ends with the nosedive co-author trailer (see commit-message) like every commit the loop makes in the hero. It is given the core version for that trailer. Dives written with the old `## Jumped <timestamp>` headings stay as they are; nothing in the loop reads sections by heading. Pushing is the action's: each puts its commit on the hero's trunk on origin.\n\n## Code\n\n- Function: [src/i01a15bb27d7c72258e54d02070189892.ts](../src/i01a15bb27d7c72258e54d02070189892.ts)\n- Tests: [src/i01a15bb27d7c72258e54d02070189892.test.ts](../src/i01a15bb27d7c72258e54d02070189892.test.ts)" }, "01a15bb2-7f14-7154-9b09-7c2e37805132": { "kind": "function", "name": "run-git", "gist": "Runs git in a directory and returns whether it worked and what it said", "usages": [], "top": true, "text": '---\nkind: function\nid: 01a15bb2-7f14-7154-9b09-7c2e37805132\nname: run-git\ngist: "Runs git in a directory and returns whether it worked and what it said"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n---\n\n# Run git\n\nRuns `git` with the given arguments in a directory, returning whether it exited 0 and its trimmed output: stdout on success, stderr otherwise.\n\n## Code\n\n- Function: [src/i01a15bb27f1471549b097c2e37805132.ts](../src/i01a15bb27f1471549b097c2e37805132.ts)\n- Tests: [src/i01a15bb27f1471549b097c2e37805132.test.ts](../src/i01a15bb27f1471549b097c2e37805132.test.ts)\n', "body": "# Run git\n\nRuns `git` with the given arguments in a directory, returning whether it exited 0 and its trimmed output: stdout on success, stderr otherwise.\n\n## Code\n\n- Function: [src/i01a15bb27f1471549b097c2e37805132.ts](../src/i01a15bb27f1471549b097c2e37805132.ts)\n- Tests: [src/i01a15bb27f1471549b097c2e37805132.test.ts](../src/i01a15bb27f1471549b097c2e37805132.test.ts)" }, "01a18f45-42c6-70cc-b111-f6bd564e1f50": { "kind": "action", "name": "turn", "gist": "Records progress on the dive held by this worktree", "usages": [{ "id": "479700c5af155d8f9c0d2a0f4bea5c41", "text": "pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]" }], "top": true, "text": "---\nkind: action\nid: 01a18f45-42c6-70cc-b111-f6bd564e1f50\nname: turn\ngist: \"Records progress on the dive held by this worktree\"\nmeta:\n  usages:\n    - pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nlinks:\n  - kb/01a18f6b-14f9-7ca3-8a09-1f6b31317223.md:\n      rel: child.feat\n---\n\n# Turn\n\n## Usage\n\n`pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]` records progress on the dive on deck, the one the hero's dive branch names, as found by dive-on-deck. A different dive is refused. `-` as summary reads stdin.\n\nAppend a section headed `## <ISO 8601 timestamp>[ <label>]`, then the summary when given, then `Next: <gist>` when given. Use core's hero-zone timestamp helper once available; until then use UTC with `Z`. Refuse when neither summary nor next is given, or next contains more than one line. Two turns append in order. Edit through pass so each turn makes one ordinary pass commit. The gate sets no commit subject; core's pass owns it.\n\n## Code\n\n- Entrypoint: [src/i01a18f4542c670ccb111f6bd564e1f50.ts](../src/i01a18f4542c670ccb111f6bd564e1f50.ts)\n- `pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]`: [impl](../src/i479700c5af155d8f9c0d2a0f4bea5c41.ts)\n", "body": "# Turn\n\n## Usage\n\n`pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]` records progress on the dive on deck, the one the hero's dive branch names, as found by dive-on-deck. A different dive is refused. `-` as summary reads stdin.\n\nAppend a section headed `## <ISO 8601 timestamp>[ <label>]`, then the summary when given, then `Next: <gist>` when given. Use core's hero-zone timestamp helper once available; until then use UTC with `Z`. Refuse when neither summary nor next is given, or next contains more than one line. Two turns append in order. Edit through pass so each turn makes one ordinary pass commit. The gate sets no commit subject; core's pass owns it.\n\n## Code\n\n- Entrypoint: [src/i01a18f4542c670ccb111f6bd564e1f50.ts](../src/i01a18f4542c670ccb111f6bd564e1f50.ts)\n- `pass --turn <dive> [<summary>] [--next <gist>] [--label <label>]`: [impl](../src/i479700c5af155d8f9c0d2a0f4bea5c41.ts)" }, "01a18f6b-14f9-7ca3-8a09-1f6b31317223": { "kind": "function", "name": "record-turn", "gist": "Appends a progress turn to the held dive through the current pass edit", "usages": [], "top": true, "text": `---
kind: function
id: 01a18f6b-14f9-7ca3-8a09-1f6b31317223
name: record-turn
gist: "Appends a progress turn to the held dive through the current pass edit"
scopes:
  - 01a1336b-c0b8-7cde-b7c6-285196062297:
      canonical: true
      version: 7bf363e12b620ec5e386d079712c729333bd43f4
      schema: cd1a463c46d6
links:
  - kb/01a15bb2-7be9-786f-9188-5a2f0a0fa08e.md:
      rel: uses.function
---

# Record turn

Finds the passing dive through dive-on-deck, refusing unless it is the dive on deck. Validates a nonempty summary or next, and a next gist without line breaks. Appends the UTC ISO timestamp (until core's hero-zone helper lands), optional label, summary and Next gist through the current pass edit. It writes no files or commits directly. The gate entrypoint reads a stdin summary before calling it. Integration tests exercise it through the real launcher and pass, including one commit per turn.

## Code

- Function: [src/i01a18f6b14f97ca38a091f6b31317223.ts](../src/i01a18f6b14f97ca38a091f6b31317223.ts)
- Tests: [src/i01a18f6b14f97ca38a091f6b31317223.test.ts](../src/i01a18f6b14f97ca38a091f6b31317223.test.ts)
`, "body": "# Record turn\n\nFinds the passing dive through dive-on-deck, refusing unless it is the dive on deck. Validates a nonempty summary or next, and a next gist without line breaks. Appends the UTC ISO timestamp (until core's hero-zone helper lands), optional label, summary and Next gist through the current pass edit. It writes no files or commits directly. The gate entrypoint reads a stdin summary before calling it. Integration tests exercise it through the real launcher and pass, including one commit per turn.\n\n## Code\n\n- Function: [src/i01a18f6b14f97ca38a091f6b31317223.ts](../src/i01a18f6b14f97ca38a091f6b31317223.ts)\n- Tests: [src/i01a18f6b14f97ca38a091f6b31317223.test.ts](../src/i01a18f6b14f97ca38a091f6b31317223.test.ts)" }, "01a1b3d8-387a-7abf-8262-80910ae9fdbb": { "kind": "function", "name": "dive-branch-dashes", "gist": "Renames a checkout's dive branches from nosedive/<token>/<dive id> to nosedive-<token>-<dive id>, in the hero and its workspace checkouts", "usages": [], "top": true, "text": "---\nkind: migration\nid: 01a1b3d8-387a-7abf-8262-80910ae9fdbb\nname: dive-branch-dashes\ngist: \"Renames a checkout's dive branches from nosedive/<token>/<dive id> to nosedive-<token>-<dive id>, in the hero and its workspace checkouts\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 39c33321d487\nlinks:\n  - nosedive-core:01a13354-85c6-7c95-b7ef-df2f0e03cfd6:\n      rel: uses.function\n  - kb/01a15bb1-da9e-7d2d-aa82-5ee97257adc6.md:\n      rel: parent.feat\n---\n\n# Dive branch dashes\n\nWork named a dive's branch `nosedive/<token>/<dive id>` until git refused it in a hero with a branch named `nosedive`: a ref cannot be both a branch and a folder of branches. It is `nosedive-<token>-<dive id>` now, one segment (see dive, dive-branch-dashes), and a dive branch of the old shape is no longer read as one.\n\nThis migration renames this checkout's old-shaped dive branches, in the hero and in each git checkout in its workspace, with `git branch -m`, so a branch checked out keeps its place and its upstream. Only branches whose token is one of the hero's own branches' are renamed: a scope's cache is shared with any other hero checking the repo out, and that hero's dives are its own to rename when it is seeded. It renames nothing the second time, and says how many it renamed.\n\n## Code\n\n- Function: [src/i01a1b3d8387a7abf826280910ae9fdbb.ts](../src/i01a1b3d8387a7abf826280910ae9fdbb.ts)\n- Tests: [src/i01a1b3d8387a7abf826280910ae9fdbb.test.ts](../src/i01a1b3d8387a7abf826280910ae9fdbb.test.ts)\n", "body": "# Dive branch dashes\n\nWork named a dive's branch `nosedive/<token>/<dive id>` until git refused it in a hero with a branch named `nosedive`: a ref cannot be both a branch and a folder of branches. It is `nosedive-<token>-<dive id>` now, one segment (see dive, dive-branch-dashes), and a dive branch of the old shape is no longer read as one.\n\nThis migration renames this checkout's old-shaped dive branches, in the hero and in each git checkout in its workspace, with `git branch -m`, so a branch checked out keeps its place and its upstream. Only branches whose token is one of the hero's own branches' are renamed: a scope's cache is shared with any other hero checking the repo out, and that hero's dives are its own to rename when it is seeded. It renames nothing the second time, and says how many it renamed.\n\n## Code\n\n- Function: [src/i01a1b3d8387a7abf826280910ae9fdbb.ts](../src/i01a1b3d8387a7abf826280910ae9fdbb.ts)\n- Tests: [src/i01a1b3d8387a7abf826280910ae9fdbb.test.ts](../src/i01a1b3d8387a7abf826280910ae9fdbb.test.ts)" }, "01a1b45b-04a0-79a4-94fe-d25a3665456d": { "kind": "action", "name": "dive-shape", "gist": "Keeps a dive in its feat's shape however crud changes it: minted with its feat's scopes and linked from its feat, moved only before it is jumped, and dropped only when it is over or never jumped", "usages": [{ "id": "16b8d55a332958f3b47989994ca5c52c", "text": "before crud dive" }, { "id": "012ea2e903345c02b1cc8786221f93cd", "text": "after crud dive" }], "top": true, "text": "---\nkind: action\nid: 01a1b45b-04a0-79a4-94fe-d25a3665456d\nname: dive-shape\ngist: \"Keeps a dive in its feat's shape however crud changes it: minted with its feat's scopes and linked from its feat, moved only before it is jumped, and dropped only when it is over or never jumped\"\nscopes:\n  - 01a1336b-c0b8-7cde-b7c6-285196062297:\n      canonical: true\n      version: 7bf363e12b620ec5e386d079712c729333bd43f4\n      schema: 3d47d51108fa\nmeta:\n  usages:\n    - before crud dive\n    - after crud dive\n---\n\n# Dive shape\n\n## Usage\n\nThe dive kind links this gate `crud.gate` (see core's crud-gates), so a dive made or changed by crud keeps the shape jump gives one it mints: `meta.feat` names its feat, which the kind's schema requires, its scopes are its feat's, and its feat links it `dives.feat`. A dive can so be minted with crud, briefed in its body, and jumped later by anyone.\n\n- **Before**: an edit that changes a dive's name is refused: its feat names it, and its gist says what it is for. A drop of a dive that is not over, with no `outcome` but a `diver` or a `packer`, is refused: jump it and finish it, landing or bailing it; one never jumped, or over, goes, once core finds its feat records it (drops-recorded). A change of `meta.feat` is refused once the dive was jumped, having a `diver`, a `packer` or an `outcome`: its branches and refs are its feat's.\n- **After**: a dive minted, or a doc made a dive, gets its feat's repo scopes, each with the feat's work branch, the feat's `dives.feat` link, and its name, `<feat name>.<last 6 of its id>`, as jump names a dive, replacing any crud gave it; a dive whose `meta.feat` changed has its scopes replaced by the new feat's, its link moved there, and is renamed after it (dive-names-derived). Its other scope entries, its kind's canonical one among them, are kept.\n\n## Code\n\n- Entrypoint: [src/i01a1b45b04a079a494fed25a3665456d.ts](../src/i01a1b45b04a079a494fed25a3665456d.ts)\n- `before crud dive`: [impl](../src/i16b8d55a332958f3b47989994ca5c52c.ts), [tests](../src/i16b8d55a332958f3b47989994ca5c52c.test.ts)\n- `after crud dive`: [impl](../src/i012ea2e903345c02b1cc8786221f93cd.ts), [tests](../src/i012ea2e903345c02b1cc8786221f93cd.test.ts)\n", "body": "# Dive shape\n\n## Usage\n\nThe dive kind links this gate `crud.gate` (see core's crud-gates), so a dive made or changed by crud keeps the shape jump gives one it mints: `meta.feat` names its feat, which the kind's schema requires, its scopes are its feat's, and its feat links it `dives.feat`. A dive can so be minted with crud, briefed in its body, and jumped later by anyone.\n\n- **Before**: an edit that changes a dive's name is refused: its feat names it, and its gist says what it is for. A drop of a dive that is not over, with no `outcome` but a `diver` or a `packer`, is refused: jump it and finish it, landing or bailing it; one never jumped, or over, goes, once core finds its feat records it (drops-recorded). A change of `meta.feat` is refused once the dive was jumped, having a `diver`, a `packer` or an `outcome`: its branches and refs are its feat's.\n- **After**: a dive minted, or a doc made a dive, gets its feat's repo scopes, each with the feat's work branch, the feat's `dives.feat` link, and its name, `<feat name>.<last 6 of its id>`, as jump names a dive, replacing any crud gave it; a dive whose `meta.feat` changed has its scopes replaced by the new feat's, its link moved there, and is renamed after it (dive-names-derived). Its other scope entries, its kind's canonical one among them, are kept.\n\n## Code\n\n- Entrypoint: [src/i01a1b45b04a079a494fed25a3665456d.ts](../src/i01a1b45b04a079a494fed25a3665456d.ts)\n- `before crud dive`: [impl](../src/i16b8d55a332958f3b47989994ca5c52c.ts), [tests](../src/i16b8d55a332958f3b47989994ca5c52c.test.ts)\n- `after crud dive`: [impl](../src/i012ea2e903345c02b1cc8786221f93cd.ts), [tests](../src/i012ea2e903345c02b1cc8786221f93cd.test.ts)" } };
var kinds = { "dive": { "schema": { "type": "object", "additionalProperties": false, "properties": { "diver": { "type": ["string", "null"] }, "packer": { "type": ["string", "null"] }, "outcome": { "enum": ["landed", "bailed"] }, "feat": { "type": "string" } }, "required": ["feat"] }, "links": [{ "kb/01a18f45-42c6-70cc-b111-f6bd564e1f50.md": { "rel": "turn.gate" } }, { "kb/01a1b45b-04a0-79a4-94fe-d25a3665456d.md": { "rel": "crud.gate" } }], "id": "01a15bb2-5092-7858-90dd-e6c5b1b45254", "file": ".nosedive/kinds/01a15bb2-5092-7858-90dd-e6c5b1b45254.md", "digest": "dda1d445fe6b", "dropWhen": "It was jumped and is over, landed or bailed, as `meta.outcome` says; and what its log learned is kept where it lasts: each decision made and each lesson worth keeping recorded on the durable doc it concerns, the feature or area its feat works toward, never only in the dive, whose log goes with it. A bailed dive's reason is such a lesson when the next attempt needs it, as a slice found too big to review. One held or packed is not dropped: jump it and finish it. Whoever drops it, having read it, says on its feat what it completed, `nosedive crud <feat> --section:Dropped.<dive> -`, then `nosedive crud --drop <dive>`, which takes its feat's `dives.feat` link with it (drops-recorded).", "version": "2b5aaf891e026c73f7a075542449a06e87722fbf", "published": true } };
var index = {
  "af6509ae-1c56-58b9-b055-7d1394390098": "01a15bb2-736b-7eac-84a7-3389e72d9590",
  "4b3e3035-238e-52a3-a5d4-9ec64c898ef7": "01a15bb2-7501-731a-9e9c-1e41b96c3dde",
  "8af1e9f3-0265-51ab-b46e-d141c42e2221": "01a15bb2-76d1-7aa2-b4e5-dcc260c69c00",
  "36ef0971-550d-551f-b255-9294b3e3c998": "01a15bb2-786d-7958-9f53-bf95a2f06ff0",
  "1e9ca1a2-35ab-5e9c-893e-8970d934f574": "01a15bb2-7be9-786f-9188-5a2f0a0fa08e",
  "e795d8a7-3fbf-5a19-8b74-a911d66d6dcf": "01a15bb2-7d7c-7225-8e54-d02070189892",
  "1c83141d-c344-5bd5-81f3-92fedec4c0be": "01a15bb2-7f14-7154-9b09-7c2e37805132",
  "b8158e04-6e76-5120-9c85-97010a64a77c": "01a18f45-42c6-70cc-b111-f6bd564e1f50",
  "f21411f6-4cc0-5ce8-9e0c-0e02c948da11": "01a18f6b-14f9-7ca3-8a09-1f6b31317223",
  "bd10b9c0-8b2e-51fe-8929-61617f460a52": "01a1b3d8-387a-7abf-8262-80910ae9fdbb",
  "b73c1f8e-7866-5e6d-b98b-f7ab8cac2ef8": "01a1b45b-04a0-79a4-94fe-d25a3665456d",
  "209b08f9-f222-5231-a8d8-47a30ee40d53": i01a15bb2736b7eac84a73389e72d9590,
  "cf63bd77-01ec-5912-91bf-d0b4566d1d55": i01a15bb27501731a9e9c1e41b96c3dde,
  "8ff0693e-c09b-59a7-adef-94f34a392be9": i01a15bb276d17aa2b4e5dcc260c69c00,
  "fbd45f9a-7033-51f0-a63d-8768c30ab79a": i01a15bb2786d79589f53bf95a2f06ff0,
  "8c5681fc-9097-5be3-96d4-5517e7ce4cc4": i01a15bb27be9786f91885a2f0a0fa08e,
  "e33071f3-edd6-508e-898f-81cb5d795413": i01a15bb27d7c72258e54d02070189892,
  "2e41be4f-20a9-54f1-a527-5c25686cbac0": i01a15bb27f1471549b097c2e37805132,
  "bda38c83-df02-5c69-8e8b-d360cbc66883": i01a18f4542c670ccb111f6bd564e1f50,
  "51568ca4-0a3a-5952-80cb-522d71a4a77f": i01a18f6b14f97ca38a091f6b31317223,
  "94d91c2c-fcab-5d64-abf3-83fd7a4910a0": i01a1b3d8387a7abf826280910ae9fdbb,
  "8e00db70-8a2f-584f-8603-af7fa31a1edb": i01a1b45b04a079a494fed25a3665456d
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
