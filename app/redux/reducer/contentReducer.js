
import * as types from '../action/types'

let reducer = (state={content:''},action)=>{
    switch(action.type){
        case types.CONTENT:
            return {content:action.content}
            break
        default:
            return state
    }
}
export default reducer
