import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  switchscreen: {
    backgroundColor: 'white',
    width: width,
    flex: 1,
    height: height - 140,
  },

  switchscreenText: {
    fontSize: 20,
    padding: 15,
    color: 'black',
    textAlign: 'center'
  }
});