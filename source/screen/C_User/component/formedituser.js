import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";


const Screen = Dimensions.get('window')

const FormEditUser = ({ navigation }) => {
    return (
        <View style={styles.container1}>
            <View style={{ position: 'relative', marginTop: 24 }}>
                <TextInput
                    style={[styles.textinput]}
                    placeholder='Masukkan nama'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox1, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Nama</Text>
                </View>
            </View>


            <View style={{ position: 'relative', marginTop: 15 }}>
                <TextInput
                    style={[styles.textinput]}
                    placeholder='Masukkan email'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox1, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Email</Text>
                </View>
            </View>

            <View style={{ position: 'relative', marginTop: 15 }}>
                <TextInput
                    style={[styles.textinput]}
                    placeholder='Masukkan nomor hp'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox1, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Phone</Text>
                </View>
            </View>

            <View style={{ position: 'relative', marginTop: 15 }}>
                <TextInput
                    style={[styles.textinput2]}
                    placeholder='Masukkan alamat'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox1, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Addres</Text>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    container1: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.43,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 15,
        alignItems: 'center'
    },

    smallbox1: {
        width: Screen.width * 0.12,
        height: Screen.height * 0.023,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        top: -8,
        left: 15
    },

    smallbox2: {
        width: Screen.width * 0.17,
        height: Screen.height * 0.023,
        backgroundColor: "#FFFFFF",
        justifyContent: 'center',
        top: -8,
        left: 15
    },

    titletext: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold",
        color: "#969696",
        marginLeft: 7
    },

    textinput: {
        width: Screen.width * 0.67,
        height: Screen.height * 0.065,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        borderWidth: 1,
        borderColor: "#BAB3B3",
        borderRadius: 10,
        paddingLeft: 15,
        padding: 0
    },

    textinput2: {
        width: Screen.width * 0.67,
        height: Screen.height * 0.09,
        fontSize: 12,
        fontFamily: 'Poppins-Regular',
        borderWidth: 1,
        borderColor: "#BAB3B3",
        borderRadius: 10,
        paddingLeft: 15,
        paddingBottom: 25,
    }

});

export default FormEditUser;