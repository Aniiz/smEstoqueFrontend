import productsPut from "./requests/productsPut";
import { showMessage } from "react-native-flash-message";
import {styles} from "../../styles/global-style"
export default productsEdicao = (id, quantidade, nome, marca, custo, preco) => {
    let erromsg = (description) => {
        showMessage({
            message: "Atenção!",
            description: `Preencha o campo ${description}`,
            type: "danger",
            style: styles.flashMessage
        });
    };  
    
    return console.log('Qtd editada.'), productsPut(id, Number(quantidade), nome, marca, custo, preco );
};