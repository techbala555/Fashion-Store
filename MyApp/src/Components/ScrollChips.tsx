import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const categoryList = [
  "All",
  "Jacket",
  "Pant",
  "T-Shirts",
  "Shoes",
  "Accessories",
];

const ScrollChips = () => {
  const [selected, setSelected] = useState("All");

  return (
    <View style={{paddingVertical:10,paddingHorizontal:16}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categoryList.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.chips, selected === item && styles.selectedChip]}
            onPress={() => setSelected(item)}
          >
            <Text style={selected === item ? styles.selectedText : styles.chipText}>
                {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ScrollChips;

const styles = StyleSheet.create({
    chips:{
        paddingHorizontal:16,
        paddingVertical:8,
        marginRight:10,
        backgroundColor:'#fff',
        borderRadius:23,
        borderWidth:2,
        borderColor:"#F16023"
    },
    selectedChip:{
        backgroundColor:'#F16023'
    },
    chipText:{
        color:"#F16023",
        fontSize:16
    },
    selectedText:{
        color:'#fff',
        fontSize:16
    }

});
