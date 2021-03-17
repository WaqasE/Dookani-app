import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import AppNav from './AppNav'
import SearchProducts from '../screens/SearchProducts'
import Product from '../screens/Product'
import Gallery from '../screens/Gallery'
import Auth from '../screens/Auth'

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, ...TransitionPresets.ModalSlideFromBottomIOS }}>
      <Stack.Screen name="AppNav" component={AppNav} />
      <Stack.Screen name="SearchProducts" component={SearchProducts} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
}