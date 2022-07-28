import { StyleSheet} from 'react-native';
import { colors } from '../../styles/global-style';

export const style = StyleSheet.create({
    container: {
        position:'absolute',
        bottom: 20,
        right: 20,
        height: 70,
        width: 70,
        borderRadius: 50,
        backgroundColor: colors.blue,
    },
    bar: {
        width: '55%',
        height: 6,
        borderRadius: 5,
        backgroundColor: 'white',
        position: 'relative',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
  });