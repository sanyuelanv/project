'use strict'
import React from 'react'
import style from '../css/calculator.css'

class Component extends React.Component{
	render(){
    	return(
            <div className={style.calculator}>
                <div className={style.screen}></div>
                <div className={style.btnArr}>
                    <div className={style.btnArrLine}>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btnLast}></div>
                    </div>
                    <div className={style.btnArrLine}>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btnLast}></div>
                    </div>
                    <div className={style.btnArrLine}>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btnLast}></div>
                    </div>
                    <div className={style.btnArrLine}>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btn}></div>
                        <div className={style.btnLast}></div>
                    </div>
                    <div className={style.btnArrLine}>
                        <div className={style.btnBig}></div>
                        <div className={style.btn}></div>
                        <div className={style.btnLast}></div>
                    </div>
                </div>
            </div>
        )
	}
}

module.exports = Component
