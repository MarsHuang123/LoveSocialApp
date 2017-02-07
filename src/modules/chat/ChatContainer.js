/*
*welcome index
*create by mars
*create at 2017-2-6
*/

'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

class ChatContainer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}></Text>
        <Text style={styles.bigblue}></Text>
        <Text style={[styles.bigblue, styles.red]}></Text>
        <Text style={[styles.red, styles.bigblue]}>ChatContainer</Text>
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