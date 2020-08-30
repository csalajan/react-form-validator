import { canUseMoment } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be a date.',
  // eslint-disable-next-line no-undef
  (val) => canUseMoment() && moment.isMoment(val)
);
