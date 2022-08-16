import productsPost from "./requests/productsPost";
import { showMessage } from "react-native-flash-message";
import { styles } from "../../styles/global-style"
export default productsEnvio = ( quantidade, nome, marca, custo, preco, minimo) => {
    let erromsg = (description , descriptionNumber ) => {
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
    
    if(quantidade == null || quantidade == '') return erromsg('Quantidade');
    if(quantidade == 0) return erromsg(null, 'Quantidade');

    if(minimo == null || minimo == '') return erromsg('Estoque Minimo');
    if(minimo == 0) return erromsg(null, 'Estoque Minimo');
    return console.log('Enviado'), productsPost(Number(quantidade), nome, marca, custo.replace(',', '').replace(/\./g, ""), preco.replace(',', '').replace(/\./g, ""), minimo);
};