import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon2 from 'react-native-vector-icons/FontAwesome'
import Icon3 from 'react-native-vector-icons/Ionicons'
import Icon4 from 'react-native-vector-icons/Octicons'

const Screen = Dimensions.get('window')

export default function DrawerContent_2(props) {
    return (
        <View>

            <TouchableOpacity style={[styles.defaultitem, { marginTop: 20 }]}>
                <Icon name='package' size={35} color={'#FFFFFF'} />
                <Text style={styles.text1}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.navigation.navigate('ListRiwayat') }} style={[styles.item, { marginTop: 10 }]}>
                <View style={{ marginLeft: 5, marginTop: 5 }}>
                    <Icon4 name='checklist' size={30} color={'#FFFFFF'} />
                </View>
                <Text style={styles.text1}>Riwayat</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { props.navigation.navigate('User') }} style={[styles.item, { marginTop: 10 }]}>
                <Icon2 name='user' size={35} color={'#FFFFFF'} />
                <Text style={styles.text1}>User</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => { props.navigation.navigate('Login') }} style={[styles.item, { marginTop: Screen.height * 0.05 }]}>
                <View style={{ marginLeft: 10 }}>
                    <Icon3 name='exit' size={35} color={'#FFFFFF'} />
                </View>
                <Text style={styles.text1}>Exit</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    defaultitem: {
        width: Screen.width * 0.15,
        height: Screen.height * 0.08,
        backgroundColor: '#189AB4',
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        width: Screen.width * 0.15,
        height: Screen.height * 0.08,
        backgroundColor: '#189AB4',
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text1: {
        fontSize: 11,
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF',
        fontWeight: '600'
    }
})