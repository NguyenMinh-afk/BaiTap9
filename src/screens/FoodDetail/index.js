import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const FoodDetailScreen = ({ route }) => {
  const { foodItem } = route.params;

  return (
    <View style={styles.container}>
      <Image source={foodItem.image} style={styles.image} />
      <Text style={styles.title}>{foodItem.title}</Text>
      <Text style={styles.origin}>Origin: {foodItem.origin}</Text>
      <Text style={styles.price}>Price: {foodItem.price}</Text>
      <Text style={styles.description}>
        This is a delicious dish made with the finest ingredients. Don’t miss out on this fantastic meal!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('Success', `${foodItem.title} has been added to the cart!`)}
      >
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  origin: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f4511e',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FoodDetailScreen;
