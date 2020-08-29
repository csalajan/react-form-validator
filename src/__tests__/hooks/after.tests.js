import { testHook } from '../../hooks/TestHook'
import useValidatedState from '../../hooks/useValidatedState'
import moment from 'moment'
import { act } from '@testing-library/react'

describe('useValidatedState with after validation', () => {
  let state, errors, setState
  const after = moment('01/01/2020')
  const now = moment()
  beforeEach(() => {
    window.moment = moment;
    testHook(() => {
      const validatedState = useValidatedState(now, [{ after }], {
        fieldName: 'testField'
      })
      state = validatedState[0]
      errors = validatedState[1]
      setState = validatedState[2]
    })
  })

  it('has no errors when field is set to a date after specified', () => {
    const afterDate = moment('03/01/2020')
    expect(state).toEqual(now)
    expect(errors).toEqual([])

    act(() => {
      setState(afterDate)
    })

    expect(state).toEqual(afterDate)
    expect(errors).toEqual([])
  })

  it('has an error when the field is set to a date before the specified date', () => {
    const beforeDate = moment(after).subtract(1, 'month')
    expect(state).toEqual(now)
    expect(errors).toEqual([])

    act(() => {
      setState(beforeDate)
    })

    expect(state).toEqual(beforeDate)
    expect(errors).toEqual(['The test field must be after 01/01/2020.'])
  })
})
