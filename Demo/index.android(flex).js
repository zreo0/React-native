/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Demo extends Component {
  render() {
    return (
      <View style={{
        flex: 1, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}}></View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}></View>
      </View>
    );
  }

}

AppRegistry.registerComponent('Demo', () => Demo);
