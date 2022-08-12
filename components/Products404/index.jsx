import { View, Image } from "react-native";
import { style } from "./sytle";

export default ({ src }) => {
    let render;
  
    src ? 
    render = (
      <View style={style.container}>
        <Image style={{...style.image}} source={src} />
      </View>)
      : 
    render = (
        <View style={style.container}></View> );

    return render;
}; 