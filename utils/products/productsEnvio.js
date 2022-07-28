import productsPost from "./requests/productsPost";
import { showMessage } from "react-native-flash-message";
import { styles } from "../../styles/global-style"
export default productsEnvio = ( quantidade, nome, marca, custo, preco) => {
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
    return console.log('Enviado'), productsPost(Number(quantidade), nome, marca, custo, preco );
};