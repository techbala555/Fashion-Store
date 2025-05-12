import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export default function SizeSelector() {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <View style={styles.container}>
      {sizes.map((size) => (
        <TouchableOpacity
          key={size}
          style={[
            styles.sizeBox,
            selectedSize === size && styles.selectedBox
          ]}
          onPress={() => setSelectedSize(size)}
        >
          <Text
            style={[
              styles.sizeText,
              selectedSize === size && styles.selectedText
            ]}
          >
            {size}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 10,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
   
  },
  selectedBox: {
    borderColor: '#f16023',
    backgroundColor: '#f16023',
  },
  sizeText: {
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
