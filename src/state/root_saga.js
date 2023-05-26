import { spawn, all } from 'redux-saga/effects'
import {
  watchLogin,
} from './app_sagas'

const rootSaga = function* () {
  yield all([
    spawn(watchLogin),

  ])
}

export default rootSaga
