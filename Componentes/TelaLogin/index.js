import React from 'react';
import {Pressable, Text, View} from 'react-native';
import estilo from './estilo';

export default function TelaInicial(props) {
  return (
    <View style={estilo.container}>
      <View style={estilo.boxtexto}>
        <Text style={estilo.titulo}>Titulo</Text>
        <Text style={estilo.descricao}>Descricao aqui</Text>
      </View>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Login');
        }}>
        clique aqui
      </Pressable>
    </View>
  );
}
