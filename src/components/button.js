import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const CustomButton = ({ type, icon, onPress, title, btnColor, txtColor, style, disabled }) => {
    return type === "elevated" ?
        <Button icon={icon ? icon : ""} mode="elevated" onPress={onPress} buttonColor={btnColor} textColor={txtColor} style={style} disabled={disabled}>
            <Text style={{ color: txtColor }}>{title}</Text>
        </Button>
        : type === "contained" ?
            <Button icon={icon ? icon : ""} mode="contained" onPress={onPress} buttonColor={btnColor} textColor={txtColor} style={style} disabled={disabled}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: txtColor }}>{title}</Text>
                </View>
            </Button>
            :
            <Button icon={icon ? icon : ""} mode="contained-tonal" onPress={onPress} buttonColor={btnColor} textColor={txtColor} style={style} disabled={disabled}>
                <Text style={{ color: txtColor }}>{title}</Text>
            </Button>
}

export default CustomButton;
