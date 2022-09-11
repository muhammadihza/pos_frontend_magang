import React, { useState } from 'react';
import { Text, Image, View, StyleSheet, Dimensions, TouchableOpacity, Modal } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import DetailPayment from './detailpayment';
import PaymentModal from './paymentmodal';


const Screen = Dimensions.get('window')

const PaymentItem = ({navigation}) => {

    const [quantityValue, setQuantityValue] = useState(2);
    const [modalVisible, setModalVisible] =  useState(false);

    return (
        <View style={{ marginTop: 20 }}>
            <View style={styles.head}>
                <Text style={styles.headtext}>Toko Sejahtera</Text>
            </View>

            <View style={styles.container}>

                <View style={styles.imageborder}>

                    <View style={styles.productimage}>
                        <Image style={{ width: Screen.width * 0.26, height: Screen.height * 0.07, }}
                            source={require('../../../assets/images/AC.jpg')}
                        />
                    </View>

                    <View style={styles.quantityarea}>

                        <TouchableOpacity>
                            <Icon name='plus-circle' size={20} color={'#CBCEF4'} />
                        </TouchableOpacity>

                        <View style={styles.quantity}>
                            <Text>{quantityValue}</Text>
                        </View>

                        <TouchableOpacity>
                            <Icon name='minus-circle' size={20} color={'#CBCEF4'} />
                        </TouchableOpacity>

                    </View>

                </View>

                <DetailPayment />

            </View>

            <View style={styles.container2}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.bayarbutton}>
                    <Text style={styles.headtext}>Bayar</Text>
                </TouchableOpacity>

            </View>

            <Modal visible={modalVisible} animationType={'slide'} transparent={true}>
                <PaymentModal navigation={navigation}/>

                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalbutton}>
                    <Text style={styles.modalbutton_text}>Ok</Text>
                </TouchableOpacity>
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    head: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.045,
        backgroundColor: '#284A9F',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },

    headtext: {
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        color: '#FFFFFF'
    },

    container: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.55,
        backgroundColor: '#CBCEF4',
        alignItems: 'center'
    },

    imageborder: {
        width: Screen.width * 0.8,
        height: Screen.height * 0.27,
        backgroundColor: '#284A9F',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Screen.height * 0.03,
        borderRadius: 5
    },

    productimage: {
        width: Screen.width * 0.32,
        height: Screen.height * 0.15,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90
    },

    quantityarea: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: Screen.width * 0.3,
        height: Screen.height * 0.05,
        marginTop: Screen.height * 0.02
    },

    quantity: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Screen.width * 0.06,
        height: Screen.height * 0.035,
        backgroundColor: '#FFFFFF'

    },

    container2: {
        width: Screen.width * 0.9,
        height: Screen.height * 0.09,
        backgroundColor: '#284A9F',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: Screen.height * 0.02,
        alignItems: 'center',
        justifyContent: 'center'
    },

    bayarbutton: {
        width: Screen.width * 0.6,
        height: Screen.height * 0.055,
        backgroundColor: '#18A558',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        elevation: 20
    },

    modalbutton: {
        width: Screen.width * 0.3,
        height: Screen.height * 0.055,
        position: 'absolute',
        backgroundColor: '#18A558',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 90,
        top: Screen.height * 0.66, bottom: 0,
        left: Screen.width * 0.35, right: 0
    },

    modalbutton_text: {
        fontSize: 18,
        fontFamily: 'Poppins-SemiBold',
        fontWeight: '600',
        color: '#FFFFFF',
    }


})

export default PaymentItem;