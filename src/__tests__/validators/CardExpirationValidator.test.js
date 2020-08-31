import { CardExpirationValidator } from '../../validators';

describe('Card Expiration Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a valid expiration date."', () => {
      expect(CardExpirationValidator.message).toEqual(
        'The :attribute must be a valid expiration date.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(CardExpirationValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(CardExpirationValidator.required).toBeFalsy();
    });
  });
});
