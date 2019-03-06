import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BottomTabBar} from 'react-navigation-tabs';
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import NavigationUtil from "./NavigationUtil";

const Tabs = {
    PopularPage:{
        screen:PopularPage,
        navigationOptions: {
            tabBarLabel:'最热',
            tabBarIcon:(tintColor,focused)=>(
                <MaterialIcons name={'whatshot'} size={26} style={{color:tintColor}}/>
            )
        }
    },
    TrendingPage:{
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel:'趋势',
            tabBarIcon:(tintColor,focused)=>(
                <MaterialIcons name={'trending-up'} size={26} style={{color:tintColor}}/>
            )
        }
    },
    FavoritePage:{
        screen:FavoritePage,
        navigationOptions: {
            tabBarLabel:'收藏',
            tabBarIcon:(tintColor,focused)=>(
                <MaterialIcons name={'favorite'} size={26} style={{color:tintColor}}/>
            )
        }
    },
    MyPage:{
        screen:MyPage,
        navigationOptions: {
            tabBarLabel:'我的',
            tabBarIcon:(tintColor,focused)=>(
                <MaterialIcons name={'people'} size={26} style={{color:tintColor}}/>
            )
        }
    },
};

type Props = {};
export default class DynamicTabNavigator extends Component<Props> {
    constructor(props){
        super(props);
        //关闭警告
        console.disableYellowBox = true;
    }
    
    _tabNavigator(){
        const {PopularPage,TrendingPage,FavoritePage} = Tabs;
        const selectedTabs = {PopularPage,TrendingPage,FavoritePage};
        PopularPage.navigationOptions.tabBarLabel = '最新';
        return createAppContainer(createBottomTabNavigator(selectedTabs,{
            tabBarComponent:MyTabBarComponet,
        }))
    }

    render() {
        NavigationUtil.navigation = this.props.navigation;
        const Tab = this._tabNavigator();
        return <Tab/>;
    }
}


class MyTabBarComponet extends Component<Props>{
    constructor(props){
        super(props);
        //关闭警告
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime:new Date().getTime(),
        }
    }

    render() {
        const {routes,index} = this.props.navigation.state;
        if (routes[index].params){
            const {theme} = routes[index].params;
            //保证最新的修改生效
            if (theme && theme.updateTime>this.theme.updateTime){
                this.theme = theme;
            }
        }
        return <BottomTabBar {...this.props} activeTintColor={this.theme.tintColor||this.props.activeTintColor}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
