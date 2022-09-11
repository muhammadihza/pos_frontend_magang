import React from 'react';
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";


const Screen = Dimensions.get('window')

const PaymentModal = ({ navigation }) => {
    return (
        <View style={styles.container1}>

            <View style={styles.head}>
                <Text style={styles.headtext}>Payment Status</Text>
            </View>

            <View style={styles.body}>

                <Image style={styles.image} source={require('../../../assets/images/Payment.png')}/>

                <Text style={[styles.bottomtext, {marginTop: Screen.height * 0.02}]}>Selamat!!</Text>
                <Text style={[styles.bottomtext, {bottom: Screen.height * 0.01}]}>Transaksi Pembayaran Berhasil</Text>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },

    head: {
        width: Screen.width * 0.76,
        height: Screen.height * 0.065,
        backgroundColor: '#75E6DA',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },

    body: {
        width: Screen.width * 0.76,
        height: Screen.height * 0.45,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25
    },

    image: {
        width: Screen.width * 0.36,
        height: Screen.height * 0.215,
        marginTop: Screen.height * 0.04
    },

    headtext: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#000000'
    },

    bottomtext: {
        fontSize: 15,
        fontFamily: 'Poppins-SemiBold',
        color: '#000000',
        fontWeight: '600'
    }

});

export default PaymentModal;