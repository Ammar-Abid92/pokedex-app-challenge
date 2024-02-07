import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from '../constants/theme';
import { TextInput } from 'react-native-paper';
import { Avatar } from '../components/avatar';
import DropDownPicker from 'react-native-dropdown-picker';
import { appendObjectsToStorage, types } from '../constants';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { Dialog, Portal, PaperProvider } from 'react-native-paper';
import CustomButton from "../components/button.js"

export default function CreatePokemon({ navigation }) {

    // useEffect(async ()=>{
    //     await AsyncStorage.clear()
    // })

    const [pokemonName, setPokemonName] = useState('');
    const [pokemonDescription, setPokemonDescription] = useState('');
    const [uri, setUri] = useState(undefined);
    const [selectedValue, setSelectedValue] = useState([]);
    const [open, setOpen] = useState(false)
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);

    const hideDialog = () => setVisible(false);


    const savePokemon = async () => {
        try {
            const pokemonInfo = {
                name: pokemonName,
                image: uri,
                description: pokemonDescription,
                type: selectedValue,
                id: uuidv4(),

            };

            appendObjectsToStorage(pokemonInfo).then(res => {
                showDialog();
                setPokemonName('');
                setUri(null);
                setPokemonDescription('');
                setSelectedValue([]);

            })

        } catch (error) {
            console.error('Error saving pokemon information:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                networkActivityIndicatorVisible
            />

            <ScrollView styles={{ flex: 1, marginBottom:10 }} >

                <View style={styles.imageContainer}>
                    <Avatar
                        source={require('../assets/images/absent-user.jpg')}
                        avatarWidth={200}
                        avatarHeight={200}
                        defaultURI={uri}
                        setUri={setUri}

                    />
                </View>

                <TextInput
                    label="Enter your pokemon name"
                    value={pokemonName}
                    onChangeText={(text) => setPokemonName(text)}
                    style={styles.input}
                    mode="outlined"
                    activeOutlineColor={theme.backgroundColor}
                />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <Text style={{ marginBottom: 10 }}>Select an option:</Text>
                    <DropDownPicker
                        items={types}
                        open={open}
                        setOpen={() => setOpen(!open)}
                        value={selectedValue}
                        style={{ backgroundColor: '#fafafa' }}
                        dropDownStyle={{ backgroundColor: '#fafafa' }}
                        setValue={setSelectedValue}
                        multiple={true}
                        min={0}
                        max={2}
                    />
                </View>

                <TextInput
                    label="Enter Pokémon Description"
                    value={pokemonDescription}
                    onChangeText={(text) => setPokemonDescription(text)}
                    multiline
                    numberOfLines={4}
                    style={styles.input}
                    mode="outlined"
                    activeOutlineColor={theme.backgroundColor}
                />
                <CustomButton disabled={pokemonName.length && pokemonDescription.length && uri ? false : true} mode="contained" title="Save" onPress={savePokemon} />
            </ScrollView>

            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title>Success</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">Pokemon is created successfully! </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <CustomButton title="ok" btnColor={theme.backgroundColor} onPress={hideDialog} />
                    </Dialog.Actions>
                </Dialog>
            </Portal>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aliceblue',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    imageContainer: {
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 16
    },
    input: {
        marginBottom: 16,
    },
    multilineInput: {
        height: 100,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 10,
    },
});
