import { size, sizeText } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be between :min and :max:type.',
  (val, params) =>
    size(val, params[2]) >= parseFloat(params[0]) &&
    size(val, params[2]) <= parseFloat(params[1]),
  (message, params) =>
    message
      .replace(':min', params[0])
      .replace(':max', params[1])
      .replace(':type', sizeText(params[2]))
);
