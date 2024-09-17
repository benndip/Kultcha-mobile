import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { paths } from '../paths';
import { AllItems, Home, Profile } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.HOME} component={Home} />
      <Stack.Screen name={paths.ALLITEMS} component={AllItems} />
      <Stack.Screen name={paths.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};

export default HomeStack;
