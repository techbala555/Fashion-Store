import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import Avatarprofile from '../../assets/SVG/Avatarprofile';
import ProfileItems from '../Components/ProfileItems';
import ProfileCardIcon from '../../assets/SVG/ProfileCardIcon';
import PaymentCardIcon from '../../assets/SVG/PaymentCard';
import HelpIcon from '../../assets/SVG/HelpIcon';
import SettingIcon from '../../assets/SVG/SettingIcon';
import LogoutIcon from '../../assets/SVG/LogoutIcon';
import Navbar from '../Components/Navbar';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile" showHeart={false} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.avatarContainer}>
          <Avatarprofile />
        </View>

        <View style={styles.itemsContainer}>
          <ProfileItems title="Profile" SvgIcon={ProfileCardIcon} />
          <ProfileItems title="Payment Methods" SvgIcon={PaymentCardIcon} />
          <ProfileItems title="Settings" SvgIcon={SettingIcon} />
          <ProfileItems title="Help Center" SvgIcon={HelpIcon} />
          <ProfileItems title="Logout" SvgIcon={LogoutIcon} />
        </View>
      </ScrollView>

      <View style={styles.navbar}>
        <Navbar />
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    // padding: 20,
    paddingBottom: 100,
  },
  avatarContainer: {
    alignItems: 'center',
    // marginTop: 20,
    marginBottom: 30,
  },
  itemsContainer: {
    gap: 15,
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
