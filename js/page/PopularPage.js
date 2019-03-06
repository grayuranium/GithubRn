import {createAppContainer,createMaterialTopTabNavigator} from 'react-navigation';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../navigator/NavigationUtil";

type Props = {};
export default class PopularPage extends Component<Props> {
    _tabNavigator(){
        return createAppContainer(
            createMaterialTopTabNavigator({
                Page1:{
                    screen:PopularPageTab,
                    navigationOptions:{
                        title:'Page1'
                    },
                },
                Page2:{
                    screen:PopularPageTab,
                    navigationOptions:{
                        title:'Page2'
                    },
                },
                Page3:{
                    screen:PopularPageTab,
                    navigationOptions:{
                        title:'Page3'
                    },
                }
            },{
                initialRouteName:'Page1'
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
                <Text style={styles.welcome}>子选项卡</Text>
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
});
