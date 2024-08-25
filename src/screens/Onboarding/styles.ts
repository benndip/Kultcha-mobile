import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  imageBg: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  overlya2: {
    height: DEVICE_HEIGHT * 0.06,
    bottom: 0
  },
});

export default styles;
