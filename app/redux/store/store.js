'use strick'
import {createStore,applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducer/'
let createStoreWithMiddleware = applyMiddleware(
  // createLogger(),
)(createStore)
let store = createStoreWithMiddleware(rootReducer)

export default store
