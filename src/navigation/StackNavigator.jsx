import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard'
import Plan from '../screens/Plan'
import Entrenamiento from '../screens/Entrenamiento';
import Recetario from '../screens/Recetario';
import FueraCasa from '../screens/FueraCasa';
import Evolucion from '../screens/Evolucion';
import RecetaDetalle from '../components/RecetaDetalle';
import PlatoDetalle from '../components/PlatoDetalle';
import EjercicioVideosDetalle from '../components/EjercicioVideosDetalle';
import Login from '../screens/Login';
import Tabs from './Tabs'
import DietaDetalle from '../components/Plan/DietaDetalle'
const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
            <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
            <Stack.Screen options={{ headerShown: false }} name="FueraCasa" component={FueraCasa} />
            <Stack.Screen options={{ headerShown: false }} name="Recetario" component={Recetario} />
            <Stack.Screen options={{ headerShown: false }} name="Evolucion" component={Evolucion} />            
            <Stack.Screen options={{ headerShown: false }} name="Plan" component={Plan} />
            <Stack.Screen options={{ headerShown: false }} name="Entrenamiento" component={Entrenamiento} />
            
            <Stack.Screen options={{ title: '' }} name="Tabs" component={ Tabs } />
            <Stack.Screen options={{ title: '' }} name="DietaDetalle" component={DietaDetalle} />
            <Stack.Screen options={{ title: '' }} name="RecetaDetalle" component={RecetaDetalle} />
            <Stack.Screen options={{ title: '' }} name="PlatoDetalle" component={PlatoDetalle} />
            <Stack.Screen options={{ title: '' }} name="EjercicioVideosDetalle" component={EjercicioVideosDetalle} />
        </Stack.Navigator>
    )
}

export default StackNavigator