import { StyleSheet } from 'react-native';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/sizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: DEVICE_HEIGHT * 0.05
  },
  gradientImage: {
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT * 0.4,
    overflow: "hidden",
  },
  gradientView: {
    borderBottomRightRadius: DEVICE_WIDTH * 0.1,
    borderBottomLeftRadius: DEVICE_WIDTH * 0.1,
    paddingVertical: DEVICE_HEIGHT * 0.07,
    paddingHorizontal: DEVICE_WIDTH * 0.04,
    flex: 1,
  },
  scrollContent: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    paddingBottom: DEVICE_HEIGHT * 0.11,
    justifyContent: "space-evenly",
  },
  header: {
    width: DEVICE_WIDTH,
    height: 45,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    borderWidth: 1
  },
  followingContainer: {
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  forYouContainer: {
    width: 60,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    backgroundColor: "red",
    width: 60,
    height: 3,
    position: "absolute",
    bottom: 0,
    borderRadius: 15,
  },
  otherView: {
    flex: 1,
    // paddingTop: DEVICE_HEIGHT * 0.1
  },
  flatList: {
    alignSelf: "center",
    flex: 1,
  },
  listFooterComponent: {
    width: DEVICE_WIDTH,
    flexDirection: "row",
    backgroundColor: "red",
    flex: 1,
  },
  individualMasonryContainer: {
    width: DEVICE_WIDTH * 0.48,
  },
  exploreOrPostBtn: {
    width: '45%',
    borderRadius: 8,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default styles;
