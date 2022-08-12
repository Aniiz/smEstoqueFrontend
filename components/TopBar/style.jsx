import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global-style';

export const style = StyleSheet.create({
  container: {
    paddingTop:20,
    top: 0,
    width: '100%',
    height: 70,
    backgroundColor: colors.blue,
  },
  row: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 'auto'
  },
  textaling: {
    marginBottom: 'auto',
    marginTop: 'auto',
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: 'Roboto',
    color: 'white',
    fontSize: 20,
    paddingLeft: 10,
  },
});