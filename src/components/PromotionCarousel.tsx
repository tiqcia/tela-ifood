import React from 'react';
import { View, FlatList, TouchableOpacity, Image, Text } from 'react-native';
import { PROMOTIONS } from '../constants/data';
import { styles } from './PromotionCarousel.styles';

export const PromotionCarousel = () => (
  <View style={styles.container}>
    <FlatList
      data={PROMOTIONS}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
            <View style={styles.detailsRow}>
              <Text style={styles.price}>{item.price}</Text>
              {item.oldPrice && <Text style={styles.oldPrice}>{item.oldPrice}</Text>}
            </View>
            <View style={styles.detailsRow}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.dot}> • </Text>
              <Text style={styles.delivery}>{item.delivery}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 15 }}
    />
  </View>
);