module.exports = encode

var t = new TextEncoder

var b = t.encode('b')
var d = t.encode('d')
var e = t.encode('e')
var i = t.encode('i')
var l = t.encode('l')
var c = t.encode(':')

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
  $.push(i, t.encode(+val), e)
}

function string ($, val) {
  $.push(t.encode((val = t.encode(val)).byteLength), c, val)
}

function bytes ($, val) {
  $.push(b, t.encode(val.byteLength), c, val)
}

function step ($, val, type) {
  type = typeof val
  type === 'string' || type === 'bigint' || (type === 'number' && val % 1) ? string($, val) :
  type === 'number' || type === 'boolean' ? integer($, val) :
  val instanceof ArrayBuffer ? bytes($, new Uint8Array(val)) :
  ArrayBuffer.isView(val) ? bytes($, val) :
  Array.isArray(val) ? list($, val) :
  val instanceof Object ? dictionary($, val) : void 0
  return $.length
}
