import { ERROR, SUCCESS } from '../constants/constants'

export const action = (payload) => {
  const { type, data } = payload
  return {
    type,
    data,
  }
}
export const actionSuccess = (data, type) => ({
  type: `${type}-${SUCCESS}`,
  data,
})
export const actionError = (error, type) => ({
  type: `${type}-${ERROR}`,
  error,
})
