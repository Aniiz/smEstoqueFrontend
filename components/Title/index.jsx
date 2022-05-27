import { Text, View } from 'react-native';
import { style } from './style';

export default ({ text }) => (
  <View>
    <Text style={style.text}>{text}</Text>
  </View>
);

