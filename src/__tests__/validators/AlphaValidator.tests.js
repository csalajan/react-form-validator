import { AlphaValidator } from '../../validators';

describe('Alpha Num Dash Space Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute may only contain letters."', () => {
      expect(AlphaValidator.message).toEqual(
        'The :attribute may only contain letters.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value contains anything besides alpha, num, or dash characters', () => {
      expect(AlphaValidator.rule('#')).toBeFalsy();
    });

    it('is invalid if the value contains dash and spaces characters', () => {
      expect(
        AlphaValidator.rule('This is some-text with 1 dash and some spaces')
      ).toBeFalsy();
    });

    it('is invalid if the value contains numeric', () => {
      expect(AlphaValidator.rule('asd123')).toBeFalsy();
    });

    it('is invalid if the value only contains alpha', () => {
      expect(AlphaValidator.rule('asd')).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('has no messageReplace method', () => {
      expect(AlphaValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('is not required', () => {
      expect(AlphaValidator.required).toBeFalsy();
    });
  });
});
