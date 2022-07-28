import { Text, View, ScrollView } from 'react-native';
import { style } from './style';
import Title from '../Title'

export default ({nome, marca, quantidade, valor, preço}) => ( 
    <View style={style.container}>
        
        <View style={style.topbar}>         
            <View style={style.titulo}>      
                <Title fontsize={28} marginleft={'auto'} text={nome}/>
                <Text style={style.quantidade}>{quantidade}</Text>
            </View>

            <Text style={style.marca}>{marca}</Text>
        </View>

        <View style={style.containervalues}>
            <Text style={{...style.texto, marginLeft: 15}}>{valor}</Text>
            <Text style={{...style.texto, marginRight: 15, marginLeft: 'auto'}}>{preço}</Text>
        </View>

    </View>
);