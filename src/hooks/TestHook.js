import React from 'react'
import moment from 'moment';
import { render } from '@testing-library/react'

const TestHook = ({ callback }) => {
  callback()

  return null
}

export const testHook = (callback) => {
  render(<TestHook callback={callback} />)
}
