import { styles } from "../styles/global-style";
import { SafeAreaView , View} from 'react-native';
import { useState } from "react";

import  Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon';
import VitrineProdutos from '../components/VitrineProdutos';
import CheckOperacao from "../components/CheckOperacao";

import productsDel from '../utils/products/requests/productsDel';
import productsQtdEdit from "../utils/products/productsQtdEdit";
import historicoDel from "../utils/historico/requests/historicoDel"
import historicoPost from "../utils/historico/requests/historicoPost"

export default function Cadastro({ navigation , route }) { 
    const [check, setcheck] = useState(false)
    const [QtdUpdate , setQtdupdate] = useState(null)
    const ProdutoEnviado =  route.params

    const handleCheck = () => setcheck(!check); 
    const handleEditProduct = () => navigation.navigate('Cadastro', {'Edit' : true, 'Produto': ProdutoEnviado });
    const handleQtd = qtdUpdate => setQtdupdate(qtdUpdate);
    
    const handleUpdateQtd = () => {
        if(check){ 
            const qtdAtualizada = ProdutoEnviado.quantidade-QtdUpdate

            const hist = historicoPost(ProdutoEnviado.id, ProdutoEnviado.nome, 
                QtdUpdate, ProdutoEnviado.preco, 'Baixa')
            if(hist){
                const resp = productsQtdEdit(ProdutoEnviado.id, qtdAtualizada, ProdutoEnviado.nome,
                    ProdutoEnviado.marca, ProdutoEnviado.custo, ProdutoEnviado.preco);
                if(resp) navigation.navigate('Home')
            }   
        }
    }

    const handleDeleteProducts = async () => {
        const hist = await historicoDel(ProdutoEnviado.id)
        if(hist){
            const resp = await productsDel(ProdutoEnviado.id)
            if(resp) return navigation.navigate('Home')
        }
    };

    return (
       <SafeAreaView style={styles.container}>
                <View style={styles.containerwhitepages}>
                    
                    <View style={styles.containerRow}>
                        <ButtonIcon eventPress={handleEditProduct} 
                            src={require('../assets/pencil.png')}
                            marginTop={'15%'} marginleft={'auto'} marginright={30}
                        />
                        <ButtonIcon  
                            src={require('../assets/CloseButton.png')}
                            eventPress={handleDeleteProducts} 
                            marginTop={'15%'} marginright={20}
                        />
                    </View>
                    
                    <VitrineProdutos 
                        id={ProdutoEnviado.id}
                        nome={ProdutoEnviado.nome} 
                        marca={ProdutoEnviado.marca}
                        quantidade={ProdutoEnviado.quantidade}
                        valor={ProdutoEnviado.custo}
                        preço={ProdutoEnviado.preco}
                    />                    
                    
                    <CheckOperacao
                        eventCheck={handleCheck}
                        check={check}
                        eventChange={handleQtd}
                        val={QtdUpdate}
                        maxLength={15}
                    />
                   
                    <View style={[styles.containerwhitepagesbuttons]}>
                       
                        <Button 
                            text={"Cancelar"} 
                            eventPress={() => {navigation.navigate('Home')}}
                            width={'40%'}
                            height={50}
                            margin={0}
                            backgroundColor={'#B8B8B8'}
                        />
                        <Button 
                            text={"Concluir"} 
                            eventPress={handleUpdateQtd}
                            width={'40%'}
                            height={50}
                            margin={0}
                            right={0}
                            positon={'absolute'}
                        />
                    </View>
                </View>
       </SafeAreaView>
    );
}