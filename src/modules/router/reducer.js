/*
* router reducer
* create by mars
* create at 2017-2-6
*/

'use strict';


import { combineReducers } from 'redux'

import * as ActionTypes from './constants';

const initialState = {
    logOn: false
};

export default function reducer(state = initialState, action) {
    
    switch (action.type) {
        
        case ActionTypes.SWITCH:
            
            return {logOn: action.value};
        default:
            return state
    }
}