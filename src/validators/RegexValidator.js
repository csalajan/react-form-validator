import { testRegex } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must match the required pattern.',
  (val, params) =>
    testRegex(
      val,
      typeof params[0] === 'string' || params[0] instanceof String
        ? new RegExp(params[0])
        : params[0]
    )
);
