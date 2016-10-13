'use strict'
import React from 'react'
import style from '../css/index.css'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className='titleDesc'>author: {this.props.author}</div>
        )
	}
}

module.exports = Component
