'use strict'
import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import Component from './component'

let main = function(){
	render(<Component />,document.getElementById('main'))
}
window.load = function(){
	main()
}
