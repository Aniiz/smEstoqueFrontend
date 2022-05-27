import { TextInput } from "react-native";
import { style } from './style';

export default ({ val, eventChange, placeholder, secure, maxLength }) => (
  <TextInput
    style={style.input}
    onChangeText={eventChange}
    value={val}
    placeholder={placeholder}
    maxLength={maxLength}
    secureTextEntry={secure}
  />
);

