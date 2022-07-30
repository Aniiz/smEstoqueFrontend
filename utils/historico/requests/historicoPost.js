import { urlLan } from "../../../config/config.json"
export default historicoPost = async (produto_id, nome, quantidade, valor, tipo) => {
    const respostaHistorico = await fetch(`${urlLan}insertHistorico`, {
        method: 'POST',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ produto_id, nome, quantidade, valor, tipo })
      });
    return await respostaHistorico.json();
};