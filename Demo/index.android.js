/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  View,
  TouchableOpacity
} from 'react-native';

import FirstPage from './app/pages/FirstPage';

export default class Demo extends Component {
  render() {
    let defaultName = 'FirstPage';
    let defaultComponent = FirstPage;
    return (
      <Navigator
        initialRoute={{name: defaultName, component: defaultComponent}}
        configureScene={(route) => {
          return Navigator.SceneConfigs.VerticalDownSwipeJump;
        }}
        renderScene={(route, navigator) => {
          let Component = route.component;
          return <Component {...route.params} navigator={navigator}/>
        }} />
    );
  }
}

AppRegistry.registerComponent('Demo', () => Demo);
