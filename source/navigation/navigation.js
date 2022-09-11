// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanDaftar from '../screen/A_Splash/HalDaftar';
import HalamanLogin from '../screen/A_Splash/HalLogin';
import Drawer_1, { Drawer_2 } from './drawer/drawer';
import User from '../screen/C_User/User';

import UserHeader from './drawer/header/user/userheader';
import AddUser from '../screen/C_User/AddUser';
import EditUser from '../screen/C_User/EditUser';
import Riwayat from '../screen/D_Riwayat/Riwayat';
import RiwayatHeader from './drawer/header/riwayat/riwyatheader';
import AddProduct from '../screen/E_Product/AddProduct';
import Payment from '../screen/B_Home/Payment';
import PaymentHeader from './drawer/header/payment/paymentheader';
import ListRiwayat from '../screen/D_Riwayat/ListRiwayat';
import RiwayatHeader_2 from './drawer/header/riwayat/riwyatheader_2';

const Stack = createNativeStackNavigator();

function Navigation_1() {
  return (
    <NavigationContainer  >

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>


        <Stack.Screen name="Login" component={HalamanLogin} />
        <Stack.Screen name="Daftar" component={HalamanDaftar} />

        <Stack.Screen name="HomeScreen" component={Drawer_1} />
        <Stack.Screen name="MenuScreen" component={Drawer_2} />
        <Stack.Screen name="Payment" component={Payment} options={{
          headerShown: true,
          header: ({ navigation }) => <PaymentHeader navigation={navigation} />
        }} />



        <Stack.Screen name="User" component={User} options={{
          headerShown: true,
          header: ({ navigation }) => <UserHeader navigation={navigation} />
        }} />
        <Stack.Screen name="AddUser" component={AddUser} />
        <Stack.Screen name="EditUser" component={EditUser} />

        <Stack.Screen name="Riwayat" component={Riwayat} options={{
          headerShown: true,
          header: ({ navigation }) => <RiwayatHeader navigation={navigation} />
        }} />
        <Stack.Screen name="ListRiwayat" component={ListRiwayat} options={{
          headerShown: true,
          header: ({ navigation }) => <RiwayatHeader_2 navigation={navigation} />
        }} />

        <Stack.Screen name="AddProduct" component={AddProduct} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default Navigation_1;