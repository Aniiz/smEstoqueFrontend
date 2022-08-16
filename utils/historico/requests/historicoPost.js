import { urlLan } from "../../../config/config.json"
export default historicoPost = async (produto_id, nome, quantidade, valor, preco, tipo, data, marca) => {
  const respostaHistorico = await fetch(`${urlLan}insertHistorico`, {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({ produto_id, nome, quantidade, valor, preco, tipo, data, marca })
    });
  return await respostaHistorico.json();
};