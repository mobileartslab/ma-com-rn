import { combineReducers } from 'redux'
import AppReducer from './app_reducer'

const rootReducer = combineReducers({
  app: AppReducer,
})

export default rootReducer
