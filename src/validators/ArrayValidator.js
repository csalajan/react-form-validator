import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder('The :attribute must be an array.', (val) =>
  Array.isArray(val)
);
