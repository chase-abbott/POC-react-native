import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  // componentDidMount = () => {
  //   this.getPokemon();
  // }

  const getPokemon = async () => {
    const { results } = await fetch(URL, {
  method: 'GET', // or 'PUT'
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify(data),
  })
    .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    .catch((error) => {
      console.error('Error:', error);
    });
    setPokemon(results);
  }
    getPokemon();
      return (
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Text>Hello World!</Text>
        </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
