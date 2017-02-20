/* 
* @Author: Marte
* @Date:   2017-02-20 16:16:38
* @Last Modified by:   Marte
* @Last Modified time: 2017-02-20 17:25:29
*/

import React from 'react';
import {
    View, 
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import SecondPage from './SecondPage';

export default class FirstPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        if (navigator) {
            navigator.push({
                name: 'SecondPage',
                component: SecondPage
            });
        }
    }
    render() {
        return (
            <View>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>Click me to jump</Text>
                </TouchableOpacity>
            </View>
        );
    }
}