import { EmailValidator } from '../../validators';

describe('Email Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a valid email address."', () => {
      expect(EmailValidator.message).toEqual(
        'The :attribute must be a valid email address.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(EmailValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(EmailValidator.required).toBeFalsy();
    });
  });
});
