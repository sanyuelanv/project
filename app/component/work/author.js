'use strict'
import React from 'react'
import style from '../css/index.css'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	render(){
    	return(
            <input className={style.workMan} type="text" placeholder={this.props.placeholder} />
        )
	}
}

module.exports = Component
