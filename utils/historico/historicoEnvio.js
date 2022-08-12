import historicoPost from "./requests/historicoPost";
export default historicoEnvio = ( produto_id, nome, quantidade, valor, preco, tipo, data ) => {

    return console.log('Enviado'), historicoPost( produto_id, nome, quantidade, Number(valor.replace(',','')), Number(preco.replace(',','')), tipo, data );
};