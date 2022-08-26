import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FlashMessage from "react-native-flash-message";
import { styles } from './styles/global-style';
import Login from "./pages/Login";
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Operacao from './pages/Operacao';


const Stack = createStackNavigator();
const options = {
  headerStyle: styles.hearderStyle,
  headerTintColor: styles.headerTintColor
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={options}>
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
        <Stack.Screen name="Cadastro" options={{ headerShown: false }} component={Cadastro} />
        <Stack.Screen name="Operacao" options={{ headerShown: false }} component={Operacao} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>

  );
}