/*
* welcome index
* create by mars
* create at 2017-2-6
*/

'use strict';

import React from 'react'
import { Component, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import modules from './modules'
import WelcomeContatiner from './modules/welcome/WelcomeContainer.js'
import RouterContainer from './modules/router/RouterContainer'

import createStore from './createStore'

const store = createStore()


const Main = () => {
  return (
    <Provider store={store}>
      <RouterContainer />
    </Provider>
  )
}

export default Main

