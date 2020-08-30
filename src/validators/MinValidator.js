import { size, sizeText } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute may not be greater than :max:type.',
  (val, params) => size(val, params[1]) >= parseFloat(params[0]),
  (message, params) =>
    message.replace(':max', params[0]).replace(':type', sizeText(params[1]))
);
