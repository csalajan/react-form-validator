import { NotInValidator } from '../../validators';

describe('Not In Validator', () => {
  describe('message', () => {
    it('has the message "The selected :attribute must not be :values."', () => {
      expect(NotInValidator.message).toEqual(
        'The selected :attribute must not be :values.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {});

  describe('required', () => {
    it('should not be required', () => {
      expect(NotInValidator.required).toBeFalsy();
    });
  });
});
