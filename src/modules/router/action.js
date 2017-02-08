/*
* router action
* create by mars
* create at 2017-2-6
*/

'use strict';


import * as ActionTypes from './constants'
import Storage from '../../common/Storage.js'


export function switchView(argument) {

   
	return {
		type: ActionTypes.SWITCH,
		value: argument
	}
}