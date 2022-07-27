import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import estilo from './estilo';

import Fundo1 from '../../assets/PaginaInicial/fundo1.png';

export default function TelaInicial(props) {
  return (
    <ImageBackground style={estilo.fundo} source={Fundo1}>
      <View style={estilo.boxtexto}>
        <Text style={estilo.titulo}>Bem vindo ao TreinoAqui</Text>
        <Text style={estilo.descricao}>
          Aplicativo feito para gerenciar de forma pratica sua ficha de treino.
        </Text>
      </View>

      <Pressable
        style={estilo.botao}
        onPress={() => {
          props.navigation.navigate('Treinos');
        }}>
        <Text style={estilo.textobotao}>Começar</Text>
      </Pressable>
    </ImageBackground>
  );
}
