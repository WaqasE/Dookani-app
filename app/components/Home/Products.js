import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Product from './Product'


export default function Products({ productList, navigation }) {

    return (
        <View style={styles.container}>
            <FlatList
                data={productList}
                keyExtractor={itemm => itemm.id.toString()}
                ItemSeparatorComponent={() => (<View style={{ width: 10, height: '100%' }} />)}
                horizontal
                renderItem={
                    ({ item, index }) => {
                        return (
                            <Product index={index} length={productList.length} navigation={navigation} image={item.image} brand={item.brand} detail={item.detail} price={item.price} />
                        )
                    }
                }

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 240,
    },

});