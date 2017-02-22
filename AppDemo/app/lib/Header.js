import React , { Component } from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Platform
} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image 
                    source={require('../image/header/header_logo.png')} 
                    style={styles.logo} />
                <View style={styles.searchBox}>
                    <Image 
                        source={require('../image/header/icon_search.png')} 
                        style={styles.searchIcon} />
                    <TextInput 
                        keyboardType='web-search' 
                        placeholder='搜索京东商品/店铺' 
                        style={styles.inputText} />
                    <Image 
                        source={require('../image/header/icon_voice.png')} 
                        style={styles.voiceIcon} />
                </View>
                <Image 
                    source={require('../image/header/icon_qr.png')} 
                    style={styles.scanIcon} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20: 0,
        height: Platform.OS === 'ios' ? 68 : 48,
        backgroundColor: '#d74047',
        alignItems: 'center'
    },
    logo: {
        height: 24,
        width: 64,
        resizeMode: 'stretch'   // 设置拉伸模式
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 5,    // 设置圆角边
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    scanIcon: {
        height: 26.7,
        width: 26.7,
        resizeMode: 'stretch'
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    voiceIcon: {
        marginLeft: 5,
        marginRight: 8,
        width: 15,
        height: 20,
        resizeMode: 'stretch'
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    }
});
