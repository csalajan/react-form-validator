import { MinValidator } from '../../validators';

describe('Min Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute may not be less than :max:type."', () => {
      expect(MinValidator.message).toEqual(
        'The :attribute may not be less than :max:type.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {});

  describe('required', () => {
    it('should not be required', () => {
      expect(MinValidator.required).toBeFalsy();
    });
  });
});
