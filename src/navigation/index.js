import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ViewPokemon from '../screens/viewPokemon';
import CreatePokemon from '../screens/createPokemon';
import CustomTabBar from '../components/customTabBar';
import CustomHeader from '../components/customHeader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PokemonDetail from '../screens/pokemonDetail';


const Navigation = () => {
    const Tab = createMaterialTopTabNavigator();
    const Stack = createNativeStackNavigator();

    const [pokemonData, setPokemonData] = useState([])


    const getPokemon = async () => {
        let data = await AsyncStorage.getItem('pokemonInfo');
        setPokemonData(JSON.parse(data))
    }
    return (
        <NavigationContainer>
            <CustomHeader />

            <Stack.Navigator initialRouteName='Tabs' >
                <Stack.Screen name="Tabs" options={{ headerShown: false }}>
                    {() => (
                        <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} getPokemon={getPokemon} pokemonData={pokemonData} />}>
                            <Tab.Screen name="CreatePokemon" component={CreatePokemon} options={{ tabBarLabel: 'Create Pokemons' }} />
                            <Tab.Screen name="ViewPokemon" component={ViewPokemon} options={{ tabBarLabel: 'View Pokemons' }} />
                        </Tab.Navigator>
                    )}
                </Stack.Screen>
                <Stack.Screen name="PokemonDetail" component={PokemonDetail} options={{
                    headerTitle: 'Pokemon Detail',
                }} />
            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navigation;