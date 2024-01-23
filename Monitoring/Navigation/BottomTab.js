import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Dashboard from '../Screens/Dashboard'
import { AntDesign } from '@expo/vector-icons';
import Babylivestream from '../Screens/Babylivestream'




const Tab=createBottomTabNavigator();
export default function BottomTab() {
  return (

    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Dashboard') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        }

        // You can add more icons for additional tabs here

        return <AntDesign name="home" size={24} color="black" />;
      },
    })}
  
  >
            <Tab.Screen   name='Dashoard'  component={Dashboard}  />
        </Tab.Navigator>
   
  )
}