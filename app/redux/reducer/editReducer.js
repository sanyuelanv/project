import * as types from '../action/types'

let reducer = (state = {
    title: '标题',
    author: '作者',
    content:'',
}, action) => {
    switch (action.type) {
        case types.TITLE:
            return {
                title: action.title,
                author: state.author,
                content:state.content,
            }
            break
        case types.AUTHOR:
            return {
                title: state.title,
                author: action.author,
                content:state.content,
            }
            break
        case types.CONTENT:
            return {
                title: state.title,
                author: state.author,
                content:action.content,
            }
            break
        default:
            return state
    }
}
export default reducer
