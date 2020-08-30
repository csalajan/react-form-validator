import { canUseMoment } from '../utils/helpers';
import ValidatorBuilder from './ValidatorBuilder';

export default ValidatorBuilder(
  'The :attribute must be on :date.',
  // eslint-disable-next-line no-undef
  (val, params) =>
    // eslint-disable-next-line no-undef
    canUseMoment() && moment.isMoment(val) && val.isSame(params[0], 'day'),
  (message, params) => message.replace(':date', params[0].format('MM/DD/YYYY'))
);
