import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CartList from "../Components/CartList";
import BackArrow from "../../assets/SVG/BackArrow";
import LoginButton from "../Components/LoginButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";

type CartNavigationProp = NativeStackNavigationProp<AppModuleParamList,"CheckOutPage">
const Cart = () => {
  const navigation =useNavigation<CartNavigationProp>()
  return (
    <View style={styles.container}>
      <Header
      title='My Cart'
      showHeart={false}/>


      <View style={styles.cartlist}>
        <CartList/>
         <CartList/>
      </View>


      <LoginButton mode="contained" title={"Continue"} onPress={() => navigation.navigate("CheckOutPage")} style={styles.button} children={""}/>
     
      <LoginButton mode="outlined" title={"Remove all Items"} onPress={function (): void {
        throw new Error("Function not implemented.");
      } } children={""} style={styles.button1} labelStyle={styles.buttonTitle}/>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
   
  },
  header:{
    flexDirection:'row',
    alignItems:'center',
    marginLeft:30,
    position:'absolute',
    top:80    
  },
  cartlist:{
    position:'absolute',
    top:140,
    left:35,
    gap:30
  },
  button:{
    width:325,
    alignContent:'center',
    height:50,
    alignSelf:'center',
    alignItems:'center',
    padding:5,
    borderRadius:30,
    backgroundColor:'#F16023',
    position:'absolute',
    top:640
  },
  button1:{
    width:325,
    alignContent:'center',
    height:50,
    alignSelf:'center',
    alignItems:'center',
    padding:5,
    borderRadius:30,
    backgroundColor:'#fff',
    position:'absolute',
    top:700,
    borderColor:'#F16023',
    borderWidth:2
  },
  buttonTitle:{
    color:'#F16023'
  }
    

});
