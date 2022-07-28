import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  switchscreen: {
    backgroundColor: 'white',
    height: '100%',
    width: width,
    flex: 1,
  }
});