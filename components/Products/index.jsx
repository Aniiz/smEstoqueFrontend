import { View, Text, Image , TouchableOpacity } from 'react-native';
import { style } from './style';

export default ({produto, event}) => {  
    let render;
    let Valor = String(produto.preco)
    let TotalEstoque = String(produto.quantidade * produto.preco)
    
    produto.quantidade <= produto.minimo ?  
    render =  (
        <TouchableOpacity style={style.container} onPress={event}>
            <View style={style.Containerimg}>
                <Image source={require('../../assets/box.png')} style={style.img}/>       
            </View>
            
            <View style={style.Containertexto}>
                <Text style={style.titulo}>{produto.nome}</Text>
                <Text style={style.texto}>{`Marca: ${produto.marca}`}</Text>
                <Text style={style.texto}>{`Quantidade: ${produto.quantidade}`}</Text>
                <Text style={style.texto}>
                    {`Valor de venda: R$ ${Valor.substring(0,Valor.length-2) + ',' + Valor.substring(Valor.length-2, Valor.length)}`}
                </Text>
                <Text  style={style.texto} >{`Total em Estoque: R$ ${TotalEstoque.substring(0,TotalEstoque.length-2) + ',' + TotalEstoque.substring(TotalEstoque.length-2, TotalEstoque.length)}`}</Text>
                <Text  style={style.textoAlert} >Fazer Pedido</Text>
            </View>
        </TouchableOpacity>
    )
    :
    render =  (
        <TouchableOpacity style={style.container} onPress={event}>
            <View style={style.Containerimg}>
                <Image source={require('../../assets/box.png')} style={style.img}/>       
            </View>
            
            <View style={style.Containertexto}>
                <Text style={style.titulo}>{produto.nome}</Text>
                <Text style={style.texto}>{`Marca: ${produto.marca}`}</Text>
                <Text style={style.texto}>{`Quantidade: ${produto.quantidade}`}</Text>
                <Text style={style.texto}>
                    {`Valor de venda: R$ ${Valor.substring(0,Valor.length-2) + ',' + Valor.substring(Valor.length-2, Valor.length)}`}
                </Text>
                <Text  style={style.texto} >{`Total em Estoque: R$ ${TotalEstoque.substring(0,TotalEstoque.length-2) + ',' + TotalEstoque.substring(TotalEstoque.length-2, TotalEstoque.length)}`}</Text>
            </View>
        </TouchableOpacity>
    )
    
    return render;
};