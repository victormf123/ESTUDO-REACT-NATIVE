import React from 'react';
import {View, StyleSheet} from 'react-native';

export default props => {
  const {container, line, coreMine} = styles;
  return (
    <View style={container}>
      <View style={coreMine} />
      <View style={line} />
      <View style={(line, {transform: [{rotate: '45deg'}]})} />
      <View style={(line, {transform: [{rotate: '90deg'}]})} />
      <View style={(line, {transform: [{rotate: '135deg'}]})} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  coreMine: {
    height: 14,
    width: 14,
    borderRadius: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: 'black',
  },
});
