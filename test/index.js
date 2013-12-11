
var assert = require('assert')
var equals = require('equals');

describe('assert', function () {
  it('should pass', function () {
    var err = assert(true);
    if (err) throw err;
  })

  it('should fail', function () {
    var threw = false;
    try {
      var err = assert(false);
    } catch (e) {
      threw = true;
    }
    if (!threw) throw new Error('fail');
  })

  describe('.equal', function () {
    it('should pass', function () {
      var err = assert.equal(true, true);
      if (err) throw err;
    })

    it('should fail', function () {
      var obj = {};
      var threw = false;
      try {
        var err = assert.equal(obj, {});
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.notEqual', function () {
    it('should pass', function () {
      var obj = {};
      var err = assert.notEqual(obj, {});
      if (err) throw err;
    })

    it('should fail', function () {
      var threw = false;
      try {
        var err = assert.notEqual(true, true);
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.deepEqual', function () {
    it('should pass', function () {
      var arr = ['a', 'b'];
      var err = assert.deepEqual(arr, ['a', 'b']);
      if (err) throw err;
    })

    it('should fail', function () {
      var arr = ['a', 'b'];
      var threw = false;
      try {
        var err = assert.deepEqual(arr, [1, 2]);
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.notDeepEqual', function () {
    it('should pass', function () {
      var arr = ['a', 'b'];
      var err = assert.notDeepEqual(arr, [1, 2]);
      if (err) throw err;
    })

    it('should fail', function () {
      var arr = ['a', 'b'];
      var threw = false;
      try {
        var err = assert.notDeepEqual(arr, ['a', 'b']);
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.strictEqual', function () {
    it('should pass', function () {
      var err = assert.strictEqual('1', '1');
      if (err) throw err;
    })

    it('should fail', function () {
      var threw = false;
      try {
        var err = assert.strictEqual(1, '1');
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.notStrictEqual', function () {
    it('should pass', function () {
      var err = assert.notStrictEqual(1, '1');
      if (err) throw err;
    })

    it('should fail', function () {
      var threw = false;
      try {
        var err = assert.notStrictEqual('1', '1');
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.throws', function () {
    it('should pass', function () {
      function fn () { throw new Error; }
      var err = assert.throws(fn);
      if (err) throw err;
    })

    it('should fail', function () {
      function fn () {}
      var threw = false;
      try {
        var err = assert.throws(fn);
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })

  describe('.doesNotThrow', function () {
    it('should pass', function () {
      function fn () {}
      var err = assert.doesNotThrow(fn);
      if (err) throw err;
    })

    it('should fail', function () {
      function fn () { throw new Error; }
      var threw = false;
      try {
        var err = assert.doesNotThrow(fn);
      } catch (e) {
        threw = true;
      }
      if (!threw) throw new Error('fail');
    })
  })
})