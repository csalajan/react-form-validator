import { toSentence } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The selected :attribute must be :values.',
  (val, params) => params.includes(val),
  (message, params) => message.replace(':values', toSentence(params))
);
