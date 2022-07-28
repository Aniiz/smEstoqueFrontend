import { View, Text, Image , TouchableOpacity } from 'react-native';
import { style } from './style';


export default ({Nome , Quantidade , Valor , event}) => (  
    <TouchableOpacity style={style.container} onPress={event}>
        <View style={style.Containerimg}>
            <Image source={require('../../assets/box.png')} style={style.img}/>       
        </View>
        <View style={style.Containertexto}>
            <Text style={style.titulo}>{Nome}</Text>
            <Text style={style.texto}>{`Quantidade: ${Quantidade}`}</Text>
            <Text style={style.texto}>{`Valor: R$ ${Valor}`}</Text>
        </View>
    </TouchableOpacity>    
);