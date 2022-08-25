import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/FontAwesome5'
import { DrawerActions } from '@react-navigation/native';

const Screen = Dimensions.get('window')

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} style={{ marginLeft: 18 }}>
                <Icon name='bars' size={17} color={'#FFFFFF'} />
            </TouchableOpacity>

            <View style={styles.mid}>
                <View>
                    <Image style={{ marginTop: 20, width: Screen.width * 0.09, height: Screen.height * 0.06, }}
                        source={require('../../../../assets/images/SmallVector.png')}
                    />
                </View>

                <Text style={styles.text1}>Selamat Datang !</Text>
            </View>
            <TouchableOpacity style={{marginLeft: 80, marginRight: 25}}>
                <Icon2 name='store' color={'#FFFFFF'} size={20} />
            </TouchableOpacity>



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
        justifyContent: 'center'
    },

    text1: {
        fontSize: 12,
        color: "#FFFFFF",
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold'
    },

    mid: {
        flexDirection: 'column',
        marginLeft: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5
    }

})

export default Header;