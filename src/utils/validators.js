import {
  canUseMoment,
  isBlank,
  size,
  sizeText,
  testRegex,
  toSentence
} from './helpers'

export default {
  accepted: {
    message: 'The :attribute must be accepted.',
    rule: (val) => val === true,
    required: true
  },
  after: {
    message: 'The :attribute must be after :date.',
    rule: (val, params) =>
      canUseMoment() && moment.isMoment(val) && val.isAfter(params[0], 'day'),
    messageReplace: (message, params) =>
      message.replace(':date', params[0].format('MM/DD/YYYY'))
  },
  after_or_equal: {
    message: 'The :attribute must be after or on :date.',
    rule: (val, params) =>
      canUseMoment() &&
      moment.isMoment(val) &&
      val.isSameOrAfter(params[0], 'day'),
    messageReplace: (message, params) =>
      message.replace(':date', params[0].format('MM/DD/YYYY'))
  },
  alpha: {
    message: 'The :attribute may only contain letters.',
    rule: (val) => testRegex(val, /^[A-Z]*$/i)
  },
  alpha_space: {
    message: 'The :attribute may only contain letters and spaces.',
    rule: (val) => testRegex(val, /^[A-Z\s]*$/i)
  },
  alpha_num: {
    message: 'The :attribute may only contain letters and numbers.',
    rule: (val) => testRegex(val, /^[A-Z0-9]*$/i)
  },
  alpha_num_space: {
    message: 'The :attribute may only contain letters, numbers, and spaces.',
    rule: (val) => testRegex(val, /^[A-Z0-9\s]*$/i)
  },
  alpha_num_dash: {
    message: 'The :attribute may only contain letters, numbers, and dashes.',
    rule: (val) => testRegex(val, /^[A-Z0-9_-]*$/i)
  },
  alpha_num_dash_space: {
    message:
      'The :attribute may only contain letters, numbers, dashes, and spaces.',
    rule: (val) => testRegex(val, /^[A-Z0-9_-\s]*$/i)
  },
  array: {
    message: 'The :attribute must be an array.',
    rule: (val) => Array.isArray(val)
  },
  before: {
    message: 'The :attribute must be before :date.',
    rule: (val, params) =>
      canUseMoment() && moment.isMoment(val) && val.isBefore(params[0], 'day'),
    messageReplace: (message, params) =>
      message.replace(':date', params[0].format('MM/DD/YYYY'))
  },
  before_or_equal: {
    message: 'The :attribute must be before or on :date.',
    rule: (val, params) =>
      canUseMoment() &&
      moment.isMoment(val) &&
      val.isSameOrBefore(params[0], 'day'),
    messageReplace: (message, params) =>
      message.replace(':date', params[0].format('MM/DD/YYYY'))
  },
  between: {
    message: 'The :attribute must be between :min and :max:type.',
    rule: (val, params) =>
      size(val, params[2]) >= parseFloat(params[0]) &&
      size(val, params[2]) <= parseFloat(params[1]),
    messageReplace: (message, params) =>
      message
        .replace(':min', params[0])
        .replace(':max', params[1])
        .replace(':type', sizeText(params[2]))
  },
  boolean: {
    message: 'The :attribute must be a boolean.',
    rule: (val) => val === false || val === true
  },
  card_exp: {
    message: 'The :attribute must be a valid expiration date.',
    rule: (val) =>
      testRegex(val, /^(([0]?[1-9]{1})|([1]{1}[0-2]{1}))\s?\/\s?(\d{2}|\d{4})$/)
  },
  card_num: {
    message: 'The :attribute must be a valid credit card number.',
    rule: (val) => testRegex(val, /^\d{4}\s?\d{4,6}\s?\d{4,5}\s?\d{0,8}$/)
  },
  currency: {
    message: 'The :attribute must be a valid currency.',
    rule: (val) => testRegex(val, /^\$?(\d{1,3})(\,?\d{3})*\.?\d{0,2}$/)
  },
  date: {
    message: 'The :attribute must be a date.',
    rule: (val) => canUseMoment() && moment.isMoment(val)
  },
  date_equals: {
    message: 'The :attribute must be on :date.',
    rule: (val, params) =>
      canUseMoment() && moment.isMoment(val) && val.isSame(params[0], 'day'),
    messageReplace: (message, params) =>
      message.replace(':date', params[0].format('MM/DD/YYYY'))
  },
  email: {
    message: 'The :attribute must be a valid email address.',
    rule: (val) =>
      testRegex(val, /^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
  },
  in: {
    message: 'The selected :attribute must be :values.',
    rule: (val, params) => params.includes(val),
    messageReplace: (message, params) =>
      message.replace(':values', toSentence(params))
  },
  integer: {
    message: 'The :attribute must be an integer.',
    rule: (val) => testRegex(val, /^\d*$/)
  },
  max: {
    message: 'The :attribute may not be greater than :max:type.',
    rule: (val, params) => size(val, params[1]) <= parseFloat(params[0]),
    messageReplace: (message, params) =>
      message.replace(':max', params[0]).replace(':type', sizeText(params[1]))
  },
  min: {
    message: 'The :attribute must be at least :min:type.',
    rule: (val, params) => size(val, params[1]) >= parseFloat(params[0]),
    messageReplace: (message, params) =>
      message.replace(':min', params[0]).replace(':type', sizeText(params[1]))
  },
  not_in: {
    message: 'The selected :attribute must not be :values.',
    rule: (val, params) => !params.includes(val),
    messageReplace: (message, params) =>
      message.replace(':values', toSentence(params))
  },
  not_regex: {
    message: 'The :attribute must not match the required pattern.',
    rule: (val, params) =>
      !testRegex(
        val,
        typeof params[0] === 'string' || params[0] instanceof String
          ? new RegExp(params[0])
          : params[0]
      )
  },
  numeric: {
    message: 'The :attribute must be a number.',
    rule: (val) => testRegex(val, /^\-?\d*\.?\d+$/)
  },
  phone: {
    message: 'The :attribute must be a valid phone number.',
    rule: (val) =>
      testRegex(
        val,
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/
      ) && !testRegex(val, /^\b(\d)\1{8,}\b$/)
  },
  regex: {
    message: 'The :attribute must match the required pattern.',
    rule: (val, params) =>
      testRegex(
        val,
        typeof params[0] === 'string' || params[0] instanceof String
          ? new RegExp(params[0])
          : params[0]
      )
  },
  required: {
    message: 'The :attribute field is required.',
    rule: (val) => !isBlank(val),
    required: true
  },
  size: {
    message: 'The :attribute must be :size:type.',
    rule: (val, params) => size(val, params[1]) == parseFloat(params[0]),
    messageReplace: (message, params) =>
      message.replace(':size', params[0]).replace(':type', sizeText(params[1]))
  },
  string: {
    message: 'The :attribute must be a string.',
    rule: (val) => typeof val === typeof 'string'
  },
  typeof: {
    message: 'The :attribute is not the correct type of :type.',
    rule: (val, params) => typeof val === typeof params[0],
    messageReplace: (message, params) =>
      message.replace(':type', typeof params[0])
  },
  url: {
    message: 'The :attribute must be a url.',
    rule: (val) =>
      testRegex(
        val,
        /^https?:\/\/[-a-z0-9@:%._\+~#=]{1,256}\.[a-z0-9()]{2,6}\b([-a-z0-9()@:%_\+.~#?&//=]*)$/i
      )
  }
}
