import React from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const Screen = Dimensions.get('window')

const ItemMenu3 = () => {
    return (
        <View style={{ marginLeft: 12 }}>
            <View style={styles.head}>
                <Text style={styles.headtext}>Toko Sejahtera</Text>
            </View>

            <View style={styles.container}>
                <View style={styles.productimage}>
                    <Image style={{ width: Screen.width * 0.29, height: Screen.height * 0.14, }}
                        source={require('../../../assets/images/Refrigerator.webp')}
                    />
                </View>
            </View>

            <View style={styles.body}>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    <View style={styles.item_name}>
                        <Text style={styles.item_name_text}>Refrigerator</Text>
                    </View>

                    <TouchableOpacity style={styles.detailbutton}>
                        <Text style={styles.detailtext}>Detail</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.item_price}>Rp 2.590.000</Text>
                </View>

                <TouchableOpacity style={styles.addbutton}>
                    <Icon name='shopping-cart' size={15} color={'#284A9F'} />
                </TouchableOpacity>



            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        width: Screen.width * 0.44,
        height: Screen.height * 0.045,
        backgroundColor: '#284A9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },

    headtext: {
        fontSize: 13,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        color: '#FFFFFF'
    },

    container: {
        width: Screen.width * 0.44,
        height: Screen.height * 0.19,
        backgroundColor: '#CBCEF4',
        alignItems: 'center',
        justifyContent: 'center'
    },

    productimage: {
        borderRadius: 90,
        width: Screen.width * 0.44,
        height: Screen.height * 0.19,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center'
    },

    body: {
        width: Screen.width * 0.44,
        height: Screen.height * 0.13,
        backgroundColor: '#284A9F',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },

    item_name: {
        width: Screen.width * 0.26,
        height: Screen.height * 0.03,
        marginLeft: 10,
    },

    item_name_text: {
        fontSize: 12,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        color: '#FFFFFF',
    },

    detailbutton: {
        width: Screen.width * 0.12,
        height: Screen.height * 0.03,
        backgroundColor: '#1B8A09',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 5
    },

    detailtext: {
        fontSize: 10,
        fontWeight: '600',
        fontFamily: 'Poppins-SemiBold',
        color: '#FFFFFF'
    },

    item_price: {
        fontSize: 10,
        fontFamily: 'Poppins-Regular',
        fontWeight: '400',
        color: '#FFFFFF',
        marginLeft: 10,
    },

    addbutton: {
        width: Screen.width * 0.09,
        height: Screen.height * 0.03,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 70,
        marginTop: 10
    }
})

export default ItemMenu3;