import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Favorites } from '../../screens';
import { paths } from '../paths';

const Stack = createNativeStackNavigator();

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={paths.FAVORITES} component={Favorites} />
    </Stack.Navigator>
  );
};

export default FavoritesStack;
