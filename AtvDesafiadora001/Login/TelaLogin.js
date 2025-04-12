import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TelaLogin({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicado');
    if (username === 'admin' && password === '1234') {
      navigation.navigate('Estoque');
    } else {
      alert('Credenciais incorretas');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Entrar" onPress={handleLogin} />
        <Text style={styles.link} onPress={() => navigation.navigate('RecuperarSenha')}>
          Esqueceu a senha?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',     // Centraliza horizontalmente
    backgroundColor: '#D3D3D3',
  },
  box: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5, // Android
    shadowColor: '#000', // iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  link: {
    color: 'blue',
    marginTop: 20,
  },
});
