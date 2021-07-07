import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
//useEffect
import { StyleSheet, Text, View } from 'react-native';

const URL = 'https://pokedex-alchemy.herokuapp.com/api/pokedex';

export default function App() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = () => {
    return fetch(URL, {
  method: 'GET', // or 'PUT'
  // headers: {
  //   'Content-Type': 'application/json',
  // },
  // body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(response => setPokemon(response))
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
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

// export class App extends Component {
//   getPokemon () {
//     const results = fetch(URL, {
//   method: 'GET', // or 'PUT'
//   // headers: {
//   //   'Content-Type': 'application/json',
//   // },
//   // body: JSON.stringify(data),
//   })
//     .then(response => response.json())
//     .then(response => setPokemon(response))
//     .then(data => {
//       // console.log('Success:', data);
//     })
//     .catch((error) => {
//       // console.error('Error:', error);
//     });
//     setPokemon();
//     console.log('THIS IS THE ARRAY!!', results);
//   }

//   componentDidMount() {
    
//   }
  
//   render() {
//     return (
//       <View style={styles.container}>
//         <StatusBar style="auto" />
//         <Text>Hello World!</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
