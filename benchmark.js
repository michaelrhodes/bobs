importScripts('https://pkg.mkr.sx/workbench/1.0.0/suite.js')
importScripts('https://pkg.mkr.sx/bencode/2.0.0.js')

output = bencode.encode(input = {
  string: 'ẕ̢͒͛͗ͪ̓ḁ̢͑͆̌̍̎ͨ͘l̶̜̖͍̞ͨͫ͑̽̀̑̓͂͞g̷͖̜̤̬͖ͪo͑͌͐̐̐̌̍ͣ̀͏̥̻̹',
  positive: 42,
  negative: -42,
  array: [123, { some: 'thing' }],
  typed: new Uint8Array([4, 5, 6])
})

suite('encode', function (run) {
  run('bencode@2.0.0', bencodeEncode)
  run('bobs@' + version, bobsEncode)
})

suite('decode', function (run) {
  run('bencode@2.0.0', bencodeDecode)
  run('bobs@' + version, bobsDecode)
})

function bencodeEncode () {
  bencode.encode(input)
}

function bobsEncode () {
  bobs.encode(input)
}

function bencodeDecode () {
  bencode.decode(output)
}

function bobsDecode () {
  bobs.decode(output)
}
