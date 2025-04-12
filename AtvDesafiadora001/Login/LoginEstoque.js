import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

export default function LoginEstoque({ navigation }) {
  const [items, setItems] = useState([
    { id: '1', name: 'Peça A', quantity: 10, code: 'A001' },
    { id: '2', name: 'Peça B', quantity: 5, code: 'B002' },
  ]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Estoque de Peças</Text>
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.name}</Text>
              <Text>Quantidade: {item.quantity}</Text>
              <Button
                title="Editar"
                onPress={() => navigation.navigate('EditarPeça', { itemId: item.id })}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <Button title="Adicionar Peça" onPress={() => navigation.navigate('AdicionarPeça')} />
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
    width: '50%',
    height: '50%', 
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
    elevation: 5, 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
});
