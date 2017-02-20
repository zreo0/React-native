/* 
* @Author: Marte
* @Date:   2017-02-20 16:16:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-20 17:25:34
*/

import React, {Component, PropTypes} from 'react';
import {
    View, 
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import FirstPage from './FirstPage';

export default class SecondPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>Click me to back</Text>
                </TouchableOpacity>
            </View>
        );
    }
}