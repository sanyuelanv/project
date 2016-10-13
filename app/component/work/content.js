'use strict'
import React from 'react'
import style from '../css/index.css'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	oninput(e){
		var content = e.target.value
		this.props.contentAction(content)
	}
	render(){
    	return(
            <textarea
				className={style.workMain}
				id='input_content'
				onInput = {this.oninput.bind(this)}
			>
			</textarea>
        )
	}
}

module.exports = Component
