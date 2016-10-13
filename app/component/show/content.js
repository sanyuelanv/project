'use strict'
import React from 'react'
import style from '../css/index.css'
import Markdown from 'react-markdown'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className='show_content'>
                <Markdown source={this.props.content} />
            </div>
        )
	}
}

module.exports = Component
