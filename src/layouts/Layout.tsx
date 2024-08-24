import { LayoutProps } from '@/@types';
import { TopNavActions } from '@/components';
import React from 'react';
import { View } from 'react-native';
import styles from './Layouts.style';

const Layout = ({ children, rightIcon, leftIcon }: LayoutProps) => {
  return (
    <View style={styles.container}>
      <TopNavActions />
      <View style={{flex: 1}}>{children}</View>
    </View>
  );
};

export default Layout;
