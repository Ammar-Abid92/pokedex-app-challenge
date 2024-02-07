import React from 'react'
import { Text, View } from 'react-native'

const CustomHeader = () => {

    return (
        <View style={{ backgroundColor: '#2196F3', padding: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flex: 0.25, borderBottomEndRadius: 60 }}>
            <Text style={{ fontSize: 24, width: 350, color: '#fff' }}>Pokédex App - The Developer Challenge</Text>
        </View>
    );
};

export default CustomHeader;