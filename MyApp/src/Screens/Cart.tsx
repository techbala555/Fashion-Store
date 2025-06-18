import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CartList from "../Components/CartList";
import LoginButton from "../Components/LoginButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import { useCart } from "../context/CartContext"; 

type CartNavigationProp = NativeStackNavigationProp<AppModuleParamList, "CheckOutPage">;

const Cart = () => {
  const navigation = useNavigation<CartNavigationProp>();
  const { cartItems, clearCart } = useCart(); 

  return (
    <View style={styles.container}>
      <Header title="My Cart" showHeart={false} />
      <ScrollView>

      <View style={styles.cartlist}>
        {cartItems.length === 0 ? (
          <Text style={{ textAlign: "center", fontSize: 18, marginTop: 20 }}>Your cart is empty</Text>
        ) : (
          cartItems.map((item, index) => <CartList key={index} product={item} />)
        )}
      </View>
</ScrollView>
      {cartItems.length > 0 && (
        <View style=
        {{padding:10,}}>
          <LoginButton
            mode="contained"
            title={"Continue"}
            onPress={() => navigation.navigate("CheckOutPage")}
            style={styles.button} children={""}          />

          <LoginButton
            mode="outlined"
            title={"Remove all Items"}
            onPress={clearCart}
            style={styles.button1}
            labelStyle={styles.buttonTitle} children={""}          />
        </View>
      )}
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
    
  },
  cartlist:{
    padding:20,
    gap:16,
    justifyContent:'center',
    alignSelf:'center'
  },
  button:{
    width:"90%",
    alignContent:'center',
    // height:50,
    alignSelf:'center',
    alignItems:'center',
    // padding:5,
    borderRadius:30,
    backgroundColor:'#F16023',
    marginBottom:20
  },
  button1:{
    width:"90%",
    alignContent:'center',
    // height:50,
    alignSelf:'center',
    alignItems:'center',
    // padding:5,
    borderRadius:30,
    backgroundColor:'#fff',
    borderColor:'#F16023',
    borderWidth:2
  },
  buttonTitle:{
    color:'#F16023'
  }
    

});
