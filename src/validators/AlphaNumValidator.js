import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute may only contain letters and numbers.',
  /^[A-Z0-9]*$/i
);
