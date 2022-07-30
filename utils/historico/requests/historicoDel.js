import { urlLan } from "../../../config/config.json"
export default historicoDel = async (produto_id) => {
  const respostaDel = await fetch(`${urlLan}deleteHistorico/${produto_id}`, {
        method: 'delete',
      });
    return await respostaDel.json()
};