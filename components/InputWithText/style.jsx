import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../styles/global-style';

export const style = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: 'black', 
        fontSize: 18,
        color: colors.gray,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    text: {
        fontSize: 23,
        color: colors.gray,
        marginBottom: 10
    }
});