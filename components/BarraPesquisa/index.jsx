import { TextInput, View, TouchableOpacity} from 'react-native';
import { style } from './style';

export default ({ val, eventChange, eventPress }) => (
  <View style={style.containerPesquisa} >
    <TextInput style={style.text} 
      placeholder={'Pesquisa por nome ou Id'}
      onChangeText={eventChange}
      value={val}
    />

    <TouchableOpacity 
      style={style.botao}
      onPress={eventPress}
    /> 
  </View>
);