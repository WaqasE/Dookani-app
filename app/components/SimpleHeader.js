import React from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Text } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons'


const { width, height } = Dimensions.get('screen')

export default function SimpleHeader({ navigation, bg, shadow, title }) {
    return (
            <View style={[styles.container, { backgroundColor: bg?colors[bg]:colors.inActive, elevation:shadow?5:0 }]}>
                <Text style={{fontSize:17}}>{title}</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width,
        height: 80,
        paddingTop: 30,
        backgroundColor: colors.inActive,
        paddingHorizontal: 30,
        justifyContent:'center'
    },
});