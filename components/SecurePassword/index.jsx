import { Text, View } from 'react-native';
import { style } from './style';
import Checkbox from 'expo-checkbox';
import { colors } from '../../styles/global-style';
export default ({ secure, eventChange }) => (
  <View style={style.secureContainer}>
    <Text style={style.descriptionSecure}>Visualizar senha</Text>
    <Checkbox
      value={!secure}
      onValueChange={eventChange}
      color={!secure ? colors.blue : undefined}
    />
  </View>
);

