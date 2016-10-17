'use strict'
import React from 'react'

import { Provider,connect } from 'react-redux'
import myRedux  from '../../redux'
import {myStore}  from '../../redux'
import Container  from './Container'

let Content = connect(myRedux.mapStateToProps,myRedux.mapDispatchToProps)(Container)

class App extends React.Component{
    render(){
        return <Provider store={myRedux.myStore}><Content /></Provider>
    }
}

export default App
