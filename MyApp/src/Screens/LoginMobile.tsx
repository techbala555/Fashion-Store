import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-paper";
import LoginButton from "../Components/LoginButton";
import GoogleLogo from "../../assets/SVG/GoogleLogo";
import AppleLogo from "../../assets/SVG/AppleLogo";
import InstagramLogo from "../../assets/SVG/instagramLogo";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";

const LoginMobile = () => {
  const [mobile, setMobile] = useState("");

  // const signInWithPhoneNumber =async () =>{
  //   try{
  //     const confrimation =await auth().signInWithPhoneNumber(mobile)
  //     set
  //   }
  // }

  const handleMobileChange = (text: string) => {
    const cleaned = text.replace(/[^0-9]/g, ""); // Allow only numbers
    if (cleaned.length <= 10) setMobile(cleaned);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<AppModuleParamList, "Verify">>();
  const handleSendOtp = () => {
    console.log("Send OTP pressed", mobile);
    navigation.navigate("Verify");
  };

  return (

    <><StatusBar barStyle="dark-content"   />
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <Text style={styles.header}>
        Enter your mobile number to continue shopping in style!
      </Text>
      <Text style={styles.inputlabel}>Enter your mobile number</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter mobile number"
          mode="flat"
          value={mobile}
          onChangeText={handleMobileChange}
          right={<TextInput.Icon icon="phone" />}
          keyboardType="number-pad"
          underlineColor="transparent"
          style={styles.input}
           />
        <LoginButton
          title="Send OTP"
          style={styles.button}
          onPress={handleSendOtp}
          children={undefined} />
      </View>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialLogos}>
        <View style={styles.logoContainer}>
          <GoogleLogo width={30} height={30} />
        </View>
        <View style={styles.logoContainer}>
          <AppleLogo width={60} height={60} />
        </View>
        <View style={styles.logoContainer}>
          <InstagramLogo width={30} height={30} />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.signin}>
          By continuing, you agree to our{" "}
          <Text style={styles.link}>Terms & Privacy Policy</Text>.
        </Text>
      </View>
    </KeyboardAvoidingView></>
  );
};

export default LoginMobile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 80,
    alignItems: "center",
  },
  header: {
    width: "100%",
    fontSize: 24,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    letterSpacing: 0.5,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 40,
    flexDirection: "column",
  },
  inputlabel: {
    fontSize: 16,
    fontWeight: 500,
    alignSelf: "flex-start",
    marginTop: 100,
    color: "#333",
  },
  input: {
    width: "100%",
    height: 55,
    borderColor: "#F16023",
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    borderWidth: 2,
    marginBottom: 15,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  button: {
    width: "100%",
    height: 40,
    borderRadius: 30,
    backgroundColor: "#F16023",
    justifyContent: "center",
    alignItems: "center",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 30,
    width: "90%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#000",
    fontWeight: "600",
  },
  socialLogos: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginBottom: 40,
  },
  logoContainer: {
    backgroundColor: "#F0F0F0",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
    paddingBottom: 30,
  },
  signin: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  link: {
    textDecorationLine: "underline",
    color: "#200BD7",
    fontWeight: "700",
  },
});
