import React from 'react';
import { Text, View, StyleSheet, Dimensions, TextInput, TouchableOpacity, Image } from "react-native";

const Screen = Dimensions.get('window')

const FormProduct = () => {
    return (
        <View style={styles.container1}>
            <View style={{ position: 'relative', marginTop: 24 }}>
                <TextInput
                    style={[styles.textinput]}
                    placeholder='Masukkan nama'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox1, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Nama Product</Text>
                </View>
            </View>

            <View style={{ position: 'relative', marginTop: 15 }}>
                <TextInput
                    style={[styles.textinput]}
                    placeholder='Masukkan username'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox2, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Harga Beli</Text>
                </View>
            </View>

            <View style={{ position: 'relative', marginTop: 15 }}>
                <TextInput
                    style={[styles.textinput]}
                    placeholder='Masukkan password'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox2, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Harga Jual</Text>
                </View>
            </View>

            

            <View style={{ position: 'relative', marginTop: 15 }}>
                <TextInput
                    style={[styles.textinput2]}
                    placeholder='Masukkan alamat'
                    placeholderTextColor={"#C3C3C3"}
                />

                <View style={[styles.smallbox1, { position: 'absolute' }]}>
                    <Text style={styles.titletext}>Keterangan</Text>
                </View>
            </View>


        </View>
    )
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
        width: Screen.width * 0.22,
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



export default FormProduct;