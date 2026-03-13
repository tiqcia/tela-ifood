import React from 'react';
import { StatusBar } from 'expo-status-bar'; 
import { Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import { CATEGORIES, COUPON_LIST } from './src/constants/data';
import { styles } from './src/styles/app.styles'; 

import { CategoryItem } from './src/components/CategoryItem';
import { BannerCarousel } from './src/components/BannerCarousel';
import { PromotionCarousel } from './src/components/PromotionCarousel';
import { CouponRestaurant } from './src/components/CouponRestaurant';
import { BottomTabBar } from './src/components/BottomTabBar';

export default function App() {
  return (
    <View style={styles.mainWrapper}>
      <StatusBar style="dark" />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.addressHeader}>R. Abacaxi, 140</Text>

        <View style={{ height: 180 }}>
          <FlatList
            data={CATEGORIES}
            renderItem={({ item }) => <CategoryItem item={item} />}
            keyExtractor={item => item.id.toString()} 
            numColumns={4}
            scrollEnabled={false}
            contentContainerStyle={styles.categoryList}
            columnWrapperStyle={styles.categoryRow} 
          />
        </View>

        <BannerCarousel />

        <View style={styles.sectionHeaderRow}> 
          <Text style={styles.sectionTitle}>Promoções com entregas grátis</Text>
          <TouchableOpacity>
            <Text style={styles.seeMoreLink}>Ver mais</Text>
          </TouchableOpacity>
        </View>
        
        <PromotionCarousel />

        <View style={styles.couponSection}>
          <Text style={styles.couponTitle}>Cupom e entrega grátis</Text>
          <View style={styles.couponGrid}>
            {COUPON_LIST.map((restaurant) => (
              <CouponRestaurant key={restaurant.id} item={restaurant} />
            ))}
          </View>
        </View>

        <View style={{ height: 120 }} /> 
      </ScrollView>

      <BottomTabBar />
    </View>
  );
}