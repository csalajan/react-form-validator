import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute is not the correct type of :type.',
  (val, params) => typeof val === typeof params[0],
  (message, params) => message.replace(':type', typeof params[0])
);
