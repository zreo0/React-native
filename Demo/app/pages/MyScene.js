/* 
* @Author: Marte
* @Date:   2017-02-20 16:16:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-20 16:32:07
*/

import React, {Component, PropTypes} from 'react';
import {
    View, 
    Text,
    TouchableHighlight
} from 'react-native';

export default class MyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired
    };
    render() {
        return (
            <View>
                <Text>Current Scene: {this.props.title}</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                    <Text>Click me to next secne</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                    <Text>Click me to back</Text>
                </TouchableHighlight>
            </View>
        );
    }
}