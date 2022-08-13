const chai = require('chai');
const expect = chai.expect;

const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('round flat and round up', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUM no Round', function () {
    it('should return 5', function () {
      expect(calculateNumber('SUM', 1, 4)).to.equal(5);
    });
  });

  describe('SUM second round ', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 4, 2.4)).to.equal(6);
    });
  });

  describe('SUM both round', function () {
    it('should return 6', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT no round', function () {
    it('should return 2', function () {
      expect(calculateNumber('SUBTRACT', 5, 3)).to.equal(2);
    });
  });

  describe('SUBTRACT first round', function () {
    it('should return -3', function () {
      expect(calculateNumber('SUBTRACT', 2, 4.5)).to.equal(-3);
    });
  });

  describe('SUBTRACT second round', function () {
    it('should return 3', function () {
      expect(calculateNumber('SUBTRACT', 4.5, 2)).to.equal(3);
    });
  });

  describe('SUBTRACT both round', function () {
    it('should return -4', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE no round', function () {
    it('should return 2', function () {
      expect(calculateNumber('DIVIDE', 8, 4)).to.equal(2);
    });
  });

  describe('DIVIDE first round', function () {
    it('should return 5', function () {
      expect(calculateNumber('DIVIDE', 9.5, 2)).to.equal(5);
    });
  });

  describe('DIVIDE second round', function () {
    it('should return 0.2', function () {
      expect(calculateNumber('DIVIDE', 2, 9.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE both round', function () {
    it('should return 0.2', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });
  });

  describe('DIVIDE Error', function () {
    it('should return Error', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});