import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';


import FormDaftar from './component/formdaftar';

const Screen = Dimensions.get('window')

const HalamanDaftar = ({ navigation }) => {
    return (
        <View style={styles.screen1}>
            <ScrollView>
                <View style={styles.container1}>

                    <View>
                        <Image style={{ marginTop: 20, width: Screen.width * 0.27, height: Screen.height * 0.21, }}
                            source={require('../../assets/images/Logo.png')}
                        />
                    </View>

                    <FormDaftar navigation={navigation} />

                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                        <Text style={styles.buttontext}>DAFTAR</Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={styles.text1}>Sudah punya akun ?</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ marginLeft: 3 }}>
                            <Text style={styles.text2}>Masuk disini !</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen1: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        justifyContent: 'center'
    },

    container1: {
        width: Screen.width * 0.9,
        height: Screen.height * 1.13,
        backgroundColor: "#F0EBEB",
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 15,
        marginBottom: 15
    },

    button: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.065,
        backgroundColor: '#284A9F',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },

    buttontext: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF'
    },

    text1: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold",
        color: "#000000",
    },

    text2: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold",
        color: "#777777",
    }

});

export default HalamanDaftar;