'use strick'
import {
    createStore,
    applyMiddleware
} from 'redux'
import createLogger from 'redux-logger'
import rootReducer from '../reducer'
import thunkMiddleware from 'redux-thunk'
/*
    以前创建store的方式：
    let store = createStore(reducers)
*/
let createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    createLogger(),
)(createStore)
let store = createStoreWithMiddleware(rootReducer)

export default store
