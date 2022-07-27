import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  boxtexto: {
    justifyContent: 'flex-end',
  },
  titulo: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
  },
  descricao: {
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  botao: {
    width: 320,
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    borderRadius: 5,
  },
  textobotao: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default estilo;
