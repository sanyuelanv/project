'use strict'
import React from 'react'
import style from '../css/index.css'
import Title from './component/title.js'
import Author from './component/author.js'
import Content from './component/content.js'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className={style.work}>
                <Title {...this.props} placeholder='标题'/>
                <Author {...this.props} placeholder='作者'/>
                <Content {...this.props} />
            </div>
        )
	}
}

module.exports = Component
