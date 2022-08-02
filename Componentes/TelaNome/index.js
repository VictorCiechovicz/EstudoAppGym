import React, {useState} from 'react';
import {
  ImageBackground,
  Pressable,
  Text,
  TextInput,
  View,
  Modal,
} from 'react-native';
import estilo from './estilo';

import Fundo from '../../assets/PaginaNome/Nome.png';

export default function TelaNome(props) {
  const [nome, setNome] = useState('');
  const [visibilidade, setVisibilidade] = useState(false);

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
      <Pressable
        style={estilo.botaoinfomacao}
        onPress={() => setVisibilidade(!visibilidade)}>
        <Text style={estilo.textobotaoinformacao}>Informações</Text>
      </Pressable>

      <Modal animationType="fade" transparent={true} visible={visibilidade}>
        <View style={estilo.modalcontainer}>
          <View style={estilo.modal}>
            <Text style={estilo.textomodal}>Informações aqui</Text>
            <Pressable
              style={estilo.botaoinfomacao}
              onPress={() => setVisibilidade(!visibilidade)}>
              <Text style={estilo.textobotaoinformacao}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}
