import {createBottomTabNavigator,createAppContainer} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import NavigationUtil from "../navigator/NavigationUtil";

type Props = {};
export default class HomePage extends Component<Props> {

    _tabNavigator(){
        return createAppContainer(createBottomTabNavigator({
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
        }))
    }

    render() {
        NavigationUtil.navigation = this.props.navigation;
        const Tab = this._tabNavigator();
        return <Tab/>;
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
