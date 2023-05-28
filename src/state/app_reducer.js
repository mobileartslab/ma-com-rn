import {STATUS_ACTIVE, STATUS_NOT_FOUND, SUCCESS} from '../constants/constants'
import { INIT, LOGIN } from './action_types'

const INITIAL_STATE = {
  user: { authStatus: STATUS_NOT_FOUND }
}

export default function (state = INITIAL_STATE, action) {
  console.log('ACTION', action)
  console.log('STATE', state)
  switch (action.type) {
    case INIT:
      return state
    case `${LOGIN}-${SUCCESS}`:
      return { ...state, user: action.data }
    default:
      return state
  }
}
