import userLogin from "./resquests/userLogin";
import { showMessage } from "react-native-flash-message";
import { styles } from "../../styles/global-style";
export default Logando = async (email, senha) => {
    const respostaLogin = await userLogin(email , senha)
    if (respostaLogin) {
        showMessage(
          {
            message: "Sucesso!",
            description: "Login efetuado.",
            type: "success",
            style: styles.flashMessage
          }
        )
        return respostaLogin;
      } else 
      showMessage(
            {
                message: "Recusado!",
                description: "E-mail ou senha inválido(a)!",
                type: "danger",
                style: styles.flashMessage
            }
        )
    return false
};
