// navigation/BottomTabs.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import FavrtProduct from './Screens/FavrtProduct';
import Profile from './Screens/Profile';
import Chat from './Screens/Chat';
import Navbar from './Components/Navbar';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={() => <Navbar  />}  // 👈 Use your custom bottom bar
    id={undefined} >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="cart" component={Cart} />
      <Tab.Screen name="FavrtProduct" component={FavrtProduct} />
      <Tab.Screen name="chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
