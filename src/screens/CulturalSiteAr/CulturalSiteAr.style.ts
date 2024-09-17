import { StyleSheet } from "react-native";
import { DEVICE_HEIGHT } from "../../constants/sizes";

const styles = StyleSheet.create({
    container: {

    },
    artefactImage: {
        width: '100%',
        height: '100%'
    },
    backIcon: {
        position: 'absolute',
        top: DEVICE_HEIGHT * 0.05,
        left: 20
    },
    artefactImageContainer: {
        width: '100%',
        height: DEVICE_HEIGHT * 0.4
    },
    arBtn: {
        bottom: 20,
        right: 20,
        position: 'absolute'
    }
});

export default styles