import { SafeAreaView , View, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';

import Title from "../components/Title"
import InputWithText from '../components/InputWithText';
import  Button from '../components/Button'

import productsEnvio from '../utils/products/productsEnvio';
import productsEdicao from '../utils/products/productsEdicao';
import { retornaData } from '../utils/data';
import historicoEnvio from '../utils/historico/historicoEnvio';
import historicoEdicao from '../utils/historico/historicoEdicao';

import { styles } from "../styles/global-style";

export default function Cadastro({ navigation, route }) { 

    const [nome, setnome] = useState(null);
    const [marca, setmarca] = useState(null);
    const [custo, setcusto] = useState(null);
    const [preco, setpreco] = useState(null);
    const [quantidade, setquantidade] = useState(null);
    const [minimo, setminimo] = useState(null);

    const Edit = route.params.Edit
    const ProdutoEdit = route.params.Produto

    const handleChangeNome = nome => setnome(nome);
    const handleChangeMarca = marca => setmarca(marca);
    const handleChangeCusto = custo => setcusto(custo);
    const handleChangePreco = preco => setpreco(preco);
    const handleChangeQuantidade = quantidade => setquantidade(quantidade);
    const handleChangeMinimo = minimo => setminimo(minimo)

    const loadData = () => {
        setnome(ProdutoEdit.nome)
        setmarca(ProdutoEdit.marca)
        setcusto(String(ProdutoEdit.custo))
        setpreco(String(ProdutoEdit.preco))
        setquantidade(String(ProdutoEdit.quantidade))
        setminimo(ProdutoEdit.minimo)
    }

    useEffect(() => navigation.addListener('focus', () => {
        if(Edit) loadData()
      }));

    const Postdata = async () => {
        const data = retornaData()
        const resp = await productsEnvio(quantidade, nome, marca, custo, preco, minimo)
        if(resp) {
            const hist = await historicoEnvio(resp.id, nome, quantidade, custo, preco, 'Entrada', data, marca)
            if(hist) return navigation.navigate('Home')
        }
    }

    const Putdata = async () => {
        const resp = await productsEdicao(ProdutoEdit.id, quantidade, nome, marca, custo, preco.replace(',', ''), minimo)
        if(resp) {
            const hist = await historicoEdicao(ProdutoEdit.id, nome)
            if(hist) return navigation.navigate('Home')  
        }
    }
    
    const novoProduto = (
        <ScrollView style={styles.container}>
            
            <Title  marginRight={'auto'} marginleft={'6%'} marginTop={'15%'}
             fontsize={22} text={'Adição de produto'}/>

            <View style={styles.containerwhitepages}>
                
                <InputWithText text={'Nome'} val={nome} eventChange={handleChangeNome}/>
                <InputWithText text={'Marca'} val={marca} eventChange={handleChangeMarca}/>
                <InputWithText type={'money'} text={'Valor de compra'} val={custo} eventChange={handleChangeCusto}/>
                <InputWithText type={'money'} text={'Preço'} val={preco} eventChange={handleChangePreco}/>
                <InputWithText type={'only-numbers'} text={'Quantidade'} val={quantidade} eventChange={handleChangeQuantidade}/>
                <InputWithText type={'only-numbers'} text={'Estoque Minimo'} val={minimo} eventChange={handleChangeMinimo}/>

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
       </ScrollView>
    )
   
    const editProduto = (
        <ScrollView style={styles.container}>
            
            <Title w marginRight={'auto'} marginleft={'6%'} marginTop={'15%'} 
            fontsize={22} text={'Edição de produto'}/>

            <View style={styles.containerwhitepages}>
                
                <InputWithText text={'Nome'} val={nome} eventChange={handleChangeNome}/>
                <InputWithText text={'Marca'} val={marca} eventChange={handleChangeMarca}/>
                <InputWithText type={'money'} text={'Valor de compra'} val={custo} eventChange={handleChangeCusto}/>
                <InputWithText type={'money'} text={'Preço'} val={preco} eventChange={handleChangePreco}/>
                <InputWithText tyoe={'only-numbers'}text={'Quantidade'} val={quantidade} eventChange={handleChangeQuantidade}/>
                <InputWithText type={'only-numbers'} text={'Estoque Minimo'} val={minimo} eventChange={handleChangeMinimo}/>

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
       </ScrollView>
    )
    if(Edit) return editProduto;
    return novoProduto;
}