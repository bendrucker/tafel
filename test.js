'use strict'

var test = require('tape')
var Table = require('./')

test(function (t) {
  var table = Table()
  t.deepEqual(table.add('/users/:id'), {path: '/users/:id'})
  t.deepEqual(table.match('/users/123'), {
    key: {path: '/users/:id'},
    params: {id: '123'}
  })
  t.end()
})
