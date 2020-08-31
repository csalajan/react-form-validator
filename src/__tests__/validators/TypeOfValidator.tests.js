import { TypeOfValidator } from '../../validators';

describe('Type Of Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute is not the correct type of :type."', () => {
      expect(TypeOfValidator.message).toEqual(
        'The :attribute is not the correct type of :type.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {});

  describe('required', () => {
    it('should not be required', () => {
      expect(TypeOfValidator.required).toBeFalsy();
    });
  });
});
