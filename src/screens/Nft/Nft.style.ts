import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    height: 45,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  input: {
    width: "90%",
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
    paddingLeft: 10,
    height: 45
  },
  uploadBtn: {
    width: "40%",
    height: 45,
    alignSelf: "flex-end",
    marginRight: 25,
    marginTop: 20,
    justifyContent: "space-around",
    borderRadius: 10,
  },
  publishBtn: {
    width: "80%",
    height: 45,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 60,
    bottom: 40
  },
  imageContainer: {
    width: "40%",
    height: 100,
    marginTop: 60,
    marginLeft: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default styles