import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  fundo: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  boxtexto: {
    marginTop: 20,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },

  botao: {
    width: 200,
    height: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  textobotao: {
    fontSize: 16,
    color: '#000',
  },

  caixatexto: {
    width: 200,
    height: 50,

    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    border: 'none',
  },
  botaoinfomacao: {
    width: 100,
    height: 20,
    backgroundColor: '#fff',
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  textobotaoinformacao: {
    fontSize: 10,
    color: '#000',
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 200,
    height: 200,
    borderRadius: 5,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textomodal: {
    color: '#fff',
  },
});
export default estilo;
