import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {FontAwesome5, MaterialIcons, Feather} from '@expo/vector-icons'

import PayButton from '../components/InputComponent'

import Pending from '../pages/Pending'
import Delivered from '../pages/Delivered'
import Input from '../pages/Input'
import Archived from '../pages/Archived'
import Tributed from '../pages/Tributed'

const Tab = createBottomTabNavigator();
const icons = {
    
    Pending: {
        lib: MaterialIcons,
        name: 'airport-shuttle',
    },
    Delivered: {
        lib: Feather,
        name: 'package',
    },
    
    Archived: {
        lib: Feather,
        name: 'archive',
    },
    Tributed: {
        lib: FontAwesome5,
        name: 'money-bill',
    },
}

export default function Routes() {
  return (
    <Tab.Navigator
        initialRouteName="Wallet"
        screenOptions={({ route, navigation }) => ({
            tabBarIcon: ({ color, size, focused}) => {
                if(route.name == 'Input') {
                    return <PayButton
                        onPress={() => navigation.navigate('Input')}
                        focused={focused}
                    />
                }
                const { lib: Icon, name} = icons[route.name];
                return <Icon name={name} size={size} color="#10c86e"/>
            },
        })}
        tabBarOptions={{
            style: {
                backgroundColor: '#131418',
                borderTopColor: '#131418'
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#92929c',
        }}
    >
        <Tab.Screen 
            name="Pending" 
            component={Pending} 
            options={{
                title: 'Pendente'
            }}

        />
        <Tab.Screen 
            name="Delivered" 
            component={Delivered} 
            options={{
                title: 'Entregue'
            }}

        />
        <Tab.Screen 
            name="Input" 
            component={Input} 
            options={{
                title: ''
            }}
            
        />
        <Tab.Screen 
            name="Archived" 
            component={Archived} 
            options={{
                title: 'Arquivado'
            }}
            
        />
        <Tab.Screen 
            name="Tributed" 
            component={Tributed} 
            options={{
                title: 'Tributado'
            }}
            
        />
    </Tab.Navigator>
  );
}
