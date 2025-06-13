import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import ScrollChips from "../Components/ScrollChips";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../../assets/SVG/StarRating";
import axios from "axios";

type ProductdetailsNavigationProp = NativeStackNavigationProp<
  AppModuleParamList,
  "ProductDetails"
>;

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 48) / 2; 
const UNSPLASH_ACCESS_KEY = "VpFwe50tpQglnhvr_TiOZY95_XhOV2JJdrbVih7lQIA";
export const fetchFashionImages = async (query = "Fashion Clothes")=>{
  const response =await axios.get(
    `https://api.unsplash.com/search/photos`,
    {
      params:{
        query,
        per_page:30,
        orientation:"portrait",
      },
      headers:{
         Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      }
    }
  );
  return response.data.results;
}


const FavrtProduct = () => {
  const navigation = useNavigation<ProductdetailsNavigationProp>();

const [fashionProducts,setFashionProducts]= useState<any[]>([]);

 useEffect(()=>{
const loadImages = async () => {
  try {
    const results = await fetchFashionImages();

    
    const formatted = results.map((item: any) => {
      const randomPrice = `$${(Math.random() * 10 + 1).toFixed(2)}`;
      return {
        id: item.id,
        name: item.alt_description || "Fashion Item",
        price: randomPrice, // fixed per item
        image: { uri: item.urls.small },
      };
    });
      setFashionProducts(formatted);
    }catch(error){
      console.error("Error loading:",error);      
    }
  };
  loadImages();
 },[])
  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ProductDetails")}
    >
      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.ratingRow}>
        <StarRating />
        <Text style={styles.ratingText}>4.5</Text>
      </View>
      <Text style={styles.price}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Wishlist" showHeart={false} />
      <ScrollChips />
<FlatList
        data={fashionProducts}
        keyExtractor={(item) => item.id + item.name}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("ProductDetails")}
          >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.catcontainer}
        columnWrapperStyle={{ justifyContent: "space-evenly" }}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
};

export default FavrtProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    marginBottom:20
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 8,
    resizeMode: "cover",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: "#777",
  },
  price: {
    fontSize: 16,
    color: "#F16023",
    marginTop: 4,
    fontWeight: "600",
  },
  catcontainer: {
    paddingBottom: 20,
  },
});
