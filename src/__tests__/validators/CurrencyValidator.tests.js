import { CurrencyValidator } from '../../validators';

describe('Currency Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a valid currency."', () => {
      expect(CurrencyValidator.message).toEqual(
        'The :attribute must be a valid currency.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(CurrencyValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(CurrencyValidator.required).toBeFalsy();
    });
  });
});
