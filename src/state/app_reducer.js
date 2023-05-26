import { SUCCESS } from '../constants/constants'
import { INIT, LOGIN } from './action_types'

const INITIAL_STATE = {
  screen: null,
  currentScreenContent: [],
}

export default function (state = INITIAL_STATE, action) {
  console.log('ACTION', action)
  switch (action.type) {
    case INIT:
      return state
    case `${LOGIN}-${SUCCESS}`:
      return { ...state, screen: action.data }
    default:
      return state
  }
}
