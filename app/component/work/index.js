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
            <div className={style.work}>
                <Title {...this.props} placeholder='标题'/>
                <Author {...this.props} placeholder='作者'/>
                <Content />
            </div>
        )
	}
}

module.exports = Component
