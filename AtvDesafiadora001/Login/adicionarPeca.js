import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function adicionarPeca({ navigation }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [code, setCode] = useState('');

  const handleAddItem = () => {
    alert(`Peça adicionada: ${name}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Adicionar Peça</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome da Peça"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        <TextInput
          style={styles.input}
          placeholder="Código da Peça"
          value={code}
          onChangeText={setCode}
        />
        <Button title="Adicionar" onPress={handleAddItem} />
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
    elevation: 5,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
});
