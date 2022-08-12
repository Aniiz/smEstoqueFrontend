import { styles } from "../styles/global-style";
import { View } from 'react-native';
import { useState } from "react";

import  Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon';
import VitrineProdutos from '../components/VitrineProdutos';
import CheckOperacao from "../components/CheckOperacao";

import productsDel from '../utils/products/requests/productsDel';
import productsQtdEdit from "../utils/products/productsQtdEdit";
import historicoDel from "../utils/historico/requests/historicoDel"
import historicoPost from "../utils/historico/requests/historicoPost"
import { retornaData } from "../utils/data";
import { ScrollView } from "react-native-gesture-handler";

export default function Cadastro({ navigation , route }) { 
    const [checkBaixa, setcheckBaixa] = useState(false);
    const [checkEntrada, setcheckEntrada] = useState(false);
    const [QtdUpdateBaixa , setQtdupdateBaixa] = useState(null);
    const [QtdUpdateEntrada, setQtdUpdateEntrada] = useState(null);
    const ProdutoEnviado =  route.params

    const handleCheckBaixa = () => { setcheckBaixa(!checkBaixa); setcheckEntrada(false) }
    const handleCheckEntrada = () =>{ setcheckEntrada(!checkEntrada); setcheckBaixa(false) }

    const handleEditProduct = () => navigation.navigate('Cadastro', {'Edit' : true, 'Produto': ProdutoEnviado });
    const handleQtdBaixa = qtdUpdate => { 
        if(qtdUpdate > ProdutoEnviado.quantidade) return setQtdupdateBaixa(ProdutoEnviado.quantidade)
        setQtdupdateBaixa(qtdUpdate)
    }
    const handleQtdEntrada = qtdUpdate => setQtdUpdateEntrada(qtdUpdate);
    
    const handleUpdateQtd = () => {
        const data = retornaData()
        if(checkBaixa){ 
            const qtdAtualizada = ProdutoEnviado.quantidade-Number(QtdUpdateBaixa)

            const hist = historicoPost(ProdutoEnviado.id, ProdutoEnviado.nome, 
                QtdUpdateBaixa, ProdutoEnviado.custo ,  ProdutoEnviado.preco, 'Baixa', data)
            if(hist){
                const resp = productsQtdEdit(ProdutoEnviado.id, qtdAtualizada, ProdutoEnviado.nome,
                    ProdutoEnviado.marca, ProdutoEnviado.custo, ProdutoEnviado.preco);
                if(resp) navigation.navigate('Home')
            } 
        }

        if(checkEntrada){
            const qtAtualizada = ProdutoEnviado.quantidade+Number(QtdUpdateEntrada)

            const hist = historicoPost(ProdutoEnviado.id, ProdutoEnviado.nome, 
                QtdUpdateEntrada, ProdutoEnviado.custo, ProdutoEnviado.preco, 'Entrada', data)
            if(hist){
                const resp = productsQtdEdit(ProdutoEnviado.id, qtAtualizada, ProdutoEnviado.nome,
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
       <ScrollView style={styles.container}>
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
                        preco={ProdutoEnviado.preco}
                    />                    
                    
                    <View style={styles.containerCentralize}>
                        <CheckOperacao
                            eventCheck={handleCheckBaixa}
                            tipoOperacao={'Operar Baixa'}
                            check={checkBaixa}
                            eventChange={handleQtdBaixa}
                            val={QtdUpdateBaixa}
                            maxLength={String(ProdutoEnviado.quantidade).length}
                            type={'only-numbers'}
                        />

                        <CheckOperacao
                            eventCheck={handleCheckEntrada}
                            tipoOperacao={'Operar Entrada'}
                            check={checkEntrada}
                            eventChange={handleQtdEntrada}
                            val={QtdUpdateEntrada}
                            maxLength={15}
                            type={'only-numbers'}
                        />
                    </View>
                   
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
       </ScrollView>
    );
}