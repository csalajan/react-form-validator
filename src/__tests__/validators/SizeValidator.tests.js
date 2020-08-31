import { SizeValidator } from '../../validators';

describe('Size Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be :size:type."', () => {
      expect(SizeValidator.message).toEqual(
        'The :attribute must be :size:type.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {});

  describe('required', () => {
    it('should not be required', () => {
      expect(SizeValidator.required).toBeFalsy();
    });
  });
});
