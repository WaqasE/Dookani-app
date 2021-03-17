import React from 'react';
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
import SimpleHeader from '../components/SimpleHeader'
import colors from '../config/colors';

export default function Cart({ navigation }) {
    return (
        <>
            <StatusBar hidden />
            <SimpleHeader navigation={navigation} bg='primary' title='Cart' shadow={true} />
            <View style={styles.container}>
                <View style={styles.circle}>
                    <MaterialCommunityIcons name="cart-minus" size={width / 5} color={colors.secondary} />
                </View>
                <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 10, color: 'rgba(0,0,0,0.7)' }}>My Cart</Text>
                <Text style={{ color: 'grey', textAlign: 'center', width: '85%' }}>You have no items in your cart.</Text>
                <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Home')}}>
                    <Text style={{ color: colors.primary, fontSize: 16 }}>Continue to purchase</Text>
                </TouchableOpacity>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: width / 3,
        height: width / 3,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width / 6,
        elevation: 2
    },
    button: {
        width: '85%',
        paddingVertical: 13,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        borderRadius: 2,
        elevation: 4
    }
});