import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import HomeIcon from '../../assets/SVG/HomeIcon';
import CartIcon from '../../assets/SVG/CartIcon';
import FavrtIcon from '../../assets/SVG/FavrtIcon';
import ChatIcon from '../../assets/SVG/chatIcon';
import ProfileIcon from '../../assets/SVG/ProfileIcon';

import { useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

// Define your bottom tab param list
type BottomTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorites: undefined;
  Chat: undefined;
  Profile: undefined;
};

type NavigationProp = BottomTabNavigationProp<BottomTabParamList>;

const Navbar = () => {
  const [active, setActive] = useState("home");
  const navigation = useNavigation<NavigationProp>();

  const icons: { name: string; component: React.FC<{ color: string }>; screen: keyof BottomTabParamList }[] = [
  { name: "home", component: HomeIcon, screen: "Home" },
  { name: "cart", component: CartIcon, screen: "Cart" },
  { name: "fav", component: FavrtIcon, screen: "Favorites" },
  { name: "chat", component: ChatIcon, screen: "Chat" },
  { name: "profile", component: ProfileIcon, screen: "Profile" },
];


  return (
    <View style={styles.container}>
      {icons.map(({ name, component: Icon, screen }) => {
        const isActive = active === name;

        return (
          <TouchableOpacity
            key={name}
            style={[styles.iconWrapper, isActive && styles.activeCircle]}
            onPress={() => {
              setActive(name);
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
  },
});
