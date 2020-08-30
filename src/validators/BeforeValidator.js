import ValidatorBuilder from './ValidatorBuilder';
import { canUseMoment } from '../utils/helpers';

export default ValidatorBuilder(
  'The :attribute must be before :date.',
  (val, params) =>
    // eslint-disable-next-line no-undef
    canUseMoment() && moment.isMoment(val) && val.isBefore(params[0], 'day'),
  (message, params) => message.replace(':date', params[0].format('MM/DD/YYYY'))
);
