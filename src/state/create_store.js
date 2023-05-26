import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './root_reducer'
import rootSaga from './root_saga'

const middleware = createSagaMiddleware()

export default () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(middleware)))

  middleware.run(rootSaga)

  return store
}
