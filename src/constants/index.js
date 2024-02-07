import AsyncStorage from '@react-native-async-storage/async-storage';

export const types = [
    { label: 'Bug', value: 'Bug' },
    { label: 'Dark', value: 'Dark' },
    { label: 'Dragon', value: 'Dragon' },
    { label: 'Electric', value: 'Electric' },
    { label: 'Fairy', value: 'Fairy' },
    { label: 'Fighting', value: 'Fighting' },
    { label: 'Fire', value: 'Fire' },
    { label: 'Flying', value: 'Flying' },
    { label: 'Ghost', value: 'Ghost' },
    { label: 'Grass', value: 'Grass' },
    { label: 'Ground', value: 'Ground' },
    { label: 'Ice', value: 'Ice' },
    { label: 'Normal', value: 'Normal' },
    { label: 'Poison', value: 'Poison' },
    { label: 'Psychic', value: 'Psychic' },
    { label: 'Rock', value: 'Rock' },
    { label: 'Steel', value: 'Steel' },
    { label: 'Water', value: 'Water' },

]

export const appendObjectsToStorage = (newObject) => {
    return new Promise(async (res, rej) => {

        try {
            const existingDataString = await AsyncStorage.getItem('pokemonInfo');

            const existingData = existingDataString ? JSON.parse(existingDataString) : [];

            const updatedData = [...existingData, newObject];

            const updatedDataString = JSON.stringify(updatedData);

            await AsyncStorage.setItem('pokemonInfo', updatedDataString);

            console.log('Pokemon information saved successfully!');
            res("Success")

        } catch (error) {

            console.error('Error:', error);
            rej(e.message)
        }
    })
};