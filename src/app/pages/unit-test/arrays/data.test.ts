import { isAscending } from './data';

describe('Check input is Ascending Array', () => {
  describe('Input is not an Array', () => {
    it('Another type difference type Array and Random value should be return false', () => {
      expect(isAscending('test')).toBe(false);
      expect(isAscending(9)).toBe(false);
      expect(isAscending(null)).toBe(false);
      expect(isAscending(undefined)).toBe(false);
      expect(isAscending(true)).toBe(false);
      expect(isAscending([true, null, 9, 'test'])).toBe(false);
    });
  });
  describe('Input is not Ascending Array', () => {
    describe('Number of elements in an array', () => {
      it('Array length < 2 should return false', () => {
        expect(isAscending([])).toBe(false);
        expect(isAscending([10])).toBe(false);
      });

      it('Array length > 2 but unconditional should return false', () => {
        expect(isAscending([10, '1', undefined, null, true, 12])).toBe(false);
        expect(isAscending([10, [11, 12], 13])).toBe(false);
        expect(isAscending([10, 13, 12])).toBe(false);
        expect(isAscending([8.1, 8.2, 7.9])).toBe(false);
        expect(isAscending([13, 12, 11])).toBe(false);
      });
    });
  });
  describe('Input is Ascending Array', () => {
    it('Array have item ascending should return true', () => {
      expect(isAscending([10, 11, 12])).toBe(true);
      expect(isAscending([-1, 0, 1])).toBe(true);
      expect(isAscending([-13, -12, -11])).toBe(true);
      expect(isAscending([-8.2, -8.1, -7.9])).toBe(true);
      expect(isAscending([11.1, 11.2, 11.3])).toBe(true);
      expect(isAscending([1, 2, 2, 3])).toBe(true);
      expect(isAscending([-3, -2, -2, -1])).toBe(true);
    });
  });
});
