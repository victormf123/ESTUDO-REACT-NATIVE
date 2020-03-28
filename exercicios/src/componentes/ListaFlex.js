import React from 'react';
import {ScrollView, View, FlatList, Text} from 'react-native';

const alunos = [
  {id: 1, name: 'João', nota: 7.9},
  {id: 2, name: 'Ana', nota: 9.1},
  {id: 3, name: 'Bia', nota: 5.4},
  {id: 4, name: 'Claudia', nota: 7.6},
  {id: 5, name: 'Roberto', nota: 6.8},
  {id: 6, name: 'Rafael', nota: 9.9},
  {id: 7, name: 'Guilherme', nota: 10.0},
  {id: 8, name: 'Rebeca', nota: 8.8},
  {id: 9, name: 'Tobias', nota: 8.8},

  {id: 11, name: 'João', nota: 7.9},
  {id: 12, name: 'Ana', nota: 9.1},
  {id: 13, name: 'Bia', nota: 5.4},
  {id: 14, name: 'Claudia', nota: 7.6},
  {id: 15, name: 'Roberto', nota: 6.8},
  {id: 16, name: 'Rafael', nota: 9.9},
  {id: 17, name: 'Guilherme', nota: 10.0},
  {id: 18, name: 'Rebeca', nota: 8.8},
  {id: 19, name: 'Tobias', nota: 8.8},
];

const itemEstilo = {
  paddingHorizontal: 15,
  height: 50,
  background: '#DDD',
  borderWidth: 0.5,
  borderColor: '#222',
  // Flex
  // justifyContent: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
};

export const Aluno = props => (
  <View style={itemEstilo}>
    <Text>Nome: {props.name}</Text>
    <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text>
  </View>
);

export default props => {
  const renderItem = ({item}) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};
