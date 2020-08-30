import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute may only contain letters.',
  /^[A-Z]*$/i
);
