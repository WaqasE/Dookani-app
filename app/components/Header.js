import React from 'react';
import { StyleSheet, View, Dimensions, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const { width, height } = Dimensions.get('screen')

export default function Header({ navigation, bg, shadow }) {
    return (
        <TouchableWithoutFeedback onPress={() => { navigation.navigate('SearchProducts') }}>
            <View style={[styles.container, { backgroundColor: bg?colors[bg]:colors.inActive, elevation:shadow?5:0 }]}>
                <View style={styles.search}>
                    <MaterialCommunityIcons name="magnify" size={24} color="black" />
                    <Text style={{ marginLeft: 5, color: 'grey' }}>Search Brand, Product or Category</Text>
                </View>
                <TouchableOpacity style={styles.notify}>
                    <MaterialCommunityIcons name="bell" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height: 100,
        paddingTop: 30,
        backgroundColor: colors.inActive,
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    search: {
        width: '80%',
        backgroundColor: colors.primary,
        height: 50,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    notify: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
});