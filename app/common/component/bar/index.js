'use strict'
import React from 'react'
import style from './css.css'
import { Link } from 'react-router'

class Component extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
    	return(
            <div className={style.nav}>
                <Link to='/' className={this.props.route == 'home'?style.navBtnActive:style.navBtnUnActive}>首页</Link>
				<Link to='/user' className={this.props.route == 'user'?style.navBtnActive:style.navBtnUnActive}>用户</Link>
            </div>
        )
	}
}

export default Component
