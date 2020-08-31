import { InValidator } from '../../validators';

describe('In Validator', () => {
  describe('message', () => {
    it('has the message "The selected :attribute must be :values."', () => {
      expect(InValidator.message).toEqual(
        'The selected :attribute must be :values.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {});

  describe('required', () => {
    it('should not be required', () => {
      expect(InValidator.required).toBeFalsy();
    });
  });
});
