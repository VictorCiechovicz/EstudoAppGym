import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import estilo from './estilo';

import Fundo from '../../assets/Treinos/treinos.png';

export default function TelaTreinos(props) {

 

  return (
    <ImageBackground style={estilo.fundo} source={Fundo}>
      <View style={estilo.boxtexto}>
        <Text style={estilo.titulo}>Treinos</Text>
      </View>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('TreinoSegunda');
        }}>
        <Text style={estilo.textobotao}>Segunda-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('TreinoTerca');
        }}>
        <Text style={estilo.textobotao}>Terça-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('TreinoQuarta');
        }}>
        <Text style={estilo.textobotao}>Quarta-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('TreinoQuinta');
        }}>
        <Text style={estilo.textobotao}>Quinta-Feira</Text>
      </Pressable>
      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('TreinoSexta');
        }}>
        <Text style={estilo.textobotao}>Sexta-Feira</Text>
      </Pressable>
    </ImageBackground>
  );
}
