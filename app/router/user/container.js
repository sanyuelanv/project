'use strict'
import React from 'react'

import commonStyle from '../../common/css/css.css'
import style from './css.css'

import Bar from '../../common/component/bar'

class Component extends React.Component{
	constructor(props){
		super(props)
	}
	componentWillMount(){}
	_addHandle(){
		let {AjaxFunc} = this.props.action
		AjaxFunc()
	}
	render(){
    	return(
			<div className ={commonStyle.container}>
				<div
					className={commonStyle.content}
					onClick={()=>{this._addHandle(1)}}
				>
					{this.props.ajax.data}
				</div>
				<Bar route = {'user'}></Bar>
			</div>
		)
	}
}


export default Component
