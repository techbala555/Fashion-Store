import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BackArrow from "../../assets/SVG/BackArrow";
import HeartLike from "../../assets/SVG/HeartLike";
import { useNavigation } from "@react-navigation/native";

interface HeaderProps {
  title: string;
  showBack?: boolean;
  showHeart?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBack = true,
  showHeart = true,
}) => {
  const navigation = useNavigation();
  const [liked, setLiked] = useState(false); // ✅ Keep it inside the component

  const handleHeartPress = () => {
    setLiked(!liked); // ✅ Toggle on press only
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrow />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
      )}

      {/* Title */}
      <Text style={styles.title}>{title}</Text>

      {/* Heart Icon */}
      {showHeart ? (
        <TouchableOpacity onPress={handleHeartPress}>
          <HeartLike color={liked ? "red" : "#ccc"} />
        </TouchableOpacity>
      ) : (
        <View style={{ width: 24 }} />
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
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
});
