import { StyleSheet, Dimensions } from 'react-native';

let width = Dimensions.get("screen").width * 0.4;

export const style = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    width: width,
    backgroundColor: "#6666FF",
    padding: 10,
    margin: 10,
    borderRadius: 2
  },

  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold"
  }
});