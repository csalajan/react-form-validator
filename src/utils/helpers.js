export const passes = (rule, value, params, rules) => {
  if (!rules.hasOwnProperty(rule)) {
    return true
  }

  if (!isRequired(rule, rules) && isBlank(value)) {
    return true
  }

  return rules[rule].rule(value, params) !== false
}

export const isRequired = (rule, rules) => {
  return rules[rule].hasOwnProperty('required') && rules[rule].required
}

export const isBlank = (value) => {
  return (
    typeof value === 'undefined' ||
    value === null ||
    testRegex(value, /^[\s]*$/)
  )
}

export const testRegex = (value, regex) => {
  return value.toString().match(regex) !== null
}

export const size = (value, type) => {
  if (type === 'string' || type === undefined || type === 'array') {
    return value.length
  } else if (type === 'num') {
    return parseFloat(value)
  }
}

export const sizeText = (type) => {
  if (type === 'string' || type === undefined) {
    return ' characters'
  } else if (type === 'array') {
    return ' elements'
  } else {
    return ''
  }
}

export const canUseMoment = () => {
  return !(!window || !window.moment)
}

export const toSentence = (arr) => {
  return (
    arr.slice(0, -2).join(', ') +
    (arr.slice(0, -2).length ? ', ' : '') +
    arr.slice(-2).join(arr.length > 2 ? ', or ' : ' or ')
  )
}

export const valueOrEmptyString = (value) => {
  return typeof value === 'undefined' || value === null ? '' : value
}

export const getValidation = (validation) => {
  if (validation === Object(validation) && !!Object.keys(validation).length) {
    return Object.keys(validation)[0]
  } else {
    return validation.split(':')[0]
  }
}

export const getOptions = (validation) => {
  if (validation === Object(validation) && !!Object.values(validation).length) {
    const params = Object.values(validation)[0]
    return Array.isArray(params) ? params : [params]
  } else {
    const params = validation.split(':')
    return params.length > 1 ? params[1].split(',') : []
  }
}

export const humanizeFieldName = (field) =>
  field
    .replace(/([A-Z])/g, ' $1')
    .replace(/_/g, ' ')
    .toLowerCase()

export const getMessage = (rule, field, options, rules) => {
  options.messages = options.messages || {}
  const message =
    options.messages[rule] || options.messages.default || rules[rule].message
  return message.replace(':attribute', humanizeFieldName(field))
}

export const normalizeValues = (value, validation) => {
  return [
    valueOrEmptyString(value),
    getValidation(validation),
    getOptions(validation)
  ]
}
