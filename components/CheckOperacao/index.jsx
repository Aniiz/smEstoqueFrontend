import { View, Text } from "react-native";
import Checkbox from 'expo-checkbox';
import { style } from "./style";
import { colors } from "../../styles/global-style";
import { TextInputMask } from 'react-native-masked-text'

export default ({ check ,eventCheck ,eventChange , val, type , tipoOperacao, maxLength }) => (
    
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
    </View>
);