import productsPut from "./requests/productsPut";
import { showMessage } from "react-native-flash-message";
import {styles} from "../../styles/global-style"
export default productsEdicao = (id, quantidade, nome, marca, custo, preco, minimo) => {
    let erromsg = (description) => {
        showMessage({
            message: "Atenção!",
            description: `Preencha o campo ${description}`,
            type: "danger",
            style: styles.flashMessage
        });
    };  

    if(nome == null || nome == '') return erromsg('Nome');
    if(marca == null || marca == '') return erromsg('Marca');
    if(custo == null || custo == '') return erromsg('Valor de compra');
    if(quantidade == null || quantidade == '') return erromsg('Quanditade');
    if(preco == null || preco == '') return erromsg('Preco');
    if(minimo == null || minimo == '') return erromsg('Estoque Minimo');
    if(minimo == 0) return erromsg(null, 'Estoque Minimo');
    return console.log('Editado'), productsPut(id, Number(quantidade), nome, marca, custo.replace(',', '').replace(/\./g, ""), preco.replace(',', '').replace(/\./g, ""), minimo);
};