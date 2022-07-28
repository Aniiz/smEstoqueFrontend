import { TouchableOpacity, Text, Dimensions } from "react-native";
import { style } from "./style";

const widthx = Dimensions.get("screen").width * 0.4;

export default ({ text, eventPress, backgroundColor = "#3D5A95", width = widthx, 
                  height= 60, margin = 40, positon = positon, right = right }) => (
  <TouchableOpacity
    style={[style.button, 
      {backgroundColor: backgroundColor,
        width: width,
        height: height,
        marginTop: margin,
        position: positon,
        right : right}]}
    onPress={eventPress}>
    <Text style={style.btnText}>{text}</Text>
  </TouchableOpacity>
);