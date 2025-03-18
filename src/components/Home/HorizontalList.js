import React from 'react';
import { FlatList, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HorizontalFlatList = ({ data, renderItem }) => (
  <FlatList
    data={data}
    horizontal
    keyExtractor={(item) => item.id}
    renderItem={renderItem}
    contentContainerStyle={styles.list}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={() => <View style={styles.separator} />}
  />
);

const styles = StyleSheet.create({
  list: {
    marginBottom: 30,
  },
  separator: {
    width: 10,
  },
});

export default HorizontalFlatList;
