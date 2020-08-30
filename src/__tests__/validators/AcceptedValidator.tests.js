import { AcceptedValidator } from '../../validators';

describe('Accepted Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute must be accepted."', () => {
      expect(AcceptedValidator.message).toEqual(
        'The :attribute must be accepted.'
      );
    });
  });

  describe('rule', () => {
    it('is valid if the value is true', () => {
      expect(AcceptedValidator.rule(true)).toBeTruthy();
    });

    it('is invalid if the value is false', () => {
      expect(AcceptedValidator.rule(false)).toBeFalsy();
    });

    it('is invalid if the value is truthy but not true', () => {
      expect(AcceptedValidator.rule('test')).toBeFalsy();
    });
  });

  describe('messageReplace', () => {
    it('should be null', () => {
      expect(AcceptedValidator.messageReplace).toBeNull();
    });
  });

  describe('required', () => {
    it('should be required', () => {
      expect(AcceptedValidator.required).toBeTruthy();
    });
  });
});
