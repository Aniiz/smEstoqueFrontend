import { TouchableOpacity, Text } from "react-native";
import { style } from "./style";

export default ({ text, eventPress }) => (
  <TouchableOpacity
    style={style.button}
    onPress={eventPress}
  >
    <Text style={style.btnText}>{text}</Text>
  </TouchableOpacity>
);