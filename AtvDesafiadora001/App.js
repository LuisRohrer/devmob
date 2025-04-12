//Luis Henrique e Patrick

import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importação das telas
import TelaLogin from './Login/TelaLogin';
import Senha from './Login/Senha';
import LoginEstoque from './Login/LoginEstoque';
import adicionarPeca from './Login/adicionarPeca';
import editarTela from './Login/editarTela';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={TelaLogin} />
        <Stack.Screen name="RecuperarSenha" component={Senha} />
        <Stack.Screen name="Estoque" component={LoginEstoque} />
        <Stack.Screen name="AdicionarPeça" component={adicionarPeca} />
        <Stack.Screen name="editarTela" component={editarTela} />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 