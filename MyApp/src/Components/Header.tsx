import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BackArrow from "../../assets/SVG/BackArrow";
import HeartLike from "../../assets/SVG/HeartLike";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showHeart?: boolean;
  onHeartPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showHeart = true,
  onHeartPress,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Placeholder to align center title
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Heart Icon */}
      {showHeart ? (
        <TouchableOpacity onPress={onHeartPress}>
          <HeartLike />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} /> // Placeholder if heart not shown
      )}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 60,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});
