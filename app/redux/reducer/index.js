//合并两个reducer
import { combineReducers } from 'redux'
import Increase from './increaseReducer'
import Ajax from './ajaxReducer'

const rootReducer = combineReducers({
    Increase,
    Ajax
})

export default rootReducer
