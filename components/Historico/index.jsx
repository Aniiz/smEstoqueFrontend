import { View, Text, Image , TouchableOpacity, PanResponder } from 'react-native';
import { style } from './style';
import { dataFromDB } from '../../utils/dataConvert';
export default ({dados, event}) => {
    tipo = dados.tipo
    
    tipo == 'Entrada' ? render = (
        <TouchableOpacity style={style.container} onPress={event}>
            
            <View style={style.Containerimg}>
                <Image source={require('../../assets/historico.png')} style={style.img}/>       
            </View>
    
            <View style={style.Containertexto}>
               
                <Text style={style.titulo}>{dados.nome}</Text>
                <Text style={style.texto}>{`Data: ${dataFromDB(dados.createdAt)}`}</Text>
                <Text style={style.texto}>{`Quantidade: ${dados.quantidade}`}</Text>
                <Text style={style.texto}>{`Valor unitário: R$ ${dados.valor}`}</Text>
                
                <View style={style.row}>
                <Text style={style.texto}>{`Total: R$ ${dados.valor*dados.quantidade}`}</Text>
                    <Text style={{...style.texto, ...style.textoDireita}}>{`Operação:`}</Text>
                        <Text style={{...style.texto,...style.verde}}>{` ${dados.tipo}`}</Text>
                </View>
    
            </View>
        </TouchableOpacity> )  :
        
        render = (
            <TouchableOpacity style={style.container} onPress={event}>
                
                <View style={style.Containerimg}>
                    <Image source={require('../../assets/historico.png')} style={style.img}/>       
                </View>
        
                <View style={style.Containertexto}>
                   
                    <Text style={style.titulo}>{dados.nome}</Text>
                    <Text style={style.texto}>{`Data: ${dataFromDB(dados.createdAt)}`}</Text>
                    <Text style={style.texto}>{`Quantidade: ${dados.quantidade}`}</Text>
                    <Text style={style.texto}>{`Valor unitário: R$ ${dados.valor}`}</Text>
                    
                    <View style={style.row}>
                        <Text style={style.texto}>{`Total: R$ ${dados.valor*dados.quantidade}`}</Text>
                        <Text style={{...style.texto, ...style.textoDireita}}>{`Operação:`}</Text>
                            <Text style={{...style.texto,...style.vermelho}}>{` ${dados.tipo}`}</Text>
                    </View>
        
                </View> 
            </TouchableOpacity> )
    
    return render;
};