import React, {useState} from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';


const Screen = Dimensions.get('window')

const DetailPayment = () => {

    const [namaProduct, setNamaProduct] = useState('Air Conditioner');
    const [hargaProduct, setHargaProduct] = useState(4000000);
    const [totalHarga, setTotalHarga] = useState(8000000)

    return (
        <View>

            <View style={styles.container}>
                <Text style={styles.headtext}>Payment Detail</Text>
            </View>

            <View style={styles.container2}>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                    <View style={styles.detailkolom}>
                        <Text style={styles.text}>Nama Product </Text>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.text2}>{namaProduct}</Text>
                    </View>

                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                    <View style={styles.detailkolom}>
                        <Text style={styles.text}>Harga</Text>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.text2}>Rp {hargaProduct}</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>

                    <View style={styles.detailkolom}>
                        <Text style={styles.text}>Total</Text>
                    </View>

                    <View style={styles.detail}>
                        <Text style={styles.text2}>Rp {totalHarga}</Text>
                    </View>

                </View>

            </View>


        </View>





    );
}

const styles = StyleSheet.create({
    container: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.045,
        backgroundColor: '#284A9F',
        justifyContent: 'center',
        marginTop: Screen.height * 0.03,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
    },

    headtext: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        fontWeight: '500',
        color: '#FFFFFF',
        marginLeft: Screen.width * 0.03,
    },

    container2: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.16,
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },

    detailkolom: {
        width: Screen.width * 0.27,
        height: Screen.height * 0.04,
        marginLeft: Screen.width * 0.015,
        justifyContent: 'center'
    },

    text: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: 'Poppins-Medium',
        color: '#000000'
    },

    detail: {
        width: Screen.width * 0.35,
        height: Screen.height * 0.04,
        justifyContent: 'center',
        backgroundColor: 'gray'
    },

    text2: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: 'Poppins-Regular',
        color: '#FFFFFF',
        paddingLeft: 5
    },


})

export default DetailPayment;