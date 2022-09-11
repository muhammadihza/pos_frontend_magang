import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { AuthContext } from '../../context/AuthContext';

const Screen = Dimensions.get('window')

const HalamanLogin = ({ navigation }) => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const val = useContext(AuthContext);

    return (
        <View style={styles.screen1}>

            <View style={styles.container1}>

                <View>
                    <Image style={{ marginTop: 20, width: Screen.width * 0.27, height: Screen.height * 0.21, }}
                        source={require('../../assets/images/Logo.png')}
                    />
                </View>

                <View style={styles.container2}>

                    <Text style={styles.text1}>Selamat Datang</Text>
                    <Text style={styles.text2}>Silahkan login untuk melanjutkan</Text>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TextInput
                            style={[styles.inputview, styles.inputtext, { marginTop: 27 }]}
                            placeholder='Masukkan username'
                            placeholderTextColor={'#C3C3C3'}
                            value={username}
                            onChangeText={text => setUsername(text)}
                        />

                        <View style={{ position: 'absolute', top: 40, left: 10, right: 0, bottom: 0 }}>
                            <Icon
                                name={"user"}
                                color={"#000000"}
                                size={19}
                            />
                        </View>

                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                        <View style={{ position: 'absolute', top: 40, left: 10, right: 0, bottom: 0 }}>
                            <Icon2
                                name={"key"}
                                color={"#000000"}
                                size={15}
                            />
                        </View>

                        <TextInput
                            style={[styles.inputview, styles.inputtext, { marginTop: 27 }]}
                            placeholder='Masukkan password'
                            placeholderTextColor={'#C3C3C3'}
                            secureTextEntry={passwordVisible}
                            position={'relative'}
                            value={password}
                            onChangeText={text => setPassword(text)}
                        />

                        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eye}>
                            <Icon
                                name={passwordVisible ? "eye-slash" : "eye"}
                                color={"#284A9F"}
                                size={15}
                            />
                        </TouchableOpacity>

                    </View>


                    <TouchableOpacity style={{ marginLeft: Screen.width * 0.48, marginTop: 9 }}>
                        <Text style={styles.textLupa}>Lupa password ?</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={styles.button}>
                        <Text style={styles.buttontext}>Masuk</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 13 }}>
                    <Text style={styles.text3}>Belum punya akun ?</Text>

                    <TouchableOpacity onPress={() => navigation.navigate('Daftar')} style={{ marginLeft: 3 }}>
                        <Text style={styles.text4}>Daftar disini !</Text>
                    </TouchableOpacity>
                </View>
            </View>



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
        height: Screen.height * 0.9,
        backgroundColor: "#F0EBEB",
        alignItems: 'center',
        borderRadius: 25,
    },

    logoText: {
        fontSize: 30,
        fontWeight: '400',
        fontFamily: "Poppins-SemiBold",
        color: "#284A9F"
    },

    container2: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.52,
        backgroundColor: "#FFFFFF",
        alignItems: 'center',
        borderRadius: 20,
        position: 'relative',
        marginTop: Screen.height * 0.025
    },

    text1: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: "#000000",
        marginTop: 33
    },

    text2: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        color: "#000000",
        bottom: 6
    },

    eye: {
        position: 'absolute',
        top: Screen.height * 0.055, 
        left: Screen.width * 0.64,
        right: 0, bottom: 0,
        width: Screen.width * 0.04,
        height: Screen.height * 0.025,
        backgroundColor: '#FFFFFF',
        zIndex: 99
    },

    textLupa: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: "#242424",
    },

    inputview: {
        width: Screen.width * 0.7,
        height: Screen.height * 0.06,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#BAB3B3',
    },

    inputtext: {
        paddingLeft: 35,
        paddingBottom: 5,
        fontFamily: 'Poppins-Regular'
    },

    button: {
        width: Screen.width * 0.7,
        height: Screen.height * 0.06,
        backgroundColor: '#284A9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 25
    },

    buttontext: {
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: "#FFFFFF"
    },

    text3: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold",
        color: "#000000",
    },

    text4: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: "Poppins-SemiBold",
        color: "#777777",
    }

});

export default HalamanLogin;