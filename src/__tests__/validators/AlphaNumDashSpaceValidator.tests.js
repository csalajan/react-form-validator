import { AlphaNumDashSpaceValidator } from '../../validators';

describe('Alpha Num Dash Space Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute may only contain letters, numbers, dashes, and spaces."', () => {
      expect(AlphaNumDashSpaceValidator.message).toEqual(
        'The :attribute may only contain letters, numbers, dashes, and spaces.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value contains anything besides alpha, num, space, or dash characters', () => {
      expect(AlphaNumDashSpaceValidator.rule('#')).toBeFalsy();
    });

    it('is valid if the value only contains alpha, numeric, dash, or space characters', () => {
      expect(
        AlphaNumDashSpaceValidator.rule(
          'This is some-text with 1 dash and some spaces'
        )
      ).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('has no messageReplace method', () => {
      expect(AlphaNumDashSpaceValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('is not required', () => {
      expect(AlphaNumDashSpaceValidator.required).toBeFalsy();
    });
  });
});
