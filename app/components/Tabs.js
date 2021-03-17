import React from 'react';
import { StyleSheet, View, Dimensions, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import colors from '../config/colors';
const { width, height } = Dimensions.get('screen')
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
    {
        id: 1,
        name: 'account-star',
        detail: 'For You'
    },
    {
        id: 2,
        name: 'human-female',
        detail: 'Women'
    },
    {
        id: 3,
        name: 'human-male',
        detail: 'Men'
    },
    {
        id: 4,
        name: 'home-city',
        detail: 'Home'
    },
    {
        id: 5,
        name: 'brush',
        detail: 'Cosmetics'
    },
    {
        id: 6,
        name: 'cellphone-android',
        detail: 'Electronics'
    },
    {
        id: 7,
        name: 'watch-variant',
        detail: 'Accesories'
    },
    {
        id: 8,
        name: 'shoe-heel',
        detail: 'Shoes & Bags'
    },
    {
        id: 9,
        name: 'cart',
        detail: 'Supermarket'
    },
    {
        id: 10,
        name: 'sofa',
        detail: 'furniture'
    },

]

export default function Tabs({ searchCat, setSearchCat }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => { setSearchCat(item.detail) }}>
                                <View style={[styles.category, { backgroundColor: item.detail === searchCat ? colors.primary : colors.inActive, borderBottomWidth: index === categories.length - 1 ? 0 : 0.25 }]}>
                                    <MaterialCommunityIcons name={item.name} size={25} color={item.detail === searchCat ? colors.secondary : 'rgba(0,0,0,0.5)'} />
                                    <Text style={[styles.detail, { color: item.detail === searchCat ? colors.secondary : 'rgba(0,0,0,0.5)' }]}>{item.detail}</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: height - 160,
        backgroundColor: colors.inActive
    },
    category: {
        width: '100%',
        height: 70,
        borderColor: 'grey',
        borderRightWidth: 0.25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detail: {
        fontSize: 12
    }
});