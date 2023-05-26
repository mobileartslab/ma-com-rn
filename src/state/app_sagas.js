import { put, call, takeLatest } from 'redux-saga/effects'
import API from './api'
import { actionSuccess, actionError } from './actions'
import { LOGIN } from './action_types'

export const login = function* (action) {
  const { type } = action
  try {
    const data = yield call(API.login, action.data)
    yield put(actionSuccess(data, type))
  } catch (error) {
    yield put(actionError(error, type))
  }
}
export const watchGetScreen = function* () {
  yield takeLatest(LOGIN, login)
}
