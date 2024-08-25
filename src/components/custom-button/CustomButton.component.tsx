import {
  ButtonProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, { ReactNode } from 'react';
import { DEVICE_HEIGHT } from '@/constants/sizes';
import { colors } from '@/constants/colors';

interface IProps {
  height?: number;
  leftIcon?: () => ReactNode;
  rightIcon?: () => ReactNode;
  title?: string;
  onPress?: () => void;
  width?: any,
  bgColor?: string;
  style?: ViewStyle
}

const CustomButton = ({
  height = DEVICE_HEIGHT * 0.06,
  leftIcon,
  rightIcon,
  title,
  width = '100%',
  bgColor=colors.golden,
  style,
  onPress,
  ...props
}: IProps) => {
  return (
    <TouchableOpacity
      style={{
        height,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignSelf: 'center',
        gap: 16,
        borderRadius: 10,
        width,
        ...style
      }}
      onPress={onPress}
      {...props}
    >
      {leftIcon?.() && <View>{leftIcon?.()}</View>}
      <Text>{title}</Text>
      {leftIcon?.() && <View>{leftIcon?.()}</View>}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
