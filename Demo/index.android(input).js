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
  TextInput,
  View
} from 'react-native';

export default class Demo extends Component {
  constructor(props) {
      super(props);
      this.state = {text: ''};
  }

  render() {
    return (
      <View style={{
        padding: 10
      }}>
        <TextInput 
          style={{height: 40}} 
          placeholder="Type Here to translate!" 
          onChangeText={(text) => this.setState({text})}>
        </TextInput>
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }

}

AppRegistry.registerComponent('Demo', () => Demo);
