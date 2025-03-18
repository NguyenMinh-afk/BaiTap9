import React from 'react';
import { View, StyleSheet, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Home/Header';
import HorizontalFlatList from '../../components/Home/HorizontalList';

const data = [
  { id: '1', title: 'Food 1', origin: 'Viet Nam', price: '1$', image: require('../../assets/link_to_image_1.png') },
  { id: '2', title: 'Food 2', origin: 'Viet Nam', price: '3$', image: require('../../assets/link_to_image_2.png') },
  { id: '3', title: 'Food 3', origin: 'Viet Nam', price: '5$', image: require('../../assets/link_to_image_3.png') },
  { id: '4', title: 'Food 4', origin: 'Viet Nam', price: '2$', image: require('../../assets/link_to_image_4.png') },
  { id: '5', title: 'Food 5', origin: 'Viet Nam', price: '7$', image: require('../../assets/link_to_image_5.png') },
];

const promotions = [
  { id: '1', title: 'Food 1', origin: 'Viet Nam', price: '1$', image: require('../../assets/link_to_image_1.png'), discount: '10% OFF' },
  { id: '4', title: 'Food 4', origin: 'Viet Nam', price: '2$', image: require('../../assets/link_to_image_4.png'), discount: '5% OFF' },
];

const categories = [
  { id: '1', title: 'Pizza', image: require('../../assets/link_to_pizza_image.png') },
  { id: '2', title: 'Burgers', image: require('../../assets/link_to_burgers_image.png') },
  { id: '3', title: 'Steak', image: require('../../assets/link_to_steak_image.png') },
  { id: '4', title: 'Desserts', image: require('../../assets/link_to_dessert_image.png') },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={require('../../assets/location_pin.png')} style={styles.icon} />
        <TextInput style={styles.searchInput} placeholder="Search for meals or area" />
        <TouchableOpacity>
          <Image source={require('../../assets/search_icon.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Top Categories */}
      <Header
        title="Top Categories"
        hasFilter
        onFilter={() => console.log('Filter clicked!')}
      />
      <HorizontalFlatList
        data={categories}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.title}</Text>
          </View>
        )}
      />

      {/* Popular Items */}
      <Header
        title="Popular Items"
        onViewAll={() => console.log('View all Popular Items clicked!')}
      />
      <HorizontalFlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('FoodDetail', { foodItem: item })}
            style={styles.popularItem}
          >
            <Image source={item.image} style={styles.popularItemImage} />
            <View>
              <Text style={styles.popularItemTitle}>{item.title}</Text>
              <Text style={styles.popularItemOrigin}>By {item.origin}</Text>
              <Text style={styles.popularItemPrice}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Sale-off Items */}
      <Header
        title="Promotions"
        onViewAll={() => console.log('View all Promotions clicked!')}
      />
      <HorizontalFlatList
        data={promotions}
        renderItem={({ item }) => (
          <View style={styles.promotionItem}>
            <Image source={item.image} style={styles.promotionImage} />
            {item.discount && (
              <View style={styles.discountLabel}>
                <Text style={styles.discountText}>{item.discount}</Text>
              </View>
            )}
            <Text style={styles.promotionTitle}>{item.title}</Text>
            <Text style={styles.promotionPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  icon: {
    width: 20,
    height: 20,
  },
  categoryContainer: {
    alignItems: 'center',
  },
  categoryImage: {
    width: 110,
    height: 80,
    marginBottom: 5,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
  popularItem: {
    flexDirection: 'row',
    marginRight: 10,
  },
  popularItemImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  popularItemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 10,
  },
  popularItemOrigin: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
    marginLeft: 10,
  },
  popularItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 35,
  },
  promotionItem: {
    marginRight: 10,
  },
  promotionImage: {
    width: 200,
    height: 100,
    borderRadius: 10,
  },
  discountLabel: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  discountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  promotionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  promotionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default HomeScreen;
