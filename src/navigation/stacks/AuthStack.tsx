import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { paths } from '../paths';
import { Home, Login, Register } from '../../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.LOGIN} component={Login} />
      <Stack.Screen name={paths.REGISTER} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthStack;
