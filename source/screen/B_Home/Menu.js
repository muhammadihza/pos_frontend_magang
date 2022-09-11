import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/FontAwesome5'

import ItemMenu from './component/itemmenu1';
import ItemMenu2 from './component/itemmenu2';
import ItemMenu3 from './component/itemmenu3';

const Screen = Dimensions.get('window')

const Menu = ({ navigation }) => {
    return (
        <View style={styles.screen1}>
            <ScrollView style={{marginRight: Screen.width * 0.02}}>
                <View style={{ flexDirection: 'row', marginTop: Screen.height * 0.025, marginLeft: Screen.width * 0.05 }}>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#000C66', }]}>
                        <Text style={styles.text1}>Semua</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A9F', marginLeft: Screen.width * 0.025 }]}>
                        <Text style={styles.text1}>Lainnya</Text>
                    </TouchableOpacity>

                    {/* <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A9F', marginLeft: 15 }]}>
                        <Text style={styles.text1}>Item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A9F', marginLeft: 15 }]}>
                        <Text style={styles.text1}>Item</Text>
                    </TouchableOpacity> */}

                </View>

                <View style={[styles.search, { flexDirection: 'row', alignItems: 'center' }]}>

                    <View style={{ marginLeft: Screen.width * 0.03 }}>
                        <Icon name='magnifying-glass' size={20} color={'#726CE4'} />
                    </View>

                    <TextInput style={styles.searchinput}
                        placeholder='Cari barang '
                        placeholderTextColor={'#726CE4'}
                    />

                </View>

                <View style={{ marginBottom: Screen.height * 0.04 }}>

                    <View style={styles.rowMenu}>
                        <ItemMenu />
                        <ItemMenu />
                    </View>

                    <View style={styles.rowMenu}>
                        <ItemMenu2 />
                        <ItemMenu2 />
                    </View>

                    <View style={styles.rowMenu}>
                        <ItemMenu3 />
                        <ItemMenu3 />
                    </View>

                </View>

            </ScrollView>

            <TouchableOpacity onPress={() => {navigation.navigate('Payment')}} style={styles.cart}>
                <Icon2 name='shopping-cart' size={30} color={'#FFFFFF'}/>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    screen1: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    choices: {
        width: Screen.width * 0.2,
        height: Screen.height * 0.045,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    text1: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'
    },

    search: {
        width: Screen.width * 0.91,
        height: Screen.height * 0.056,
        backgroundColor: '#CBCEF4',
        marginLeft: Screen.width * 0.05,
        marginTop: Screen.height * 0.025,
        borderRadius: 10
    },

    searchinput: {
        paddingLeft: 9,
        padding: 0,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        width: Screen.width * 0.6
    },

    rowMenu: {
        flexDirection: 'row',
        marginTop: Screen.height * 0.02,
        marginLeft: Screen.width * 0.02
    },
    
    cart: {
        position: 'absolute',
        width: Screen.width * 0.18,
        height: Screen.height * 0.1,
        backgroundColor: '#000C66',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 20,
        top: Screen.height * 0.73,
        left: Screen.width * 0.75
    }

});

export default Menu;