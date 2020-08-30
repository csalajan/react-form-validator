import { AlphaSpaceValidator } from '../../validators';

describe('Alpha Space Validator', () => {
  describe('message', () => {
    it('has the message: "The :attribute may only contain letters and spaces."', () => {
      expect(AlphaSpaceValidator.message).toEqual(
        'The :attribute may only contain letters and spaces.'
      );
    });
  });

  describe('rule', () => {
    it('is invalid if the value contains anything besides alpha, num, or dash characters', () => {
      expect(AlphaSpaceValidator.rule('#')).toBeFalsy();
    });

    it('is invalid if the value contains dash characters', () => {
      expect(
        AlphaSpaceValidator.rule(
          'some-dashed-text'
        )
      ).toBeFalsy();
    });

    it('is invalid if the value contains numeric', () => {
      expect(AlphaSpaceValidator.rule('asd123')).toBeFalsy();
    });

    it('is valid if the value contains spaces', () => {
      expect(AlphaSpaceValidator.rule('this is valid text')).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('has no messageReplace method', () => {
      expect(AlphaSpaceValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('is not required', () => {
      expect(AlphaSpaceValidator.required).toBeFalsy();
    });
  });
});
