import React from 'react';
import {  StyleSheet,TouchableWithoutFeedback, Text, View } from 'react-native';
import colors from '../../config/colors';

export default function Submit({title})  {
    return  (
        <TouchableWithoutFeedback>
            <View  style={styles.container}>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
     );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:colors.secondary,
        alignItems:'center',
        justifyContent:'center',
        elevation:5,
        borderRadius:6,
        marginBottom:15
    },
    text:{
        color:colors.primary,
        fontSize:17,
        
    }
 });