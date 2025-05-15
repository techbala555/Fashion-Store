import React, { useState } from "react";
import { View,Text,StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions, FlatList } from "react-native";
import BrandLogo from "../../assets/SVG/icons/BrandLogo";
import SearchIcon from "../../assets/SVG/SearchIcon";
import BagIcon from "../../assets/SVG/BagIcon";
import NotificationIcon from "../../assets/SVG/NotificationIcon ";
import LoginButton from "../Components/LoginButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../Components/Navbar";


type ProductdetailsNavigationProp = NativeStackNavigationProp<AppModuleParamList, 'ProductDetails'>;
const Home =() =>{
    const navigation = useNavigation<ProductdetailsNavigationProp>();
    const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
    const ScreenWidth = Dimensions.get('screen').width;
    const [activeIndex,setActiveIndex] = useState(0);
    const fashionProducts = [
        {
         id:'1',
         name:"Brown Jacket",
         price:'$1.85',
         image:require('../../assets/images/Brown Jacket.png' )
        },
        {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
        {
            id:'3',
            name:'Yellow Jacket',
            price:'$2.5',
            image:require('../../assets/images/yellow jacket.png')
        },
        {
            id:'4',
            name:'Yellow Jacket',
            price:'$2.5',
            image:require('../../assets/images/yellow jacket.png')
        },
        {
         id:'1',
         name:"Brown Jacket",
         price:'$1.85',
         image:require('../../assets/images/Brown Jacket.png' )
        },
        {
         id:'1',
         name:"Brown Jacket",
         price:'$1.85',
         image:require('../../assets/images/Brown Jacket.png' )
        },
         {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
         {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
         {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
         {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
        {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
         {
            id:'2',
            name:'Brown Jacket',
            price:'$2.5',
            image:require('../../assets/images/Floral Dress.png')
        },
    ]
    return(
        <View style={styles.container}>
            <View style={styles.topbar}>
                <View style={styles.Logocontainer}>
                 
                    <BrandLogo/><Text style={styles.logotext}>Fashion Store</Text>
                    
                    <View style={styles.iconContainer}>
      
                        <TouchableOpacity onPress={() => setSelectedIcon('search')}>
                            <SearchIcon fill={selectedIcon === 'search' ? "#F16023" : "#000"} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectedIcon('bag')}>
                            <BagIcon fill={selectedIcon === 'bag' ? "#F16023" : "#000"} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setSelectedIcon('notification')}>
                            <NotificationIcon fill={selectedIcon === 'notification' ? "#F16023" : "#000"} />
                        </TouchableOpacity>

                     </View>                    
                </View>
            </View>

            <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    style={styles.carousel }
                    contentContainerStyle={{ paddingHorizontal: 1 }}
                    onScroll={(event)=>{
                        const scrollX = event.nativeEvent.contentOffset.x;
                        const index = Math.round(scrollX / ScreenWidth);
                        setActiveIndex(index)
                    }}
                    scrollEventThrottle={16}
                    >
                    <View style={styles.offercontainer1}>
                        <Image source={require("../../assets/images/offer-1.png")} style={styles.menimg} />
                        <Text style={styles.offtext}>New Collection</Text>
                        <Text style={styles.offsubtext}>Get up to 50% off on{'\n'}Men’s Collection!</Text>
                        <LoginButton style={styles.buttonView} title={"Shop Now"} onPress={() => {}} children={""} />
                    </View>

                    <View style={styles.offercontainer2}>
                        <Image source={require("../../assets/images/offer-women.png")} style={styles.womenimg} />
                        <Text style={styles.offtext}>New Collection</Text>
                        <Text style={styles.offsubtext}>Get up to 50% off on{'\n'}Women’s Collection!</Text>
                        <LoginButton style={styles.buttonView} title={"Shop Now"} onPress={() => {}} children={""} />
                    </View>

                    <View style={styles.offercontainer3}>
                        <Image source={require("../../assets/images/kidsoffer.png")} style={styles.kidsimg} />
                        <Text style={styles.offtext}>New Collection</Text>
                        <Text style={styles.offsubtext}>Get up to 50% off on{'\n'}Kids Collection!</Text>
                        <LoginButton style={styles.buttonView} title={"Shop Now"} onPress={() => {}} children={""} />
                    </View>

                    <View style={styles.offercontainer4}>
                        <Image source={require("../../assets/images/girlsoffer.png")} style={styles.girlsimg} />
                        <Text style={styles.offtext}>New Collection</Text>
                        <Text style={styles.offsubtext}>Get up to 50% off on{'\n'}Girls Collection!</Text>
                        <LoginButton style={styles.buttonView} title={"Shop Now"} onPress={() => {}} children={""} />
                    </View>
            </ScrollView>
            <View style={styles.pagination}>
                {[0,1,2,3].map((_,index)=>(
                    <View
                    key={index}
                    style={[
                        styles.dot,
                        activeIndex === index ? styles.activeDot : null
                    ]}
                    
                    />
                ))}
            </View>
            <Text style={styles.trendingtext}>TRENDING</Text>
            <View style={{flex:1}}>                
                <FlatList
                data={fashionProducts}
                keyExtractor={(item)=> item.id}
                numColumns={2}
                renderItem={({item}) => (
              
                   <TouchableOpacity
                   style={styles.card}
                   onPress={()=>navigation.navigate('ProductDetails')}
                  >
                    
                     <Image source={item.image} style={styles.image}/>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                   </TouchableOpacity>
             
                )}
                contentContainerStyle={styles.catcontainer}
                columnWrapperStyle={{justifyContent:'space-evenly'}}
                showsVerticalScrollIndicator={false}
                />
            </View>
            <Navbar/>
        </View>
    )
};
export default Home;

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    topbar:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:30,
        marginTop:80
    },
    Logocontainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'        
    },
    logotext:{
        fontSize:20
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 10,
        marginLeft:50,
        gap:10
      },
   offercontainer1:{
    width:310,
    height:250,
    backgroundColor:'#D3EAFF',
    borderRadius:20,
    alignSelf:'center',
    marginTop:25,
    justifyContent:'center',
    marginRight:20     
   },
   offercontainer4:{
    width:310,
    height:250,
    backgroundColor:'#FFFFD3',
    borderRadius:20,
    alignSelf:'center',
    marginTop:25,
    justifyContent:'center',
    marginRight:100,
    
   },
   offercontainer2:{
    width:310,
    height:250,
    backgroundColor:'#FFD3ED',
    borderRadius:20,
    alignSelf:'center',
    marginTop:25,
    justifyContent:'center',
    marginRight:20     
   },
   offercontainer3:{
    width:310,
    height:250,
    backgroundColor:'#D8FFD3',
    borderRadius:20,
    alignSelf:'center',
    marginTop:25,
    justifyContent:'center',
    marginRight:20     
   },
   menimg:{
    width:200,
    height:250,
    marginLeft:140
   },
   womenimg:{
    width:140,
    height:250,
    marginLeft:170
   },
   kidsimg:{
    width:120,
    height:220,
    marginLeft:180
   },
   girlsimg:{
    width:160,
    height:200,
    marginLeft:160,
    
   },
   offtext:{
    fontSize:20,
    fontWeight:'700',
    color:"#000",
    position:'absolute',
    top:30,
    left:30 
    },
    offsubtext:{
      fontSize:16,
      fontWeight:'medium',
      color:'#000',
      position:'absolute',
      left:30,
      top:80  
    },
    offtext2:{
        fontSize:20,
        fontWeight:'700',
        color:"#000",
        position:'absolute',
        top:30,
        left:30 
        },
    offsubtext2:{
          fontSize:16,
          fontWeight:'medium',
          color:'#000',
          position:'absolute',
          left:30,
          top:80  
        },
    buttonView:{
        width:123,
        borderRadius:12,
        backgroundColor:"#F16023",
        position:'absolute',
        left:30,
        top:150
    },
    carousel:{
        position:'absolute',
        top:150,
        left:30,
        
    },
    pagination:{
        width:"30%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 320, // adjust based on layout
        marginLeft:140    
    },
    dot: {
        width: 15,
        height: 15,
        borderRadius: 10,
        backgroundColor: '#ccc',
       },
      
      activeDot: {
        backgroundColor: '#F16023',
        width: 15,
        height: 15,
      },
      trendingtext:{
        fontSize:20,
        fontWeight:'semibold',
        marginLeft:30,
        marginTop:10
      },
      catcontainer:{
    //    paddingHorizontal:20,
    //    paddingBottom:40
      },
      card: {
            backgroundColor: '#fff',
            borderRadius: 12,
            padding: 16,
            marginBottom: 16,
            elevation: 3, 
            shadowOpacity: 0.1,
            shadowRadius: 5,
            shadowOffset: { width: 0, height: 2 },
        },
        image: {
            width: '100%',
            height: 200,
            borderRadius: 8,
        },
        name: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 12,
        },
        price: {
            fontSize: 16,
            color: '#F16023',
            marginTop: 4,
        },

   
})