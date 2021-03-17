import React from 'react';
import { StyleSheet, View, Image, FlatList } from 'react-native';
import colors from '../../config/colors';

export default function Brands({ brands }) {
    return (
        <View style={styles.container}>
            <FlatList
                data={brands}
                keyExtractor={item => item.id.toString()}
                ItemSeparatorComponent={() => (<View style={{ width: 10, height: '100%' }} />)}
                horizontal
                renderItem={
                    ({ item, index }) => {
                        return (
                            <View style={[styles.brandWrap, { marginLeft: index === 0 ? 20 : 0, marginRight: index === brands.length - 1 ? 20 : 0 }]}>
                                <Image style={{ width: '100%', height: '100%', resizeMode: 'contain', }} source={item.image} />
                            </View>
                        );
                    }
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 100,
    },
    brandWrap: {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: colors.primary,
        elevation: 2,
        paddingHorizontal: 10,
        marginVertical:10
    }
});