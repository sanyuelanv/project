'use strict'
import React from 'react'
import style from './css/index.css'
import Work from './work'
import Show from './show'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className={style.edit}>
				<Work
				{...this.props.action} content = {this.props.store.edit.content} />
                <Show {...this.props.store.edit} />
            </div>
        )
	}
}

module.exports = Component
