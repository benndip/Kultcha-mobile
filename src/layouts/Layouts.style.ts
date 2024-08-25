import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: DEVICE_HEIGHT * 0.07,
    paddingHorizontal: DEVICE_WIDTH * 0.04
  },
});

export default styles;
