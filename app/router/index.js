'use strict'
import React from 'react'
import Home from './home'
import User from './user'
import { Router, Route, Link , browserHistory } from 'react-router'


class Component extends React.Component{
	render(){
    	return(
            <Router history={browserHistory}>
                 <Route path="/" component={Home} />
                 <Route path="/user" component={User}></Route>
            </Router>
        )
	}
}

export default Component
