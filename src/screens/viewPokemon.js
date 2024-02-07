import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native'
import PokemonList from '../components/pokemonList'
import { theme } from '../constants/theme'

const ViewPokemon = ({ route, navigation }) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setData(route?.params?.pokemonData)
        setLoading(false)
    }, [route])

    const renderPokemonItem = ({ item }) => {
        if (item?.name?.length) {
            return <PokemonList key={item.id} pokemon={item} navigation={navigation} />;
        }
    };

    return data?.length ? (

        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPokemonItem}
            contentContainerStyle={{
                flexGrow: 1,
                flexDirection: 'row',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                margin: 6,
            }}
        />
    ) : (
        <ActivityIndicator
            animating={true}
            color={theme.backgroundColor}
            size="large"
        />
    )
}

export default ViewPokemon