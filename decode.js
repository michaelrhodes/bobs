module.exports = decode

var decoder = new TextDecoder

var c = 58
var d = 100
var e = 101
var i = 105
var l = 108
var s = 115

var dash = 45
var zero = 48
var nine = 57

function decode (val) {
  return next({ i: 0, val: new Uint8Array(val), l: val.byteLength })
}

function dictionary ($, val) {
  $.i++, val = {}
  while ($.val[$.i] !== e) val[string($)] = next($)
  return $.i++, val
}

function list ($, val) {
  $.i++, val = []
  while ($.val[$.i] !== e) val[val.length] = next($)
  return $.i++, val
}

function integer ($) {
  return intval($, ++$.i, $.i = ndx($, e) + 1)
}

function string ($) {
  return decoder.decode(bytes($))
}

function bytes ($, l) {
  l = intval($, $.i, $.i = ndx($, c) + 1)
  return $.val.subarray($.i, $.i += l)
}

function next ($, ch) {
  return (ch = $.val[$.i]), (
    ch === l ? list($) :
    ch === i ? integer($) :
    ch === d ? dictionary($) :
    ch === s ? string($) :
    bytes($)
  )
}

function ndx ($, ch, i) {
  for (i = $.i; i < $.l; i++) if ($.val[i] === ch) return i
}

function intval ($, i, l, val, sign, ch) {
  for (val = 0, sign = 1; i < l; i++) {
    if ((ch = $.val[i]) === dash) sign = -1
    if ((ch >= zero && ch <= nine)) val = val * 10 + ch - 48
  }
  return val * sign
}
