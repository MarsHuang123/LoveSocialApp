/*
*welcome index
*create by mars
*create at 2017-2-6
*/

'use strict';

import { NAME } from './constants'
import reducer from './reducer'
import action from './action'
import WelcomeContainer from './WelcomeContainer'
import DemoView from './DemoView.js'


//to reduce the number of bugs, make sure not to export action types.
//action types are internal only and only actions and reducer should access them

export default {
  NAME,
  reducer,
  action,
  WelcomeContainer,
  DemoView
}