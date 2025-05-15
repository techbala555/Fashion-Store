import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Screens/Home";
import Cart from "./Screens/Cart";
import FavrtProduct from "./Screens/FavrtProduct";
import Chat from "./Screens/Chat";
import Profile from "./Screens/Profile";
import Navbar from "./Components/Navbar";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
        id="bottom-tabs"
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="FavrtProduct" component={FavrtProduct} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
