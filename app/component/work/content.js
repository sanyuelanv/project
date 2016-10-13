'use strict'
import React from 'react'
import style from '../css/index.css'

class Component extends React.Component{
	render(){
    	return(
            <textarea className={style.workMain} placeholder="正文" id='input_content'></textarea>
        )
	}
}

module.exports = Component
