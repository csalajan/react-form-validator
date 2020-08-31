import { MaxValidator } from '../../validators';

describe('Max Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute may not be greater than :max:type."', () => {
      expect(MaxValidator.message).toEqual(
        'The :attribute may not be greater than :max:type.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {});

  describe('required', () => {
    it('should not be required', () => {
      expect(MaxValidator.required).toBeFalsy();
    });
  });
});
