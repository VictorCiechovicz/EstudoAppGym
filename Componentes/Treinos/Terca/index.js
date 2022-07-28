import React from 'react';
import {ImageBackground, FlatList, Text, View, ScrollView} from 'react-native';
import estilo from './estilo';

const treinos = [
  {
    id: '001',
    desc: ['Crucifixo Inclinado'],
    quant: ['3X 20Rep'],
  },
  {
    id: '002',
    desc: ['Supino Reto'],
    quant: ['3X 20Rep'],
  },
  {
    id: '003',
    desc: ['Supino Reto c/ Halteres'],
    quant: ['3X 20Rep'],
  },
  {
    id: '004',
    desc: ['Desenvolvimento c/ Halteres'],
    quant: ['3X 20Rep'],
  },
  {
    id: '005',
    desc: ['Elevação Lateral'],
    quant: ['3X 20Rep'],
  },
  {
    id: '006',
    desc: ['Trícepis Testa'],
    quant: ['3X 20Rep'],
  },
  {
    id: '007',
    desc: ['Trícepis no Aparelho'],
    quant: ['3X 20Rep'],
  },
  {
    id: '008',
    desc: ['Trícepis na Polia'],
    quant: ['3X 20Rep'],
  },
];
export default function TreinoTerca() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Segunda-Feira</Text>

      <FlatList
        data={treinos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={estilo.lista}>
            <Text style={estilo.descricaolista}>
              <Text style={estilo.quantidadelista}>{item.quant} </Text>
              {item.desc}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
