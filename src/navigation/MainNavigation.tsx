import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/@types';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation