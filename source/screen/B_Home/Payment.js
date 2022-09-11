import React from 'react';
import { View, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';

import PaymentItem from './component/paymentitem';



const Screen = Dimensions.get('window')

const Payment = ({ navigation }) => {
    
    return (
        <View style={styles.screen1}>
            <ScrollView>

                <PaymentItem navigation={navigation} />

                <PaymentItem />
                
            </ScrollView>

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

});

export default Payment;