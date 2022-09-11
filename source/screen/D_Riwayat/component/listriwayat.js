import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Entypo';

const Screen = Dimensions.get('window')

const ListRiwayat_1 = ({ navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.screen1}>
            <View style={styles.header}>

                <View style={styles.item1}>
                    <Text style={styles.headText}>Air Conditioner</Text>
                </View>

                <View style={[styles.item3, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Berhasil</Text>
                </View>

                <View style={[styles.item2, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>8.000.000</Text>
                </View>

                <View style={[styles.item3, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>20/10/2022</Text>
                </View>

            </View>

            <View
                style={{
                    borderBottomColor: '#000000',
                    borderBottomWidth: StyleSheet.hairlineWidth * 3,
                    marginLeft: Screen.width * 0.025,
                    marginRight: Screen.width * 0.025
                }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    screen1: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },

    header: {
        marginTop: 10,
        marginLeft: Screen.height * 0.035,
        flexDirection: 'row',
    },

    item1: {
        width: Screen.width * 0.27,
        height: Screen.height * 0.07,
        // backgroundColor: "#189AB4",
    },

    item2: {
        width: Screen.width * 0.23,
        height: Screen.height * 0.07,
        // backgroundColor: "#189AB4",
    },

    item3: {
        width: Screen.width * 0.16,
        height: Screen.height * 0.07,
        // backgroundColor: "#189AB4",
    },

    headText: {
        fontSize: 10,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: "#000000",
        textAlign: 'left'
    },

    editButton: {
        width: Screen.width * 0.045,
        height: Screen.height * 0.03,
        backgroundColor: '#81B622',
        alignItems: 'center',
        justifyContent: 'center'
    },

    deleteButton: {
        width: Screen.width * 0.045,
        height: Screen.height * 0.03,
        backgroundColor: '#AE388B',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Screen.height * 0.005
    },

    cross: {
        width: Screen.width * 0.055,
        height: Screen.height * 0.035,
        position: 'absolute',
        top: Screen.height * 0.37,
        left: Screen.width * 0.819,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default ListRiwayat_1;