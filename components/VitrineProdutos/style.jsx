import { StyleSheet } from "react-native";
import { colors } from "../../styles/global-style";

export const style = StyleSheet.create({
    container: {
        paddingTop: '10%',
    },
    topbar: {
        width: '100%',
        
    },
    titulo:{
        flexDirection: 'row',
        paddingRight: '5%'
    },
    quantidade: {
        marginLeft: 'auto',
        fontSize: 32,
        color: colors.blue,
        borderColor: colors.gray,
        borderLeftWidth: 2.5,
        borderBottomWidth: 2.4,
        paddingRight: 10,
        paddingLeft: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        minWidth: 45,
    },
    marca: {
        color: colors.gray,
        fontSize: 17,
        marginLeft: '10%',
    },
    containervalues: {
        width: '80%',
        borderBottomWidth: 2,
        borderColor: colors.gray,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '15%',
        flexDirection: 'row',
    },
    texto: {
        color: colors.blue,
        fontSize: 30,
    }
})