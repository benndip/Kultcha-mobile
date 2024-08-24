import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/@types';
import { paths } from './paths';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import { Onboarding, Splash } from '@/screens';
import AuthStack from './stacks/AuthStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={paths.BOTTOMNAVIGATION}
        screenOptions={{
          headerShadowVisible: false,
          headerShown: false,
        }}
      >
        <Stack.Screen name={paths.SPLASH} component={Splash} />
        <Stack.Screen name={paths.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={paths.AUTHSTACK} component={AuthStack} />
        <Stack.Screen
          name={paths.BOTTOMNAVIGATION}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
