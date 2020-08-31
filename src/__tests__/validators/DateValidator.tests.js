import { DateValidator } from '../../validators';

describe('Date Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a date."', () => {
      expect(DateValidator.message).toEqual('The :attribute must be a date.');
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(DateValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(DateValidator.required).toBeFalsy();
    });
  });
});
