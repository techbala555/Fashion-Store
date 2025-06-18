import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import React from 'react';
import LoginButton from '../Components/LoginButton';
import Header from '../Components/Header';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppModuleParamList } from '../app.navigation';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

type CheckoutNavigationProp = NativeStackNavigationProp<AppModuleParamList,"ShippingAddress">;

const CheckOutPage = () => {
  const navigation = useNavigation<CheckoutNavigationProp>();
  return (
    <View style={styles.container}>
      <Header title="Checkout" showHeart={false} />

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Promo Code Section */}
        <View style={styles.promoContainer}>
          <Text style={styles.promoLabel}>Promo Code</Text>
          <LoginButton
            title="Apply"
            onPress={() => {}}
            style={styles.applyButton}
            children={''}
          />
        </View>

        {/* Total Section */}
        <View style={styles.totalContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Sub-Total</Text>
            <Text style={styles.value}>$407.97</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Delivery Fee</Text>
            <Text style={styles.value}>$10.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Discount</Text>
            <Text style={styles.value}>- $30.00</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.totalLabel}>Total</Text>
            <Text style={styles.totalValue}>$417.97</Text>
          </View>
        </View>

        {/* Checkout Button */}
        <LoginButton
          title="Proceed to Checkout"
          onPress={() => {navigation.navigate("ShippingAddress")}}
          style={styles.checkoutButton}
          children={''}
        />
       
      </ScrollView>
  
    
    </View>
  );
};

export default CheckOutPage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  promoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 30,
    height: 55,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  promoLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#888',
  },
  applyButton: {
    width: 90,
    height: 40,
    borderRadius: 30,
    backgroundColor: '#F16023',
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalContainer: {
    marginTop: 30,
    paddingHorizontal: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  checkoutButton: {
    marginTop: 40,
    width: width - 40,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#F16023',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
