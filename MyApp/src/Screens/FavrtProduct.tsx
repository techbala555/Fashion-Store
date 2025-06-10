import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import Header from "../Components/Header";
import ScrollChips from "../Components/ScrollChips";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import StarRating from "../../assets/SVG/StarRating";

type ProductdetailsNavigationProp = NativeStackNavigationProp<
  AppModuleParamList,
  "ProductDetails"
>;

const SCREEN_WIDTH = Dimensions.get("window").width;
const CARD_WIDTH = (SCREEN_WIDTH - 48) / 2; 

const fashionProducts = [
  {
    id: "1",
    name: "Brown Jacket",
    price: "$1.85",
    image: require("../../assets/images/Brown Jacket.png"),
  },
  {
    id: "2",
    name: "Floral Dress",
    price: "$2.5",
    image: require("../../assets/images/Floral Dress.png"),
  },
  {
    id: "3",
    name: "Yellow Jacket",
    price: "$2.5",
    image: require("../../assets/images/yellow jacket.png"),
  },
  {
    id: "4",
    name: "Floral Dress",
    price: "$2.5",
    image: require("../../assets/images/Floral Dress.png"),
  },
   {
    id: "1",
    name: "Brown Jacket",
    price: "$1.85",
    image: require("../../assets/images/Brown Jacket.png"),
  },
  {
    id: "2",
    name: "Floral Dress",
    price: "$2.5",
    image: require("../../assets/images/Floral Dress.png"),
  },
  {
    id: "3",
    name: "Yellow Jacket",
    price: "$2.5",
    image: require("../../assets/images/yellow jacket.png"),
  },
  {
    id: "4",
    name: "Floral Dress",
    price: "$2.5",
    image: require("../../assets/images/Floral Dress.png"),
  },


];

const FavrtProduct = () => {
  const navigation = useNavigation<ProductdetailsNavigationProp>();

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
        keyExtractor={(item, index) => `${item.id}_${index}`}
        numColumns={2}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
        contentContainerStyle={styles.listContent}
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
});
