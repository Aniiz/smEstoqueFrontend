import { urlLan } from "../../../config/config.json"
export default productsPost = async (quantidade, nome, marca, custo, preco) => {
    const respostaproducts = await fetch(`${urlLan}insertProduct`, {
        method: 'POST',
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({ quantidade, nome, marca, custo, preco })
      });
    return await respostaproducts.json();
};