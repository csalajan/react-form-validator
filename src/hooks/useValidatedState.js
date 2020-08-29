import { useState } from 'react'
import validators from '../utils/validators'
import { getMessage, normalizeValues, passes } from '../utils/helpers'

export default (initialValue, validations, options = { fieldName: ''}) => {
  const [state, setState] = useState(initialValue)
  const [errors, setErrors] = useState([])

  const dispatch = (newValue) => {
    const validationList = Array.isArray(validations)
      ? validations
      : validations.split('|')
    const errorList = []
    for (const validation of validationList) {
      const [value, rule, params] = normalizeValues(newValue, validation)
      const rules = options.validators
        ? { ...validators, ...options.validators }
        : validators
      if (!passes(rule, value, params, rules)) {
        let message = getMessage(rule, options.fieldName, options, rules)

        if (params.length > 0 && rules[rule].hasOwnProperty('messageReplace')) {
          message = rules[rule].messageReplace(message, params)
        }

        errorList.push(message)
      }
    }

    setErrors(errorList)
    setState(newValue)
  }

  return [state, errors, dispatch]
}
