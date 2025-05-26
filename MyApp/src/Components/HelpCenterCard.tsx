import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RightArrow from "../../assets/SVG/RightArrow";
import HelpIcon from "../../assets/SVG/HelpIcon";

const HelpCenter = () => {
  return (
    <View style={styles.container}>
      <HelpIcon/>
      <Text>Help Center</Text>
      <View style={styles.arrow}>
        <RightArrow />
      </View>
    </View>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  arrow: {
    marginLeft: 150,
  },
  container: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    alignItems: "center",
    paddingHorizontal:30
  },
});
