import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

import Avatarprofile from '../../assets/SVG/Avatarprofile'

const Profile = () => {
  return (
    <View style={styles.container}>     
      <Header title={'Profile'}
      showHeart={false}/>
  <Avatarprofile/>
        
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  Imgsize: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    resizeMode: "contain",
    // backgroundColor: "#8F4226",
    alignSelf:'center',
    marginTop:30,
    borderColor:'#ccc',
    borderWidth:1
  },
})