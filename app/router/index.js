'use strict'
import 'whatwg-fetch'
import React from 'react'
import Home from './home'
import User from './user'
import {Route,BrowserRouter} from 'react-router-dom'
class Component extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main'>
         <Route exact path="/" component={Home} />
         <Route exact path="/user" component={User}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default Component
