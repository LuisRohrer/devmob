import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';

export default function Senha({ navigation }) {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePasswordRecovery = () => {
    if (!username) {
      Alert.alert('Erro', 'Por favor, insira seu nome de usuário');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      Alert.alert(`Nova senha enviada para ${username}`);
      setLoading(false);
      navigation.navigate('Login');
    }, 2000); // Simula um processo de recuperação de senha
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Recuperar Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          value={username}
          onChangeText={setUsername}
        />
        <Button
          title={loading ? 'Enviando...' : 'Recuperar Senha'}
          onPress={handlePasswordRecovery}
          disabled={loading}
        />
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          Voltar para o Login
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
  },
  container: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',// Para Android
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  link: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
