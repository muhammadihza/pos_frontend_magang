import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

const Screen = Dimensions.get('window')

const Home = ({ navigation }) => {
    return (
        <View style={styles.screen1}>

            <View>
                <Image style={{ marginTop: 20, width: Screen.width * 0.56, height: Screen.height * 0.27, }}
                    source={require('../../assets/images/Home.png')}
                />
            </View>

            <Text style={[styles.text1, {marginTop: 10}]}>Belum ada produk yang dijual saat ini</Text>
            <Text style={styles.text1}>Silahkan input produk mealui toko untuk mulai berjualan</Text>

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

    text1: {
        textAlign: 'center',
        color: '#454545',
        fontSize: 12,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'
    }

});

export default Home;