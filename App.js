import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TelaInicial from './Componentes/TelaInicial/index';
import TelaLogin from './Componentes/TelaLogin/index';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Login" component={TelaLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
