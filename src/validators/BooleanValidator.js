import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be a boolean.',
  (val) => val === false || val === true
);
