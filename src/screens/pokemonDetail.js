import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PokemonDetail = ({ route }) => {

  const { pokemon } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemon.image }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{pokemon.name}</Text>
        <Text style={styles.description}>{pokemon.description}</Text>
        <Text style={styles.type}>Type: {pokemon.type.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  type: {
    fontSize: 18,
    color: 'blue',
  },
});

export default PokemonDetail;
