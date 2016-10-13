
import * as types from '../action/types'

let reducer = (state={author:'author'},action)=>{
    switch(action.type){
        case types.AUTHOR:
            return {author:action.author}
            break
        default:
            return state
    }
}
export default reducer