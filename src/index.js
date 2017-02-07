/*
*welcome index
*create by mars
*create at 2017-2-6
*/

'use strict';

import React from 'react'
import { Component, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import modules from './modules'
import DemoView from './modules/welcome/DemoView.js'
import WelcomeContatiner from './modules/welcome/WelcomeContainer.js'

import createStore from './createStore'

const store = createStore()


const Main = () => {
  return (
    <Provider store={store}>
      <WelcomeContatiner />
    </Provider>
  )
}

export default Main

