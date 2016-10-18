'use strict'
import React from 'react'

import { bindActionCreators } from 'redux'
import { Provider,connect } from 'react-redux'

import Redux  from '../../redux'
import Container  from './Container'


let mapStateToProps = (state) =>{
    return {
        increase:state.Increase
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        action:bindActionCreators(Redux.actions,dispatch)
    }
}

let Content = connect(mapStateToProps,mapDispatchToProps)(Container)

class App extends React.Component{
    render(){
        return <Provider store={Redux.store}><Content /></Provider>
    }
}

export default App
