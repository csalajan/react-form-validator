import { act } from '@testing-library/react'
import { testHook } from '../../hooks/TestHook'
import useValidatedState from '../../hooks/useValidatedState'

describe('useValidatedState with accepted validation', () => {
  let state, errors, setState

  beforeEach(() => {
    testHook(() => {
      const validatedState = useValidatedState(false, 'accepted', {
        fieldName: 'testField'
      })
      state = validatedState[0]
      errors = validatedState[1]
      setState = validatedState[2]
    })
  })

  it('generates an error whenever the state is not true', () => {
    expect(errors).toEqual([])
    expect(state).toEqual(false)

    act(() => {
      setState(true)
    })

    expect(errors).toEqual([])
    expect(state).toEqual(true)

    act(() => {
      setState(false)
    })

    expect(errors).toEqual(['The test field must be accepted.'])
    expect(state).toEqual(false)
  })
})
