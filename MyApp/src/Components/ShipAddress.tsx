import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import LoginButton from './LoginButton';
import LocationIcon from '../../assets/SVG/LocationIcon';

const ShippingAddress = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Shipping Address</Text>

      <View style={styles.addressContainer}>
        <View style={styles.leftSection}>
          <LocationIcon />
          <View style={styles.textSection}>
            <Text style={styles.title}>Home</Text>
            <Text style={styles.address}>1901 Thomasridge Cir, Shilak, Hawai 81016</Text>
          </View>
        </View>

        <LoginButton title="Change" style={styles.button} labelStyle={styles.labeltext} onPress={function (): void {
                  throw new Error('Function not implemented.');
              } } children={''}/>
      </View>
    </View>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  head: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 15, 
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  textSection: {
    marginLeft: 10,
    flexShrink: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  address: {
    fontSize: 12,
    color: '#939393',
    marginTop: 2,
  },
  button: {
    width:"30%",
    backgroundColor:"#F16023",
    justifyContent: 'center',
  },
  labeltext:{
    fontSize:12
  }
});
