import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import {Men, Women, Kids, Home} from '../components/Home/'
import colors from '../config/colors';


const Tab = createMaterialTopTabNavigator();


export default function MyTabs() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:colors.secondary,
                indicatorStyle:{backgroundColor:colors.secondary}
            }}>
            <Tab.Screen name="Men" component={Men} />
            <Tab.Screen name="Women" component={Women} />
            <Tab.Screen name="Kids" component={Kids} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
}