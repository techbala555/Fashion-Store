import React, { useRef, useState } from "react";
import { View,Text,StyleSheet,Button, TouchableOpacity, TextInput } from "react-native";
import EditIcon from "../../assets/SVG/editIcon";
import LoginButton from "../Components/LoginButton";
import AppleLogo from "../../assets/SVG/AppleLogo";
import GoogleLogo from "../../assets/SVG/GoogleLogo";
import InstagramLogo from "../../assets/SVG/instagramLogo";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";


const otpVerify = () =>{
    const [otp,setOtp] = useState(['','','','']);
    const inputs =useRef<(TextInput | null)[]> ([]);

    const handleChange = (text: string, index: number)=>{
        const newOtp = [...otp];
        newOtp[index] =text;
        setOtp(newOtp);

        if (text && index <3) {
            inputs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (text: string, index: number) => {
        if (text ==='' && index > 0) {
            inputs.current[index -1]?.focus();
        };
    };
     const navigation =useNavigation<NativeStackNavigationProp<AppModuleParamList,'thankYou'>>()
     const handleVerify =()=>{
      navigation.navigate('thankYou')
     }
    return(
        <View style={styles.container}>
            <Text style={styles.header}>
                We Just Sent an SMS
            </Text>
            <View>
                <Text style={styles.subhead}>Enter the security code we sent to</Text>
               <View style={styles.mobnum}><Text style={styles.mobtext}>+91 9080865756</Text>
               <TouchableOpacity><EditIcon/></TouchableOpacity></View> 
            </View>

            <View style={styles.otpContainer}>
                {otp.map((digit, index)=>(
                    <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    style={styles.input}
                    keyboardType="numeric"
                    maxLength={1}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    onKeyPress={({nativeEvent}) => {
                        if (nativeEvent.key === 'Backspace'){
                            handleBackspace('', index);
                        }
                    }}                
                    />
                ))}
            </View>
            <View>
                <LoginButton
            title="Verify OTP"
            style={styles.button}
            onPress={handleVerify} children={""}/>
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
        </View> 
    );
};
export default otpVerify;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingTop: 50,
        alignItems: "center",
      },
    header: {
        fontSize: 24,
        fontWeight: "600",
        color: "#000",
        letterSpacing:0.5,
        alignContent:'center',
      },
      subhead:{
        fontSize:16,
        fontWeight: "500",
        color: "#000",
        paddingTop: 30,
        alignSelf:'center',      
      },
      mobtext:{
        fontSize:14,
        fontWeight:"500",
        color:'#888',
        alignSelf:'center',
        marginRight:20
    },
    mobnum:{
        flexDirection:'row',
        marginTop:20,
        alignSelf:'center',   
    },
    otpContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'100%',
        marginTop:30
    },
    input:{
        width:50,
        height:50,
        borderWidth:2,
        borderColor:'#F16023',
        borderRadius:8,
        fontSize:20,
        textAlign:'center'
    },
    button: {
        width: 310,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#F16023",
        justifyContent: "center",
        alignItems: "center",
        marginTop:30
      },
      orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 30,
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