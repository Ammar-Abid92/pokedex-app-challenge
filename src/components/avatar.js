import React, { useState } from 'react';
import {
    Image,
    ImageProps,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,

} from 'react-native';

import Modal from 'react-native-modal';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export const Avatar = ({ source, avatarWidth, avatarHeight, defaultURI, setUri }) => {

    const [visible, setVisible] = useState(false)

    const close = () => setVisible(false);
    const open = () => setVisible(true);

    const chooseImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) setUri(result.assets[0].uri);
    };

    const openCamera = async () => {

        const res = await ImagePicker.requestCameraPermissionsAsync();

        if (res.granted === true) {


            let result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) setUri(result.assets[0].uri);
        } else {
            console.log("ERROR IN GETTING PERMISSIONS")
        }

    };

    return (
        <>
            <TouchableOpacity onPress={open}>
                <Image
                    style={{ ...styles.avatar, height: avatarHeight, width: avatarWidth }}
                    source={defaultURI ? { uri: defaultURI } : source}
                />
            </TouchableOpacity>
            <Modal
                isVisible={visible}
                onBackButtonPress={close}
                onBackdropPress={close}
                style={{ justifyContent: 'flex-end', margin: 0 }}>
                <SafeAreaView style={styles.options}>
                    <Pressable style={styles.option} onPress={chooseImage}>
                        <MaterialIcons name="photo-library" size={30} color={"#000000"} />
                        <Text>Library </Text>
                    </Pressable>
                    <Pressable style={styles.option} onPress={openCamera}>
                        <Ionicons name="camera" size={30} color={"#000000"} />
                        <Text>Camera</Text>
                    </Pressable>
                </SafeAreaView>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    avatar: {
        paddingTop: 20,
        borderRadius: 10,
        padding: 5,
    },

    options: {
        backgroundColor: 'white',
        flexDirection: 'row',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flex: 0.20
    },
    option: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});