import React, {useState} from 'react';
import {ImageBackground, Pressable, Text, TextInput, View} from 'react-native';
import estilo from './estilo';

import Fundo from '../../assets/PaginaNome/Nome.png';

export default function TelaNome(props) {
  const [nome, setNome] = useState('');
  return (
    <ImageBackground style={estilo.fundo} source={Fundo}>
      <View style={estilo.boxtexto}>
        <Text style={estilo.titulo}>Digite seu Nome</Text>
      </View>
      <TextInput
        style={estilo.caixatexto}
        value={nome}
        onChangeText={text => setNome(text)}
      />
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
