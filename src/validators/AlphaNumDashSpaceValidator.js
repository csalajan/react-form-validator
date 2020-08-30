import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute may only contain letters, numbers, dashes, and spaces.',
  /^[A-Z0-9_-\s]*$/i
);
