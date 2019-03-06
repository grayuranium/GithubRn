import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import DynamicTabNavigator from "../navigator/DynamicTabNavigator";

type Props = {};
export default class HomePage extends Component<Props> {

    render() {
        return <DynamicTabNavigator/>;
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
