import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import Avatarprofile from '../../assets/SVG/Avatarprofile'
import ProfileItems from '../Components/ProfileItems'
import ProfileCardIcon from '../../assets/SVG/ProfileCardIcon'
import PaymentCardIcon from '../../assets/SVG/PaymentCard'
import HelpIcon from '../../assets/SVG/HelpIcon'
import SettingIcon from '../../assets/SVG/SettingIcon'
import LogoutIcon from '../../assets/SVG/LogoutIcon'
import Navbar from '../Components/Navbar'

const Profile = () => {
  return (
    <View style={styles.container}>     
      <Header title={'Profile'}
      showHeart={false}/>
  <Avatarprofile/>
        <View >
         <ProfileItems title={'Profile'} SvgIcon={ProfileCardIcon} />
         <ProfileItems title={'Payment Methods'} SvgIcon={PaymentCardIcon} />
         <ProfileItems title={'Settings'} SvgIcon={SettingIcon} />
         <ProfileItems title={'Help Center'} SvgIcon={HelpIcon} />
         <ProfileItems title={'Logout'} SvgIcon={LogoutIcon} />
        </View>

        <View style={styles.navbar}>
          <Navbar/>
        </View>
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
  navbar:{
    marginTop:190
  }
})