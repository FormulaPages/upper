var test = require('tape');
var upper = require('./UPPER');

test('it should upper case a string', (t) => {
  t.plan(3)
  t.equal( upper("lower"), "LOWER" )
  t.equal( upper("loWer"), "LOWER" )
  t.equal( upper("loWer"), "LOWER" )
})
