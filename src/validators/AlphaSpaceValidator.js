import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute may only contain letters and spaces.',
  /^[A-Z\s]*$/i
);
