import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import colors from '../../config/colors';
import Brands from './Brands';
import Carousel from './Carousel';
import HighlightedProduct from './HighlightedProduct';
import Products from './Products';

const carouselList = [
    {
        id: 1,
        image: require('../../assets/ad1.jpg')
    },
    {
        id: 2,
        image: require('../../assets/ad1.jpg')
    },
    {
        id: 3,
        image: require('../../assets/ad2.jpg')
    }
]

const productList = [
    {
        id: 1,
        image: [
            { id: 1, source: require('../../assets/pro1.jpg') },
            { id: 2, source: require('../../assets/pro1.1.jpg') },
            { id: 3, source: require('../../assets/pro1.2.jpg') }],
        brand: 'Casio',
        detail: 'Smart Watch',
        price: '200$'
    },
    {
        id: 2,
        image: [{ id: 1, source: require('../../assets/pro2.jpg') }],
        brand: 'Nike',
        detail: 'Elemental bagpack',
        price: '149.5$'
    },
    {
        id: 3,
        image: [{ id: 1, source: require('../../assets/pro3.jpg') }],
        brand: 'Nike',
        detail: 'Star Runner 2',
        price: '180$'
    }
]

const brands = [
    {
        id: 1,
        image: require('../../assets/nike.png')
    },
    {
        id: 2,
        image: require('../../assets/casio.png')
    },
    {
        id: 3,
        image: require('../../assets/adidas.png')
    },
    {
        id: 4,
        image: require('../../assets/zara.png')
    },
    {
        id: 5,
        image: require('../../assets/gucci.png')
    }
]

export default function Men({ navigation }) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <Carousel carouselList={carouselList} />
            <Text style={{ marginHorizontal: 20, fontSize: 17 }}>Special Products for You</Text>
            <Products productList={productList} navigation={navigation} />
            <HighlightedProduct image={require('../../assets/hPro1.jpg')} />
            <Text style={{ marginHorizontal: 20, fontSize: 17, marginVertical: 5 }}>Special Brands for You</Text>
            <Brands brands={brands} />
            <HighlightedProduct image={require('../../assets/hPro2.jpg')} />
            <HighlightedProduct image={require('../../assets/hPro3.jpg')} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },

});