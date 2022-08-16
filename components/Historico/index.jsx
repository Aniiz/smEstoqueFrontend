import { View, Text, Image , TouchableOpacity } from 'react-native';
import { style } from './style';

export default ({dados, event}) => {
    let render;
    const tipo = dados.tipo
    const valor = String(dados.valor)
    const preco = String(dados.preco)
    const totalValor = String(dados.valor*dados.quantidade)
    const totalPreco = String(dados.preco*dados.quantidade)

    tipo == 'Entrada' ? 
        render = (
            <TouchableOpacity style={style.container} onPress={event}>     
                <View style={style.Containerimg}>
                    <Image source={require('../../assets/historico.png')} style={style.img}/>       
                </View>
        
                <View style={style.Containertexto}>
                
                    <Text style={style.titulo}>{dados.nome}</Text>
                    <Text style={style.texto}>{`Marca: ${dados.marca}`}</Text>
                    <Text style={style.texto}>{`Data: ${dados.data}`}</Text>
                    <Text style={style.texto}>{`Quantidade: ${dados.quantidade}`}</Text>
                    <Text style={style.texto}>
                        {`Valor unitário: R$ ${valor.substring(0,valor.length-2) + ',' + valor.substring(valor.length-2, valor.length)}`}
                    </Text>
                    
                    <View style={style.row}>
                        <Text style={style.texto}>
                            {`Total: R$ ${totalValor.substring(0,totalValor.length-2) + ',' + totalValor.substring(totalValor.length-2, totalValor.length)}`}
                        </Text>
                    </View>
                    <View style={style.row}>
                        <Text style={{...style.texto, ...style.textoDireita}}>{`Operação:`}</Text>
                        <Text style={{...style.texto,...style.verde}}>{` ${dados.tipo}`}</Text>
                    </View>
        
                </View>
            </TouchableOpacity> )  
        :
        render = (
            <TouchableOpacity style={style.container} onPress={event}>           
                <View style={style.Containerimg}>
                    <Image source={require('../../assets/historico.png')} style={style.img}/>       
                </View>
        
                <View style={style.Containertexto}>
                
                    <Text style={style.titulo}>{dados.nome}</Text>
                    <Text style={style.texto}>{`Marca: ${dados.marca}`}</Text>
                    <Text style={style.texto}>{`Data: ${dados.data}`}</Text>
                    <Text style={style.texto}>{`Quantidade: ${dados.quantidade}`}</Text>
                    <Text style={style.texto}>
                        {`Preço unitário: R$ ${preco.substring(0,preco.length-2) + ',' + preco.substring(preco.length-2, preco.length)}`}
                    </Text>
                    
                    <View style={style.row}>
                        <Text style={style.texto}>
                            {`Total: R$ ${totalPreco.substring(0,totalPreco.length-2) + ',' + totalPreco.substring(totalPreco.length-2, totalPreco.length)}`}
                        </Text>
                    </View>
                    <View style={style.row}>
                        <Text style={{...style.texto, ...style.textoDireita}}>{`Operação:`}</Text>
                        <Text style={{...style.texto,...style.vermelho}}>{` ${dados.tipo}`}</Text>
                    </View>
                </View> 
            </TouchableOpacity>);
    
    return render;
};