import moment from 'moment';
import { AfterOrEqualValidator } from '../../validators';

describe('After Or Equal Validator', () => {
  const paramDate = moment('01/01/2020');

  describe('message', () => {
    it('has the message: "The :attribute must be after or on :date."', () => {
      expect(AfterOrEqualValidator.message).toEqual(
        'The :attribute must be after or on :date.'
      );
    });
  });

  describe('rule', () => {
    beforeEach(() => {
      window.moment = moment;
    });

    it('should be invalid if moment is not available', () => {
      window.moment = null;
      expect(AfterOrEqualValidator.rule(moment())).toBeFalsy();
    });

    it('should be invalid if the value is not a moment object', () => {
      expect(AfterOrEqualValidator.rule('01/01/2020', [paramDate])).toBeFalsy();
    });

    it('should be invalid if the value is before the expected date', () => {
      expect(
        AfterOrEqualValidator.rule(moment('01/01/2019'), [paramDate])
      ).toBeFalsy();
    });

    it('should be valid if the value is equal to the expected date', () => {
      expect(
        AfterOrEqualValidator.rule(moment('01/01/2020'), [paramDate])
      ).toBeTruthy();
    });

    it('should be valid if the value is after the expected date', () => {
      expect(
        AfterOrEqualValidator.rule(moment('01/01/2021'), [paramDate])
      ).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('replaces the :date placeholder in the message', () => {
      expect(
        AfterOrEqualValidator.messageReplace(
          'The :attribute must be after or on :date.',
          [paramDate]
        )
      ).toEqual('The :attribute must be after or on 01/01/2020.');
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(AfterOrEqualValidator.required).toBeFalsy();
    });
  });
});
