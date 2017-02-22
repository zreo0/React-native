import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    ToolbarAndroid,
    Text,
    StyleSheet,
    Image
} from 'react-native';

import Header from '../lib/Header';
import Home from '../ui/Home';
import TabNavigator from 'react-native-tab-navigator';

const BANNER_IMGS = [  
    require('../image/banner/1.jpg'),  
    require('../image/banner/2.jpg'),  
    require('../image/banner/3.jpg'),  
    require('../image/banner/4.jpg')  
];

const HOME = 'home';
const HOME_NORMAL = require('../image/tabs/home_normal.png');
const HOME_FOCUS = require('../image/tabs/home_focus.png');
const CATEGORY = 'category';
const CATEGORY_NORMAL = require('../image/tabs/category_normal.png');
const CATEGORY_FOCUS = require('../image/tabs/category_focus.png');
const FAXIAN = 'faxian';
const FAXIAN_NORMAL = require('../image/tabs/faxian_normal.png');
const FAXIAN_FOCUS = require('../image/tabs/faxian_focus.png');
const CART = 'cart';
const CART_NORMAL = require('../image/tabs/cart_normal.png');
const CART_FOCUS = require('../image/tabs/cart_focus.png');
const PERSONAL = 'personal';
const PERSONAL_NORMAL = require('../image/tabs/personal_normal.png');
const PERSONAL_FOCUS = require('../image/tabs/personal_focus.png');

export default class LoginSuccess extends React.Component {
    constructor(props){
        super(props);
        

        this.state = {selectedTab: HOME};

    }
    // 回到第一个页面
    onJump(){
        const { navigator } = this.props;
        if (navigator) {
            navigator.pop();
        }
    }


    // tabbarItem渲染函数
    _renderTabItem(img, selectedImg, tag, childView) {
        return (
            <TabNavigator.Item 
               selected={this.state.selectedTab === tag} 
               renderIcon={() => <Image style={styles.tabIcon} source={img} />} 
               renderSelectedIcon={() => <Image style={styles.tabIcon} source={selectedImg} />} 
               onPress={() => this.setState({selectedTab: tag})} >
               {childView}
            </TabNavigator.Item>
        );
    }
    _createChildView(tag) {
        return (
            <View style={{flex:1, backgroundColor:'#00baff', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:22}}>{tag}</Text>
            </View>
        );
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <Header />
                <Text>233</Text>

                <TabNavigator hidesTabTouch={true} tabBarStyle={styles.tab}>
                    {this._renderTabItem(HOME_NORMAL, HOME_FOCUS, HOME, <Home />)} 
                    {this._renderTabItem(CATEGORY_NORMAL, CATEGORY_FOCUS, CATEGORY, this._createChildView(CATEGORY))} 
                    {this._renderTabItem(CART_NORMAL, CART_FOCUS, CART, this._createChildView(CART))} 
                    {this._renderTabItem(FAXIAN_NORMAL, FAXIAN_FOCUS, FAXIAN, this._createChildView(FAXIAN))} 
                    {this._renderTabItem(PERSONAL_NORMAL, PERSONAL_FOCUS, PERSONAL, this._createChildView(PERSONAL))}

                </TabNavigator>
            </View>

        );
    }
    // <TouchableOpacity onPress = {this.onJump.bind(this)}>
    //     <Text>返回登录页面 </Text>
    // </TouchableOpacity>
}

const styles = StyleSheet.create({
    tab: {
        height: 52,
        backgroundColor: '#333333',
        alignItems: 'center'
    },
    tabIcon: {
        width: 30,
        height: 35,
        resizeMode: 'stretch',
        marginBottom: -7.5
    },
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    }
});