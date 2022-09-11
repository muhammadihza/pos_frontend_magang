import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import FormProduct from './component/formproduct';


const Screen = Dimensions.get('window')

const AddProduct = ({ navigation }) => {
    return (
        <View style={styles.screen1}>
            <ScrollView>

                <View style={styles.head}>
                    <Text style={styles.headText}>New Product</Text>
                </View>

                <View style={styles.container1}>

                    <View style={styles.frame}>

                        <TouchableOpacity style={{
                            position: 'absolute',
                            top: Screen.height * 0.25,
                            left: Screen.width * 0.4
                        }}>
                            <Icon name='camera' size={25} />
                        </TouchableOpacity>

                    </View>

                    <FormProduct />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button1}>
                            <Text style={styles.buttontext}>Batal</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('MenuScreen')} style={styles.button2}>
                            <Text style={styles.buttontext}>Buat</Text>
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

    head: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.07,
        backgroundColor: "#05445E",
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        marginTop: 15,
    },

    headText: {
        fontSize: 22,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        marginLeft: 20
    },

    frame: {
        width: Screen.width * 0.5,
        height: Screen.height * 0.3,
        borderWidth: 1,
        backgroundColor: "#E7D2CC",
        marginTop: 20
    },

    container1: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.93,
        backgroundColor: "#D4F1F4",
        alignItems: 'center',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: 25,
    },

    button1: {
        width: Screen.width * 0.3,
        height: Screen.height * 0.06,
        backgroundColor: '#A91B60',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    button2: {
        width: Screen.width * 0.3,
        height: Screen.height * 0.06,
        backgroundColor: '#0A7029',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 20
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

export default AddProduct;