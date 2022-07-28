import { View, Text, TextInput} from "react-native";
import Checkbox from 'expo-checkbox';
import { style } from "./style";
import { colors } from "../../styles/global-style";

export default ({ check ,eventCheck ,eventChange , val, maxLength }) => (
    
    <View style={style.container}>
        
        <View style={style.row}>
            <Checkbox
            style={style.check}
            value={check}
            onValueChange={eventCheck}
            color={check ? colors.blue : undefined}/>
            <Text style={style.tittle}>Realizar baixa</Text>
        </View>

        <View  style={{...style.row, paddingTop: '5%'}}>
            
            <Text style={style.text}>Quantidade: </Text>
            <TextInput 
                style={style.input}
                onChangeText={eventChange}
                value={val}
                maxLength={maxLength}
            />   
        </View>
    </View>
);