import { BetweenValidator } from '../../validators';

describe('Between Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be between :min and :max:type."', () => {
      expect(BetweenValidator.message).toEqual(
        'The :attribute must be between :min and :max:type.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value is greater than the max', () => {
      expect(BetweenValidator.rule(10, [5, 9, 'num'])).toBeFalsy();
    });

    it('is invalid if the value is less than the min', () => {
      expect(BetweenValidator.rule(4, [5, 9, 'num'])).toBeFalsy();
    });

    it('is invalid if the string value is smaller than the min', () => {
      expect(BetweenValidator.rule('the', [5, 9, 'string'])).toBeFalsy();
    });

    it('is invalid if the undefined value is bigger than the max', () => {
      expect(BetweenValidator.rule('impossible', [5, 9])).toBeFalsy();
    });

    it('is invalid if the undefined value is smaller than the min', () => {
      expect(BetweenValidator.rule('the', [5, 9])).toBeFalsy();
    });

    it('is invalid if the string value is bigger than the max', () => {
      expect(BetweenValidator.rule('impossible', [5, 9, 'string'])).toBeFalsy();
    });

    it('is invalid if the array value is smaller than the min', () => {
      expect(BetweenValidator.rule(['test'], [5, 9, 'array'])).toBeFalsy();
    });

    it('is invalid if the array value is bigger than the max', () => {
      expect(
        BetweenValidator.rule([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [5, 9, 'array'])
      ).toBeFalsy();
    });

    it('is valid if the value is between min and max', () => {
      expect(BetweenValidator.rule(7, [5, 9, 'num'])).toBeTruthy();
    });

    it('is valid if the undefined value is between min and max', () => {
      expect(BetweenValidator.rule('someone', [5, 9])).toBeTruthy();
    });

    it('is valid if the string value is between min and max', () => {
      expect(BetweenValidator.rule('someone', [5, 9, 'string'])).toBeTruthy();
    });

    it('is valid if the array value is between min and max', () => {
      expect(
        BetweenValidator.rule([0, 1, 2, 3, 4, 5, 6], [5, 9, 'array'])
      ).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    const message = 'The :attribute must be between :min and :max:type.';
    it('replaces the :min, :max, and :type placeholder', () => {
      expect(
        BetweenValidator.messageReplace(message, [0, 1, 'string'])
      ).toEqual('The :attribute must be between 0 and 1 characters.');
    });
  });

  describe('required', () => {
    it('should be false', () => {
      expect(BetweenValidator.required).toBeFalsy();
    });
  });
});
