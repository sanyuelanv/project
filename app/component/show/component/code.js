'use strict'
import React from 'react'
import style from '../../css/index.css'
import Highlight from 'react-highlight'

class Component extends React.Component{
    constructor(props){
        super(props)
    }
	render(){
    	return(
            <Highlight className={this.props.language}>
                {this.props.literal}
            </Highlight>
        )
	}
}

module.exports = Component
