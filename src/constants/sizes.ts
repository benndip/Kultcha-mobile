import { Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const defaultSpacing = {
//   paddingVertical: DEVICE_HEIGHT * 0.07,
  paddingHorizontal: DEVICE_WIDTH * 0.04,
  padding: DEVICE_WIDTH * 0.04,
};
