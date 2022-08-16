import historicoPost from "./requests/historicoPost";
import { showMessage } from "react-native-flash-message";
import { styles } from "../../styles/global-style"
export default historicoEnvio = ( produto_id, nome, quantidade, valor, preco, tipo, data, marca ) => {
    valor = String(valor)
    preco =  String(preco)
    let erromsg = (description) => {
            showMessage({
                message: "Atenção!",
                description: ` ${description}`,
                type: "danger",
                style: styles.flashMessage
            })};

    if(quantidade == null || quantidade == '') return erromsg('Insira um valor no campo Quantidade.')
    if(quantidade == 0) return erromsg('O valor do campo Quantidade deve ser maior que zero.')
    return console.log('Enviado'), historicoPost( produto_id, nome, quantidade, Number(valor.replace(',','').replace(/\./g, "")), Number(preco.replace(',','').replace(/\./g, "")), tipo, data, marca );
};