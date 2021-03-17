import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')


export default function Carousel({ carouselList }) {
    return (
        <View style={styles.carouselWrap}>
            <FlatList
                style={{ width: '100%', height: '100%', }}
                data={carouselList}
                keyExtractor={item => item.id.toString()}
                horizontal
                bounces={false}
                pagingEnabled
                renderItem={
                    ({ item }) => (
                        <Image style={styles.carousel} source={item.image} />
                    )
                }

            />
            <View style={styles.indicatorWrap}>
                {
                    carouselList.map(
                        ({ id }) => (
                            <View key={id} style={styles.indicator} />
                        )
                    )
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    carouselWrap: {
        width: '90%',
        height: 100,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        overflow: 'hidden',
        marginVertical: 20,
        alignSelf:'center'
    },
    indicatorWrap: {
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        borderRadius: 10,
        height: 10,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    indicator: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: 'white',
        marginHorizontal: 3
    },
    carousel: {
        width: width / 90 * 100,
        height: '100%',
        resizeMode: 'cover',

    }
});