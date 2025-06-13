import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import BrandLogo from "../../assets/SVG/icons/BrandLogo";
import SearchIcon from "../../assets/SVG/SearchIcon";
import BagIcon from "../../assets/SVG/BagIcon";
import NotificationIcon from "../../assets/SVG/BagIcon"; 
import LoginButton from "../Components/LoginButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppModuleParamList } from "../app.navigation";
import { useNavigation } from "@react-navigation/native";
import Navbar from "../Components/Navbar";

const SCREEN_WIDTH = Dimensions.get("screen").width;

type ProductDetailsNavigationProp = NativeStackNavigationProp<
  AppModuleParamList,
  "ProductDetails"
>;

const Home = () => {
  const navigation = useNavigation<ProductDetailsNavigationProp>();
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    // {
    //   id: "1",
    //   name: "Brown Jacket",
    //   price: "$1.85",
    //   image: require("../../assets/images/Brown Jacket.png"),
    // },
    // {
    //   id: "2",
    //   name: "Floral Dress",
    //   price: "$2.5",
    //   image: require("../../assets/images/Floral Dress.png"),
    // },
    // {
    //   id: "3",
    //   name: "Yellow Jacket",
    //   price: "$2.5",
    //   image: require("../../assets/images/yellow jacket.png"),
    // },
    // {
    //   id: "1",
    //   name: "Brown Jacket",
    //   price: "$1.85",
    //   image: require("../../assets/images/Brown Jacket.png"),
    // },
    // {
    //   id: "2",
    //   name: "Floral Dress",
    //   price: "$2.5",
    //   image: require("../../assets/images/Floral Dress.png"),
    // },
    // {
    //   id: "3",
    //   name: "Yellow Jacket",
    //   price: "$2.5",
    //   image: require("../../assets/images/yellow jacket.png"),
    // },
    // {
    //   id: "1",
    //   name: "Brown Jacket",
    //   price: "$1.85",
    //   image: require("../../assets/images/Brown Jacket.png"),
    // },
    // {
    //   id: "2",
    //   name: "Floral Dress",
    //   price: "$2.5",
    //   image: require("../../assets/images/Floral Dress.png"),
    // },
    // {
    //   id: "3",
    //   name: "Yellow Jacket",
    //   price: "$2.5",
    //   image: require("../../assets/images/yellow jacket.png"),
    // },
    // {
    //   id: "1",
    //   name: "Brown Jacket",
    //   price: "$1.85",
    //   image: require("../../assets/images/Brown Jacket.png"),
    // },
    // {
    //   id: "2",
    //   name: "Floral Dress",
    //   price: "$2.5",
    //   image: require("../../assets/images/Floral Dress.png"),
    // },
    // {
    //   id: "3",
    //   name: "Yellow Jacket",
    //   price: "$2.5",
    //   image: require("../../assets/images/yellow jacket.png"),
    // },
    // {
    //   id: "1",
    //   name: "Brown Jacket",
    //   price: "$1.85",
    //   image: require("../../assets/images/Brown Jacket.png"),
    // },
    // {
    //   id: "2",
    //   name: "Floral Dress",
    //   price: "$2.5",
    //   image: require("../../assets/images/Floral Dress.png"),
    // },
    // {
    //   id: "3",
    //   name: "Yellow Jacket",
    //   price: "$2.5",
    //   image: require("../../assets/images/yellow jacket.png"),
    // },
  ];
const scrollRef = useRef<ScrollView>(null);
useEffect(() => {
  const interval = setInterval(() => {
    const nextIndex = (activeIndex + 1) % offerItems.length;
    scrollRef.current?.scrollTo({
      x: nextIndex * SCREEN_WIDTH,
      animated: true,
    });
    setActiveIndex(nextIndex);
  }, 3000); // every 3 seconds

  return () => clearInterval(interval); // cleanup
}, [activeIndex]);


  const offerItems = [
    {
      key: "men",
      bgColor: "#D3EAFF",
      img: require("../../assets/images/offer-1.png"),
      title: "Men’s Collection",
    },
    {
      key: "women",
      bgColor: "#FFD3ED",
      img: require("../../assets/images/offer-women.png"),
      title: "Women’s Collection",
    },
    {
      key: "kids",
      bgColor: "#D8FFD3",
      img: require("../../assets/images/kidsoffer.png"),
      title: "Kids Collection",
    },
    {
      key: "girls",
      bgColor: "#FFFFD3",
      img: require("../../assets/images/girlsoffer.png"),
      title: "Girls Collection",
    },
  ];

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topbar}>
        <View style={styles.Logocontainer}>
          <BrandLogo />
          <Text style={styles.logotext}>Fashion Store</Text>
          <View style={styles.iconContainer}>
            {["search", "bag", "notification"].map((icon) => {
              const IconComponent =
                icon === "search"
                  ? SearchIcon
                  : icon === "bag"
                  ? BagIcon
                  : NotificationIcon;
              return (
                <TouchableOpacity
                  key={icon}
                  onPress={() => setSelectedIcon(icon)}
                >
                  <IconComponent
                    fill={selectedIcon === icon ? "#F16023" : "#000"}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>

      {/* Carousel */}
      <View>
      <ScrollView
       ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        onScroll={(e) => {
          const scrollX = e.nativeEvent.contentOffset.x;
          const index = Math.round(scrollX / SCREEN_WIDTH);
          setActiveIndex(index);
        }}
        scrollEventThrottle={20}
        
      >
        {offerItems.map((item, index) => (
          <View
            key={item.key}
            style={[styles.offerContainer, { backgroundColor: item.bgColor }]}
          >
            <Image source={item.img} style={styles.offerImage} />
            <Text style={styles.offtext}>New Collection</Text>
            <Text style={styles.offsubtext}>
              Get up to 50% off on{"\n"}
              {item.title}!
            </Text>
          </View>
        ))}
      </ScrollView>
</View>
      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {offerItems.map((_, index) => (
          <View
            key={index}
             style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : null,
            ]}
          />
        ))}
      </View>

      {/* Trending */}
      <Text style={styles.trendingtext}>TRENDING</Text>
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

      {/* Bottom Navbar */}
      <Navbar />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 5,
  },
  topbar: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  Logocontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logotext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginLeft: 20,
    gap: 10,
  },
  carousel: {
    // marginTop: 5,
  },
 offerContainer: {
  width: Dimensions.get('window').width * 0.9, // 90% of screen width
  height: 100,
  borderRadius: 20,
  marginHorizontal: Dimensions.get('window').width * 0.05, // center by horizontal margin
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingLeft: 20,
  alignSelf: 'center',
},

  offerImage: {
    width: 140,
    height: 100,
    resizeMode: "contain",
    position: "absolute",
    right: 10,
  },
  offtext: {
    fontSize: 16,
    fontWeight: "800",
    color: "#000",
    marginLeft: 15,
    marginBottom: 5,
  },
  offsubtext: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
    marginLeft: 15,
    marginBottom: 5,
  },
  buttonView: {
    width:20,
    height: 20,
    borderRadius: 12,
    backgroundColor: "#F16023",
    marginLeft: 15,
    marginBottom: 5,
    paddingHorizontal: 0,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 10,
    fontWeight: "400",
    color: "white",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#F16023",
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  trendingtext: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  catcontainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    width: SCREEN_WIDTH / 2 - 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    resizeMode:'contain',
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    color: "#F16023",
    marginTop: 4,
  },
});