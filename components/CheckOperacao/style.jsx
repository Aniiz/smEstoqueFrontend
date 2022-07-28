import { StyleSheet} from 'react-native';
import { colors } from '../../styles/global-style';
export const style = StyleSheet.create({
    container: {
        borderColor: colors.gray,
        borderLeftWidth: 2.5,
        borderBottomWidth: 2.4,
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        minHeight: '6%',
        paddingTop: '2%',
        paddingBottom: '2%',
        marginTop: 'auto',
        marginBottom: 'auto'
    },
    row : {
        flexDirection: 'row',
    },
    check: {
        alignSelf: 'center',
        marginLeft: '3%'
    },
    tittle: {
        alignSelf: 'center',
        marginLeft: '2%',
        color: colors.blue,
        fontWeight: 'bold',
        fontSize: 18
    },
    text : {
        fontSize: 18,
        color: colors.gray,
        marginLeft: '10%'
    },
    input: {
        fontSize: 16,
        paddingLeft: 5,
        backgroundColor:' rgba(0, 0, 0, 0.05)',
        width: '53%',
        borderRadius: 6,
        color: colors.blue
    }
});