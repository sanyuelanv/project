'use strict'

import React from 'react'
//注意这里引入：bindActionCreators
import { bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'

import Index from '../component/index'

import * as actions from './action/creator'
import store from './store/store'

let {Component} = React

let mapStateToProps = (state) =>{
    return {
        reduxState:{
            Title:state.Title,
            Author:state.Author,
            Content:state.Content,
        }
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        reduxActions:bindActionCreators(actions,dispatch)
    }
}
let Content = connect(mapStateToProps,mapDispatchToProps)(Index)



class App extends Component{
    render(){
        return <Provider store={store}><Content /></Provider>
    }
}

export default App
