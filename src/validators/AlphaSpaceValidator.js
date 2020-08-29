import { testRegex } from '../utils/helpers'
import ValidatorBuilder from './ValidatorBuilder'

export default ValidatorBuilder(
  'The :attribute may only contain letters and spaces.',
  (val) => testRegex(val, /^[A-Z\s]*$/i)
)
