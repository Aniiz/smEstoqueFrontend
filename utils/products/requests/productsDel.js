import { urlLan } from "../../../config/config.json"
export default productsDel = async (id) => {
    const respostaproducts = await fetch(`${urlLan}deleteProduct/${id}`, {
        method: 'delete',
      });
    return await respostaproducts.json();
};