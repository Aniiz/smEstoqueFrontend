import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get("screen").width * 0.75;

export const style = StyleSheet.create({
  input: {
    height: 60,
    margin: 12,
    width: width,
    borderWidth: 1,
    padding: 10,
    fontSize: 16
  },
});