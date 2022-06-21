import React, { useState } from "react";
import 'react-native-gesture-handler';
import { View, SafeAreaView} from 'react-native';
import TopBar from "../components/TopBar";
import TopBarBottom from "../components/TopBarBottom";


export default function Home({ navigation }) {
  return (

    <SafeAreaView>
      
      <TopBar/>
      <TopBarBottom/>

    </SafeAreaView>
  );
}