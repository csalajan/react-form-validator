import { RegexValidator } from '../../validators';

describe('Regex Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must match the required pattern."', () => {
      expect(RegexValidator.message).toEqual(
        'The :attribute must match the required pattern.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(RegexValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(RegexValidator.required).toBeFalsy();
    });
  });
});
