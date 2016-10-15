'use strict'
import React from 'react'
import style from '../../css/index.css'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <h1 className='title'>{this.props.title}</h1>
        )
	}
}

module.exports = Component
