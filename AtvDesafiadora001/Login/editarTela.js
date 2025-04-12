import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function editarPeca({ route, navigation }) {
  const { itemId } = route.params;
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    // Simula buscar a quantidade da peça pelo ID
    setQuantity('10'); // Quantidade original como string
  }, [itemId]);

  const handleEditItem = () => {
    alert(`Quantidade da peça editada para: ${quantity}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Editar Peça</Text>
        <TextInput
          style={styles.input}
          placeholder="Quantidade"
          keyboardType="numeric"
          value={quantity}
          onChangeText={setQuantity}
        />
        <Button title="Salvar" onPress={handleEditItem} />
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
    elevation: 5, // sombra para Android
    shadowColor: '#000', // sombra para iOS
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
