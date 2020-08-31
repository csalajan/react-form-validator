import { IntegerValidator } from '../../validators';

describe('Integer Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be an integer."', () => {
      expect(IntegerValidator.message).toEqual(
        'The :attribute must be an integer.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(IntegerValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(IntegerValidator.required).toBeFalsy();
    });
  });
});
