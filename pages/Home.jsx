import React, { useState } from "react";
import 'react-native-gesture-handler';
import { urlLan } from '../config/config.json';
import { View, SafeAreaView } from 'react-native';
import { styles } from '../styles/global-style';
import Title from "../components/Title";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Title text={"Home"} />
    </View>
  );
}