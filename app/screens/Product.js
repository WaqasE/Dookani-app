import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image, Text, TouchableWithoutFeedback, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'

const { height, width } = Dimensions.get('screen')


export default function Product({ route, navigation }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const { image } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={{ width: 35, height: 35, justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.goBack() }}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={24} color={colors.primary} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', height: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ marginRight: 20 }}>
                        <MaterialCommunityIcons name="share-variant" size={24} color={colors.primary} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: colors.primary, width: 30, height: 30, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialCommunityIcons name="heart-outline" size={24} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={image}
                keyExtractor={item => item.id.toString()}
                horizontal
                pagingEnabled
                bounces={false}  
                onMomentumScrollBegin={
                    ev => {
                        setActiveIndex((ev.nativeEvent.contentOffset.x / width)>activeIndex?Math.ceil(ev.nativeEvent.contentOffset.x / width):Math.floor(ev.nativeEvent.contentOffset.x / width))
                    }
                }
                renderItem={
                    ({ item, index }) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Gallery', { image: image }) }}>
                                <View style={styles.image}>
                                    <Image style={{ width: '100%', height: '100%' }} source={item.source} />
                                </View>
                            </TouchableWithoutFeedback>)
                    }}
            />
            <View style={styles.sliderIndicator}>
                {
                    image.map(
                        ({ id }, i) => {
                            return (
                                <View key={id} style={{ width: activeIndex === i ? 8 : 7, height: activeIndex === i ? 8 : 7, borderRadius: 5, backgroundColor: activeIndex === i ? colors.primary : 'grey', marginHorizontal: 2 }} />
                            )
                        }
                    )
                }
            </View>
            <View style={styles.footer}>
                <TouchableWithoutFeedback>
                    <View style={styles.button}>
                        <Text style={{ color: colors.primary, fontSize: 16 }}>Add To Cart</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    header: {
        width: width,
        height: 80,
        paddingTop: 30,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.1)',
        alignItems: 'center',
        top: 0,
        position: 'absolute',
        zIndex: 100
    },
    image: {
        width: width,
        height: height / 100 * 70,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        width: width,
        height: 80,
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        alignItems: 'center',
        bottom: 0,
        position: 'absolute',
        paddingVertical: 15
    },
    button: {
        paddingVertical: 13,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 20,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    sliderIndicator: {
        height: 15,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        top: height / 100 * 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignSelf: 'center'
    }
});