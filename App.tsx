import MainNavigation from '@/navigation/MainNavigation';
import store, { persistor } from '@/redux/store';
import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StatusBar style='dark' animated />
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
}
