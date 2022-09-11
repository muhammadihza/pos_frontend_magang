import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import ListRiwayat_1 from './component/listriwayat';

const Screen = Dimensions.get('window')

const ListRiwayat = ({navigation}) => {
    return (
        <View style={styles.screen1}>
            <View style={styles.header}>

                <View style={styles.item1}>
                    <Text style={styles.headText}>Nama Produk</Text>
                </View>

                <View style={[styles.item3, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Status</Text>
                </View>

                <View style={[styles.item2, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Total Harga</Text>
                </View>

                <View style={[styles.item3, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Tanggal</Text>
                </View>

            </View>

            <View
                style={{
                    borderBottomColor: '#189AB4',
                    borderBottomWidth: StyleSheet.hairlineWidth * 8,
                    marginLeft: Screen.width * 0.025,
                    marginRight: Screen.width * 0.025
                }}
            />

            <ScrollView>
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
                <ListRiwayat_1 />
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    screen1: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    header: {
        marginTop: 20,
        marginLeft: Screen.height * 0.035,
        flexDirection: 'row',
    },

    item1: {
        width: Screen.width * 0.27,
        height: Screen.height * 0.05,
        // backgroundColor: "#189AB4",
    },

    item2: {
        width: Screen.width * 0.23,
        height: Screen.height * 0.05,
        // backgroundColor: "#189AB4",
    },

    item3: {
        width: Screen.width * 0.16,
        height: Screen.height * 0.05,
        // backgroundColor: "#189AB4",
    },

    headText: {
        fontSize: 13,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: "#000000",
    },

})

export default ListRiwayat;