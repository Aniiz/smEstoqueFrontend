import { View, Text } from "react-native";
import Checkbox from 'expo-checkbox';
import { style } from "./style";
import { colors } from "../../styles/global-style";
import { TextInputMask } from 'react-native-masked-text'

export default ({ check ,eventCheck ,eventChange , val, type , tipoOperacao, maxLength, baixa, produto }) => {
    let render;
    let Tvenda;
    let lucro = '000'

    if(produto.preco*val == 0) Tvenda = '000'
    else Tvenda = String(produto.preco*val)

    if(Tvenda && Tvenda != 0 ) lucro = String( Tvenda - produto.custo * val)


    baixa ? render = ( 
        <View style={style.container}>  
            <View style={style.row}>
                <Checkbox
                    style={style.check}
                    value={check}
                    onValueChange={eventCheck}
                    color={check ? colors.blue : undefined}
                />
                <Text style={style.tittle}>{tipoOperacao}</Text>
            </View>

            <View  style={{...style.row, paddingTop: '5%'}}> 
                <Text style={style.text}>Quantidade: </Text>
                <TextInputMask
                    type={type}
                    maxLength={maxLength}
                    style={style.input}
                    onChangeText={eventChange}
                    value={val}
                    options={{
                        maskType: 'BRL',
                        precision: 2,
                        separator: ',',
                        unit: '',
                    }}
                />
            </View>
            <View>
                <Text style={style.text}>Valor total da venda: R$ {Tvenda.substring(0,Tvenda.length-2)+','+Tvenda.substring(Tvenda.length-2, Tvenda.length)}</Text>
                <Text style={style.text}>Lucro: R$ {lucro.substring(0,lucro.length-2)+','+lucro.substring(lucro.length-2, lucro.length)}</Text>
            </View>
        </View>)
    : 
    render = ( 
        <View style={style.container}>  
            <View style={style.row}>
                <Checkbox
                    style={style.check}
                    value={check}
                    onValueChange={eventCheck}
                    color={check ? colors.blue : undefined}
                />
                <Text style={style.tittle}>{tipoOperacao}</Text>
            </View>

            <View  style={{...style.row, paddingTop: '5%'}}> 
                <Text style={style.text}>Quantidade: </Text>
                <TextInputMask
                    type={type}
                    maxLength={maxLength}
                    style={style.input}
                    onChangeText={eventChange}
                    value={val}
                    options={{
                        maskType: 'BRL',
                        precision: 2,
                        separator: ',',
                        unit: '',
                    }}
                />
            </View>
        </View>) 

    return render;
};