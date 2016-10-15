'use strict'
import React from 'react'
import style from '../../css/index.css'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	oninput(e){
		var author = e.target.value
		this.props.authorAction(author)
	}
	render(){
    	return(
            <input
				className={style.workMan}
				onInput = {this.oninput.bind(this)}
				type="text"
				placeholder={this.props.placeholder}
			/>
        )
	}
}

module.exports = Component
