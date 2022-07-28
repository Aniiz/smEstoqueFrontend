import { urlLan } from "../../../config/config.json"
export default productsPut = async (id, quantidade, nome, marca, custo, preco) => {
    const respostaproducts = await fetch(`${urlLan}updateProduct`, {
        method: 'PUT',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ id, quantidade, nome, marca, custo, preco })
      });
    return await respostaproducts.json();
};