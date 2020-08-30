import { SimpleRegexValidatorBuilder } from './ValidatorBuilder';

export default SimpleRegexValidatorBuilder(
  'The :attribute must be a url.',
  /^https?:\/\/[-a-z0-9@:%._\+~#=]{1,256}\.[a-z0-9()]{2,6}\b([-a-z0-9()@:%_\+.~#?&//=]*)$/i
);
