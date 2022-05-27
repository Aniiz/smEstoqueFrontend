import React, { useState } from "react";
import { Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { styles } from './styles/global-style';
import { url } from './config/config.json';

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [temp, setTemp] = useState("");

  const handleChangeEmail = email => setEmail(email);
  const handleChangeSenha = senha => setSenha(senha);

  const sendForm = async () => {
    const request = await fetch(`${url}login`, {
      method: "POST",
      headers: { "Content-type": "application/json;charset=UTF-8" },
      body: JSON.stringify({ email, senha })
    });
    const res = await request.json();
    setTemp(String(res));
  }



  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Login SM Estoque</Text>
      </View>

      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={handleChangeSenha}
          value={senha}
          placeholder="Senha..."
          maxLength={30}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={sendForm}
        >
          <Text>Login</Text>
        </TouchableOpacity>
      </SafeAreaView>
      <Text style={styles.text}>{temp}</Text>
    </View>
  );
}


