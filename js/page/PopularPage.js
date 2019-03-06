import {createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";

type Props = {};
export default class PopularPage extends Component<Props> {
    constructor(props){
        super(props);
        this.tabNames = ['Java','Android','React','Django','IOS','PHP'];
    }

    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item,index)=>{
            tabs[`tab${index}`] = {
                screen: PopularPageTab,
                navigationOptions:{
                    title:item,
                },
            }
        })
        return tabs;
    }

    _tabNavigator(){
        return createAppContainer(
            createMaterialTopTabNavigator(this._genTabs(),{
                initialRouteName:'tab1',
                tabBarOptions :{
                    tabStyle :styles.tabStyle,
                    upperCaseLabel:false,
                    scrollEnabled:true,
                    style:{
                        backgroundColor: '#678',
                    },
                    indicatorStyle:styles.indicatorStyle,
                    labelStyle:styles.labelStyle,
                },
            })
        )
    }

    render() {
        const Tab = this._tabNavigator();
        return <Tab/>;
    }
}

class PopularPageTab extends Component<Props>{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>this is a tab!</Text>
                <Text onPress={()=>{
                    NavigationUtil.GoPage(this.props,'Detail');
                }}>查看详情</Text>
            </View>
        );
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
    tabStyle:{
        // minWidth:50,
    },
    indicatorStyle:{
        height:2,
        backgroundColor:'white',
    },
    labelStyle:{
        fontSize:13,
        marginTop:6,
        marginBottom:6,
    },
});
