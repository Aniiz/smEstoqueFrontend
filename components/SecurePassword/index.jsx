import { Text, View } from 'react-native';
import { style } from './style';
import Checkbox from 'expo-checkbox';

export default ({ secure, eventChange }) => (
  <View style={style.secureContainer}>
    <Text style={style.descriptionSecure}>Visualizar senha</Text>
    <Checkbox
      value={!secure}
      onValueChange={eventChange}
      color={!secure ? '#3D5A95' : undefined}
    />
  </View>
);

