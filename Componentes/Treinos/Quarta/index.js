import React from 'react';
import {ImageBackground, FlatList, Text, View, ScrollView} from 'react-native';
import estilo from './estilo';

const treinos = [
  {
    id: '001',
    desc: ['Extensor'],
    quant: ['3X 20Rep'],
  },
  {
    id: '002',
    desc: ['Agachamento Livre'],
    quant: ['3X 20Rep'],
  },
  {
    id: '003',
    desc: ['Leg Press 45°'],
    quant: ['3X 20Rep'],
  },
  {
    id: '004',
    desc: ['Extensor Unilateral'],
    quant: ['3X 20Rep'],
  },
  {
    id: '005',
    desc: ['Flexor Deitado'],
    quant: ['3X 20Rep'],
  },
  {
    id: '006',
    desc: ['Flexor em Pé'],
    quant: ['3X 20Rep'],
  },
  {
    id: '007',
    desc: ['Panturrilha em Pé'],
    quant: ['3X 20Rep'],
  },
  {
    id: '008',
    desc: ['Panturrilha Sentado'],
    quant: ['3X 20Rep'],
  },
];
export default function TreinoQuarta() {
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}>Quarta-Feira</Text>

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
