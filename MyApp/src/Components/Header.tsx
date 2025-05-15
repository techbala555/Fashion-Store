import React from "react";
import { Text,View,StyleSheet,TouchableOpacity } from "react-native";
import BackArrow from "../../assets/SVG/BackArrow";
import HeartLike from "../../assets/SVG/HeartLike";
import { useNavigation } from "@react-navigation/native";



const Header =({title,showback=true})=>{
const navigation = useNavigation();

    return(
       <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackArrow />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <View>
                <HeartLike />
            </View>
        </View>     
        
       

    )
}
export default Header;

const styles=StyleSheet.create({
container:{
    height:50,
    backgroundColor:'#fff',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:20,
    justifyContent:'space-between',  
    marginTop:60
},
title:{
    fontSize:18,
    fontWeight:'semibold',
    color:'#000'
},

})