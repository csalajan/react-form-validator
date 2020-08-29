import { testRegex } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute may only contain letters.',
  (val) => testRegex(val, /^[A-Z]*$/i)
);
