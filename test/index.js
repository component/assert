
var assert = require('assert')
var equals = require('equals');

describe('assert', function(){
  it('should pass', function(){
    try {
      assert(true);
    } catch (e) {
      throw new Error('fail');
    }
  });

  it('should fail', function(){
    try {
      assert(false);
      throw new Error('fail');
    } catch (e) {
      if ('fail' == e.message) throw e;
    }
  });

  it('should respect custom msg', function(){
    try {
      assert(false, 'baz');
      throw new Error('fail');
    } catch (e) {
      if ('baz' != e.message) throw new Error('fail');
    }
  });

  it('should supply default message', function(){
    try {
      assert(0 + 0);
      throw new Error('fail');
    } catch (e) {
      if ('0 + 0' != e.message) throw new Error('fail');
    }
  });

  describe('.equal', function(){
    it('should pass', function(){
      assert.equal(true, true);
    });

    it('should fail', function(){
      try {
        assert.equal({}, {});
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.notEqual', function(){
    it('should pass', function(){
      try {
        assert.notEqual({}, {});
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        assert.notEqual(true, true);
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.deepEqual', function(){
    it('should pass', function(){
      try {
        assert.deepEqual(['a', 'b'], ['a', 'b']);
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        var err = assert.deepEqual(['a', 'b'], [1, 2]);
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.notDeepEqual', function(){
    it('should pass', function(){
      try {
        assert.notDeepEqual(['a', 'b'], [1, 2]);
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        assert.notDeepEqual(['a', 'b'], ['a', 'b']);
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.strictEqual', function(){
    it('should pass', function(){
      try {
        assert.strictEqual('1', '1');
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        assert.strictEqual(1, '1');
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.notStrictEqual', function(){
    it('should pass', function(){
      try {
        assert.notStrictEqual(1, '1');
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        var err = assert.notStrictEqual('1', '1');
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.throws', function(){
    it('should pass', function(){
      try {
        assert.throws(function(){ throw new Error; });
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        assert.throws(function(){});
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });

  describe('.doesNotThrow', function(){
    it('should pass', function(){
      try {
        assert.doesNotThrow(function(){});
      } catch (e) {
        throw new Error('fail');
      }
    });

    it('should fail', function(){
      try {
        assert.doesNotThrow(function(){ throw new Error; });
        throw new Error('fail');
      } catch (e) {
        if ('fail' == e.message) throw e;
      }
    });
  });
});
