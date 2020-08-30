import { AlphaNumValidator } from '../../validators';

describe('Alpha Num Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute may only contain letters and numbers."', () => {
      expect(AlphaNumValidator.message).toEqual(
        'The :attribute may only contain letters and numbers.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value contains anything besides alpha, num, or dash characters', () => {
      expect(AlphaNumValidator.rule('#')).toBeFalsy();
    });

    it('is invalid if the value contains dash and spaces characters', () => {
      expect(
        AlphaNumValidator.rule('This is some-text with 1 dash and some spaces')
      ).toBeFalsy();
    });

    it('is valid if the value only contains alpha and numeric', () => {
      expect(AlphaNumValidator.rule('asd123')).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('has no messageReplace method', () => {
      expect(AlphaNumValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('is not required', () => {
      expect(AlphaNumValidator.required).toBeFalsy();
    });
  });
});
