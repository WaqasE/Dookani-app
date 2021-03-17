import React from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight, Dimensions, Text, FlatList, TouchableWithoutFeedback, StatusBar } from 'react-native';
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const keywords = [
    {
        id: 1,
        keyword: 'polo'
    },
    {
        id: 2,
        keyword: 'denim'
    },
    {
        id: 3,
        keyword: 'zara men'
    },
    {
        id: 4,
        keyword: 'nike'
    },
    {
        id: 5,
        keyword: 'addidas'
    }
]

const { width, height } = Dimensions.get('screen');

export default function SearchProducts({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar hidden/>
            <View style={styles.searchHeader}>
                <TouchableHighlight underlayColor={colors.inActive} style={styles.backButton} onPress={() => { navigation.goBack() }}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={25} color="black" />
                </TouchableHighlight>
                <TextInput
                    style={styles.textInput}
                    placeholder='Search Brand, Product or Category'
                    keyboardType='default'
                />
            </View>
            <Text style={{ margin: 15, fontSize: 17 }}>Popular Searches</Text>
            <View style={styles.keywordsWrapper}>
                <FlatList
                    data={keywords}
                    style={{ marginHorizontal: 10 }}
                    keyExtractor={item => item.id.toString()}
                    horizontal
                    ItemSeparatorComponent={() => (<View style={{ width: 10, height: '100%' }} />)}
                    showsHorizontalScrollIndicator={false}
                    renderItem={
                        ({ item }) => {
                            return (
                                <TouchableWithoutFeedback>
                                    <View style={styles.keyword}>
                                        <MaterialCommunityIcons name="magnify" size={15} color='grey' />
                                        <Text style={{ marginLeft: 5 }}>{item.keyword}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.inActive,
    },
    searchHeader: {
        width: '100%',
        backgroundColor: colors.primary,
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        elevation: 5,
        paddingTop: 30,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: width - 70,
        height: 60,
        backgroundColor: colors.primary,
    },
    keywordsWrapper: {
        height: 80,
        width: '100%'
    },
    keyword: {
        paddingHorizontal: 10,
        backgroundColor: colors.primary,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        elevation: 3,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});