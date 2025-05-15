import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import FavrtProduct from './Screens/FavrtProduct';
import Chat from './Screens/Chat';
import Profile from './Screens/Profile';


const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
   <Tab.Navigator  screenOptions={{ headerShown: false }} id={undefined}>
    <Tab.Screen name='Home' component={Home} />
    <Tab.Screen name='Cart' component={Cart}/>
    <Tab.Screen name='Favorites' component={FavrtProduct}/>
    <Tab.Screen name='Chat' component={Chat}/>
    <Tab.Screen name='Profile' component={Profile}/>
   </Tab.Navigator>
  )
}

export default BottomTabNavigator

