import { CardNumberValidator } from '../../validators';

describe('Card Number Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a valid credit card number."', () => {
      expect(CardNumberValidator.message).toEqual(
        'The :attribute must be a valid credit card number.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(CardNumberValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(CardNumberValidator.required).toBeFalsy();
    });
  });
});
