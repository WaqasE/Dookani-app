import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import HomeScreen from '../screens/Home'
import SearchScreen from '../screens/Search'
import FavoritesScreen from '../screens/Favorites'
import CartScreen from '../screens/Cart'
import ProfileScreen from '../screens/Profile'

import colors from '../config/colors';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: colors.secondary,
                style:{height:60},
                tabStyle:{height:55},
                labelStyle:{
                    fontSize:14,
                    marginBottom:7
                }
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size = 25 }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    }
                    else if (route.name === 'Search') {
                        iconName = focused
                            ? 'magnify'
                            : 'magnify';
                    }
                    else if (route.name === 'Favorites') {
                        iconName = focused
                            ? 'heart'
                            : 'heart-outline';
                        ;
                    }
                    else if (route.name === 'Cart') {
                        iconName = focused
                            ? 'cart'
                            : 'cart-outline';
                    }
                    else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'account'
                            : 'account-outline';
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator >
    );
}