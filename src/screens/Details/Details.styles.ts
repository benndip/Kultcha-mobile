import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gradientImage: {
    overflow: "hidden",
    width: "100%",
    height: DEVICE_HEIGHT * 0.38,
    marginBottom: 14,
  },
  gradientView: {
    padding: 16,
    flex: 1,
    borderRadius: 16,
    justifyContent: "space-between",
  },
  avatarAndTexts: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
});

export default styles;
