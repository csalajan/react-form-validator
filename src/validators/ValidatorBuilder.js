import {testRegex} from "../utils/helpers";

const ValidatorBuilder = (message, rule, messageReplace, required = false) => ({
  message,
  rule,
  messageReplace,
  required
});

export const SimpleRegexValidatorBuilder = (message, regex) => ValidatorBuilder(
  message,
  (val) => testRegex(val, regex)
)

export default ValidatorBuilder;
