import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RightArrow from "../../assets/SVG/RightArrow";
import PaymentCardIcon from "../../assets/SVG/ProfileCardIcon";


const PaymentCard = () => {
  return (
    <View style={styles.container}>
      <PaymentCardIcon/>
      <Text>Payment Methods</Text>
      <View style={styles.arrow}>
        <RightArrow />
      </View>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  arrow: {
    // marginLeft: 15,
  },
  container: {
    // marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    alignItems: "center",
    paddingHorizontal:30
  },
});
