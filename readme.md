# bobs
browser-optimised bencoding superset (it add an explicit byte-array type)

[![ci](https://travis-ci.org/michaelrhodes/bobs.svg?branch=master)](https://travis-ci.org/michaelrhodes/bobs)

## install
```sh
npm install https://pkg.mkr.sx/bobs/3.0.0.tgz
```

## use
```js
var encode = require('bobs/encode')
var decode = require('bobs/decode')

var encoded = encode({
  string: 'ẕ̢͒͛͗ͪ̓ḁ̢͑͆̌̍̎ͨ͘l̶̜̖͍̞ͨͫ͑̽̀̑̓͂͞g̷͖̜̤̬͖ͪo͑͌͐̐̐̌̍ͣ̀͏̥̻̹',
  positive: 42,
  negative: -42,
  float: 4.2,
  bigint: 42n,
  boolean: true,
  array: [123, { some: 'thing' }],
  typed: new Uint8Array([4, 5, 6])
})
> Uint8Array(226) [
  100,53,58,97,114,114,97,121,108,105,49,50,51,101,100,
  52,58,115,111,109,101,53,58,116,104,105,110,103,101,
  101,54,58,98,105,103,105,110,116,50,58,52,50,55,58,98,
  111,111,108,101,97,110,105,49,101,53,58,102,108,111,97,
  116,51,58,52,46,50,56,58,110,101,103,97,116,105,118,101
  105,45,52,50,101,56,58,112,111,115,105,116,105,118,101,
  105,52,50,101,54,58,115,116,114,105,110,103,49,48,53,58,
  122,205,146,205,155,205,151,205,170,204,147,204,162,204,
  177,97,205,145,205,134,204,140,204,141,204,142,205,168,
  205,152,204,162,204,165,108,205,168,205,171,205,145,204,
  189,204,128,204,145,204,147,205,130,205,158,204,182,204,
  156,204,150,205,141,204,158,103,205,170,204,183,205,150,
  204,156,204,164,204,172,205,150,111,205,145,205,140,205,
  144,204,144,204,144,204,140,204,141,205,163,204,128,205,
  143,204,165,204,187,204,185,53,58,116,121,112,101,100,98,
  51,58,4,5,6,101
]

decode(encoded)
> {
  array: [ 123, { some: 'thing' } ],
  bigint: '42', // bigint → string
  boolean: 1, // boolean → integer
  float: '4.2', // float → string
  negative: -42,
  positive: 42,
  string: 'ẕ̢͒͛͗ͪ̓ḁ̢͑͆̌̍̎ͨ͘l̶̜̖͍̞ͨͫ͑̽̀̑̓͂͞g̷͖̜̤̬͖ͪo͑͌͐̐̐̌̍ͣ̀͏̥̻̹',
  typed: Uint8Array(3) [ 4, 5, 6 ]
}
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
