import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be accepted.',
  (val) => val === true,
  null,
  true
);
