import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export const style = StyleSheet.create({
  switchscreen: {
    backgroundColor: 'white',
    height: '100%',
    width: width,
    flex: 1,

  },
  container: {
    height: 80,
    width: width,
  }
});