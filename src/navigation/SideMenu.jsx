import { useWindowDimensions } from 'react-native';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Dashboard from '../screens/Dashboard'
import Plan from '../screens/Plan'
import StackNavigator from './StackNavigator'
import Side from './Side';

const Drawer = createDrawerNavigator()
const SideMenu = () => {
    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
            drawerType={width >= 768 ? 'permanent' : 'front'}
            drawerContent={(props) => <Side {...props} />}
            options={{ headerShown: false }}
        >
            <Drawer.Screen name="StackNavigator" options={{ headerShown: false }} component={StackNavigator} />

        </Drawer.Navigator>

    )
}

export default SideMenu