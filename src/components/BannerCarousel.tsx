import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { BANNERS } from '../constants/data';
import { styles } from './BannerCarousel.styles';

export const BannerCarousel = () => (
  <View style={styles.container}>
    <FlatList
      data={BANNERS}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.bannerWrapper}>
          <Image source={item.image} style={styles.image} resizeMode="cover" />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      contentContainerStyle={{ paddingHorizontal: 10 }}
    />
  </View>
);