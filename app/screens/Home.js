import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

import colors from '../config/colors';
import Header from '../components/Header';
import TopNav from '../navigation/TopNav'

export default function Home({ navigation }) {
    return (
        <>
            <StatusBar hidden/>
            <Header navigation={navigation} />
            <TopNav />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary
    }
});