import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/sizes";

const styles = (imageWidth?: number, imageHeight?: number) => StyleSheet.create({
    container: {
      height: DEVICE_HEIGHT * 0.3,
      overflow: 'hidden',
      marginVertical: 6,
      marginHorizontal: 5,
      borderRadius: 22,

    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    heartAndTextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 2,
        marginTop: 3
    },
    likesText: {
        fontSize: 12,
        marginLeft: 6,
        color: '#000000'
    },
    captionText: {
        fontSize: 12,
        color: '#1e272e'
    },
    avatarAndTexts: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30,
        marginLeft: 6
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 16
    }
  });

export default styles;