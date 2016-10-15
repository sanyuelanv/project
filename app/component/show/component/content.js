'use strict'
import React from 'react'
import style from '../../css/index.css'
import Markdown from 'react-markdown'
import assign from 'lodash.assign'
import Code from './code'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className='show_content'>
                <Markdown
                    source={this.props.content}
                    renderers = {assign({},Markdown.renderers,{CodeBlock: Code})}
                />
            </div>
        )
	}
}

module.exports = Component
