import * as React from 'react';
import { Button, View, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../../screen/B_Home/Home';
import Header from './header/home/header';
import DrawerContent from './drawer/drawercontent';
import Menu from '../../screen/B_Home/Menu';

const Screen = Dimensions.get('window')
const Drawer = createDrawerNavigator();

export default function Drawer_1() {
    return (

        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}

            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#284A9F',
                    width: Screen.width * 0.27,
                    height: Screen.height * 0.45,
                    top: 200,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    alignItems: 'center',
                },

                headerShown: true,
                header: ({ navigation }) => <Header navigation={navigation} />
            }}>

            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Menu" component={Menu} />

        </Drawer.Navigator>

    );
}