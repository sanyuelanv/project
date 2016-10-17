'use strict'
import React from 'react'
import style from '../../css/index.css'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	oninput(e){
		var content = e.target.value
		this.props.contentAction(content)
	}
	tabEvent(){
		var content = this.props.content
		console.log(content.length)
		content += '    '
		console.log(content.length)
		this.props.contentAction(content)
	}
	keyEvent(e){
		// console.log(e.keyCode);
		if ((e.metaKey || e.ctrlKey) && e.keyCode == 83) {
            // console.log('保存')
            if (window.event) {e.returnValue = false}
			else {e.preventDefault()}
        }
		else if ((e.metaKey || e.ctrlKey) && e.keyCode == 82) {
            // console.log('阻止刷新')
            if (window.event) {e.returnValue = false}
			else {e.preventDefault()}
        }
		else if (e.keyCode == 9) {
            console.log('阻止tab')
			// this.tabEvent()
            if (window.event) {e.returnValue = false}
			else {e.preventDefault()}
        }

	}
	focus(e){
		document.addEventListener('keydown',this.keyEvent.bind(this))
	}
	blur(e){
		document.removeEventListener('keydown',this.keyEvent.bind(this))
	}
	render(){
    	return(
            <textarea
				className={style.workMain}
				id='input_content'
				onInput = {this.oninput.bind(this)}
				onFocus = {this.focus.bind(this)}
				onBlur = {this.blur.bind(this)}
				value = {this.props.content}
			>
			</textarea>
        )
	}
}

module.exports = Component
