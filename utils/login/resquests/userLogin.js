import { urlLan } from "../../../config/config.json"
export default userLogin = async (email, senha) => {
    const respostaLogin = await fetch(`${urlLan}login`, {
      method: 'POST',
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({ email, senha })
    });
    return await respostaLogin.json();
  }