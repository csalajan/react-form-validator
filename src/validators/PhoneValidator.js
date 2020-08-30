import { testRegex } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be a valid phone number.',
  (val) =>
    testRegex(
      val,
      /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/
    ) && !testRegex(val, /^\b(\d)\1{8,}\b$/)
);
