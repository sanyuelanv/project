'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'

import * as actions from './action'
import store from './store'
let {Component} = React

let mapStateToProps = (state) =>{
    return {
        state:state
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        action:bindActionCreators(actions,dispatch)
    }
}

let Content = {
    mapStateToProps:mapStateToProps,
    mapDispatchToProps:mapDispatchToProps,
    myStore:store
}



export default Content
