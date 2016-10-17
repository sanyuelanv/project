//处理数字增加的reducer
import * as types from '../action/types'

let reducer = (state={count:0},action)=>{
    let count = state.count
    switch(action.type){
        case types.INCREASE:
            //注意这里使用的action.num，明白是从哪里来的吗？
            return {count:count+action.num}
            break
        default:
            return state
    }
}
export default reducer
