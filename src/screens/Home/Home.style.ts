import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientImage: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.4,
    overflow: 'hidden',
  },
  gradientView: {
    height: '100%',
    borderBottomRightRadius: DEVICE_WIDTH * 0.1,
    borderBottomLeftRadius: DEVICE_WIDTH * 0.1,
    paddingVertical: DEVICE_HEIGHT * 0.07,
    paddingHorizontal: DEVICE_WIDTH * 0.04,
    flex: 1,
  },
});

export default styles;
