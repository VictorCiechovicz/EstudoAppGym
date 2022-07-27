import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  boxtexto: {
    marginTop: 20,
    marginBottom: 30,
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },

  botao: {
    width: 200,
    height: 60,
    backgroundColor: '#fff',

    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textobotao: {
    fontSize: 16,
    color: '#000',
  },
});
export default estilo;
