'use strict'
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Component from './component/component'

let main = function(){
	render(<Component />,document.getElementById('main'))
}
window.onload = function(){
	main()
}
