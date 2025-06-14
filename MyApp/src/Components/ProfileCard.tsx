import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfileCardIcon from "../../assets/SVG/ProfileCardIcon";
import RightArrow from "../../assets/SVG/RightArrow";

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <ProfileCardIcon/>
      <Text>Your Profile</Text>
      <View style={styles.arrow}>
        <RightArrow />
      </View>
    </View>
  );
};

export default ProfileCard;

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
