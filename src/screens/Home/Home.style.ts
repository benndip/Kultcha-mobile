import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientImage: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.4,
    overflow: 'hidden',
  },
  gradientView: {
    borderBottomRightRadius: DEVICE_WIDTH * 0.1,
    borderBottomLeftRadius: DEVICE_WIDTH * 0.1,
    paddingVertical: DEVICE_HEIGHT * 0.07,
    paddingHorizontal: DEVICE_WIDTH * 0.04,
    flex: 1,
  },
  scrollContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: 10,
    paddingBottom: DEVICE_HEIGHT * 0.11,
    justifyContent: 'space-evenly',
  },
});

export default styles;
