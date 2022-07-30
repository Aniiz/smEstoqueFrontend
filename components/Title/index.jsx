import { Text, View } from 'react-native';
import { style } from './style';

export default ({ text, fontsize, marginTop, marginleft, paddingRight, width, marginRight}) => (
  <View style={{ width: width,marginRight: marginRight, marginLeft: marginleft, marginTop: marginTop,
      paddingRight: paddingRight}}>

    <Text style={{...style.text, fontSize: fontsize}}>{text}</Text>
  </View>
);

