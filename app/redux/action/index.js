import * as types from './types'

export let increaseAction = (num = 1) => {
    return {
        type: types.INCREASE,
        num
    }
}

// ajax
let ajaxData_start = (data) => {
    return {
        type: types.AJAX_START,
        data: data,
    }
}
let ajaxData_success = (data) => {
    return {
        type: types.AJAX_SUCCESS,
        data: data,
    }
}
let ajaxData_error = (data) => {
    console.log(data);
    return {
        type: types.AJAX_ERROR,
        data: "请求出错"
    }
}
let _ajaxData = () => {
    return dispatch => {
        let fetchURL = 'http://127.0.0.1:3000/'
        dispatch(ajaxData_start('获取数据'))
        return fetch(fetchURL, {
                method: 'get'
            })
            .then(res => res.json())
            .then(res => {
                let {
                    test
                } = res
                dispatch(ajaxData_success(test))
            })
            .catch((err) => dispatch(ajaxData_error(err)))
    }
}

export let AjaxFunc = () => {
    return dispatch => {
        return dispatch(_ajaxData())
    }
}
