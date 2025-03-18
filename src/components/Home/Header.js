import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Header = ({ title, hasFilter, onFilter, onViewAll }) => (
  <View style={styles.header}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.actions}>
      {hasFilter && (
        <TouchableOpacity style={styles.filterButton} onPress={onFilter}>
          <Image source={require('../../assets/filter_icon.png')} style={styles.filterIcon} />
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      )}
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  filterIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  filterText: {
    fontSize: 16,
    color: 'blue',
  },
  viewAll: {
    fontSize: 14,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default Header;
