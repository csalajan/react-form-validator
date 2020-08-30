import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be a string.',
  (val) => typeof val === typeof 'string'
);
