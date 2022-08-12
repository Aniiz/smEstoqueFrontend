import { TextInput, Text, View } from "react-native";
import { TextInputMask } from 'react-native-masked-text'
import { style } from './style';

export default ({ val, eventChange, placeholder, secure, maxLength, text , type = null }) => {
  let render;
  
  type ? 
    render = (
      <View style={style.container}>
          <Text style={style.text}>{text}</Text>
          <TextInputMask
            type={type}
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
      </View> ) 
    :  
    render = (
      <View style={style.container}>
          <Text style={style.text}>{text}</Text>
          <TextInput
            style={style.input}
            onChangeText={eventChange}
            value={val}
            placeholder={placeholder}
            maxLength={maxLength}
            secureTextEntry={secure}
          />
      </View> )

  return render;
};
