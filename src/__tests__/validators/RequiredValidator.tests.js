import { RequiredValidator } from '../../validators';

describe('Required Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute field is required."', () => {
      expect(RequiredValidator.message).toEqual(
        'The :attribute field is required.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(RequiredValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should be required', () => {
      expect(RequiredValidator.required).toBeTruthy();
    });
  });
});
