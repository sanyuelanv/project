'use strict'
import React from 'react'
import style from '../css/index.css'
import Title from './title.js'
import Author from './author.js'
import Content from './content.js'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className={style.show}>
                <div className='markdown'>
                    <Title  {...this.props.Title} />
                    <Author {...this.props.Author} />
                    <Content {...this.props.Content} />
                </div>
            </div>
        )
	}
}

module.exports = Component
