import { Text, View } from 'react-native';
import { style } from './style';
import Title from '../Title'

export default ({id, nome, marca, quantidade, valor, preco}) => {
    valor = String(valor)
    preco = String(preco)
    return (
        <View style={style.container}>
            
            <View style={style.topbar}>         
                <View style={style.titulo}>      
                    <Title style={style.tittle} fontsize={28} marginleft={'auto'} 
                    paddingRight={30} text={'#'+id+' - '+nome}/>
                    <Text style={style.quantidade}>{quantidade}</Text>
                </View>

                <Text style={style.marca}>{marca}</Text>
            </View>
            
            <View style={style.containervalues}>
                <Text style={style.textoGray}>Valor: </Text>
                <Text style={style.texto}>
                    R$ {valor.substring(0,valor.length-2)+','+valor.substring(valor.length-2, valor.length)}
                </Text>     
            </View>
            
            <View style={style.containervalues}>
                <Text style={style.textoGray}>Preço: </Text>
                <Text style={style.texto}>
                   R$ {preco.substring(0,preco.length-2)+','+preco.substring(preco.length-2, preco.length)}
                </Text>
            </View>

        </View>
)};