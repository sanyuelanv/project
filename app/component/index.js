'use strict'
import React from 'react'
import style from './css/index.css'
import Work from './work'

class Component extends React.Component{
	constructor(props){
        super(props)
    }
	render(){
    	return(
            <div className={style.edit}>
				<Work {...this.props} />
                <div className={style.show}>
                    <div className='markdown'>
                        <h1 className='title'>标题</h1>
                        <div className='titleDesc'>author: author</div>
                        <div className='show_content'></div>
                    </div>
                </div>
            </div>
        )
	}
}

module.exports = Component
