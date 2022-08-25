import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput, Image } from "react-native";
import Icon from 'react-native-vector-icons/Feather'

const Screen = Dimensions.get ('window')

export default function DrawerContent(props) {
    return(
        <View>

            <TouchableOpacity onPress={() => {props.navigation.navigate('Menu')}} style={[styles.item, {marginTop: 20}]}>
                <Icon name='package' size={35} color={'#000000'} />
                <Text style={styles.text1}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.item, {marginTop: 10}]}>
                <Icon name='package' size={35} color={'#000000'} />
                <Text style={styles.text1}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.item, {marginTop: 10}]}>
                <Icon name='package' size={35} color={'#000000'} />
                <Text style={styles.text1}>Menu</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.item, {marginTop: 35}]}>
                <Icon name='package' size={35} color={'#000000'} />
                <Text style={styles.text1}>Menu</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create ({
    item: {
        width: Screen.width * 0.15,
        height: Screen.height * 0.08,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text1: {
        fontSize: 10,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        fontWeight: '600'
    }
})