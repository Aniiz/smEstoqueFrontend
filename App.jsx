import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Login from "./pages/Login";
import Home from './pages/Home';
import { createStackNavigator } from '@react-navigation/stack'
import { styles } from './styles/global-style';
import FlashMessage from "react-native-flash-message";

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

        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />

      </Stack.Navigator>

      <FlashMessage position="top" />
    </NavigationContainer>

  );
}






