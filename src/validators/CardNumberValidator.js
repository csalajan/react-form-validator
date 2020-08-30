import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute must be a valid credit card number.',
  /^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/
);
