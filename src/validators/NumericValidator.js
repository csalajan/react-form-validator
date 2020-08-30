import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute must be a number.',
  /^\-?\d*\.?\d+$/
);
