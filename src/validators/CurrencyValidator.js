import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute must be a valid currency.',
  /^\$?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/
);
