import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { AppModuleParamList } from "../app.navigation";
import LoginButton from "../Components/LoginButton";


type ThankyouScreenProp = NativeStackNavigationProp<AppModuleParamList,'thankYou'>;
const thankYou =()=>{
const navigation=useNavigation<ThankyouScreenProp>();
  const handlePress =()=>{
    navigation.navigate('Home')
  }
   
    return(
        <View style={styles.container}>
            <View style={styles.midContainer}>
            <Text style={styles.header}>Thank you!</Text>
            <Text style={styles.subtitle}>
            Your mobile number has been {'\n'}successfully validated.    
            </Text>
            <LoginButton title={"Continue"} onPress={handlePress} children={""}
            style={styles.button}/>
            </View>
            
        </View>

    );
};
export default thankYou;

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        justifyContent:'center',
      },
      midContainer:{
        alignItems:'center',        
      },
      header:{
        fontSize:24,
        fontWeight:'600',
        marginBottom:20,
        letterSpacing:0.6
      },
      subtitle:{
        fontSize:16,
        fontWeight:'500',
       textAlign:'center'
      },
      button: {
        width: 320,
        height: 50,
        borderRadius: 30,
        backgroundColor: "#F16023",
        justifyContent: "center",
        alignItems: "center",
        marginTop:30
      },

})
