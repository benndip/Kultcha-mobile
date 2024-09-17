import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  AnimatedTabBarNavigator,
  DotSize,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { HeartIcon, SettingsIcon, UploadIcon, SearchIcon } from '../assets/icons';
import { colors } from '../constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/sizes';
import { paths } from './paths';
import FavoritesStack from './stacks/FavoritesStack';
import HomeStack from './stacks/HomeStack';
import SettingsStack from './stacks/SettingsStack';
import { Upload } from '../screens';

const Tabs = AnimatedTabBarNavigator();

const BottomNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{ headerShown: false }}
      appearance={{
        whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
        floating: true,
        tabBarBackground: colors.darkBrown,
        dotSize: DotSize.SMALL,
        shadow: true,
      }}
      tabBarOptions={{
        activeTintColor: colors.darkBrown,
        inactiveTintColor: '#fff',
        // inactiveTintColor: GREY,
        activeBackgroundColor: colors.greyVar1,
        tabStyle: {
          justifyContent: 'center',
          height: DEVICE_HEIGHT * 0.09,
          alignSelf: 'center',
          width: DEVICE_WIDTH * 0.7,
        },
      }}
    >
      <Tabs.Screen
        name={paths.HOMESTACK}
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused, color, size }: any) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={focused ? color : '#fff'}
            />
          ),
        }}
      />
       <Tabs.Screen
        name={paths.UPLOAD}
        component={Upload}
        options={{
          tabBarLabel: 'Upload',
          tabBarIcon: ({ focused, color, size }: any) => (
            <UploadIcon size={size} color={focused ? color : '#fff'} />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.FAVORITESSTACK}
        component={FavoritesStack}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ focused, color, size }: any) => (
            <SearchIcon size={size} color={focused ? color : '#fff'} />
          ),
        }}
      />
      <Tabs.Screen
        name={paths.SETTINGSSTACK}
        component={SettingsStack}
        options={{
          tabBarLabel: 'Discover',
          tabBarIcon: ({ focused, color, size }: any) => (
            <SettingsIcon size={size} color={focused ? color : '#fff'} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigation;
