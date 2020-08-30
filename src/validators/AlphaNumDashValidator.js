import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute may only contain letters, numbers, and dashes.',
  /^[A-Z0-9_-]*$/i
);
