import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { CouponRestaurantData } from '../constants/data';
import { styles } from './CouponRestaurant.styles';

export const CouponRestaurant = ({ item }: { item: CouponRestaurantData }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={item.image} style={styles.logo} />
    <Text style={styles.name} numberOfLines={1}>
      {item.name}
    </Text>
  </TouchableOpacity>
);