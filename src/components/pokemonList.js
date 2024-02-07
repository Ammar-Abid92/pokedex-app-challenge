import React from 'react'
import { Dimensions, Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const PokemonList = ({ pokemon, key }) => {

    const navigation = useNavigation()

    const { height, width } = Dimensions.get('window')

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('PokemonDetail', { pokemon })}
            style={{
                margin: 6,
                height: (width / 2) - 18,
                width: (width / 2) - 18,
                backgroundColor: 'white',
                padding: 16,
            }}
            shadowColor='rgba(0,0,0,0.25)'
            shadowOffset={{
                width: 0,
                height: 2
            }}
            shadowOpacity={0.5}
            shadowRadius={1}
        >

            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Image
                    source={{ uri: pokemon.image }}
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: 'contain'
                    }}
                />
                <Text
                    style={{
                        height: 20,
                        marginTop: 20
                    }}
                >{pokemon.name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PokemonList