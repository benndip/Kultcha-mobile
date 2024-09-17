import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Settings } from '../../screens';
import { paths } from '../paths';

const Stack = createNativeStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.SETTINGS} component={Settings} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
