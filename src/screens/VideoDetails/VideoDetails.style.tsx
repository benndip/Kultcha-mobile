import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientImage: {
    overflow: 'hidden',
    width: '100%',
    height: DEVICE_HEIGHT * 0.38,
    marginBottom: 14,
  },
  gradientView: {
    padding: 16,
    zIndex: 2,
    height: DEVICE_HEIGHT * 0.28,
    width: '100%',
    position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: DEVICE_HEIGHT * 0.12,
  },
  seekIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default styles;
