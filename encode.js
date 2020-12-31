module.exports = encode

var encoder = new TextEncoder

var c = s2b(':')
var d = s2b('d')
var e = s2b('e')
var i = s2b('i')
var l = s2b('l')
var b = s2b('b')

function s2b (str) {
  return encoder.encode(str)
}

function encode (val, $, i, s, l, e, b, o, n) {
  i = s = 0, l = next($ = [], val), e = []
  for (; i < l; i++) s += e[i] = $[i].byteLength
  for (i = b = 0, o = new Uint8Array(s); i < l; i++)
    for (n = 0; n < e[i]; n++) o[b++] = $[i][n]
  return o
}

function string ($, val) {
  $.push(s2b((val = s2b(val)).byteLength), c, val)
}

function dictionary ($, val, k, i, l) {
  $.push(d)
  k = Object.keys(val).sort(), i = 0, l = k.length
  for (; i < l; i++) string($, k[i]), next($, val[k[i]])
  $.push(e)
}

function list ($, val, i, m) {
  $.push(l)
  i = 0, m = val.length
  for (; i < m; i++) next($, val[i])
  $.push(e)
}

function integer ($, val) {
  $.push(i, s2b(+val), e)
}

function bytes ($, val) {
  $.push(b, s2b(val.byteLength), c, val)
}

function next ($, val, type) {
  type = typeof val

  type === 'boolean' ||
 (type === 'number' && val % 1 === 0) ?
  integer($, val) :

  val && val.byteLength ?
  bytes($, new Uint8Array(val)) :

  Array.isArray(val) ?
  list($, val) :

  val instanceof Object ?
  dictionary($, val) :

  val ?
  string($, val) :
  integer($)

  return $.length
}
