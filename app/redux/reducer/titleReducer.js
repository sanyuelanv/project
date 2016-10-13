
import * as types from '../action/types'

let reducer = (state={title:'标题'},action)=>{
    switch(action.type){
        case types.TITLE:
            return {title:action.title}
            break
        default:
            return state
    }
}
export default reducer
