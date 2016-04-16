Module["asm"] =  (function(global,env,buffer) {

 "use asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.tempDoublePtr | 0;
 var l = env.ABORT | 0;
 var m = 0;
 var n = 0;
 var o = 0;
 var p = 0;
 var q = global.NaN, r = global.Infinity;
 var s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0.0;
 var B = 0;
 var C = global.Math.floor;
 var D = global.Math.abs;
 var E = global.Math.sqrt;
 var F = global.Math.pow;
 var G = global.Math.cos;
 var H = global.Math.sin;
 var I = global.Math.tan;
 var J = global.Math.acos;
 var K = global.Math.asin;
 var L = global.Math.atan;
 var M = global.Math.atan2;
 var N = global.Math.exp;
 var O = global.Math.log;
 var P = global.Math.ceil;
 var Q = global.Math.imul;
 var R = global.Math.min;
 var S = global.Math.clz32;
 var T = env.abort;
 var U = env.assert;
 var V = env.invoke_iiii;
 var W = env.invoke_vi;
 var X = env.invoke_vii;
 var Y = env.invoke_ii;
 var Z = env.invoke_viii;
 var _ = env.invoke_v;
 var $ = env._glFlush;
 var aa = env._glUseProgram;
 var ba = env._glVertexAttribPointer;
 var ca = env._glHint;
 var da = env.___syscall54;
 var ea = env._glutDisplayFunc;
 var fa = env._glBegin;
 var ga = env.emscriptenWebGLGet;
 var ha = env.___syscall6;
 var ia = env._glClearColor;
 var ja = env._glDeleteProgram;
 var ka = env._glBindBuffer;
 var la = env._glutInitDisplayMode;
 var ma = env._emscripten_set_main_loop;
 var na = env._glViewport;
 var oa = env._glGetBooleanv;
 var pa = env._emscripten_set_main_loop_timing;
 var qa = env._glTranslatef;
 var ra = env._sbrk;
 var sa = env._glIsEnabled;
 var ta = env._glutReshapeWindow;
 var ua = env._glDisableVertexAttribArray;
 var va = env._glClear;
 var wa = env._glCreateShader;
 var xa = env._glutSwapBuffers;
 var ya = env._glGetFloatv;
 var za = env.__exit;
 var Aa = env._glEnableVertexAttribArray;
 var Ba = env._glBindAttribLocation;
 var Ca = env._emscripten_glColor4f;
 var Da = env._glShaderSource;
 var Ea = env._glVertex3f;
 var Fa = env._glutReshapeFunc;
 var Ga = env._glEnable;
 var Ha = env._glutPostRedisplay;
 var Ia = env._glutInit;
 var Ja = env._glLoadIdentity;
 var Ka = env._glGetIntegerv;
 var La = env._glGetString;
 var Ma = env._glEnd;
 var Na = env.___unlock;
 var Oa = env._glActiveTexture;
 var Pa = env._pthread_cleanup_pop;
 var Qa = env._emscripten_memcpy_big;
 var Ra = env._gluPerspective;
 var Sa = env._emscripten_get_now;
 var Ta = env._glAttachShader;
 var Ua = env._glMatrixMode;
 var Va = env._glCompileShader;
 var Wa = env._glutKeyboardFunc;
 var Xa = env._glRotatef;
 var Ya = env._glLinkProgram;
 var Za = env.___lock;
 var _a = env._abort;
 var $a = env._pthread_cleanup_push;
 var ab = env._glDisable;
 var bb = env._glColor3f;
 var cb = env._glDetachShader;
 var db = env._glutCreateWindow;
 var eb = env.___syscall140;
 var fb = env._glutMainLoop;
 var gb = env._exit;
 var hb = env._glutInitWindowSize;
 var ib = env.___syscall146;
 var jb = 0.0;
 
// EMSCRIPTEN_START_FUNCS

function Mb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0, ka = 0, la = 0, ma = 0, na = 0, oa = 0, pa = 0, qa = 0, sa = 0, ta = 0, ua = 0, va = 0, wa = 0, xa = 0, ya = 0, za = 0, Aa = 0, Ba = 0, Ca = 0, Da = 0, Ea = 0, Fa = 0, Ga = 0, Ha = 0, Ia = 0, Ja = 0, Ka = 0, La = 0, Ma = 0, Na = 0, Oa = 0, Pa = 0, Qa = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 do if (a >>> 0 < 245) {
  e = a >>> 0 < 11 ? 16 : a + 11 & -8;
  f = e >>> 3;
  g = c[302] | 0;
  h = g >>> f;
  if (h & 3 | 0) {
   j = (h & 1 ^ 1) + f | 0;
   k = 1248 + (j << 1 << 2) | 0;
   l = k + 8 | 0;
   m = c[l >> 2] | 0;
   n = m + 8 | 0;
   o = c[n >> 2] | 0;
   do if ((k | 0) == (o | 0)) c[302] = g & ~(1 << j); else {
    if (o >>> 0 < (c[306] | 0) >>> 0) _a();
    p = o + 12 | 0;
    if ((c[p >> 2] | 0) == (m | 0)) {
     c[p >> 2] = k;
     c[l >> 2] = o;
     break;
    } else _a();
   } while (0);
   o = j << 3;
   c[m + 4 >> 2] = o | 3;
   l = m + o + 4 | 0;
   c[l >> 2] = c[l >> 2] | 1;
   q = n;
   i = b;
   return q | 0;
  }
  l = c[304] | 0;
  if (e >>> 0 > l >>> 0) {
   if (h | 0) {
    o = 2 << f;
    k = h << f & (o | 0 - o);
    o = (k & 0 - k) + -1 | 0;
    k = o >>> 12 & 16;
    p = o >>> k;
    o = p >>> 5 & 8;
    r = p >>> o;
    p = r >>> 2 & 4;
    s = r >>> p;
    r = s >>> 1 & 2;
    t = s >>> r;
    s = t >>> 1 & 1;
    u = (o | k | p | r | s) + (t >>> s) | 0;
    s = 1248 + (u << 1 << 2) | 0;
    t = s + 8 | 0;
    r = c[t >> 2] | 0;
    p = r + 8 | 0;
    k = c[p >> 2] | 0;
    do if ((s | 0) == (k | 0)) {
     c[302] = g & ~(1 << u);
     v = l;
    } else {
     if (k >>> 0 < (c[306] | 0) >>> 0) _a();
     o = k + 12 | 0;
     if ((c[o >> 2] | 0) == (r | 0)) {
      c[o >> 2] = s;
      c[t >> 2] = k;
      v = c[304] | 0;
      break;
     } else _a();
    } while (0);
    k = (u << 3) - e | 0;
    c[r + 4 >> 2] = e | 3;
    t = r + e | 0;
    c[t + 4 >> 2] = k | 1;
    c[t + k >> 2] = k;
    if (v | 0) {
     s = c[307] | 0;
     l = v >>> 3;
     g = 1248 + (l << 1 << 2) | 0;
     f = c[302] | 0;
     h = 1 << l;
     if (!(f & h)) {
      c[302] = f | h;
      w = g + 8 | 0;
      x = g;
     } else {
      h = g + 8 | 0;
      f = c[h >> 2] | 0;
      if (f >>> 0 < (c[306] | 0) >>> 0) _a(); else {
       w = h;
       x = f;
      }
     }
     c[w >> 2] = s;
     c[x + 12 >> 2] = s;
     c[s + 8 >> 2] = x;
     c[s + 12 >> 2] = g;
    }
    c[304] = k;
    c[307] = t;
    q = p;
    i = b;
    return q | 0;
   }
   t = c[303] | 0;
   if (!t) y = e; else {
    k = (t & 0 - t) + -1 | 0;
    t = k >>> 12 & 16;
    g = k >>> t;
    k = g >>> 5 & 8;
    s = g >>> k;
    g = s >>> 2 & 4;
    f = s >>> g;
    s = f >>> 1 & 2;
    h = f >>> s;
    f = h >>> 1 & 1;
    l = c[1512 + ((k | t | g | s | f) + (h >>> f) << 2) >> 2] | 0;
    f = (c[l + 4 >> 2] & -8) - e | 0;
    h = l;
    s = l;
    while (1) {
     l = c[h + 16 >> 2] | 0;
     if (!l) {
      g = c[h + 20 >> 2] | 0;
      if (!g) {
       z = f;
       A = s;
       break;
      } else B = g;
     } else B = l;
     l = (c[B + 4 >> 2] & -8) - e | 0;
     g = l >>> 0 < f >>> 0;
     f = g ? l : f;
     h = B;
     s = g ? B : s;
    }
    s = c[306] | 0;
    if (A >>> 0 < s >>> 0) _a();
    h = A + e | 0;
    if (A >>> 0 >= h >>> 0) _a();
    f = c[A + 24 >> 2] | 0;
    p = c[A + 12 >> 2] | 0;
    do if ((p | 0) == (A | 0)) {
     r = A + 20 | 0;
     u = c[r >> 2] | 0;
     if (!u) {
      g = A + 16 | 0;
      l = c[g >> 2] | 0;
      if (!l) {
       C = 0;
       break;
      } else {
       D = l;
       E = g;
      }
     } else {
      D = u;
      E = r;
     }
     while (1) {
      r = D + 20 | 0;
      u = c[r >> 2] | 0;
      if (u | 0) {
       D = u;
       E = r;
       continue;
      }
      r = D + 16 | 0;
      u = c[r >> 2] | 0;
      if (!u) {
       F = D;
       G = E;
       break;
      } else {
       D = u;
       E = r;
      }
     }
     if (G >>> 0 < s >>> 0) _a(); else {
      c[G >> 2] = 0;
      C = F;
      break;
     }
    } else {
     r = c[A + 8 >> 2] | 0;
     if (r >>> 0 < s >>> 0) _a();
     u = r + 12 | 0;
     if ((c[u >> 2] | 0) != (A | 0)) _a();
     g = p + 8 | 0;
     if ((c[g >> 2] | 0) == (A | 0)) {
      c[u >> 2] = p;
      c[g >> 2] = r;
      C = p;
      break;
     } else _a();
    } while (0);
    do if (f | 0) {
     p = c[A + 28 >> 2] | 0;
     s = 1512 + (p << 2) | 0;
     if ((A | 0) == (c[s >> 2] | 0)) {
      c[s >> 2] = C;
      if (!C) {
       c[303] = c[303] & ~(1 << p);
       break;
      }
     } else {
      if (f >>> 0 < (c[306] | 0) >>> 0) _a();
      p = f + 16 | 0;
      if ((c[p >> 2] | 0) == (A | 0)) c[p >> 2] = C; else c[f + 20 >> 2] = C;
      if (!C) break;
     }
     p = c[306] | 0;
     if (C >>> 0 < p >>> 0) _a();
     c[C + 24 >> 2] = f;
     s = c[A + 16 >> 2] | 0;
     do if (s | 0) if (s >>> 0 < p >>> 0) _a(); else {
      c[C + 16 >> 2] = s;
      c[s + 24 >> 2] = C;
      break;
     } while (0);
     s = c[A + 20 >> 2] | 0;
     if (s | 0) if (s >>> 0 < (c[306] | 0) >>> 0) _a(); else {
      c[C + 20 >> 2] = s;
      c[s + 24 >> 2] = C;
      break;
     }
    } while (0);
    if (z >>> 0 < 16) {
     f = z + e | 0;
     c[A + 4 >> 2] = f | 3;
     s = A + f + 4 | 0;
     c[s >> 2] = c[s >> 2] | 1;
    } else {
     c[A + 4 >> 2] = e | 3;
     c[h + 4 >> 2] = z | 1;
     c[h + z >> 2] = z;
     s = c[304] | 0;
     if (s | 0) {
      f = c[307] | 0;
      p = s >>> 3;
      s = 1248 + (p << 1 << 2) | 0;
      r = c[302] | 0;
      g = 1 << p;
      if (!(r & g)) {
       c[302] = r | g;
       H = s + 8 | 0;
       I = s;
      } else {
       g = s + 8 | 0;
       r = c[g >> 2] | 0;
       if (r >>> 0 < (c[306] | 0) >>> 0) _a(); else {
        H = g;
        I = r;
       }
      }
      c[H >> 2] = f;
      c[I + 12 >> 2] = f;
      c[f + 8 >> 2] = I;
      c[f + 12 >> 2] = s;
     }
     c[304] = z;
     c[307] = h;
    }
    q = A + 8 | 0;
    i = b;
    return q | 0;
   }
  } else y = e;
 } else if (a >>> 0 > 4294967231) y = -1; else {
  s = a + 11 | 0;
  f = s & -8;
  r = c[303] | 0;
  if (!r) y = f; else {
   g = 0 - f | 0;
   p = s >>> 8;
   if (!p) J = 0; else if (f >>> 0 > 16777215) J = 31; else {
    s = (p + 1048320 | 0) >>> 16 & 8;
    u = p << s;
    p = (u + 520192 | 0) >>> 16 & 4;
    l = u << p;
    u = (l + 245760 | 0) >>> 16 & 2;
    t = 14 - (p | s | u) + (l << u >>> 15) | 0;
    J = f >>> (t + 7 | 0) & 1 | t << 1;
   }
   t = c[1512 + (J << 2) >> 2] | 0;
   a : do if (!t) {
    K = g;
    L = 0;
    M = 0;
    N = 86;
   } else {
    u = g;
    l = 0;
    s = f << ((J | 0) == 31 ? 0 : 25 - (J >>> 1) | 0);
    p = t;
    k = 0;
    while (1) {
     n = c[p + 4 >> 2] & -8;
     m = n - f | 0;
     if (m >>> 0 < u >>> 0) if ((n | 0) == (f | 0)) {
      O = m;
      P = p;
      Q = p;
      N = 90;
      break a;
     } else {
      R = m;
      S = p;
     } else {
      R = u;
      S = k;
     }
     m = c[p + 20 >> 2] | 0;
     p = c[p + 16 + (s >>> 31 << 2) >> 2] | 0;
     n = (m | 0) == 0 | (m | 0) == (p | 0) ? l : m;
     m = (p | 0) == 0;
     if (m) {
      K = R;
      L = n;
      M = S;
      N = 86;
      break;
     } else {
      u = R;
      l = n;
      s = s << (m & 1 ^ 1);
      k = S;
     }
    }
   } while (0);
   if ((N | 0) == 86) {
    if ((L | 0) == 0 & (M | 0) == 0) {
     t = 2 << J;
     g = r & (t | 0 - t);
     if (!g) {
      y = f;
      break;
     }
     t = (g & 0 - g) + -1 | 0;
     g = t >>> 12 & 16;
     e = t >>> g;
     t = e >>> 5 & 8;
     h = e >>> t;
     e = h >>> 2 & 4;
     k = h >>> e;
     h = k >>> 1 & 2;
     s = k >>> h;
     k = s >>> 1 & 1;
     T = c[1512 + ((t | g | e | h | k) + (s >>> k) << 2) >> 2] | 0;
    } else T = L;
    if (!T) {
     U = K;
     V = M;
    } else {
     O = K;
     P = T;
     Q = M;
     N = 90;
    }
   }
   if ((N | 0) == 90) while (1) {
    N = 0;
    k = (c[P + 4 >> 2] & -8) - f | 0;
    s = k >>> 0 < O >>> 0;
    h = s ? k : O;
    k = s ? P : Q;
    s = c[P + 16 >> 2] | 0;
    if (s | 0) {
     O = h;
     P = s;
     Q = k;
     N = 90;
     continue;
    }
    P = c[P + 20 >> 2] | 0;
    if (!P) {
     U = h;
     V = k;
     break;
    } else {
     O = h;
     Q = k;
     N = 90;
    }
   }
   if (!V) y = f; else if (U >>> 0 < ((c[304] | 0) - f | 0) >>> 0) {
    r = c[306] | 0;
    if (V >>> 0 < r >>> 0) _a();
    k = V + f | 0;
    if (V >>> 0 >= k >>> 0) _a();
    h = c[V + 24 >> 2] | 0;
    s = c[V + 12 >> 2] | 0;
    do if ((s | 0) == (V | 0)) {
     e = V + 20 | 0;
     g = c[e >> 2] | 0;
     if (!g) {
      t = V + 16 | 0;
      l = c[t >> 2] | 0;
      if (!l) {
       W = 0;
       break;
      } else {
       X = l;
       Y = t;
      }
     } else {
      X = g;
      Y = e;
     }
     while (1) {
      e = X + 20 | 0;
      g = c[e >> 2] | 0;
      if (g | 0) {
       X = g;
       Y = e;
       continue;
      }
      e = X + 16 | 0;
      g = c[e >> 2] | 0;
      if (!g) {
       Z = X;
       _ = Y;
       break;
      } else {
       X = g;
       Y = e;
      }
     }
     if (_ >>> 0 < r >>> 0) _a(); else {
      c[_ >> 2] = 0;
      W = Z;
      break;
     }
    } else {
     e = c[V + 8 >> 2] | 0;
     if (e >>> 0 < r >>> 0) _a();
     g = e + 12 | 0;
     if ((c[g >> 2] | 0) != (V | 0)) _a();
     t = s + 8 | 0;
     if ((c[t >> 2] | 0) == (V | 0)) {
      c[g >> 2] = s;
      c[t >> 2] = e;
      W = s;
      break;
     } else _a();
    } while (0);
    do if (h | 0) {
     s = c[V + 28 >> 2] | 0;
     r = 1512 + (s << 2) | 0;
     if ((V | 0) == (c[r >> 2] | 0)) {
      c[r >> 2] = W;
      if (!W) {
       c[303] = c[303] & ~(1 << s);
       break;
      }
     } else {
      if (h >>> 0 < (c[306] | 0) >>> 0) _a();
      s = h + 16 | 0;
      if ((c[s >> 2] | 0) == (V | 0)) c[s >> 2] = W; else c[h + 20 >> 2] = W;
      if (!W) break;
     }
     s = c[306] | 0;
     if (W >>> 0 < s >>> 0) _a();
     c[W + 24 >> 2] = h;
     r = c[V + 16 >> 2] | 0;
     do if (r | 0) if (r >>> 0 < s >>> 0) _a(); else {
      c[W + 16 >> 2] = r;
      c[r + 24 >> 2] = W;
      break;
     } while (0);
     r = c[V + 20 >> 2] | 0;
     if (r | 0) if (r >>> 0 < (c[306] | 0) >>> 0) _a(); else {
      c[W + 20 >> 2] = r;
      c[r + 24 >> 2] = W;
      break;
     }
    } while (0);
    do if (U >>> 0 < 16) {
     h = U + f | 0;
     c[V + 4 >> 2] = h | 3;
     r = V + h + 4 | 0;
     c[r >> 2] = c[r >> 2] | 1;
    } else {
     c[V + 4 >> 2] = f | 3;
     c[k + 4 >> 2] = U | 1;
     c[k + U >> 2] = U;
     r = U >>> 3;
     if (U >>> 0 < 256) {
      h = 1248 + (r << 1 << 2) | 0;
      s = c[302] | 0;
      e = 1 << r;
      if (!(s & e)) {
       c[302] = s | e;
       $ = h + 8 | 0;
       aa = h;
      } else {
       e = h + 8 | 0;
       s = c[e >> 2] | 0;
       if (s >>> 0 < (c[306] | 0) >>> 0) _a(); else {
        $ = e;
        aa = s;
       }
      }
      c[$ >> 2] = k;
      c[aa + 12 >> 2] = k;
      c[k + 8 >> 2] = aa;
      c[k + 12 >> 2] = h;
      break;
     }
     h = U >>> 8;
     if (!h) ba = 0; else if (U >>> 0 > 16777215) ba = 31; else {
      s = (h + 1048320 | 0) >>> 16 & 8;
      e = h << s;
      h = (e + 520192 | 0) >>> 16 & 4;
      r = e << h;
      e = (r + 245760 | 0) >>> 16 & 2;
      t = 14 - (h | s | e) + (r << e >>> 15) | 0;
      ba = U >>> (t + 7 | 0) & 1 | t << 1;
     }
     t = 1512 + (ba << 2) | 0;
     c[k + 28 >> 2] = ba;
     e = k + 16 | 0;
     c[e + 4 >> 2] = 0;
     c[e >> 2] = 0;
     e = c[303] | 0;
     r = 1 << ba;
     if (!(e & r)) {
      c[303] = e | r;
      c[t >> 2] = k;
      c[k + 24 >> 2] = t;
      c[k + 12 >> 2] = k;
      c[k + 8 >> 2] = k;
      break;
     }
     r = U << ((ba | 0) == 31 ? 0 : 25 - (ba >>> 1) | 0);
     e = c[t >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (U | 0)) {
       ca = e;
       N = 148;
       break;
      }
      t = e + 16 + (r >>> 31 << 2) | 0;
      s = c[t >> 2] | 0;
      if (!s) {
       da = t;
       ea = e;
       N = 145;
       break;
      } else {
       r = r << 1;
       e = s;
      }
     }
     if ((N | 0) == 145) if (da >>> 0 < (c[306] | 0) >>> 0) _a(); else {
      c[da >> 2] = k;
      c[k + 24 >> 2] = ea;
      c[k + 12 >> 2] = k;
      c[k + 8 >> 2] = k;
      break;
     } else if ((N | 0) == 148) {
      e = ca + 8 | 0;
      r = c[e >> 2] | 0;
      s = c[306] | 0;
      if (r >>> 0 >= s >>> 0 & ca >>> 0 >= s >>> 0) {
       c[r + 12 >> 2] = k;
       c[e >> 2] = k;
       c[k + 8 >> 2] = r;
       c[k + 12 >> 2] = ca;
       c[k + 24 >> 2] = 0;
       break;
      } else _a();
     }
    } while (0);
    q = V + 8 | 0;
    i = b;
    return q | 0;
   } else y = f;
  }
 } while (0);
 V = c[304] | 0;
 if (V >>> 0 >= y >>> 0) {
  ca = V - y | 0;
  ea = c[307] | 0;
  if (ca >>> 0 > 15) {
   da = ea + y | 0;
   c[307] = da;
   c[304] = ca;
   c[da + 4 >> 2] = ca | 1;
   c[da + ca >> 2] = ca;
   c[ea + 4 >> 2] = y | 3;
  } else {
   c[304] = 0;
   c[307] = 0;
   c[ea + 4 >> 2] = V | 3;
   ca = ea + V + 4 | 0;
   c[ca >> 2] = c[ca >> 2] | 1;
  }
  q = ea + 8 | 0;
  i = b;
  return q | 0;
 }
 ea = c[305] | 0;
 if (ea >>> 0 > y >>> 0) {
  ca = ea - y | 0;
  c[305] = ca;
  ea = c[308] | 0;
  V = ea + y | 0;
  c[308] = V;
  c[V + 4 >> 2] = ca | 1;
  c[ea + 4 >> 2] = y | 3;
  q = ea + 8 | 0;
  i = b;
  return q | 0;
 }
 if (!(c[420] | 0)) {
  c[422] = 4096;
  c[421] = 4096;
  c[423] = -1;
  c[424] = -1;
  c[425] = 0;
  c[413] = 0;
  ea = d & -16 ^ 1431655768;
  c[d >> 2] = ea;
  c[420] = ea;
 }
 ea = y + 48 | 0;
 d = c[422] | 0;
 ca = y + 47 | 0;
 V = d + ca | 0;
 da = 0 - d | 0;
 d = V & da;
 if (d >>> 0 <= y >>> 0) {
  q = 0;
  i = b;
  return q | 0;
 }
 U = c[412] | 0;
 if (U | 0) {
  ba = c[410] | 0;
  aa = ba + d | 0;
  if (aa >>> 0 <= ba >>> 0 | aa >>> 0 > U >>> 0) {
   q = 0;
   i = b;
   return q | 0;
  }
 }
 b : do if (!(c[413] & 4)) {
  U = c[308] | 0;
  c : do if (!U) N = 171; else {
   aa = 1656;
   while (1) {
    ba = c[aa >> 2] | 0;
    if (ba >>> 0 <= U >>> 0) {
     $ = aa + 4 | 0;
     if ((ba + (c[$ >> 2] | 0) | 0) >>> 0 > U >>> 0) {
      fa = aa;
      ga = $;
      break;
     }
    }
    aa = c[aa + 8 >> 2] | 0;
    if (!aa) {
     N = 171;
     break c;
    }
   }
   aa = V - (c[305] | 0) & da;
   if (aa >>> 0 < 2147483647) {
    $ = ra(aa | 0) | 0;
    if (($ | 0) == ((c[fa >> 2] | 0) + (c[ga >> 2] | 0) | 0)) {
     if (($ | 0) != (-1 | 0)) {
      ha = $;
      ia = aa;
      N = 191;
      break b;
     }
    } else {
     ja = $;
     ka = aa;
     N = 181;
    }
   }
  } while (0);
  do if ((N | 0) == 171) {
   U = ra(0) | 0;
   if ((U | 0) != (-1 | 0)) {
    f = U;
    aa = c[421] | 0;
    $ = aa + -1 | 0;
    if (!($ & f)) la = d; else la = d - f + ($ + f & 0 - aa) | 0;
    aa = c[410] | 0;
    f = aa + la | 0;
    if (la >>> 0 > y >>> 0 & la >>> 0 < 2147483647) {
     $ = c[412] | 0;
     if ($ | 0) if (f >>> 0 <= aa >>> 0 | f >>> 0 > $ >>> 0) break;
     $ = ra(la | 0) | 0;
     if (($ | 0) == (U | 0)) {
      ha = U;
      ia = la;
      N = 191;
      break b;
     } else {
      ja = $;
      ka = la;
      N = 181;
     }
    }
   }
  } while (0);
  d : do if ((N | 0) == 181) {
   $ = 0 - ka | 0;
   do if (ea >>> 0 > ka >>> 0 & (ka >>> 0 < 2147483647 & (ja | 0) != (-1 | 0))) {
    U = c[422] | 0;
    f = ca - ka + U & 0 - U;
    if (f >>> 0 < 2147483647) if ((ra(f | 0) | 0) == (-1 | 0)) {
     ra($ | 0) | 0;
     break d;
    } else {
     ma = f + ka | 0;
     break;
    } else ma = ka;
   } else ma = ka; while (0);
   if ((ja | 0) != (-1 | 0)) {
    ha = ja;
    ia = ma;
    N = 191;
    break b;
   }
  } while (0);
  c[413] = c[413] | 4;
  N = 188;
 } else N = 188; while (0);
 if ((N | 0) == 188) if (d >>> 0 < 2147483647) {
  ma = ra(d | 0) | 0;
  d = ra(0) | 0;
  if (ma >>> 0 < d >>> 0 & ((ma | 0) != (-1 | 0) & (d | 0) != (-1 | 0))) {
   ja = d - ma | 0;
   if (ja >>> 0 > (y + 40 | 0) >>> 0) {
    ha = ma;
    ia = ja;
    N = 191;
   }
  }
 }
 if ((N | 0) == 191) {
  ja = (c[410] | 0) + ia | 0;
  c[410] = ja;
  if (ja >>> 0 > (c[411] | 0) >>> 0) c[411] = ja;
  ja = c[308] | 0;
  do if (!ja) {
   ma = c[306] | 0;
   if ((ma | 0) == 0 | ha >>> 0 < ma >>> 0) c[306] = ha;
   c[414] = ha;
   c[415] = ia;
   c[417] = 0;
   c[311] = c[420];
   c[310] = -1;
   ma = 0;
   do {
    d = 1248 + (ma << 1 << 2) | 0;
    c[d + 12 >> 2] = d;
    c[d + 8 >> 2] = d;
    ma = ma + 1 | 0;
   } while ((ma | 0) != 32);
   ma = ha + 8 | 0;
   d = (ma & 7 | 0) == 0 ? 0 : 0 - ma & 7;
   ma = ha + d | 0;
   ka = ia + -40 - d | 0;
   c[308] = ma;
   c[305] = ka;
   c[ma + 4 >> 2] = ka | 1;
   c[ma + ka + 4 >> 2] = 40;
   c[309] = c[424];
  } else {
   ka = 1656;
   do {
    ma = c[ka >> 2] | 0;
    d = ka + 4 | 0;
    ca = c[d >> 2] | 0;
    if ((ha | 0) == (ma + ca | 0)) {
     na = ma;
     oa = d;
     pa = ca;
     qa = ka;
     N = 201;
     break;
    }
    ka = c[ka + 8 >> 2] | 0;
   } while ((ka | 0) != 0);
   if ((N | 0) == 201) if (!(c[qa + 12 >> 2] & 8)) if (ja >>> 0 < ha >>> 0 & ja >>> 0 >= na >>> 0) {
    c[oa >> 2] = pa + ia;
    ka = ja + 8 | 0;
    ca = (ka & 7 | 0) == 0 ? 0 : 0 - ka & 7;
    ka = ja + ca | 0;
    d = ia - ca + (c[305] | 0) | 0;
    c[308] = ka;
    c[305] = d;
    c[ka + 4 >> 2] = d | 1;
    c[ka + d + 4 >> 2] = 40;
    c[309] = c[424];
    break;
   }
   d = c[306] | 0;
   if (ha >>> 0 < d >>> 0) {
    c[306] = ha;
    sa = ha;
   } else sa = d;
   d = ha + ia | 0;
   ka = 1656;
   while (1) {
    if ((c[ka >> 2] | 0) == (d | 0)) {
     ta = ka;
     ua = ka;
     N = 209;
     break;
    }
    ka = c[ka + 8 >> 2] | 0;
    if (!ka) {
     va = 1656;
     break;
    }
   }
   if ((N | 0) == 209) if (!(c[ua + 12 >> 2] & 8)) {
    c[ta >> 2] = ha;
    ka = ua + 4 | 0;
    c[ka >> 2] = (c[ka >> 2] | 0) + ia;
    ka = ha + 8 | 0;
    ca = ha + ((ka & 7 | 0) == 0 ? 0 : 0 - ka & 7) | 0;
    ka = d + 8 | 0;
    ma = d + ((ka & 7 | 0) == 0 ? 0 : 0 - ka & 7) | 0;
    ka = ca + y | 0;
    ea = ma - ca - y | 0;
    c[ca + 4 >> 2] = y | 3;
    do if ((ma | 0) == (ja | 0)) {
     la = (c[305] | 0) + ea | 0;
     c[305] = la;
     c[308] = ka;
     c[ka + 4 >> 2] = la | 1;
    } else {
     if ((ma | 0) == (c[307] | 0)) {
      la = (c[304] | 0) + ea | 0;
      c[304] = la;
      c[307] = ka;
      c[ka + 4 >> 2] = la | 1;
      c[ka + la >> 2] = la;
      break;
     }
     la = c[ma + 4 >> 2] | 0;
     if ((la & 3 | 0) == 1) {
      ga = la & -8;
      fa = la >>> 3;
      e : do if (la >>> 0 < 256) {
       da = c[ma + 8 >> 2] | 0;
       V = c[ma + 12 >> 2] | 0;
       $ = 1248 + (fa << 1 << 2) | 0;
       do if ((da | 0) != ($ | 0)) {
        if (da >>> 0 < sa >>> 0) _a();
        if ((c[da + 12 >> 2] | 0) == (ma | 0)) break;
        _a();
       } while (0);
       if ((V | 0) == (da | 0)) {
        c[302] = c[302] & ~(1 << fa);
        break;
       }
       do if ((V | 0) == ($ | 0)) wa = V + 8 | 0; else {
        if (V >>> 0 < sa >>> 0) _a();
        f = V + 8 | 0;
        if ((c[f >> 2] | 0) == (ma | 0)) {
         wa = f;
         break;
        }
        _a();
       } while (0);
       c[da + 12 >> 2] = V;
       c[wa >> 2] = da;
      } else {
       $ = c[ma + 24 >> 2] | 0;
       f = c[ma + 12 >> 2] | 0;
       do if ((f | 0) == (ma | 0)) {
        U = ma + 16 | 0;
        aa = U + 4 | 0;
        ba = c[aa >> 2] | 0;
        if (!ba) {
         W = c[U >> 2] | 0;
         if (!W) {
          xa = 0;
          break;
         } else {
          ya = W;
          za = U;
         }
        } else {
         ya = ba;
         za = aa;
        }
        while (1) {
         aa = ya + 20 | 0;
         ba = c[aa >> 2] | 0;
         if (ba | 0) {
          ya = ba;
          za = aa;
          continue;
         }
         aa = ya + 16 | 0;
         ba = c[aa >> 2] | 0;
         if (!ba) {
          Aa = ya;
          Ba = za;
          break;
         } else {
          ya = ba;
          za = aa;
         }
        }
        if (Ba >>> 0 < sa >>> 0) _a(); else {
         c[Ba >> 2] = 0;
         xa = Aa;
         break;
        }
       } else {
        aa = c[ma + 8 >> 2] | 0;
        if (aa >>> 0 < sa >>> 0) _a();
        ba = aa + 12 | 0;
        if ((c[ba >> 2] | 0) != (ma | 0)) _a();
        U = f + 8 | 0;
        if ((c[U >> 2] | 0) == (ma | 0)) {
         c[ba >> 2] = f;
         c[U >> 2] = aa;
         xa = f;
         break;
        } else _a();
       } while (0);
       if (!$) break;
       f = c[ma + 28 >> 2] | 0;
       da = 1512 + (f << 2) | 0;
       do if ((ma | 0) == (c[da >> 2] | 0)) {
        c[da >> 2] = xa;
        if (xa | 0) break;
        c[303] = c[303] & ~(1 << f);
        break e;
       } else {
        if ($ >>> 0 < (c[306] | 0) >>> 0) _a();
        V = $ + 16 | 0;
        if ((c[V >> 2] | 0) == (ma | 0)) c[V >> 2] = xa; else c[$ + 20 >> 2] = xa;
        if (!xa) break e;
       } while (0);
       f = c[306] | 0;
       if (xa >>> 0 < f >>> 0) _a();
       c[xa + 24 >> 2] = $;
       da = ma + 16 | 0;
       V = c[da >> 2] | 0;
       do if (V | 0) if (V >>> 0 < f >>> 0) _a(); else {
        c[xa + 16 >> 2] = V;
        c[V + 24 >> 2] = xa;
        break;
       } while (0);
       V = c[da + 4 >> 2] | 0;
       if (!V) break;
       if (V >>> 0 < (c[306] | 0) >>> 0) _a(); else {
        c[xa + 20 >> 2] = V;
        c[V + 24 >> 2] = xa;
        break;
       }
      } while (0);
      Ca = ma + ga | 0;
      Da = ga + ea | 0;
     } else {
      Ca = ma;
      Da = ea;
     }
     fa = Ca + 4 | 0;
     c[fa >> 2] = c[fa >> 2] & -2;
     c[ka + 4 >> 2] = Da | 1;
     c[ka + Da >> 2] = Da;
     fa = Da >>> 3;
     if (Da >>> 0 < 256) {
      la = 1248 + (fa << 1 << 2) | 0;
      V = c[302] | 0;
      f = 1 << fa;
      do if (!(V & f)) {
       c[302] = V | f;
       Ea = la + 8 | 0;
       Fa = la;
      } else {
       fa = la + 8 | 0;
       $ = c[fa >> 2] | 0;
       if ($ >>> 0 >= (c[306] | 0) >>> 0) {
        Ea = fa;
        Fa = $;
        break;
       }
       _a();
      } while (0);
      c[Ea >> 2] = ka;
      c[Fa + 12 >> 2] = ka;
      c[ka + 8 >> 2] = Fa;
      c[ka + 12 >> 2] = la;
      break;
     }
     f = Da >>> 8;
     do if (!f) Ga = 0; else {
      if (Da >>> 0 > 16777215) {
       Ga = 31;
       break;
      }
      V = (f + 1048320 | 0) >>> 16 & 8;
      ga = f << V;
      $ = (ga + 520192 | 0) >>> 16 & 4;
      fa = ga << $;
      ga = (fa + 245760 | 0) >>> 16 & 2;
      aa = 14 - ($ | V | ga) + (fa << ga >>> 15) | 0;
      Ga = Da >>> (aa + 7 | 0) & 1 | aa << 1;
     } while (0);
     f = 1512 + (Ga << 2) | 0;
     c[ka + 28 >> 2] = Ga;
     la = ka + 16 | 0;
     c[la + 4 >> 2] = 0;
     c[la >> 2] = 0;
     la = c[303] | 0;
     aa = 1 << Ga;
     if (!(la & aa)) {
      c[303] = la | aa;
      c[f >> 2] = ka;
      c[ka + 24 >> 2] = f;
      c[ka + 12 >> 2] = ka;
      c[ka + 8 >> 2] = ka;
      break;
     }
     aa = Da << ((Ga | 0) == 31 ? 0 : 25 - (Ga >>> 1) | 0);
     la = c[f >> 2] | 0;
     while (1) {
      if ((c[la + 4 >> 2] & -8 | 0) == (Da | 0)) {
       Ha = la;
       N = 279;
       break;
      }
      f = la + 16 + (aa >>> 31 << 2) | 0;
      ga = c[f >> 2] | 0;
      if (!ga) {
       Ia = f;
       Ja = la;
       N = 276;
       break;
      } else {
       aa = aa << 1;
       la = ga;
      }
     }
     if ((N | 0) == 276) if (Ia >>> 0 < (c[306] | 0) >>> 0) _a(); else {
      c[Ia >> 2] = ka;
      c[ka + 24 >> 2] = Ja;
      c[ka + 12 >> 2] = ka;
      c[ka + 8 >> 2] = ka;
      break;
     } else if ((N | 0) == 279) {
      la = Ha + 8 | 0;
      aa = c[la >> 2] | 0;
      ga = c[306] | 0;
      if (aa >>> 0 >= ga >>> 0 & Ha >>> 0 >= ga >>> 0) {
       c[aa + 12 >> 2] = ka;
       c[la >> 2] = ka;
       c[ka + 8 >> 2] = aa;
       c[ka + 12 >> 2] = Ha;
       c[ka + 24 >> 2] = 0;
       break;
      } else _a();
     }
    } while (0);
    q = ca + 8 | 0;
    i = b;
    return q | 0;
   } else va = 1656;
   while (1) {
    ka = c[va >> 2] | 0;
    if (ka >>> 0 <= ja >>> 0) {
     ea = ka + (c[va + 4 >> 2] | 0) | 0;
     if (ea >>> 0 > ja >>> 0) {
      Ka = ea;
      break;
     }
    }
    va = c[va + 8 >> 2] | 0;
   }
   ca = Ka + -47 | 0;
   ea = ca + 8 | 0;
   ka = ca + ((ea & 7 | 0) == 0 ? 0 : 0 - ea & 7) | 0;
   ea = ja + 16 | 0;
   ca = ka >>> 0 < ea >>> 0 ? ja : ka;
   ka = ca + 8 | 0;
   ma = ha + 8 | 0;
   d = (ma & 7 | 0) == 0 ? 0 : 0 - ma & 7;
   ma = ha + d | 0;
   aa = ia + -40 - d | 0;
   c[308] = ma;
   c[305] = aa;
   c[ma + 4 >> 2] = aa | 1;
   c[ma + aa + 4 >> 2] = 40;
   c[309] = c[424];
   aa = ca + 4 | 0;
   c[aa >> 2] = 27;
   c[ka >> 2] = c[414];
   c[ka + 4 >> 2] = c[415];
   c[ka + 8 >> 2] = c[416];
   c[ka + 12 >> 2] = c[417];
   c[414] = ha;
   c[415] = ia;
   c[417] = 0;
   c[416] = ka;
   ka = ca + 24 | 0;
   do {
    ka = ka + 4 | 0;
    c[ka >> 2] = 7;
   } while ((ka + 4 | 0) >>> 0 < Ka >>> 0);
   if ((ca | 0) != (ja | 0)) {
    ka = ca - ja | 0;
    c[aa >> 2] = c[aa >> 2] & -2;
    c[ja + 4 >> 2] = ka | 1;
    c[ca >> 2] = ka;
    ma = ka >>> 3;
    if (ka >>> 0 < 256) {
     d = 1248 + (ma << 1 << 2) | 0;
     la = c[302] | 0;
     ga = 1 << ma;
     if (!(la & ga)) {
      c[302] = la | ga;
      La = d + 8 | 0;
      Ma = d;
     } else {
      ga = d + 8 | 0;
      la = c[ga >> 2] | 0;
      if (la >>> 0 < (c[306] | 0) >>> 0) _a(); else {
       La = ga;
       Ma = la;
      }
     }
     c[La >> 2] = ja;
     c[Ma + 12 >> 2] = ja;
     c[ja + 8 >> 2] = Ma;
     c[ja + 12 >> 2] = d;
     break;
    }
    d = ka >>> 8;
    if (!d) Na = 0; else if (ka >>> 0 > 16777215) Na = 31; else {
     la = (d + 1048320 | 0) >>> 16 & 8;
     ga = d << la;
     d = (ga + 520192 | 0) >>> 16 & 4;
     ma = ga << d;
     ga = (ma + 245760 | 0) >>> 16 & 2;
     f = 14 - (d | la | ga) + (ma << ga >>> 15) | 0;
     Na = ka >>> (f + 7 | 0) & 1 | f << 1;
    }
    f = 1512 + (Na << 2) | 0;
    c[ja + 28 >> 2] = Na;
    c[ja + 20 >> 2] = 0;
    c[ea >> 2] = 0;
    ga = c[303] | 0;
    ma = 1 << Na;
    if (!(ga & ma)) {
     c[303] = ga | ma;
     c[f >> 2] = ja;
     c[ja + 24 >> 2] = f;
     c[ja + 12 >> 2] = ja;
     c[ja + 8 >> 2] = ja;
     break;
    }
    ma = ka << ((Na | 0) == 31 ? 0 : 25 - (Na >>> 1) | 0);
    ga = c[f >> 2] | 0;
    while (1) {
     if ((c[ga + 4 >> 2] & -8 | 0) == (ka | 0)) {
      Oa = ga;
      N = 305;
      break;
     }
     f = ga + 16 + (ma >>> 31 << 2) | 0;
     la = c[f >> 2] | 0;
     if (!la) {
      Pa = f;
      Qa = ga;
      N = 302;
      break;
     } else {
      ma = ma << 1;
      ga = la;
     }
    }
    if ((N | 0) == 302) if (Pa >>> 0 < (c[306] | 0) >>> 0) _a(); else {
     c[Pa >> 2] = ja;
     c[ja + 24 >> 2] = Qa;
     c[ja + 12 >> 2] = ja;
     c[ja + 8 >> 2] = ja;
     break;
    } else if ((N | 0) == 305) {
     ga = Oa + 8 | 0;
     ma = c[ga >> 2] | 0;
     ka = c[306] | 0;
     if (ma >>> 0 >= ka >>> 0 & Oa >>> 0 >= ka >>> 0) {
      c[ma + 12 >> 2] = ja;
      c[ga >> 2] = ja;
      c[ja + 8 >> 2] = ma;
      c[ja + 12 >> 2] = Oa;
      c[ja + 24 >> 2] = 0;
      break;
     } else _a();
    }
   }
  } while (0);
  ja = c[305] | 0;
  if (ja >>> 0 > y >>> 0) {
   Oa = ja - y | 0;
   c[305] = Oa;
   ja = c[308] | 0;
   N = ja + y | 0;
   c[308] = N;
   c[N + 4 >> 2] = Oa | 1;
   c[ja + 4 >> 2] = y | 3;
   q = ja + 8 | 0;
   i = b;
   return q | 0;
  }
 }
 c[(Db() | 0) >> 2] = 12;
 q = 0;
 i = b;
 return q | 0;
}

function Nb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 if (!a) return;
 b = a + -8 | 0;
 d = c[306] | 0;
 if (b >>> 0 < d >>> 0) _a();
 e = c[a + -4 >> 2] | 0;
 a = e & 3;
 if ((a | 0) == 1) _a();
 f = e & -8;
 g = b + f | 0;
 do if (!(e & 1)) {
  h = c[b >> 2] | 0;
  if (!a) return;
  i = b + (0 - h) | 0;
  j = h + f | 0;
  if (i >>> 0 < d >>> 0) _a();
  if ((i | 0) == (c[307] | 0)) {
   k = g + 4 | 0;
   l = c[k >> 2] | 0;
   if ((l & 3 | 0) != 3) {
    m = i;
    n = j;
    break;
   }
   c[304] = j;
   c[k >> 2] = l & -2;
   c[i + 4 >> 2] = j | 1;
   c[i + j >> 2] = j;
   return;
  }
  l = h >>> 3;
  if (h >>> 0 < 256) {
   h = c[i + 8 >> 2] | 0;
   k = c[i + 12 >> 2] | 0;
   o = 1248 + (l << 1 << 2) | 0;
   if ((h | 0) != (o | 0)) {
    if (h >>> 0 < d >>> 0) _a();
    if ((c[h + 12 >> 2] | 0) != (i | 0)) _a();
   }
   if ((k | 0) == (h | 0)) {
    c[302] = c[302] & ~(1 << l);
    m = i;
    n = j;
    break;
   }
   if ((k | 0) == (o | 0)) p = k + 8 | 0; else {
    if (k >>> 0 < d >>> 0) _a();
    o = k + 8 | 0;
    if ((c[o >> 2] | 0) == (i | 0)) p = o; else _a();
   }
   c[h + 12 >> 2] = k;
   c[p >> 2] = h;
   m = i;
   n = j;
   break;
  }
  h = c[i + 24 >> 2] | 0;
  k = c[i + 12 >> 2] | 0;
  do if ((k | 0) == (i | 0)) {
   o = i + 16 | 0;
   l = o + 4 | 0;
   q = c[l >> 2] | 0;
   if (!q) {
    r = c[o >> 2] | 0;
    if (!r) {
     s = 0;
     break;
    } else {
     t = r;
     u = o;
    }
   } else {
    t = q;
    u = l;
   }
   while (1) {
    l = t + 20 | 0;
    q = c[l >> 2] | 0;
    if (q | 0) {
     t = q;
     u = l;
     continue;
    }
    l = t + 16 | 0;
    q = c[l >> 2] | 0;
    if (!q) {
     v = t;
     w = u;
     break;
    } else {
     t = q;
     u = l;
    }
   }
   if (w >>> 0 < d >>> 0) _a(); else {
    c[w >> 2] = 0;
    s = v;
    break;
   }
  } else {
   l = c[i + 8 >> 2] | 0;
   if (l >>> 0 < d >>> 0) _a();
   q = l + 12 | 0;
   if ((c[q >> 2] | 0) != (i | 0)) _a();
   o = k + 8 | 0;
   if ((c[o >> 2] | 0) == (i | 0)) {
    c[q >> 2] = k;
    c[o >> 2] = l;
    s = k;
    break;
   } else _a();
  } while (0);
  if (!h) {
   m = i;
   n = j;
  } else {
   k = c[i + 28 >> 2] | 0;
   l = 1512 + (k << 2) | 0;
   if ((i | 0) == (c[l >> 2] | 0)) {
    c[l >> 2] = s;
    if (!s) {
     c[303] = c[303] & ~(1 << k);
     m = i;
     n = j;
     break;
    }
   } else {
    if (h >>> 0 < (c[306] | 0) >>> 0) _a();
    k = h + 16 | 0;
    if ((c[k >> 2] | 0) == (i | 0)) c[k >> 2] = s; else c[h + 20 >> 2] = s;
    if (!s) {
     m = i;
     n = j;
     break;
    }
   }
   k = c[306] | 0;
   if (s >>> 0 < k >>> 0) _a();
   c[s + 24 >> 2] = h;
   l = i + 16 | 0;
   o = c[l >> 2] | 0;
   do if (o | 0) if (o >>> 0 < k >>> 0) _a(); else {
    c[s + 16 >> 2] = o;
    c[o + 24 >> 2] = s;
    break;
   } while (0);
   o = c[l + 4 >> 2] | 0;
   if (!o) {
    m = i;
    n = j;
   } else if (o >>> 0 < (c[306] | 0) >>> 0) _a(); else {
    c[s + 20 >> 2] = o;
    c[o + 24 >> 2] = s;
    m = i;
    n = j;
    break;
   }
  }
 } else {
  m = b;
  n = f;
 } while (0);
 if (m >>> 0 >= g >>> 0) _a();
 f = g + 4 | 0;
 b = c[f >> 2] | 0;
 if (!(b & 1)) _a();
 if (!(b & 2)) {
  if ((g | 0) == (c[308] | 0)) {
   s = (c[305] | 0) + n | 0;
   c[305] = s;
   c[308] = m;
   c[m + 4 >> 2] = s | 1;
   if ((m | 0) != (c[307] | 0)) return;
   c[307] = 0;
   c[304] = 0;
   return;
  }
  if ((g | 0) == (c[307] | 0)) {
   s = (c[304] | 0) + n | 0;
   c[304] = s;
   c[307] = m;
   c[m + 4 >> 2] = s | 1;
   c[m + s >> 2] = s;
   return;
  }
  s = (b & -8) + n | 0;
  d = b >>> 3;
  do if (b >>> 0 < 256) {
   v = c[g + 8 >> 2] | 0;
   w = c[g + 12 >> 2] | 0;
   u = 1248 + (d << 1 << 2) | 0;
   if ((v | 0) != (u | 0)) {
    if (v >>> 0 < (c[306] | 0) >>> 0) _a();
    if ((c[v + 12 >> 2] | 0) != (g | 0)) _a();
   }
   if ((w | 0) == (v | 0)) {
    c[302] = c[302] & ~(1 << d);
    break;
   }
   if ((w | 0) == (u | 0)) x = w + 8 | 0; else {
    if (w >>> 0 < (c[306] | 0) >>> 0) _a();
    u = w + 8 | 0;
    if ((c[u >> 2] | 0) == (g | 0)) x = u; else _a();
   }
   c[v + 12 >> 2] = w;
   c[x >> 2] = v;
  } else {
   v = c[g + 24 >> 2] | 0;
   w = c[g + 12 >> 2] | 0;
   do if ((w | 0) == (g | 0)) {
    u = g + 16 | 0;
    t = u + 4 | 0;
    p = c[t >> 2] | 0;
    if (!p) {
     a = c[u >> 2] | 0;
     if (!a) {
      y = 0;
      break;
     } else {
      z = a;
      A = u;
     }
    } else {
     z = p;
     A = t;
    }
    while (1) {
     t = z + 20 | 0;
     p = c[t >> 2] | 0;
     if (p | 0) {
      z = p;
      A = t;
      continue;
     }
     t = z + 16 | 0;
     p = c[t >> 2] | 0;
     if (!p) {
      B = z;
      C = A;
      break;
     } else {
      z = p;
      A = t;
     }
    }
    if (C >>> 0 < (c[306] | 0) >>> 0) _a(); else {
     c[C >> 2] = 0;
     y = B;
     break;
    }
   } else {
    t = c[g + 8 >> 2] | 0;
    if (t >>> 0 < (c[306] | 0) >>> 0) _a();
    p = t + 12 | 0;
    if ((c[p >> 2] | 0) != (g | 0)) _a();
    u = w + 8 | 0;
    if ((c[u >> 2] | 0) == (g | 0)) {
     c[p >> 2] = w;
     c[u >> 2] = t;
     y = w;
     break;
    } else _a();
   } while (0);
   if (v | 0) {
    w = c[g + 28 >> 2] | 0;
    j = 1512 + (w << 2) | 0;
    if ((g | 0) == (c[j >> 2] | 0)) {
     c[j >> 2] = y;
     if (!y) {
      c[303] = c[303] & ~(1 << w);
      break;
     }
    } else {
     if (v >>> 0 < (c[306] | 0) >>> 0) _a();
     w = v + 16 | 0;
     if ((c[w >> 2] | 0) == (g | 0)) c[w >> 2] = y; else c[v + 20 >> 2] = y;
     if (!y) break;
    }
    w = c[306] | 0;
    if (y >>> 0 < w >>> 0) _a();
    c[y + 24 >> 2] = v;
    j = g + 16 | 0;
    i = c[j >> 2] | 0;
    do if (i | 0) if (i >>> 0 < w >>> 0) _a(); else {
     c[y + 16 >> 2] = i;
     c[i + 24 >> 2] = y;
     break;
    } while (0);
    i = c[j + 4 >> 2] | 0;
    if (i | 0) if (i >>> 0 < (c[306] | 0) >>> 0) _a(); else {
     c[y + 20 >> 2] = i;
     c[i + 24 >> 2] = y;
     break;
    }
   }
  } while (0);
  c[m + 4 >> 2] = s | 1;
  c[m + s >> 2] = s;
  if ((m | 0) == (c[307] | 0)) {
   c[304] = s;
   return;
  } else D = s;
 } else {
  c[f >> 2] = b & -2;
  c[m + 4 >> 2] = n | 1;
  c[m + n >> 2] = n;
  D = n;
 }
 n = D >>> 3;
 if (D >>> 0 < 256) {
  b = 1248 + (n << 1 << 2) | 0;
  f = c[302] | 0;
  s = 1 << n;
  if (!(f & s)) {
   c[302] = f | s;
   E = b + 8 | 0;
   F = b;
  } else {
   s = b + 8 | 0;
   f = c[s >> 2] | 0;
   if (f >>> 0 < (c[306] | 0) >>> 0) _a(); else {
    E = s;
    F = f;
   }
  }
  c[E >> 2] = m;
  c[F + 12 >> 2] = m;
  c[m + 8 >> 2] = F;
  c[m + 12 >> 2] = b;
  return;
 }
 b = D >>> 8;
 if (!b) G = 0; else if (D >>> 0 > 16777215) G = 31; else {
  F = (b + 1048320 | 0) >>> 16 & 8;
  E = b << F;
  b = (E + 520192 | 0) >>> 16 & 4;
  f = E << b;
  E = (f + 245760 | 0) >>> 16 & 2;
  s = 14 - (b | F | E) + (f << E >>> 15) | 0;
  G = D >>> (s + 7 | 0) & 1 | s << 1;
 }
 s = 1512 + (G << 2) | 0;
 c[m + 28 >> 2] = G;
 c[m + 20 >> 2] = 0;
 c[m + 16 >> 2] = 0;
 E = c[303] | 0;
 f = 1 << G;
 do if (!(E & f)) {
  c[303] = E | f;
  c[s >> 2] = m;
  c[m + 24 >> 2] = s;
  c[m + 12 >> 2] = m;
  c[m + 8 >> 2] = m;
 } else {
  F = D << ((G | 0) == 31 ? 0 : 25 - (G >>> 1) | 0);
  b = c[s >> 2] | 0;
  while (1) {
   if ((c[b + 4 >> 2] & -8 | 0) == (D | 0)) {
    H = b;
    I = 130;
    break;
   }
   n = b + 16 + (F >>> 31 << 2) | 0;
   y = c[n >> 2] | 0;
   if (!y) {
    J = n;
    K = b;
    I = 127;
    break;
   } else {
    F = F << 1;
    b = y;
   }
  }
  if ((I | 0) == 127) if (J >>> 0 < (c[306] | 0) >>> 0) _a(); else {
   c[J >> 2] = m;
   c[m + 24 >> 2] = K;
   c[m + 12 >> 2] = m;
   c[m + 8 >> 2] = m;
   break;
  } else if ((I | 0) == 130) {
   b = H + 8 | 0;
   F = c[b >> 2] | 0;
   j = c[306] | 0;
   if (F >>> 0 >= j >>> 0 & H >>> 0 >= j >>> 0) {
    c[F + 12 >> 2] = m;
    c[b >> 2] = m;
    c[m + 8 >> 2] = F;
    c[m + 12 >> 2] = H;
    c[m + 24 >> 2] = 0;
    break;
   } else _a();
  }
 } while (0);
 m = (c[310] | 0) + -1 | 0;
 c[310] = m;
 if (!m) L = 1664; else return;
 while (1) {
  m = c[L >> 2] | 0;
  if (!m) break; else L = m + 8 | 0;
 }
 c[310] = -1;
 return;
}

function Eb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0;
 e = i;
 i = i + 48 | 0;
 f = e + 16 | 0;
 g = e;
 h = e + 32 | 0;
 j = a + 28 | 0;
 k = c[j >> 2] | 0;
 c[h >> 2] = k;
 l = a + 20 | 0;
 m = (c[l >> 2] | 0) - k | 0;
 c[h + 4 >> 2] = m;
 c[h + 8 >> 2] = b;
 c[h + 12 >> 2] = d;
 b = a + 60 | 0;
 k = a + 44 | 0;
 n = h;
 h = 2;
 o = m + d | 0;
 while (1) {
  if (!(c[290] | 0)) {
   c[f >> 2] = c[b >> 2];
   c[f + 4 >> 2] = n;
   c[f + 8 >> 2] = h;
   p = Cb(ib(146, f | 0) | 0) | 0;
  } else {
   $a(1, a | 0);
   c[g >> 2] = c[b >> 2];
   c[g + 4 >> 2] = n;
   c[g + 8 >> 2] = h;
   m = Cb(ib(146, g | 0) | 0) | 0;
   Pa(0);
   p = m;
  }
  if ((o | 0) == (p | 0)) {
   q = 6;
   break;
  }
  if ((p | 0) < 0) {
   r = n;
   s = h;
   q = 8;
   break;
  }
  m = o - p | 0;
  t = c[n + 4 >> 2] | 0;
  if (p >>> 0 > t >>> 0) {
   u = c[k >> 2] | 0;
   c[j >> 2] = u;
   c[l >> 2] = u;
   v = c[n + 12 >> 2] | 0;
   w = p - t | 0;
   x = n + 8 | 0;
   y = h + -1 | 0;
  } else if ((h | 0) == 2) {
   c[j >> 2] = (c[j >> 2] | 0) + p;
   v = t;
   w = p;
   x = n;
   y = 2;
  } else {
   v = t;
   w = p;
   x = n;
   y = h;
  }
  c[x >> 2] = (c[x >> 2] | 0) + w;
  c[x + 4 >> 2] = v - w;
  n = x;
  h = y;
  o = m;
 }
 if ((q | 0) == 6) {
  o = c[k >> 2] | 0;
  c[a + 16 >> 2] = o + (c[a + 48 >> 2] | 0);
  k = o;
  c[j >> 2] = k;
  c[l >> 2] = k;
  z = d;
 } else if ((q | 0) == 8) {
  c[a + 16 >> 2] = 0;
  c[j >> 2] = 0;
  c[l >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((s | 0) == 2) z = 0; else z = d - (c[r + 4 >> 2] | 0) | 0;
 }
 i = e;
 return z | 0;
}

function xb() {
 va(16640);
 Ja();
 qa(0.0, 0.0, -10.0);
 Xa(30.0, 1.0, 0.0, 0.0);
 Xa(+(+g[289]), 0.0, 1.0, 0.0);
 fa(7);
 bb(0.0, 0.0, 0.0);
 Ea(-1.0, -1.0, -1.0);
 bb(0.0, 0.0, 1.0);
 Ea(-1.0, -1.0, 1.0);
 bb(0.0, 1.0, 1.0);
 Ea(-1.0, 1.0, 1.0);
 bb(0.0, 1.0, 0.0);
 Ea(-1.0, 1.0, -1.0);
 bb(1.0, 0.0, 0.0);
 Ea(1.0, -1.0, -1.0);
 bb(1.0, 0.0, 1.0);
 Ea(1.0, -1.0, 1.0);
 bb(1.0, 1.0, 1.0);
 Ea(1.0, 1.0, 1.0);
 bb(1.0, 1.0, 0.0);
 Ea(1.0, 1.0, -1.0);
 bb(0.0, 0.0, 0.0);
 Ea(-1.0, -1.0, -1.0);
 bb(0.0, 0.0, 1.0);
 Ea(-1.0, -1.0, 1.0);
 bb(1.0, 0.0, 1.0);
 Ea(1.0, -1.0, 1.0);
 bb(1.0, 0.0, 0.0);
 Ea(1.0, -1.0, -1.0);
 bb(0.0, 1.0, 0.0);
 Ea(-1.0, 1.0, -1.0);
 bb(0.0, 1.0, 1.0);
 Ea(-1.0, 1.0, 1.0);
 bb(1.0, 1.0, 1.0);
 Ea(1.0, 1.0, 1.0);
 bb(1.0, 1.0, 0.0);
 Ea(1.0, 1.0, -1.0);
 bb(0.0, 0.0, 0.0);
 Ea(-1.0, -1.0, -1.0);
 bb(0.0, 1.0, 0.0);
 Ea(-1.0, 1.0, -1.0);
 bb(1.0, 1.0, 0.0);
 Ea(1.0, 1.0, -1.0);
 bb(1.0, 0.0, 0.0);
 Ea(1.0, -1.0, -1.0);
 bb(0.0, 0.0, 1.0);
 Ea(-1.0, -1.0, 1.0);
 bb(0.0, 1.0, 1.0);
 Ea(-1.0, 1.0, 1.0);
 bb(1.0, 1.0, 1.0);
 Ea(1.0, 1.0, 1.0);
 bb(1.0, 0.0, 1.0);
 Ea(1.0, -1.0, 1.0);
 Ma();
 g[289] = +g[289] + .1;
 $();
 xa();
 Ha();
 return;
}

function Kb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 do if (!a) {
  if (!(c[284] | 0)) b = 0; else b = Kb(c[284] | 0) | 0;
  Za(1188);
  d = c[296] | 0;
  if (!d) e = b; else {
   f = d;
   d = b;
   while (1) {
    if ((c[f + 76 >> 2] | 0) > -1) g = Jb(f) | 0; else g = 0;
    if ((c[f + 20 >> 2] | 0) >>> 0 > (c[f + 28 >> 2] | 0) >>> 0) h = Lb(f) | 0 | d; else h = d;
    if (g | 0) Gb(f);
    f = c[f + 56 >> 2] | 0;
    if (!f) {
     e = h;
     break;
    } else d = h;
   }
  }
  Na(1188);
  i = e;
 } else {
  if ((c[a + 76 >> 2] | 0) <= -1) {
   i = Lb(a) | 0;
   break;
  }
  d = (Jb(a) | 0) == 0;
  f = Lb(a) | 0;
  if (d) i = f; else {
   Gb(a);
   i = f;
  }
 } while (0);
 return i | 0;
}

function Lb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0;
 b = a + 20 | 0;
 d = a + 28 | 0;
 if ((c[b >> 2] | 0) >>> 0 > (c[d >> 2] | 0) >>> 0) {
  kb[c[a + 36 >> 2] & 3](a, 0, 0) | 0;
  if (!(c[b >> 2] | 0)) e = -1; else f = 3;
 } else f = 3;
 if ((f | 0) == 3) {
  f = a + 4 | 0;
  g = c[f >> 2] | 0;
  h = a + 8 | 0;
  i = c[h >> 2] | 0;
  if (g >>> 0 < i >>> 0) kb[c[a + 40 >> 2] & 3](a, g - i | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[d >> 2] = 0;
  c[b >> 2] = 0;
  c[h >> 2] = 0;
  c[f >> 2] = 0;
  e = 0;
 }
 return e | 0;
}

function Qb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return Qa(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Ob() {}
function Pb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  g = b & 3;
  h = d | d << 8 | d << 16 | d << 24;
  i = f & ~3;
  if (g) {
   g = b + 4 - g | 0;
   while ((b | 0) < (g | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (i | 0)) {
   c[b >> 2] = h;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function Hb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = i;
 i = i + 32 | 0;
 f = e;
 g = e + 20 | 0;
 c[f >> 2] = c[a + 60 >> 2];
 c[f + 4 >> 2] = 0;
 c[f + 8 >> 2] = b;
 c[f + 12 >> 2] = g;
 c[f + 16 >> 2] = d;
 if ((Cb(eb(140, f | 0) | 0) | 0) < 0) {
  c[g >> 2] = -1;
  h = -1;
 } else h = c[g >> 2] | 0;
 i = e;
 return h | 0;
}

function Ib(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 f = i;
 i = i + 80 | 0;
 g = f;
 c[b + 36 >> 2] = 3;
 if (!(c[b >> 2] & 64)) {
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = 21505;
  c[g + 8 >> 2] = f + 12;
  if (da(54, g | 0) | 0) a[b + 75 >> 0] = -1;
 }
 g = Eb(b, d, e) | 0;
 i = f;
 return g | 0;
}

function Ab(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0;
 d = i;
 i = i + 16 | 0;
 e = d;
 c[e >> 2] = a;
 Ia(e | 0, b | 0);
 la(18);
 hb(500, 500);
 db(1140) | 0;
 ia(0.0, 0.0, 0.0, 0.0);
 Ga(2929);
 ea(1);
 Fa(1);
 Wa(1);
 fb();
 i = d;
 return 0;
}

function zb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 switch (a << 24 >> 24) {
 case 27:
 case 81:
 case 113:
  {
   gb(0);
   break;
  }
 default:
  return;
 }
}

function Bb(a) {
 a = a | 0;
 var b = 0, d = 0;
 b = i;
 i = i + 16 | 0;
 d = b;
 c[d >> 2] = c[a + 60 >> 2];
 a = Cb(ha(6, d | 0) | 0) | 0;
 i = b;
 return a | 0;
}

function yb(a, b) {
 a = a | 0;
 b = b | 0;
 Ua(5889);
 Ja();
 Ra(20.0, +(+(a | 0) / +(b | 0)), 5.0, 15.0);
 na(0, 0, a | 0, b | 0);
 Ua(5888);
 Ha();
 return;
}

function Cb(a) {
 a = a | 0;
 var b = 0;
 if (a >>> 0 > 4294963200) {
  c[(Db() | 0) >> 2] = 0 - a;
  b = -1;
 } else b = a;
 return b | 0;
}

function Sb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return kb[a & 3](b | 0, c | 0, d | 0) | 0;
}

function Db() {
 var a = 0;
 if (!(c[290] | 0)) a = 1204; else a = c[(Rb() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function Wb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 ob[a & 1](b | 0, c | 0, d | 0);
}
function qb(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function Ub(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 mb[a & 1](b | 0, c | 0);
}

function Yb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 T(0);
 return 0;
}

function ub(a, b) {
 a = a | 0;
 b = b | 0;
 if (!m) {
  m = a;
  n = b;
 }
}

function Vb(a, b) {
 a = a | 0;
 b = b | 0;
 return nb[a & 1](b | 0) | 0;
}

function Fb(a) {
 a = a | 0;
 if (!(c[a + 68 >> 2] | 0)) Gb(a);
 return;
}

function ac(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 T(4);
}

function Tb(a, b) {
 a = a | 0;
 b = b | 0;
 lb[a & 1](b | 0);
}

function tb(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function _b(a, b) {
 a = a | 0;
 b = b | 0;
 T(2);
}

function $b(a) {
 a = a | 0;
 T(3);
 return 0;
}

function Xb(a) {
 a = a | 0;
 pb[a & 1]();
}

function Jb(a) {
 a = a | 0;
 return 0;
}

function Gb(a) {
 a = a | 0;
 return;
}

function vb(a) {
 a = a | 0;
 B = a;
}

function sb(a) {
 a = a | 0;
 i = a;
}

function Zb(a) {
 a = a | 0;
 T(1);
}

function wb() {
 return B | 0;
}

function rb() {
 return i | 0;
}

function Rb() {
 return 0;
}

function bc() {
 T(5);
}

// EMSCRIPTEN_END_FUNCS

 var kb = [ Yb, Ib, Hb, Eb ];
 var lb = [ Zb, Fb ];
 var mb = [ _b, yb ];
 var nb = [ $b, Bb ];
 var ob = [ ac, zb ];
 var pb = [ bc, xb ];
 return {
  _free: Nb,
  _main: Ab,
  _pthread_self: Rb,
  _memset: Pb,
  _malloc: Mb,
  _memcpy: Qb,
  _fflush: Kb,
  ___errno_location: Db,
  runPostSets: Ob,
  stackAlloc: qb,
  stackSave: rb,
  stackRestore: sb,
  establishStackSpace: tb,
  setThrew: ub,
  setTempRet0: vb,
  getTempRet0: wb,
  dynCall_iiii: Sb,
  dynCall_vi: Tb,
  dynCall_vii: Ub,
  dynCall_ii: Vb,
  dynCall_viii: Wb,
  dynCall_v: Xb
 };
})


;