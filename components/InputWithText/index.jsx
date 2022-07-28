import { TextInput, Text, View } from "react-native";
import { style } from './style';

export default ({ val, eventChange, placeholder, secure, maxLength, text }) => (
  <View style={style.container}>
      <Text style={style.text}>{text}</Text>
      <TextInput
        style={style.input}
        onChangeText={eventChange}
        value={val}
        placeholder={placeholder}
        maxLength={maxLength}
        secureTextEntry={secure}/>
  </View>
);
