import { NumericValidator } from '../../validators';

describe('Numeric Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a number."', () => {
      expect(NumericValidator.message).toEqual(
        'The :attribute must be a number.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(NumericValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(NumericValidator.required).toBeFalsy();
    });
  });
});
