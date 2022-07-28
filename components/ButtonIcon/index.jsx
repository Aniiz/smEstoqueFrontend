import { TouchableOpacity, Image} from "react-native";
import { style } from "./style";


export default ({eventPress, src , marginleft, marginright, marginTop}) => {
    let render;
    src ? render = (
    <TouchableOpacity style={{...style.container, marginLeft: marginleft,
    marginRight: marginright, marginTop: marginTop}} onPress={eventPress}>
        <Image 
            style={style.img} 
            source={src}/>
    </TouchableOpacity>  ) : render = (
        <TouchableOpacity style={style.container}/>
    )
    return render;
};