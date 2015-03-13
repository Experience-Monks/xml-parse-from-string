var parseXML = require('./')
var test = require('tape')

var data = require('fs').readFileSync(__dirname + '/test-file.xml', 'utf8')

test('Simple XML string', function(t) {
  var str = '<root><foobar id="blah"></foobar></root>'
  var doc = parseXML(str)
  var tag = doc.getElementsByTagName('foobar')[0]
  t.equal(tag.getAttribute('id'), 'blah')
  t.end()
})

test('Complex XML doc', function(t) {
  var str = data
  var doc = parseXML(str)
  var chars = doc.getElementsByTagName('chars')[0]
  var count = parseInt(chars.getAttribute('count'), 10)
  t.equal(count, 96, 'get tag + id')

  var children = doc.getElementsByTagName('char')
  t.equal(children.length, count, 'get sub tags')
  t.end()
})