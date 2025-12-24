import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { View, Text, Image, ImageBackground, StyleSheet, Animated } from 'react-native';
import { AppModuleParamList } from "../app.navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Asset } from "expo-asset";

export default function SplashScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(100)).current;
  const navigation = useNavigation<NativeStackNavigationProp<AppModuleParamList>>();

  useEffect(() => {
    // Preload assets to avoid any delay in loading images
    Asset.loadAsync([
      require('../../assets/images/SplashScreen.jpg'),
      require('../../assets/images/LOGO.png'),
    ]);

    // Start animations
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      // Navigate after the animations complete
      setTimeout(() => {
        navigation.navigate('Welcome');
      }, 2000); // Slight delay to ensure smooth transition
    });
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/SplashScreen.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <Image
        source={require('../../assets/images/LOGO.png')}
        style={styles.logo}
      />
      <Animated.Text
        style={[
          styles.text,
          {
            opacity: fadeAnim,
            transform: [{ translateY: translateY }],
          }
        ]}
      >
        Fashion Store
      </Animated.Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    color: '#000',
    fontWeight: '900',
    marginBottom: 100,
  },
});
