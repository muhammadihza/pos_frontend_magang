// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanDaftar from '../screen/A_Splash/HalDaftar';
import HalamanLogin from '../screen/A_Splash/HalLogin';
import Drawer_1 from './drawer/drawer';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer  >

      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        
        <Stack.Screen name="Login" component={HalamanLogin} />
        <Stack.Screen name="Daftar" component={HalamanDaftar} />
        

        <Stack.Screen name="HomeScreen" component={Drawer_1} />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default Navigation;