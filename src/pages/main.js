import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// eslint-disable-next-line react/prefer-stateless-function
export default class Main extends Component {
  static navigationOptions = {
    title: 'teste'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>
          Teste teste
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  texto: {
    color: 'black',
  },
});
