import { AlphaNumSpaceValidator } from '../../validators';

describe('Alpha Num Space Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute may only contain letters, numbers, and spaces."', () => {
      expect(AlphaNumSpaceValidator.message).toEqual(
        'The :attribute may only contain letters, numbers, and spaces.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value contains anything besides alpha, num, or dash characters', () => {
      expect(AlphaNumSpaceValidator.rule('#')).toBeFalsy();
    });

    it('is invalid if the value contains dash characters', () => {
      expect(
        AlphaNumSpaceValidator.rule(
          'This is some-text with 1 dash and some spaces'
        )
      ).toBeFalsy();
    });

    it('is valid if the value only contains alpha, numeric, or space', () => {
      expect(
        AlphaNumSpaceValidator.rule('some intersting 123 text')
      ).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('has no messageReplace method', () => {
      expect(AlphaNumSpaceValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('is not required', () => {
      expect(AlphaNumSpaceValidator.required).toBeFalsy();
    });
  });
});
