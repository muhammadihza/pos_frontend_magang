import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";


const Screen = Dimensions.get('window')

const DeletedModal = ({ navigation }) => {
    return (
        <View style={styles.container1}>

            <View style={styles.head}>
                <Text style={styles.text}>Apakah anda yakin untuk menghapus user ini?</Text>
            </View>

            <View style={styles.body}>
                <TouchableOpacity style={styles.yesButton}>
                    <Text style={styles.text2}>Ya</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.noButton}>
                    <Text style={styles.text2}>Tidak</Text>
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },

    head: {
        width: Screen.width * 0.76,
        height: Screen.height * 0.085,
        backgroundColor: '#75E6DA',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 40
    },

    text: {
        fontSize: 17,
        color: "#000000",
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        marginLeft: Screen.width * 0.04,
        marginRight: Screen.width * 0.04
    },

    body: {
        width: Screen.width * 0.76,
        height: Screen.height * 0.15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderBottomRightRadius: 40
    },

    yesButton: {
        width: Screen.width * 0.25,
        height: Screen.height * 0.06,
        backgroundColor: '#81B622',
        alignItems: 'center',
        justifyContent: 'center'
    },

    noButton: {
        width: Screen.width * 0.25,
        height: Screen.height * 0.06,
        backgroundColor: '#AE388B',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: Screen.width * 0.05
    },

    text2: {
        fontSize: 18,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: '#000000'
    }

});

export default DeletedModal;