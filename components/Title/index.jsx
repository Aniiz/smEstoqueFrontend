import { Text, View } from 'react-native';
import { style } from './style';

export default ({ text, fontsize, marginTop, marginleft, width}) => (
  <View style={{ width: width, marginLeft: marginleft, marginTop: marginTop}}>
    <Text style={{...style.text, fontSize: fontsize}}>{text}</Text>
  </View>
);

