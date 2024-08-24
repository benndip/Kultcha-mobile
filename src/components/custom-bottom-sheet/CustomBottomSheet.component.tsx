import React, { forwardRef } from 'react';
import BottomSheet from '@devvie/bottom-sheet';
import { DEVICE_WIDTH } from '../../constants/sizes';

const containerStyle = {
  alignSelf: 'center',
  borderBottomWidth: 0,
  padding: 10,
  paddingVertical: 10,
  zIndex: 10,
  width: DEVICE_WIDTH,
} as any;

const CustomBottomSheet = forwardRef(
  (
    {
      children,
      bgColor = '#fff',
      height,
      backdropColor = 'transparent',
      paddingHorizontal,
      bottom,
      borderTopRightRadius = 16,
      borderTopLeftRadius = 16,
      borderWidth = 0.2,
      borderColor = '',
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <BottomSheet
        ref={ref}
        backdropMaskColor={backdropColor}
        modal
        disableKeyboardHandling
        height={height}
        // disableKeyboardHandling
        style={{
          ...containerStyle,
          backgroundColor: bgColor,
          paddingHorizontal,
          bottom,
          borderTopRightRadius,
          borderTopLeftRadius,
          borderColor,
          borderWidth,
          zIndex: 20,
        }}
        animationType='slide'
        {...props}
      >
        {children}
      </BottomSheet>
    );
  }
);

export default CustomBottomSheet;
