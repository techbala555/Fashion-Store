import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const colorOptions = [
  { name: 'Brown', code: '#7D321B' },
  { name: 'Pink', code: '#FBADAD' },
  { name: 'Blue', code: '#AAD9FF' },
  { name: 'Lavendar', code: '#F2BFFF' },
  { name: 'Orange', code: '#FF8B8C' },
];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <View style={{ marginTop: 20, marginLeft: 25 }}>
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#AAAAAA'}}>
  Select Color: 
  <Text style={{ fontWeight: 'bold', color: '#000' }}> {selectedColor?.name ?? ''}</Text>
</Text>


      <View style={styles.container}>
        {colorOptions.map((color) => (
          <TouchableOpacity
            key={color.code}
            style={[styles.circle, { backgroundColor: color.code }]}
            onPress={() => setSelectedColor(color)}
          >
            {selectedColor?.code === color.code && <View style={styles.innerCircle} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  circle: {
    width: 26,
    height: 26,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  innerCircle: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});
