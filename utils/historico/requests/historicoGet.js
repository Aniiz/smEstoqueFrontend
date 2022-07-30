import { urlLan } from "../../../config/config.json"
export default historicoGet = async () => {
    const respostaGet = await fetch(`${urlLan}historico`);
    return await respostaGet.json();
};