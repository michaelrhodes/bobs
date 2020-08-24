importScripts("https://pkg.mkr.sx/benchmark/2.1.4.js")
importScripts("https://pkg.mkr.sx/bencode/2.0.0.js")
importScripts("https://pkg.mkr.sx/bobs/2.0.0.js")

running = false

output = bencode.encode(input = {
  string: 'ẕ̢͒͛͗ͪ̓ḁ̢͑͆̌̍̎ͨ͘l̶̜̖͍̞ͨͫ͑̽̀̑̓͂͞g̷͖̜̤̬͖ͪo͑͌͐̐̐̌̍ͣ̀͏̥̻̹',
  positive: 42,
  negative: -42,
  array: [123, { some: 'thing' }],
  typed: new Uint8Array([4, 5, 6])
})

onmessage = function () {
  if (running) return; running = true

  suite('encode', function () {
    new Benchmark.Suite()
      .add('bencode.encode', bencodeEncode)
      .add('bobs.encode', bobsEncode)
      .on('cycle', cycle)
      .run()

    suite('decode', function () {
      new Benchmark.Suite()
        .add('bencode.decode', bencodeDecode)
        .add('bobs.decode', bobsDecode)
        .on('cycle', cycle)
        .on('complete', complete)
        .run()
    })
  })
}

function suite (name, start) {
  soon(function () {
    postMessage('# ' + name)
    start()
  })
}

function cycle (e) {
  postMessage(String(e.target))
}

function complete () {
  soon(function () {
    running = false
    postMessage('✓')
  })
}

function soon (fn) {
  setTimeout(fn, 666)
}

function bencodeEncode () { bencode.encode(input) }
function bencodeDecode () { bencode.decode(output) }
function bobsEncode () { bobs.encode(input) }
function bobsDecode () { bobs.decode(output) }
