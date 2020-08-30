module.exports = encode

var encoder = new TextEncoder

var c = s2b(':')
var d = s2b('d')
var e = s2b('e')
var i = s2b('i')
var l = s2b('l')
var s = s2b('s')

function s2b (str) {
  return encoder.encode(str)
}

function encode (val, $, i, s, l, e, b, o, n) {
  i = s = 0, l = step($ = [], val), e = []
  for (; i < l; i++) s += e[i] = $[i].byteLength
  for (i = b = 0, o = new Uint8Array(s); i < l; i++)
    for (n = 0; n < e[i]; n++) o[b++] = $[i][n]
  return o
}

function dictionary ($, val, k, i, l) {
  $.push(d)
  k = Object.keys(val).sort(), i = 0, l = k.length
  for (; i < l; i++) string($, k[i]), step($, val[k[i]])
  $.push(e)
}

function list ($, val, i, m) {
  $.push(l)
  i = 0, m = val.length
  for (; i < m; i++) step($, val[i])
  $.push(e)
}

function integer ($, val) {
  $.push(i, s2b(+val), e)
}

function bytes ($, val) {
  $.push(s2b(val.byteLength), c, val)
}

function string ($, val) {
  $.push(s, s2b((val = s2b(val)).byteLength), c, val)
}

function step ($, val, type) {
  type = typeof val

  type === 'string' ||
  type === 'bigint' ||
 (type === 'number' && val % 1) ?
  string($, val) :

  type === 'number' ||
  type === 'boolean' ?
  integer($, val) :

  val && val.byteLength ?
  bytes($, new Uint8Array(val)) :

  Array.isArray(val) ?
  list($, val) :

  val instanceof Object ?
  dictionary($, val) :

  integer($, 0)

  return $.length
}
