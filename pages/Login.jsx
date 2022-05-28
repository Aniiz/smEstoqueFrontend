import React, { useState } from "react";
import 'react-native-gesture-handler';
import { url } from '../config/config.json';
import { View, SafeAreaView } from 'react-native';
import { styles } from '../styles/global-style';
import Title from "../components/Title";
import Button from "../components/Button";
import Input from "../components/Input";
import { showMessage } from "react-native-flash-message";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleChangeEmail = email => setEmail(email);
  const handleChangeSenha = senha => setSenha(senha);

  const sendForm = async () => {
    const request = await fetch(`${url}login`, {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({ email, senha })
    });
    const res = await request.json();
    if (res) {
      showMessage(
        {
          message: "Sucesso!",
          description: "Login efetuado.",
          type: "success",
          style: styles.flashMessage
        }
      )
      navigation.navigate('Home');
    } else showMessage({
      message: "Recusado!",
      description: "E-mail ou senha inválido(a)!",
      type: "danger",
      style: styles.flashMessage
    });
  }



  return (
    <View style={styles.container}>
      <Title text="SM Estoque" />

      <SafeAreaView style={styles.containerLogin}>
        <Input
          val={email}
          eventChange={handleChangeEmail}
          maxLength={80}
          secure={false}
          placeholder="E-mail..."
        />

        <Input
          val={senha}
          eventChange={handleChangeSenha}
          maxLength={30}
          secure={true}
          placeholder="Senha..."
        />


        <Button text={"Entrar"} eventPress={sendForm} />
      </SafeAreaView>

    </View>
  );
}

