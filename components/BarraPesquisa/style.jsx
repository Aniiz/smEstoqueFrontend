import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global-style';

export const style = StyleSheet.create({
  containerPesquisa: {
    backgroundColor: 'white',
    height: '100%',
    width: '60%',
    borderRadius: 7,
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    flexDirection: 'row',
},
text: {
    color: colors.blue,
    fontWeight: 'bold',
    width: '100%',
  }
}); 