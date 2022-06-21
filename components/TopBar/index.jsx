import { Text, View, TouchableOpacity } from 'react-native';
import { style } from './style';

export default () => ( 
    <View style={style.topbar}>
        
        <View style={style.barchildren}>
            <Text  style={[style.textaling, style.text, {fontWeight: "bold" , fontSize: 25 , marginLeft: 10}]}> smEstoque </Text>
        </View>
       
    </View>
     // Add botões de pesquisa, filtro , e configurações.
  );