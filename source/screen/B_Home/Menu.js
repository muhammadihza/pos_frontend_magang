import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Foundation';
import ItemMenu from './component/itemmenu1';
import ItemMenu2 from './component/itemmenu2';
import ItemMenu3 from './component/itemmenu3';

const Screen = Dimensions.get('window')

const Menu = ({ navigation }) => {
    return (
        <View style={styles.screen1}>
            <ScrollView>
                <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 22 }}>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A6F', }]}>
                        <Text style={styles.text1}>Item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A9F', marginLeft: 15 }]}>
                        <Text style={styles.text1}>Item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A9F', marginLeft: 15 }]}>
                        <Text style={styles.text1}>Item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.choices, { backgroundColor: '#284A9F', marginLeft: 15 }]}>
                        <Text style={styles.text1}>Item</Text>
                    </TouchableOpacity>

                </View>

                <View style={[styles.search, { flexDirection: 'row', alignItems: 'center' }]}>

                    <View style={{ marginLeft: 15 }}>
                        <Icon name='magnifying-glass' size={20} color={'#726CE4'} />
                    </View>

                    <TextInput style={styles.searchinput}
                        placeholder='Cari barang '
                        placeholderTextColor={'#726CE4'}
                    />

                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 28 }}>
                    <ItemMenu />
                    <ItemMenu />
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 12 }}>
                    <ItemMenu2 />
                    <ItemMenu2 />
                </View>

                <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 12 }}>
                    <ItemMenu3 />
                    <ItemMenu3 />
                </View>

            </ScrollView>


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
        marginLeft: 22,
        marginTop: 18,
        borderRadius: 10
    },

    searchinput: {
        paddingLeft: 9,
        padding: 0,
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        width: Screen.width * 0.6
    }

});

export default Menu;