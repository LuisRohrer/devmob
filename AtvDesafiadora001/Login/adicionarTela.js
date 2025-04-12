import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AdicionarPeçaScreen({ route }) {
  const { setEstoque } = route.params;
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleSave = () => {
    setEstoque((prevEstoque) => [
      ...prevEstoque,
      { id: Date.now().toString(), nome, quantidade: parseInt(quantidade), codigo },
    ]);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput placeholder="Nome" onChangeText={setNome} style={{ width: 200, marginBottom: 10, borderBottomWidth: 1 }} />
      <TextInput placeholder="Quantidade" onChangeText={setQuantidade} style={{ width: 200, marginBottom: 10, borderBottomWidth: 1 }} />
      <TextInput placeholder="Código" onChangeText={setCodigo} style={{ width: 200, marginBottom: 10, borderBottomWidth: 1 }} />
      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}
