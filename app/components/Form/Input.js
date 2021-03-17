import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Input({ specificStyles, iconName, onPress, ...otherprops }) {
    return (
        <View style={[styles.container, specificStyles ]}>
            <TextInput
                {...otherprops}
                style={styles.textInput}

            />
            {iconName &&
                <TouchableOpacity style={styles.icon} onPress={onPress}>
                    <MaterialCommunityIcons name={iconName} size={24} color="black" />
                </TouchableOpacity>
            }
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    textInput: {
        width: '100%',
        height: 50,
        borderColor: 'rgba(0,0,0,0.3)',
        borderWidth: 1.2,
        borderRadius: 6,
        paddingHorizontal: 20,
    },
    icon: {
        position: 'absolute',
        right: 20,
        alignItems: 'center',
        justifyContent: 'center'

    }
});