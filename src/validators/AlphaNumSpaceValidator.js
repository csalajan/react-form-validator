import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute may only contain letters, numbers, and spaces.',
  /^[A-Z0-9\s]*$/i
);
