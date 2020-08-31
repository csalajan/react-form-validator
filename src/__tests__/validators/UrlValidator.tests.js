import { UrlValidator } from '../../validators';

describe('Url Validator', () => {
  describe('message', () => {
    it('has the message "The :attribute must be a url."', () => {
      expect(UrlValidator.message).toEqual('The :attribute must be a url.');
    });
  });

  describe('rule', () => {});

  describe('messageReplace', () => {
    it('should be undefined', () => {
      expect(UrlValidator.messageReplace).toBeUndefined();
    });
  });

  describe('required', () => {
    it('should not be required', () => {
      expect(UrlValidator.required).toBeFalsy();
    });
  });
});
