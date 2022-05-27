import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Login from "./pages/Login";
import Home from './pages/Home';
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from './styles/global-style';

const Stack = createStackNavigator();
const options = {
  headerStyle: styles.hearderStyle,
  headerTintColor: styles.headerTintColor
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRoute="Login"
        screenOptions={options}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}






