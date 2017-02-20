/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import MyScene from './app/pages/MyScene';

export default class Demo extends Component {
  render() {
    return (
      <Navigator 
        initialRoute={{title: 'My Initial Scene', index: 0}}
        renderScene={(route, navigator) => 
          <MyScene 
            title={route.title}
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex
              });
            }}

            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

AppRegistry.registerComponent('Demo', () => Demo);
