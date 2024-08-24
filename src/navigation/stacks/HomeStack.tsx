import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { paths } from '../paths';
import { Home } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
