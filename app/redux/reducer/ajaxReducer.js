import * as types from '../action/types'

let reducer = (state = {
    data: 0
}, action) => {
    let count = state.count
    switch (action.type) {
        case types.AJAX_START:
            return {
                data: action.data
            }
            break
        case types.AJAX_ERROR:
            return {
                data: action.data
            }
            break
        case types.AJAX_SUCCESS:
            return {
                data: action.data
            }
            break
        default:
            return state
    }
}
export default reducer
