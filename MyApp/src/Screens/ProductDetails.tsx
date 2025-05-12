import { StyleSheet, Text, View,Image, ScrollView, SafeAreaView, Button } from 'react-native'
import React from 'react';
import Header from '../Components/Header';
import StarRating from '../../assets/SVG/StarRating';
import SizeSelector from '../Components/SizeSelector';
import ColorSelector from '../Components/colourSelector';
import LoginButton from '../Components/LoginButton';

const ProductDetails = () => {
  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Header title="Product Details" />   

    <ScrollView
  keyboardShouldPersistTaps="handled"
  contentContainerStyle={{ paddingBottom: 50 }}
  showsVerticalScrollIndicator={false}
>
    <View style={styles.container}>      

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
    <Text style={styles.para}>Lorem Ipsum has been the industry's standard dummy {'\n'}text ever since the 1500s, when an unknown printer took {'\n'}a galley of type and scrambled it to make a type 
    {'\n'}<Text style={{ color: '#7D321B', fontWeight: 'bold',textDecorationLine:'underline' }}>Read more</Text></Text>
      <View style={{borderWidth:1,width:335,borderColor:"#000",opacity:0.2,alignSelf:'center',marginTop:20}}></View>
      
      <Text style={{fontSize:16,fontWeight:'600', color:'#000000',marginTop:10,marginLeft:25}}>Selct Size</Text>
      
      <View style={styles.sizeselector}>
      <SizeSelector/>     
      </View>

     
      <ColorSelector/>

      <View style={{borderWidth:1,width:335,borderColor:"#000",opacity:0.2,alignSelf:'center',marginTop:20}}></View>

      <View style={styles.priceContainer}>
       <Text style={styles.priceText}>
               Total Price{'\n'}
          <Text style={styles.priceAmount}>$83.97</Text>
         </Text>

  <LoginButton
              style={styles.buttonView}
              title="Add to Cart"
              onPress={() => { } } children={''}  />
</View>

    </View>
    </ScrollView>
    </SafeAreaView>   
    
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container:{
        flex:1,  
        backgroundColor:'#fff', 
        width: '100%',
        alignSelf: 'center'
         
    },
    header:{
      marginTop:60,
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
},
para:{
  marginLeft:25,
  marginTop:10,
  fontSize:12  
},
sizeselector:{
  marginLeft:25,
  },
priceContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginHorizontal: 25,
  marginTop: 20,
},

priceText: {
  fontSize: 16,
  fontWeight: '400',
  color: '#515151',
},

priceAmount: {
  fontSize: 18,
  fontWeight: '600',
  color: '#000',
},

buttonView: {
  width: 150,
  paddingVertical: 10,
  borderRadius: 22,
  backgroundColor: "#F16023",
  alignItems: 'center',
  
},

})