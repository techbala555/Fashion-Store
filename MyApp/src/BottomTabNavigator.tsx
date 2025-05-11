import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/Home';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
   <Tab.Navigator>
    <Tab.Screen name='Home' component={Home}/>
    {/* <Tab.Screen name='cart'/>
    <Tab.Screen name='Profile'/> */}
   </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})