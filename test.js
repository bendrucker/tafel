'use strict'

var test = require('tape')
var Table = require('./')

test(function (t) {
  var table = Table()
  t.deepEqual(table.add('/users/:id'), {paths: ['/users/:id']})
  t.deepEqual(table.match('/users/123'), {
    key: {paths: ['/users/:id']},
    params: {id: '123'}
  })
  t.end()
})

test('multiple paths', function (t) {
  var table = Table()
  var paths = [
    '/list',
    '/list/:id/:attribute'
  ]

  var entry = table.add(paths)
  t.deepEqual(entry, {paths: paths})

  t.deepEqual(table.match('/list'), {
    key: {paths: paths},
    params: {}
  }, 'first path')
  t.deepEqual(table.match('/list/123/weight'), {
    key: {paths: paths},
    params: {
      id: '123',
      attribute: 'weight'
    }
  }, 'second path')

  t.end()
})
