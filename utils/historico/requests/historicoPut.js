import { urlLan } from "../../../config/config.json"
export default productsPut = async (produto_id, nome) => {
    const respostaHistorico = await fetch(`${urlLan}updateHistorico`, {
        method: 'PUT',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ produto_id, nome })
      });
    return await respostaHistorico.json();
};
