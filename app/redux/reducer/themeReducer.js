import * as types from '../action/types'

const writeColor = '#ffffff'
const grayColor = '#cccccc'
let reducer = (state={color:writeColor},action)=>{
    let count = state.count
    switch(action.type){
        case types.THEME:
            if(state.color == writeColor){
              return {color:grayColor}
            }
            else {
              return {color:writeColor}
            }
            break
        default:
            return state
    }
}
export default reducer
