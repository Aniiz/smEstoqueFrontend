import { SafeAreaView , View} from 'react-native';
import { useState, useEffect } from 'react';

import Title from "../components/Title"
import InputWithText from '../components/InputWithText';
import  Button from '../components/Button'

import productsEnvio from '../utils/products/productsEnvio';
import productsEdicao from '../utils/products/productsEdicao';

import { styles } from "../styles/global-style";

export default function Cadastro({ navigation, route }) { 

    const [nome, setnome] = useState(null);
    const [marca, setmarca] = useState(null);
    const [custo, setcusto] = useState(null);
    const [preco, setpreco] = useState(null);
    const [quantidade, setquantidade] = useState(null);
    const Edit = route.params.Edit
    const ProdutoEdit = route.params.Produto

    const handleChangeNome = nome => setnome(nome);
    const handleChangeMarca = marca => setmarca(marca);
    const handleChangeCusto = custo => setcusto(custo);
    const handleChangePreco = preco => setpreco(preco);
    const handleChangeQuantidade = quantidade => setquantidade(quantidade);

    const loadData = () => {
        setnome(ProdutoEdit.nome)
        setmarca(ProdutoEdit.marca)
        setcusto(String(ProdutoEdit.custo))
        setpreco(String(ProdutoEdit.preco))
        setquantidade(String(ProdutoEdit.quantidade))
    }

    useEffect(() => navigation.addListener('focus', () => {
        if(Edit) loadData()
      }));

    const Postdata = async () => {
        const resp = await productsEnvio(quantidade, nome, marca, custo, preco)
        if(resp) return navigation.navigate('Home')
    }

    const Putdata = async () => {
        const resp = await productsEdicao(ProdutoEdit.id, quantidade, nome, marca, custo, preco)
        if(resp) return navigation.navigate('Home')  
    }
    
    const novoProduto = (
        <SafeAreaView style={styles.container}>
            
            <Title width={'50%'} marginleft={20} marginTop={60} fontsize={22} text={'Adição de produto'}/>

            <View style={styles.containerwhitepages}>
                
                <InputWithText text={'Nome'} val={nome} eventChange={handleChangeNome}/>
                <InputWithText text={'Marca'} val={marca} eventChange={handleChangeMarca}/>
                <InputWithText text={'Valor de compra'} val={custo} eventChange={handleChangeCusto}/>
                <InputWithText text={'Preço'} val={preco} eventChange={handleChangePreco}/>
                <InputWithText text={'Quantidade'} val={quantidade} eventChange={handleChangeQuantidade}/>
                
                <View style={styles.containerwhitepagesbuttons}>
                    
                    <Button 
                        text={"Cancelar"} 
                        eventPress={() => {navigation.navigate('Home')}}
                        width={'40%'} height={50} margin={0}
                        backgroundColor={'#B8B8B8'}
                    />
                    <Button 
                        text={"Concluir"} 
                        eventPress={Postdata}
                        width={'40%'} height={50} margin={0} positon={'absolute'}
                        right={0}
                    />

                </View>
            </View>
       </SafeAreaView>
    )
   
    const editProduto = (
        <SafeAreaView style={styles.container}>
            
            <Title width={'50%'} marginleft={20} marginTop={60} fontsize={22} text={'Edição de produto'}/>

            <View style={styles.containerwhitepages}>
                
                <InputWithText text={'Nome'} val={nome} eventChange={handleChangeNome}/>
                <InputWithText text={'Marca'} val={marca} eventChange={handleChangeMarca}/>
                <InputWithText text={'Valor de compra'} val={custo} eventChange={handleChangeCusto}/>
                <InputWithText text={'Preço'} val={preco} eventChange={handleChangePreco}/>
                <InputWithText text={'Quantidade'} val={quantidade} eventChange={handleChangeQuantidade}/>
                
                <View style={styles.containerwhitepagesbuttons}>
                    
                    <Button 
                        width={'40%'} height={50} margin={0}
                        backgroundColor={'#B8B8B8'}
                        text={"Cancelar"} 
                        eventPress={() => {navigation.navigate('Home')}}
                    />
                    <Button 
                        width={'40%'} height={50} margin={0} positon={'absolute'}
                        right={0}
                        text={"Concluir"} 
                        eventPress={Putdata}
                    />

                </View>
            </View>
       </SafeAreaView>
    )
    if(Edit) return editProduto;
    return novoProduto;
}