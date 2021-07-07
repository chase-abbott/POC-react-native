import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
//useEffect
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    getPokemon();
  }, [1])

  const getPokemon = () => {
    return fetch(URL, {
      method: 'GET',
    })
      .then(response => response.json())
      // .then(data => {
      //   console.log('Success:', data);
      // })
      .then(response => {
        return setPokemon(response.results)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <View style={styles.container}>
      <FlatList
        // style={[{ flex: 1 }]}
        data={pokemon}
        renderItem={({ item }) => {
          return < Image source={{ uri: item.url_image }} style={styles.tinyLogo} />
        }}
      />
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});
