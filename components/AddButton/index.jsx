import { style } from "./style";
import {View, TouchableOpacity } from "react-native";

export default ({eventPress}) =>(
    <TouchableOpacity style={style.container} onPress={eventPress}>
        <View style={[style.bar, {top: '25%'}]}/>
        <View style={[style.bar, {transform: [{ rotate: "90deg" }], top: '-25%'}]}/>
    </TouchableOpacity>
);