/*
* Router Container
* create by mars
* create at 2017-2-6
*/

'use strict';

import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native'
import * as routerActions from './action'
import WelcomeContatiner from '../welcome/WelcomeContainer.js'

import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

import DiaryContainer from '../diary/DiaryContainer'
import ChatContainer from '../chat/ChatContainer'

import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/Ionicons'


class RouterContainer extends Component {
  constructor(props) {
        super(props);

        this.state = {
            selectedTab: 'diary'
        };
    }
  render() {
  const { logOn } = this.props.router;
    return (
      <View style={{backgroundColor: 'blue', flex: 0.3}}>
            {
                !logOn
                ?
                <WelcomeContatiner { ...this.props } />
                :
                (<TabNavigator tabBarStyle={{ backgroundColor:'white' }} style={{backgroundColor: 'white'}}>
                <TabNavigator.Item
                    title="Diary"
                    selected={this.state.selectedTab === 'diary'}
                    renderIcon={() => <Icon name={ 'ios-home' } size={30} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-home' } size={30} color={'#4E78E7'}/>}
                    onPress={() => this.setState({ selectedTab: 'diary' })}>
                    <DiaryContainer {...this.props} />
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="Chat"
                    selected={this.state.selectedTab === 'chat'}
                    renderIcon={() => <Icon name={ 'ios-more' } size={30} color={'gray'}/>}
                    renderSelectedIcon={() => <Icon name={ 'ios-more' } size={30} color={'#4E78E7'}/>}
                    onPress={() => this.setState({ selectedTab: 'chat' })}>
                    <ChatContainer {...this.props} />
                </TabNavigator.Item>
                
            </TabNavigator>)
                
	        }
       </View>
    );
  }
}



function mapStateToProps(state) {
	
	return state;
}


export default connect(mapStateToProps,
  (dispatch) => ({
		routerAction: bindActionCreators(routerActions, dispatch)
  }))(RouterContainer);