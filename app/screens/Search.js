import React, { useContext } from 'react';
import { StyleSheet, TextInput, View, StatusBar} from 'react-native';
import Header from '../components/Header';
import Tabs from '../components/Tabs';
import colors from '../config/colors';

import SearchCategory from '../context/SearchCategory'

export default function Search({ navigation }) {

    const { searchCat, setSearchCat } = useContext(SearchCategory);

    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Header navigation={navigation} bg='primary' shadow={true} />
            <Tabs searchCat={searchCat} setSearchCat={setSearchCat} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.primary
    }
});