module.exports = decode

var t = new TextDecoder

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
  return step({ i: 0, val: new Uint8Array(val), l: val.byteLength })
}

function dictionary ($, val) {
  $.i++, val = {}
  while ($.val[$.i] !== e) val[bytes($)] = step($)
  return $.i++, val
}

function list ($, val) {
  $.i++, val = []
  while ($.val[$.i] !== e) val[val.length] = step($)
  return $.i++, val
}

function integer ($) {
  return intval($, ++$.i, $.i = ndx($, e) + 1)
}

function bytes ($, raw, val, l) {
  l = intval($, $.i, $.i = ndx($, c) + 1)
  val = $.val.subarray($.i, $.i += l)
  return raw ? val : t.decode(val)
}

function step ($, ch) {
  return (ch = $.val[$.i]), (
    ch === l ? list($) :
    ch === i ? integer($) :
    ch === d ? dictionary($) :
    bytes($, ch !== s)
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
