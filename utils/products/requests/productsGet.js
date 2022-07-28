import { urlLan } from "../../../config/config.json"
export default productsGet = async () => {
    const respostaproducts = await fetch(`${urlLan}products`);
    return await respostaproducts.json();
};