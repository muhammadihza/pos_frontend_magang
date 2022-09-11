import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import FormEditUser from './component/formedituser';

const Screen = Dimensions.get('window')

const EditUser = ({ navigation }) => {
    return (
        <View style={styles.screen1}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Input data-data yang mengalami perubahan berikut : </Text>
            </View>

            <View style={styles.container1}>

                <FormEditUser navigation={navigation} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('User')} style={styles.button2}>
                        <Text style={styles.buttontext}>Batal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('User')} style={styles.button1}>
                        <Text style={styles.buttontext}>Simpan</Text>
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

    header: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.08,
        backgroundColor: '#05445E',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontSize: 16,
        color: "#FFFFFF",
        fontFamily: 'Poppins Medium',
        fontWeight: '500',
        marginLeft: 10
    },

    container1: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.6,
        backgroundColor: "#D4F1F4",
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
    },

    button1: {
        width: Screen.width * 0.3,
        height: Screen.height * 0.06,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#81B622',
        marginLeft: 15
    },

    button2: {
        width: Screen.width * 0.3,
        height: Screen.height * 0.06,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#AE388B',
    },

    buttontext: {
        fontSize: 15,
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

export default EditUser;