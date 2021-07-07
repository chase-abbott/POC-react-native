import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
//useEffect
import { StyleSheet, SafeAreaView, Text, View, FlatList, Image } from 'react-native';

const URL = 'http://localhost:7890/api/v1/posts';

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
        console.log('RESPONSE**', response);
        return setPokemon(response)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={pokemon}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <Image source={{ uri: item.src }} style={styles.tinyLogo} />
            </View>
          )
        }}
        keyExtractor={(item) => item.name}
      />
      <StatusBar style="auto" />
      <Text>Hello World!</Text>
    </SafeAreaView>
  );4
}

const styles = StyleSheet.create({
  container: {
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
