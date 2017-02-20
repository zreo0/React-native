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

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { showText: true };

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 500);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    let sty = this.props.sty == undefined || this.props.sty == ''? 'defaultSty' : this.props.sty;
    return (
      <Text style={styles[sty]}>{display}</Text>
    );
  }
}

export default class Demo extends Component {
  render() {
    return (
      <View>
        <Blink text='Hello blink!' sty='bigblue'/>
        <Blink text='Wow   blink!' />
        <Blink text='Text!!!!!!!!' />
        <Blink text='Look at me111222!!' sty='red'/>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  bigblue: {
    color: 'lightblue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  red: {
    fontSize: 15,
    color: 'red',
  },
  defaultSty: {
    color: 'yellow',
  },
});

AppRegistry.registerComponent('Demo', () => Demo);
