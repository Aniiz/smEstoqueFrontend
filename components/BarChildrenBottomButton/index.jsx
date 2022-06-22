import { TouchableOpacity, Text } from "react-native";
import { style } from "./style";

export default ({ text, eventPress }) => (
  <TouchableOpacity onPress={eventPress} style={style.barchildrenbottombuttom} >
    <Text style={style.textaling}>{text}</Text>
  </TouchableOpacity>
);