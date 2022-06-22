import React, { useRef } from "react";
import 'react-native-gesture-handler';
import { View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import TopBar from "../components/TopBar";
import BarChildrenBottomButton from "../components/BarChildrenBottomButton";
import SwitchScreen from "../components/SwitchScreen";
import { styles } from "../styles/global-style";

export default function Home({ navigation }) {
  const scrollref = useRef(null);
  const { width } = Dimensions.get("screen");
  const handleScroll = x => scrollref.current.scrollTo({ x: x });

  return (
    <>
      <SafeAreaView>
        <View style={styles.topBarContainer}>
          <TopBar />
        </View>
        <View style={styles.barchildrenbottomButtonContainer}>
          <BarChildrenBottomButton text={"Produtos"} eventPress={() => handleScroll(0)} />
          <BarChildrenBottomButton text={"Histórico"} eventPress={() => handleScroll(width)} />
        </View>
      </SafeAreaView>

      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.99}
        ref={scrollref}>

        <SwitchScreen text='Produtos' />
        <SwitchScreen text='Histórico' />
      </ScrollView>
    </>
  );
}