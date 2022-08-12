import { urlLan } from "../../../config/config.json"
export default historicoPost = async (produto_id, nome, quantidade, valor, preco, tipo, data) => {
  const respostaHistorico = await fetch(`${urlLan}insertHistorico`, {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({ produto_id, nome, quantidade, valor, preco, tipo, data })
    });
  return await respostaHistorico.json();
};