import React from 'react';
import {Pressable, Text, View} from 'react-native';
import estilo from './estilo';

export default function TelaTreinos(props) {
  return (
    <View style={estilo.container}>
      <View style={estilo.boxtexto}>
        <Text style={estilo.titulo}>Treinos</Text>
      </View>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Treinos');
        }}>
        <Text style={estilo.textobotao}>Segunda-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Treinos');
        }}>
        <Text style={estilo.textobotao}>Terça-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Treinos');
        }}>
        <Text style={estilo.textobotao}>Quarta-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Treinos');
        }}>
        <Text style={estilo.textobotao}>Quinta-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Treinos');
        }}>
        <Text style={estilo.textobotao}>Sexta-Feira</Text>
      </Pressable>
    </View>
  );
}
