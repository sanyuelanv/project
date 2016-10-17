//合并两个reducer
import { combineReducers } from 'redux'
import Increase from './increaseReducer'
import Theme from './themeReducer'

const rootReducer = combineReducers({
    Increase,
    Theme
})

export default rootReducer
