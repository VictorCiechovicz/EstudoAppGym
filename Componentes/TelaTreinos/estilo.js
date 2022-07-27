import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  boxtexto: {
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 30,

    fontWeight: 'bold',
  },

  botao: {
    width: 200,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default estilo;
