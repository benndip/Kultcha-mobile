import { DEVICE_HEIGHT } from '../../constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  scrollContent: {
    gap: 10,
    paddingBottom: DEVICE_HEIGHT * 0.08,
    justifyContent: 'space-between',
    paddingTop: 20,
    alignSelf: 'stretch'
  },
});

export default styles;
