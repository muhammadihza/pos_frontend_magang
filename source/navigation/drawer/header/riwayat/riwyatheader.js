import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { DrawerActions } from '@react-navigation/native';

const Screen = Dimensions.get('window')

const RiwayatHeader = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.arrow}>
                <Icon2 name='arrow-left' size={22} color={'#FFFFFF'} />
            </TouchableOpacity>

            <Text style={styles.text}>RIWAYAT</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Screen.width,
        height: Screen.height * 0.1,
        backgroundColor: '#284A9F',
        flexDirection: 'row',
        alignItems: 'center',
    },

    arrow: {
        width: Screen.width * 0.08,
        height: Screen.height * 0.05,
        marginLeft: Screen.width * 0.04,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 20,
        color: "#FFFFFF",
        marginLeft: 20,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        marginTop: Screen.height * 0.005
    }

})

export default RiwayatHeader;