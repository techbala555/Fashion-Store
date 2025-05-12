import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { AppModuleParamList } from "../app.navigation";
import LoginButton from "../Components/LoginButton";

type WelcomeNavigationProp = NativeStackNavigationProp<AppModuleParamList, 'Welcome'>;

const Welcome = () => {
  const navigation = useNavigation<WelcomeNavigationProp>();
  return (
    <ImageBackground
      source={require('../../assets/images/GetStartImage.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.text}>Welcome</Text>

        <Text style={styles.subtitle}>
          StyleHub – where fashion meets elegance in{'\n'}
          every click.
        </Text>
      </View>

      {/* Use flexbox to push the button to the bottom */}
      <View style={styles.footer}>
        <LoginButton
          style={styles.button}
          // labelStyle={styles.labeltext}
          title="Let’s Get Started"
          onPress={() => navigation.navigate('Login')} children={""}/>
        <View style={styles.signInContainer}>
          <Text style={styles.signin}>
            Already Have an Account?{' '}
            <Text style={styles.link}>Sign In</Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  content: {
    marginLeft: 20,
    marginTop: 150,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    color: '#000',
    lineHeight: 24,
  },
  button:{
    width:325,
    alignContent:'center',
    height:50,
    alignSelf:'center',
    alignItems:'center',
    padding:5,
    borderRadius:30,
    backgroundColor:'#F16023'
  },
  labeltext:{
    fontSize:16,
    fontWeight:'semibold'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end', // Pushes the button and sign-in text to the bottom
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignContent:'center' // Add padding at the bottom for better spacing
  },
  signInContainer:{
    justifyContent:'center',
    alignSelf:'center',
    marginTop:10
  },
  signin: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  link: {
    textDecorationLine: 'underline',
    color: "#200BD7",
    fontSize: 18,
    fontWeight: "800",
  },
});
