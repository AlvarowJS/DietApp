import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dieta from '../screens/TabsPlan/Dieta';
import Consejos from '../screens/TabsPlan/Consejos';
import Intercambio from '../screens/TabsPlan/Intercambio';
import Patologias from '../screens/TabsPlan/Patologias';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeBackgroundColor: '#E5B359',
                inactiveBackgroundColor: '#33A082',
                tabStyle: {
                    // height: 60,                    

                },
                labelStyle: {
                    fontSize: 14,
                    color: 'white',
                    marginBottom: 4
                },


            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    console.log(route.name)
                    let iconName
                    switch (route.name) {
                        case 'Dieta':
                            iconName = 'comments'
                            break
                        case 'Consejos':
                            iconName = 'weight'
                            break
                        case 'Intercambio':
                            iconName = 'shopping-bag'
                            break
                        case 'Patologias':
                            iconName = 'heartbeat'
                            break
                    }
                    return <FontAwesome5 name={iconName} style={{ fontSize: 25, color: 'white' }} />
                }
            })}
        >
            <Tab.Screen name="Dieta" options={{ title: 'Dieta', headerShown: false }} component={Dieta} />
            <Tab.Screen name="Consejos" options={{ title: 'Consejos', headerShown: false }} component={Consejos} />
            <Tab.Screen name="Intercambio" options={{ title: 'Intercambio', headerShown: false }} component={Intercambio} />
            <Tab.Screen name="Patologias" options={{ title: 'Patologias', headerShown: false }} component={Patologias} />
        </Tab.Navigator>
    )
}

export default Tabs