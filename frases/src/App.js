/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, View} from 'react-native';

//Formatações
const Estilos = {
  estiloView: {
    backgroundColor: 'skyblue',
    height: 300,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  estiloTexto: {
    fontSize: 40,
    backgroundColor: '#08509B',
    height: 60,
    width: 60,
    // Trabalhando com padding (espaçamento interno)
    // paddingTop: 30,
    // paddingLeft: 50,
    // paddingBottom: 80,
    // paddingRight: 100,
    // paddingHorizontal: 30
    // paddingVertical: 30
    // Trabalhando com margin (espaçamento externo)
    // margin: 30,
    // marginTop: 30,
    // marginLeft: 30,
    // marginBottum: 30,
    // marginRight: 50,
    // marginHorizontal: 30,
    // marginVertical: 30,
    //Trabalhando com sombras
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.4,
    //Trabalhando com Texto
    // color: '#fff',
    // fontStyle: 'italic',
    // fontWeight: 'bold',
    // textAlign: 'center',
    // textDecorationLine: 'underline line-through',
  },
};
const App = () => {
  const {estiloTexto, estiloView} = Estilos;
  return (
    <View style={estiloView}>
      <Text style={estiloTexto}>Frases do dia</Text>
    </View>
  );
};

export default App;
