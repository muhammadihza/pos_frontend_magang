import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import FormAddUser from './component/formadduser';

const Screen = Dimensions.get('window')

const AddUser = ({ navigation }) => {
    return (
        <View style={styles.screen1}>
            <View style={styles.container1}>
                <Text style={styles.textHeader}>Add User</Text>
            </View>
            <View style={styles.container2}>

                <FormAddUser navigation={navigation} />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>

                    <TouchableOpacity onPress={() => navigation.navigate('User')} style={styles.button2}>
                        <Text style={styles.buttontext}>Batal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button1}>
                        <Text style={styles.buttontext}>Buat</Text>
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
        height: Screen.height * 0.07,
        backgroundColor: "#05445E",
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomWidth: 3,
        borderColor: '#FFFFFF'
    },

    textHeader: {
        fontSize: 19,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        color: '#FFFFFF',
        paddingLeft: 25

    },

    container2: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.85,
        backgroundColor: "#05445E",
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

export default AddUser;