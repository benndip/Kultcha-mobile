import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './src/redux/store';
import MainNavigation from './src/navigation/MainNavigation';

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
