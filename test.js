'use strict'

var test = require('tape')
var Table = require('./')

test('match', function (t) {
  var table = Table()
  t.deepEqual(table.add('/users/:id'), {path: '/users/:id'})
  t.deepEqual(table.match('/users/123'), {
    key: {path: '/users/:id'},
    params: {id: '123'}
  })
  t.end()
})

test('path', function (t) {
  var table = Table()
  var one = table.add('/package/:name')
  var all = table.add('/packages')
  t.equal(table.path(one, {name: 'foo'}), '/package/foo')
  t.throws(table.path.bind(null, one, {}), /invalid empty url parameter: name/, 'throws when param is missing')
  t.equal(table.path(all), '/packages')
  t.end()
})
