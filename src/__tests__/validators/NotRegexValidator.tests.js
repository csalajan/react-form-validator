import { NotRegexValidator } from '../../validators';

describe('Not Regex Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must not match the required pattern."', () => {
      expect(NotRegexValidator.message).toEqual(
        'The :attribute must not match the required pattern.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(NotRegexValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(NotRegexValidator.required).toBeFalsy();
    });
  });
});
