import { PhoneValidator } from '../../validators';

describe('Phone Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a valid phone number."', () => {
      expect(PhoneValidator.message).toEqual(
        'The :attribute must be a valid phone number.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(PhoneValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(PhoneValidator.required).toBeFalsy();
    });
  });
});
