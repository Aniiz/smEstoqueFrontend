import { StyleSheet} from 'react-native';
import { Dimensions } from 'react-native';
const { width} = Dimensions.get('window');
import { colors } from '../../styles/global-style';

export const style = StyleSheet.create({
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: width-20,
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderColor: colors.gray,
        flexDirection: 'row'
    },
    Containerimg: {
        width: '30%',
        marginBottom: 10
    },
    img: {
        width: 100,
        height: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop:'auto',
        marginBottom: 'auto'
    },
    Containertexto:{
        height:'100%',
        width: '70%',
        marginBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    titulo:{
        color: colors.blue,
        fontWeight: "bold",
        fontSize: 22,
        marginBottom: 5
    },
    texto: {
        color: colors.gray,
        fontSize: 15,
    }
});