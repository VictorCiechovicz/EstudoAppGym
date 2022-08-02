import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import TelaInicial from './Componentes/TelaInicial/index';
import TelaNome from './Componentes/TelaNome/index';
import TelaTreinos from './Componentes/TelaTreinos/index';
import TelaTreinoSegunda from './Componentes/Treinos/Segunda/index';
import TelaTreinoTerca from './Componentes/Treinos/Terca/index';
import TelaTreinoQuarta from './Componentes/Treinos/Quarta/index';
import TelaTreinoQuinta from './Componentes/Treinos/Quinta/index';
import TelaTreinoSexta from './Componentes/Treinos/Sexta/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Inicio" component={TelaInicial} />
        <Stack.Screen name="Nome" component={TelaNome} />
        <Stack.Screen name="Treinos" component={TelaTreinos} />
        <Stack.Screen name="TreinoSegunda" component={TelaTreinoSegunda} />
        <Stack.Screen name="TreinoTerca" component={TelaTreinoTerca} />
        <Stack.Screen name="TreinoQuarta" component={TelaTreinoQuarta} />
        <Stack.Screen name="TreinoQuinta" component={TelaTreinoQuinta} />
        <Stack.Screen name="TreinoSexta" component={TelaTreinoSexta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
