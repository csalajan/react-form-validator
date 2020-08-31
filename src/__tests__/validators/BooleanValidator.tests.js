import { BooleanValidator } from '../../validators';

describe('Boolean Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a boolean."', () => {
      expect(BooleanValidator.message).toEqual(
        'The :attribute must be a boolean.'
      );
    });
  });

  describe('rule', () => {
    it('should be invalid if the value is a string', () => {
      expect(BooleanValidator.rule('test')).toBeFalsy();
    });

    it('should be invalid if the value is a number', () => {
      expect(BooleanValidator.rule(123)).toBeFalsy();
    });

    it('should be invalid if the value is an object', () => {
      expect(BooleanValidator.rule({})).toBeFalsy();
    });

    it('should be invalid if the value is an array', () => {
      expect(BooleanValidator.rule([])).toBeFalsy();
    });

    it('should be valid if the value is true', () => {
      expect(BooleanValidator.rule(true)).toBeTruthy();
    });

    it('should be valid if the value is false', () => {
      expect(BooleanValidator.rule(false)).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(BooleanValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(BooleanValidator.required).toBeFalsy();
    });
  });
});
