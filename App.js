import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
//useEffect
import { StyleSheet, SafeAreaView, Text, View, FlatList, Image } from 'react-native';

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
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        style={styles.list}
        data={pokemon}
        renderItem={({ item }) => {
          return (
            <View>
              < Image source={{ uri: item.url_image }} style={styles.tinyLogo} />
            </View>
          )
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  list: {
    flex: 1
  }
});
