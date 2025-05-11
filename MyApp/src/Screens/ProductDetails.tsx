import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react';
import Header from '../Components/Header';
import StarRating from '../../assets/SVG/StarRating';

const ProductDetails = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Product Details" />
      </View>


      <View style={styles.imagecontainer}>
        <Image
                source={require('../../assets/images/Brown Jacket.png')}
                style={styles.image}/>
      </View>

      <View style={styles.mensstyle}>
         <Text style={styles.mentext}>Men's Style</Text>
         <StarRating/>
         <Text>4.5</Text>
      </View>
     <Text style={{fontSize:24,fontWeight:'500',color:'#000',marginLeft:27,marginTop:10}}>Light Brown Jacket</Text>
     <Text style={{fontSize:16,color:'#515151',marginLeft:27,marginTop:10}}>Product Details</Text>


    </View>
    
    
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container:{
        flex:1,  
        backgroundColor:'#fff',          
    },
    header:{
      marginTop:60
    },
    imagecontainer:{
    width:393,
    height:370,
    backgroundColor:'#7D321B',
    marginTop:10,
    alignContent:'center'
},
image:{
  width:232,
  height: 335,
  alignSelf:'center',
  marginTop:35
},
mensstyle:{
  flexDirection:'row',
  marginTop:20,
  paddingHorizontal:20,
  alignItems:'center',
  justifyContent:'center'
},
mentext:{
  fontSize:16,
  fontWeight:'regular',
  color:'#000',
  opacity:0.5,
  marginRight:220
}
})