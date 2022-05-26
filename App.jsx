import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles/global-style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


