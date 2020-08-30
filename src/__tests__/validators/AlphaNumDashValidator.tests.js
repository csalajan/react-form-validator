import { AlphaNumDashValidator } from '../../validators';

describe('Alpha Num Dash Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute may only contain letters, numbers, and dashes."', () => {
      expect(AlphaNumDashValidator.message).toEqual(
        'The :attribute may only contain letters, numbers, and dashes.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value contains anything besides alpha, num, or dash characters', () => {
      expect(AlphaNumDashValidator.rule('#')).toBeFalsy();
    });

    it('is invalid if the value contains space characters', () => {
      expect(
        AlphaNumDashValidator.rule(
          'This is some-text with 1 dash and some spaces'
        )
      ).toBeFalsy();
    });

    it('is valid if the value only contains alpha, numeric, dash', () => {
      expect(
        AlphaNumDashValidator.rule('some-intersting-123-text')
      ).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('has no messageReplace method', () => {
      expect(AlphaNumDashValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('is not required', () => {
      expect(AlphaNumDashValidator.required).toBeFalsy();
    });
  });
});
