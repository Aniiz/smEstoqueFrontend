import React, { useRef , useEffect, useState } from "react";
import { View, SafeAreaView, Dimensions, ScrollView} from 'react-native';

import TopBar from "../components/TopBar";
import BarChildrenBottomButton from "../components/BarChildrenBottomButton";
import SwitchScreen from "../components/SwitchScreen";
import Products from "../components/Products";
import AddButton from "../components/AddButton";
import productsGet from "../utils/products/requests/productsGet";

import { styles } from "../styles/global-style";
import Products404 from "../components/Products404";

export default function Home({ navigation}) {
  const scrollref = useRef(null);
  const { width } = Dimensions.get("screen");
  const [products , setproducts] = useState([])
  
  const handleScroll = x => scrollref.current.scrollTo({ x: x });
  const handleProducts = async () => setproducts(await productsGet());
  const handleNavigateCadastro = () => navigation.navigate('Cadastro', {'Edit' : null, 'Produto': null })

  useEffect(() => {
    handleProducts()
  }, []);

  useEffect(() => navigation.addListener('focus', () => {
    handleProducts()
  }));

  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.switchButtons}>
        <BarChildrenBottomButton text={"Produtos"} eventPress={() => handleScroll(0)} />
        <BarChildrenBottomButton text={"Histórico"} eventPress={() => handleScroll(width)} />
      </View>
      <ScrollView
        horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} 
        decelerationRate={0.99} ref={scrollref}>
        
        <SwitchScreen conteudo={
          products.length > 0 ?  
          products.map((produto) => {
            return <Products
              event={() => navigation.navigate('Operacao', produto)}
              key={produto.id}
              Nome={produto.nome}
              Quantidade={produto.quantidade}
              Valor={produto.preco}
              />
          }) : <Products404 src={require('../assets/Products404.png')}/>
          
         }
        />
          
        <SwitchScreen/>
        
      </ScrollView>
      <AddButton eventPress={handleNavigateCadastro}/>
    </SafeAreaView>
  );
}