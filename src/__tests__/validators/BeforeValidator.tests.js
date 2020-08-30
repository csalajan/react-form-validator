import { BeforeValidator } from '../../validators';
import moment from 'moment';

describe('Before Or Equal Validator', () => {
  const paramDate = moment('01/01/2020', 'MM/DD/YYYY');

  describe('message', () => {
    it('has the message: "The :attribute must be before or on :date."', () => {
      expect(BeforeValidator.message).toEqual(
        'The :attribute must be before :date.'
      );
    });
  });

  describe('rule', () => {
    beforeEach(() => {
      window.moment = moment;
    });

    it('should be invalid if moment is not available', () => {
      window.moment = null;
      expect(BeforeValidator.rule(moment())).toBeFalsy();
    });

    it('should be invalid if the value is not a moment object', () => {
      expect(BeforeValidator.rule('01/01/2020', [paramDate])).toBeFalsy();
    });

    it('should be invalid if the value is after the expected date', () => {
      expect(
        BeforeValidator.rule(moment('01/01/2021', 'MM/DD/YYYY'), [paramDate])
      ).toBeFalsy();
    });

    it('should be invalid if the value is equal to the expected date', () => {
      expect(
        BeforeValidator.rule(moment('01/01/2020', 'MM/DD/YYYY'), [paramDate])
      ).toBeFalsy();
    });

    it('should be valid if the value is before the expected date', () => {
      expect(
        BeforeValidator.rule(moment('01/01/2019', 'MM/DD/YYYY'), [paramDate])
      ).toBeTruthy();
    });
  });

  describe('messageReplace', () => {
    it('replaces the :date placeholder in the message', () => {
      expect(
        BeforeValidator.messageReplace(
          'The :attribute must be after or on :date.',
          [paramDate]
        )
      ).toEqual('The :attribute must be after or on 01/01/2020.');
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(BeforeValidator.required).toBeFalsy();
    });
  });
});
