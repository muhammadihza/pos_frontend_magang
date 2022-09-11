import React from 'react';
import { ScrollView, Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'

import User_1 from './component/user1';
import User_2 from './component/user2';
import User_3 from './component/user3';
import User_4 from './component/user4';

const Screen = Dimensions.get('window')

const User = ({navigation}) => {
    return (
        <View style={styles.screen1}>
            <View style={styles.header}>

                <View style={styles.item1}>
                    <Text style={styles.headText}>Nama</Text>
                </View>

                <View style={[styles.item1, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Phone</Text>
                </View>

                <View style={[styles.item2, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Email</Text>
                </View>

                <View style={[styles.item3, { marginLeft: Screen.width * 0.01 }]}>
                    <Text style={styles.headText}>Alamat</Text>
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
                <User_1 navigation={navigation}/>
                <User_2 navigation={navigation}/>
                <User_3 navigation={navigation}/>
                <User_4 navigation={navigation}/>
            </ScrollView>

            <TouchableOpacity onPress={() => {navigation.navigate('AddUser')}} style={{
                position: 'absolute',
                top: Screen.height * 0.75,
                left: Screen.width * 0.8
            }}>
                <Icon name='add-circle' size={45} color={'#189AB4'} />
            </TouchableOpacity>

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
        width: Screen.width * 0.19,
        height: Screen.height * 0.05,
        // backgroundColor: "#189AB4",
    },

    item2: {
        width: Screen.width * 0.24,
        height: Screen.height * 0.05,
        // backgroundColor: "#189AB4",
    },

    item3: {
        width: Screen.width * 0.27,
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

export default User;