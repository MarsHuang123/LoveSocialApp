/*
*welcome index
*create by mars
*create at 2017-2-6
*/

'use strict';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { welcome,router } from './modules'

const middleware = applyMiddleware(thunk);

export default (data = {}) => {
  const rootReducer = combineReducers({
    //every modules reducer should be define here
    [welcome.NAME]: welcome.reducer,
    [router.NAME]: router.reducer
    
  })

  return createStore(rootReducer, data, middleware)
}