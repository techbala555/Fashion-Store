import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import StarRating from '../../assets/SVG/StarRating';
import SizeSelector from '../Components/SizeSelector';
import ColorSelector from '../Components/colourSelector';
import LoginButton from '../Components/LoginButton';

const ProductDetails = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Product Details" />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          {/* Image Section */}
          <View style={styles.imageContainer}>
            <Image
              source={require('../../assets/images/Brown Jacket.png')}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          {/* Product Header */}
          <View style={styles.mensStyle}>
            <Text style={styles.menText}>Men's Style</Text>
            <View style={{flexDirection:'row',}}>
              <StarRating />
            <Text style={styles.rating}>4.5</Text>
            </View>
          </View>

          <Text style={styles.title}>Light Brown Jacket</Text>
          <Text style={styles.sectionTitle}>Product Details</Text>

          <Text style={styles.description}>
            Lorem Ipsum has been the industry's standard dummy{'\n'}
            text ever since the 1500s, when an unknown printer took{'\n'}
            a galley of type and scrambled it to make a type{'\n'}
            <Text style={styles.readMore}>Read more</Text>
          </Text>

          <View style={styles.separator} />

          {/* Size Selector */}
          <Text style={styles.sectionTitle}>Select Size</Text>
          <View style={styles.sizeSelector}>
            <SizeSelector />
          </View>

          {/* Color Selector */}
          <Text style={styles.sectionTitle}>Select Color</Text>
          <ColorSelector />

          <View style={styles.separator} />

          {/* Price & Button */}
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              Total Price{'\n'}
              <Text style={styles.priceAmount}>$83.97</Text>
            </Text>

            <LoginButton
              style={styles.buttonView}
              title="Add to Cart"
              onPress={() => {}}
              children=""
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 360,
    backgroundColor: '#7D321B',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 220,
    height: 320,
  },
  mensStyle: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menText: {
    fontSize: 16,
    color: '#000',
    opacity: 0.5,
  },
  rating: {
    marginLeft: 8,
    fontSize: 14,
    color: '#000',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#515151',
    marginTop: 15,
  },
  description: {
    fontSize: 12,
    color: '#515151',
    marginTop: 5,
    lineHeight: 18,
  },
  readMore: {
    color: '#7D321B',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  separator: {
    borderBottomWidth: 1,
    borderColor: '#000',
    opacity: 0.2,
    marginVertical: 20,
  },
  sizeSelector: {
    marginTop: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#515151',
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  buttonView: {
    borderRadius: 30,
    backgroundColor: '#F16023',
    alignItems: 'center',
    paddingHorizontal:6,
    paddingVertical:3
  },
});
