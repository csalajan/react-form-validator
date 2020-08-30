import { ArrayValidator } from '../../validators';

describe('Array Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be an array."', () => {
      expect(ArrayValidator.message).toEqual(
        'The :attribute must be an array.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value is not an array', () => {
      expect(ArrayValidator.rule(123)).toBeFalsy();
    });

    it('is valid if the value is an array', () => {
      expect(ArrayValidator.rule([])).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(ArrayValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should be false', () => {
      expect(ArrayValidator.required).toBeFalsy();
    });
  });
});
