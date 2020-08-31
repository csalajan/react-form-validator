import { StringValidator } from '../../validators';

describe('String Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a string."', () => {
      expect(StringValidator.message).toEqual(
        'The :attribute must be a string.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(StringValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(StringValidator.required).toBeFalsy();
    });
  });
});
