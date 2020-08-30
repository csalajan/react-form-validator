import ValidatorBuilder from './ValidatorBuilder';
import { canUseMoment } from '../utils/helpers';

export default ValidatorBuilder(
  'The :attribute must be before or on :date.',
  (val, params) =>
    canUseMoment() &&
    // eslint-disable-next-line no-undef
    moment.isMoment(val) &&
    val.isSameOrBefore(params[0], 'day'),
  (message, params) => message.replace(':date', params[0].format('MM/DD/YYYY'))
);
