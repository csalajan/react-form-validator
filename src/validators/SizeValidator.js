import { size, sizeText } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be :size:type.',
  // eslint-disable-next-line eqeqeq
  (val, params) => size(val, params[1]) == parseFloat(params[0]),
  (message, params) =>
    message.replace(':size', params[0]).replace(':type', sizeText(params[1]))
);
