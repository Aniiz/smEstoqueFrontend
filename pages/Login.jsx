import 'react-native-gesture-handler';
import React, { useState } from "react";
import { SafeAreaView, Image, Text, View } from 'react-native';
import SecurePassword from "../components/SecurePassword";
import { styles } from '../styles/global-style';
import Button from "../components/Button";
import Input from "../components/Input";
import Logando from '../utils/login/Logando';

export default function Login({ navigation }) {

  const [Email, setEmail] = useState("");
  const [Senha, setSenha] = useState("");
  const [Secure, setSecure] = useState(true);

  const handleChangeEmail = email => setEmail(email);
  const handleChangeSenha = senha => setSenha(senha);

  const sendForm = async () => {
    const resp = await Logando(Email, Senha)
    if(resp) return navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCentralize}>
        <Image
          source={require('../assets/logonova.png')}
          style={{ width: 150, height: 150, marginBottom: 10 }}
        />
        <Text style={styles.titleapp}>smEstoque</Text>
        <Input
          val={Email}
          eventChange={handleChangeEmail}
          maxLength={80}
          secure={false}
          placeholder="E-mail..."
        />
        <Input
          val={Senha}
          eventChange={handleChangeSenha}
          maxLength={30}
          secure={Secure}
          placeholder="Senha..."
        />
        <SecurePassword secure={Secure} eventChange={() => setSecure(!Secure)} />
        <Button text={"Entrar"} eventPress={sendForm}/>
      </View>
    </SafeAreaView>
  );
}


