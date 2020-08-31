import { isBlank } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute field is required.',
  (val) => !isBlank(val),
  undefined,
  true
);
