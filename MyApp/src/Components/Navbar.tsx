import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import HomeIcon from '../../assets/SVG/HomeIcon';
import CartIcon from '../../assets/SVG/CartIcon';
import FavrtIcon from '../../assets/SVG/FavrtIcon';
import ChatIcon from '../../assets/SVG/chatIcon';
import ProfileIcon from '../../assets/SVG/ProfileIcon';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AppModuleParamList } from "../app.navigation";


type NavigationProp = NativeStackNavigationProp<AppModuleParamList>;

const Navbar = () => {
  const navigation = useNavigation<NavigationProp>();
  const route =useRoute();
const currentRoute = route.name;
  const icons: { name: string; component: React.FC<{ color: string }>; screen: keyof AppModuleParamList }[] = [
  { name: "home", component: HomeIcon, screen: "Home" },
  { name: "cart", component: CartIcon, screen:'cart'},
  { name: "fav", component: FavrtIcon, screen:'FavrtProduct' },
  { name: "chat", component: ChatIcon, screen:'chat' },
  { name: "profile", component: ProfileIcon, screen: "Profile" },
];


  return (
    <View style={styles.container}>
      {icons.map(({ name, component: Icon, screen }) => {
        const isActive = currentRoute === screen;

        return (
          <TouchableOpacity
            key={name}
            style={[styles.iconWrapper, isActive && styles.activeCircle]}
            onPress={() => {
              navigation.navigate(screen);
            }}
          >
            <Icon color={isActive ? "#F16023" : "#fff"} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  container: {
    width: 339,
    height: 60,
    backgroundColor: "#F16023",
    borderRadius: 50,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "center",
    position: "relative",
    bottom: 30,
  },
  iconWrapper: {
    padding: 10,
    borderRadius: 50,
  },
  activeCircle: {
  backgroundColor: "#fff",
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  elevation: 5, 
},

});
