import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import EditIcon from '../SVG/editIcon'; // Ensure this is a proper React Component (SVG)

const AvatarProfile = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) return;
      if (response.assets && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image
        source={
          imageUri
            ? { uri: imageUri }
            : require('../../assets/images/Brown Jacket.png')
        }
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
        <EditIcon width={20} height={20} fill="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default AvatarProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 40,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode:'contain',
    backgroundColor:'#888'
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right:150,
    backgroundColor: '#F16023',
    padding: 6,
    borderRadius: 20,
    borderWidth:2,
    borderColor:'#fff',
    
  },
});
