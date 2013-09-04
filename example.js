
/**
 * Module dependencies.
 */

try {
	var assert = require('./index.js');
} catch (e) {
	var assert = require('assert');
}

function test() {
  var user = { name: 'Tobi' };
  assert(user.name == 'tobi');
}

test();