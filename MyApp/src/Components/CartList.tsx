import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const CartList = () => {
  const [count, setCount] = useState(0);

  const increament = () => {
    setCount(count + 1);
  };
  const decreament = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.conatiner}>
      <Image
        source={require("../../assets/images/Brown Jacket.png")}
        style={styles.Imgsize}
      />
      <View style={styles.textcontainer}>
        <Text style={{ fontSize: 16, color: "#000", fontWeight: "600" }}>
          Brown jacket
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            fontWeight: "600",
            opacity: 0.5,
          }}
        >
          Size:XL
        </Text>
        <Text style={{ fontSize: 16, color: "#000", fontWeight: "600" }}>
          $83.97
        </Text>
      </View>
      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={decreament}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.countText}>{count}</Text>
        <TouchableOpacity style={styles.button} onPress={increament}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartList;

const styles = StyleSheet.create({
  Imgsize: {
    width: 100,
    height: 100,
    borderRadius: 12,
    justifyContent: "center",
    resizeMode: "contain",
    backgroundColor: "#8F4226",
  },
  textcontainer: {
    flexDirection: "column",
    gap: 10,
  },
  conatiner: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  countText: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 4,
  },
  button: {
    backgroundColor: "#F16023",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
    // marginHorizontal: 5,
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
