import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import SideMenu from './src/navigation/SideMenu'



const App = () => {
  return (
    <NavigationContainer>
      <SideMenu/>
    </NavigationContainer>
  )
}

export default App