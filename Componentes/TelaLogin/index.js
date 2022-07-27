import React from 'react';
import {Pressable, Text, View} from 'react-native';
import estilo from './estilo';

export default function TelaLogin() {
  return (
    <View style={estilo.container}>
      <View style={estilo.boxtexto}>
        <Text style={estilo.titulo}>Titulo</Text>
        <Text style={estilo.descricao}>Descricao aqui</Text>
      </View>
    </View>
  );
}
