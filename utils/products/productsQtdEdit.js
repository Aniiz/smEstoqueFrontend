import productsPut from "./requests/productsPut";
import { showMessage } from "react-native-flash-message";
import {styles} from "../../styles/global-style"
export default productsEdicao = (id, quantidade, nome, marca, custo, preco, operacao = false, minimo ) => {
    let erromsg = (description , descriptionNumber) => {
        description ?
            showMessage({
                message: "Atenção!",
                description: `Preencha o campo ${description}.`,
                type: "danger",
                style: styles.flashMessage
            })
        :
            showMessage({
                message: "Atenção!",
                description: `O valor de ${descriptionNumber} deve ser diferente de zero.`,
                type: "danger",
                style: styles.flashMessage
            })
    };

    if(nome == null || nome == '') return erromsg('Nome');
    if(marca == null || marca == '') return erromsg('Marca');
    
    if(custo == null || custo == '') return erromsg('Valor de compra');
    if(String(custo).replace(',', '') == 0) return erromsg(null, 'Compra');
    
    if(preco == null || preco == '') return erromsg('Preco');
    if(String(preco).replace(',', '') == 0) return erromsg(null, 'Preco');
    
    if(quantidade == null || quantidade === '') return erromsg('QTD');
    if(operacao == false) {
        if(quantidade == 0) return erromsg(null, 'Quantidade')
    }

    return console.log('Qtd editada.'), productsPut(id, Number(quantidade), nome, marca, custo, preco, minimo );
};