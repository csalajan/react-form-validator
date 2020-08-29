import ValidatorBuilder from './ValidatorBuilder'
import { canUseMoment } from '../utils/helpers'

export default ValidatorBuilder(
  'The :attribute must be after or on :date.',
  (val, params) =>
    canUseMoment() &&
    // eslint-disable-next-line no-undef
    moment.isMoment(val) &&
    val.isSameOrAfter(params[0], 'day'),
  (message, params) => message.replace(':date', params[0].format('MM/DD/YYYY'))
)
