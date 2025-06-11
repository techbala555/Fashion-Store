import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'; 
import React, { useState } from 'react';
import { launchImageLibrary } from 'react-native-image-picker';
import EditIcon from '../SVG/editIcon'; // Make sure this is a valid SVG React component

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
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarBackground}>
          <Image
            source={
              imageUri
                ? { uri: imageUri }
                : require('../../assets/images/Brown Jacket.png')
            }
            style={styles.avatar}
          />
        </View>
        <TouchableOpacity style={styles.editIcon} onPress={pickImage}>
          <EditIcon width={20} height={20} fill="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AvatarProfile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
   
  },
    avatarBackground: {
    backgroundColor: '#EEE',
    borderRadius: 50,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  avatarWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    backgroundColor: '#888',
    resizeMode:'contain',
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#F16023',
    padding: 6,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#fff',
  },
});
