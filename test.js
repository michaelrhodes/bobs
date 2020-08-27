var encode = require('./encode')
var decode = require('./decode')
var assert = console.assert

var o, i = {
  string: 'ẕ̢͒͛͗ͪ̓ḁ̢͑͆̌̍̎ͨ͘l̶̜̖͍̞ͨͫ͑̽̀̑̓͂͞g̷͖̜̤̬͖ͪo͑͌͐̐̐̌̍ͣ̀͏̥̻̹',
  positive: 42,
  negative: -42,
  float: 4.2,
  bigint: 42n,
  boolean: true,
  array: [123, { some: 'thing' }],
  typed: new Uint8Array([4, 5, 6]),
  undef: void 0,
  nil: null
}

o = transform(i)
assert(o.string === i.string)
assert(o.positive === i.positive)
assert(o.negative === i.negative)
assert(parseFloat(o.float) === i.float)
assert(BigInt(o.bigint) === i.bigint)
assert(Boolean(o.boolean) === i.boolean)
assert(o.array[0] === i.array[0])
assert(o.array[1].some === i.array[1].some)
assert(o.typed[0] === i.typed[0])
assert(o.typed[1] === i.typed[1])
assert(o.typed[2] === i.typed[2])
assert(o.typed[3] === i.typed[3])
assert(o.typed[4] === i.typed[4])
assert(o.typed[5] === i.typed[5])
assert(o.undef === 0)
assert(o.nil === 0)

assert(transform(i.string) === i.string)
assert(transform(i.positive) === i.positive)
assert(transform(i.negative) === i.negative)
assert(parseFloat(transform(i.float)) === i.float)
assert(BigInt(transform(i.bigint)) === i.bigint)
assert(Boolean(transform(i.boolean)) === i.boolean)
assert(transform(i.array)[0] === i.array[0])
assert(transform(i.array)[1].some === i.array[1].some)
assert(transform(i.typed)[0] === i.typed[0])
assert(transform(i.undef) === 0)
assert(transform(i.nil) === 0)

function transform (val) {
  return decode(encode(val))
}
