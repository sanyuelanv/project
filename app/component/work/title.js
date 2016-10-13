'use strict'
import React from 'react'
import style from '../css/index.css'

class Component extends React.Component{
	render(){
    	return(
            <input className={style.workTitle} type="text" placeholder="标题" />
        )
	}
}

module.exports = Component
