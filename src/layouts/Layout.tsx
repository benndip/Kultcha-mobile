import { LayoutProps } from '../@types';
import { TopNavActions } from '../components';
import React from 'react';
import { View } from 'react-native';
import styles from './Layouts.style';

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <View style={styles.container}>
      <TopNavActions {...props} />
      <View className='pt-6 px-2'>{children}</View>
    </View>
  );
};

export default Layout;
