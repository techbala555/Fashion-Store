import React, { useContext, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ProductType,CartContext} from '../context/CartContext'; // ✅ Make sure this type is exported

const CartList = ({ product }: { product: ProductType }) => {
  const [count, setCount] = useState(1); // Start with 1 item
  const {removeFromCart} = useContext(CartContext)

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => {
    if (count <= 1){
      removeFromCart(product.id);
    } else{
      setCount((prev) => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.size}>Size: XL</Text> 
        <Text style={styles.price}>{product.price}</Text>
      </View>

      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.countText}>{count}</Text>

        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartList;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:"100%",
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
    // backgroundColor: '#8F4226',
    resizeMode: 'contain',
  },
  textContainer: {
    flex: 1,
    gap: 8,
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  size: {
    fontSize: 15,
    color: '#000',
    fontWeight: '600',
    opacity: 0.5,
  },
  price: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  countText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#F16023',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
