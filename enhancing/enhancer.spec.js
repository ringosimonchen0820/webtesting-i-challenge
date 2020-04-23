const { succeed, fail, repair, get } = require('./enhancer.js');
// test away!
it('should run the tests', function() {
  expect(true).toBe(true);
});

describe('enhancer.js', function() {
  describe('.succeed()', function() {
    it('should increase enhancement by 1 if under 20', function() {
      expect(succeed({ enhancement: 15 })).toEqual({ enhancement: 16 });
      expect(succeed({ enhancement: 10 })).toEqual({ enhancement: 11 });
      expect(succeed({ enhancement: 1 })).toEqual({ enhancement: 2 });
      expect(succeed({ enhancement: 0 })).toEqual({ enhancement: 1 });
      expect(succeed({ enhancement: 19 })).toEqual({ enhancement: 20 });
    })

    it('should keep enhancement the same if it is 20', function() {
      expect(succeed({ enhancement: 20 })).toEqual({ enhancement: 20 });
    });
  });

  describe('.fail()', function() {
    it('should decrease durability by 5 if enhancement is less than 15', function() {
      expect(fail({ enhancement: 14, durability: 30 })).toEqual({ enhancement: 14, durability: 25 });
    })

    it('should decrease durability by 10 if enhancement is 15 or more', function() {
      expect(fail({ enhancement: 15, durability: 60 })).toEqual({ enhancement: 15, durability: 50 });
      expect(fail({ enhancement: 16, durability: 69 })).toEqual({ enhancement: 16, durability: 59 });
    })

    it('should decrease enhancement by 1 if enhancement is 16 or more', function() {
      expect(fail({ enhancement: 18, durability: 100 })).toEqual({ enhancement: 17, durability: 90 });
      expect(fail({ enhancement: 19, durability: 69 })).toEqual({ enhancement: 18, durability: 59 });
      expect(fail({ enhancement: 17, durability: 20 })).toEqual({ enhancement: 16, durability: 10 });
    })
  })
  
  describe('.repair()', function() {
    it('should return a new item with durability of 100', function() {
      expect(repair({ durability: 10 })).toEqual({ durability: 100 });
      expect(repair({ durability: 99 })).toEqual({ durability: 100 });
      expect(repair({ durability: 0 })).toEqual({ durability: 100 });
    });
  });

});
