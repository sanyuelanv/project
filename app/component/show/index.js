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
            <div className={style.show}>
                <div className='markdown'>
                    <Title  {...this.props} />
                    <Author {...this.props} />
                    <Content {...this.props} />
                </div>
            </div>
        )
	}
}

module.exports = Component
