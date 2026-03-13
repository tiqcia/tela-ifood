import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { styles } from './BottomTabBar.styles';

export const BottomTabBar = () => (
  <View style={styles.tabBar}>
    <TouchableOpacity style={styles.tabItem}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7606/7606136.png' }} 
        style={[styles.tabIcon, { tintColor: '#000' }]} 
      />
      <Text style={[styles.tabLabel, styles.activeLabel]}>Início</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.tabItem}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/74/74116.png' }} 
        style={styles.tabIcon} 
      />
      <Text style={styles.tabLabel}>Busca</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.tabItem}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/590/590511.png' }} 
        style={styles.tabIcon} 
      />
      <Text style={styles.tabLabel}>Loja Ifood</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.tabItem}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5218/5218542.png' }} 
        style={styles.tabIcon} 
      />
      <Text style={styles.tabLabel}>Pedidos</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.tabItem}>
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/5987/5987462.png' }} 
        style={styles.tabIcon} 
      />
      <Text style={styles.tabLabel}>Perfil</Text>
    </TouchableOpacity>
  </View>
);