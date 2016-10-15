'use strict'
import React from 'react'
import style from '../../css/index.css'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	oninput(e){
		var title = e.target.value
		this.props.titleAction(title)
	}
	render(){
    	return(
            <input
				className={style.workTitle}
				type="text"
				onInput = {this.oninput.bind(this)}
				placeholder={this.props.placeholder}
			/>
        )
	}
}

module.exports = Component
