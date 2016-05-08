'use strict'

var array = require('cast-array')
var Routington = require('routington')
var assertEqual = require('assert-equal')

module.exports = Table

function Table () {
  var router = Routington()

  return {
    add: add,
    match: match
  }

  function add (paths) {
    paths = array(paths)
    var key = {paths: paths}

    paths.forEach(function (path) {
      assertEqual(typeof path, 'string')

      var node = router.define(path)[0]
      node.key = key
    })

    return key
  }

  function match (path) {
    var matched = router.match(path)

    return matched && {params: matched.param, key: matched.node.key}
  }
}
