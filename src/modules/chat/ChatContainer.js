/*
* Chat Containner
* create by mars
* create at 2017-2-6
*/

'use strict';

import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';

class ChatContainer extends Component {

_switchView(){
		const { logOn } = this.props.router;
		this.props.routerAction.switchView(!logOn)
	}

  render() {
    return (
      <View>
        <Text style={styles.red}></Text>
        <Text style={styles.bigblue}></Text>
        <Text style={[styles.bigblue, styles.red]}></Text>
        <Text style={[styles.red, styles.bigblue]}>ChatContainer</Text>
        <TouchableOpacity style={styles.leftNav} onPress={this._switchView.bind(this) }>
                            <View style={{alignItems: 'center'}}>
                                <Text style={{alignItems: 'center'}}>go list</Text>
                            </View>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default ChatContainer