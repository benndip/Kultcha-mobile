import { colors } from '@/constants/colors';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '@/constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageContainer: {
    width: DEVICE_WIDTH * 0.2,
    height: DEVICE_WIDTH * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    borderRadius: DEVICE_WIDTH * 0.2,
    backgroundColor: colors.greyVar3,
    padding: DEVICE_WIDTH * 0.03
  },
  image: {
    resizeMode: 'contain',
    width: '90%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: DEVICE_HEIGHT * 0.03,
    paddingHorizontal: DEVICE_HEIGHT * 0.03,
    color: colors.darkBrown,
  },
  caption: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 12,
    lineHeight: 22,
    color: colors.darkBrown,
  },
  circleContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default styles;
