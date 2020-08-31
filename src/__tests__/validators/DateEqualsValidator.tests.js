import moment from 'moment';
import { DateEqualsValidator } from '../../validators';

describe('Date Equals Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be on :date."', () => {
      expect(DateEqualsValidator.message).toEqual(
        'The :attribute must be on :date.'
      );
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should replace the :date placeholder', () => {
      expect(
        DateEqualsValidator.messageReplace('The :attribute must be on :date.', [
          moment('01/01/2020', 'MM/DD/YYYY')
        ])
      ).toEqual('The :attribute must be on 01/01/2020.');
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(DateEqualsValidator.required).toBeFalsy();
    });
  });
});
