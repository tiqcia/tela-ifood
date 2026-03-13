import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { Category } from '../constants/data';
import { styles } from './CategoryItem.styles'; 

export const CategoryItem = ({ item }: { item: Category }) => (
  <TouchableOpacity style={styles.categoryCard}>
    <Image source={item.image} style={styles.categoryImage} />
    <Text style={styles.categoryLabel}>{item.title}</Text>
  </TouchableOpacity>
);