import { combineReducers } from 'redux'
import Title from './titleReducer'
import Author from './authorReducer'
import Content from './contentReducer'

const rootReducer = combineReducers({
    Title,
    Author,
    Content
})

export default rootReducer
