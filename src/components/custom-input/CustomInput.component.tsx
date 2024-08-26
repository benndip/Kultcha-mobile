import { colors } from '../../constants/colors';
import { DEVICE_HEIGHT } from '../../constants/sizes';
import React, { ReactNode } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface IProps extends TextInputProps {
  height?: number;
  leftIcon?: () => ReactNode;
  rightIcon?: () => ReactNode;
}

const CustomInput = ({
  height = DEVICE_HEIGHT * 0.06,
  leftIcon,
  rightIcon,
  ...props
}: IProps) => {
  const iconClassName = 'w-[10%] h-full justify-center items-center';
  const textInputClassName = twMerge(
    'h-full w-[80%] rounded-md px-2',
    (!leftIcon?.() || !leftIcon?.()) && 'w-[90%]',
    !leftIcon?.() && !leftIcon?.() && 'w-full'
  );
  return (
    <View
      style={{
        height,
      }}
      className='flex-row flex border border-[#a4a4a4] rounded-lg overflow-hidden bg-white px-1'
    >
      {leftIcon?.() && <View className={iconClassName}>{leftIcon?.()}</View>}
      <TextInput placeholderTextColor={'#a4a4a4'} className={textInputClassName} {...props} />
      {rightIcon?.() && <View className={iconClassName}>{rightIcon?.()}</View>}
    </View>
  );
};

export default CustomInput;
