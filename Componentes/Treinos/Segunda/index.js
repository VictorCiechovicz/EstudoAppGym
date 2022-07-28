import React from 'react';
import {ImageBackground, FlatList, Text, View, ScrollView} from 'react-native';
import estilo from './estilo';

const treinos = [
  {
    id: '001',
    desc: ['Remada Convergente Alta'],
    quant: ['3X 20Rep'],
  },
  {
    id: '002',
    desc: ['Polia Alta Fronta'],
    quant: ['3X 20Rep'],
  },
  {
    id: '003',
    desc: ['Rosca Simultânea'],
    quant: ['3X 20Rep'],
  },
  {
    id: '004',
    desc: ['Remada Convergente'],
    quant: ['3X 20Rep'],
  },
  {
    id: '005',
    desc: ['Remada Alta'],
    quant: ['3X 20Rep'],
  },
  {
    id: '006',
    desc: ['Encolhimento'],
    quant: ['3X 20Rep'],
  },
  {
    id: '007',
    desc: ['Rosca Alternada'],
    quant: ['3X 20Rep'],
  },
  {
    id: '008',
    desc: ['Rosca na Polia'],
    quant: ['3X 20Rep'],
  },
];
export default function TreinoSegunda() {
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
