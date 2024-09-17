import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../@types';
import { paths } from './paths';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigation from './BottomNavigation';
import { CulturalSiteAr, CulturalSiteVr, CategoryItems, Deposit, Details, Onboarding, Search, Splash, Upload, VideoDetails, Nft } from '../screens';
import AuthStack from './stacks/AuthStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={paths.ONBOARDING}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={paths.SPLASH} component={Splash} />
        <Stack.Screen name={paths.ONBOARDING} component={Onboarding} />
        <Stack.Screen name={paths.AUTHSTACK} component={AuthStack} />
        <Stack.Screen name={paths.DETAILS} component={Details} />
        <Stack.Screen name={paths.VIDEODETAILS} component={VideoDetails} />
        <Stack.Screen name={paths.SEARCH} component={Search} />
        <Stack.Screen name={paths.DEPOSIT} component={Deposit} />
        <Stack.Screen name={paths.CATEGORYITEMS} component={CategoryItems} />
        <Stack.Screen name={paths.UPLOAD} component={Upload} />
        <Stack.Screen name={paths.CULTURALSITEVR} component={CulturalSiteVr} />
        <Stack.Screen name={paths.CULTURALSITEAR} component={CulturalSiteAr} />
        <Stack.Screen name={paths.NFT} component={Nft} />
        <Stack.Screen
          name={paths.BOTTOMNAVIGATION}
          component={BottomNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
