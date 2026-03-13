import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export const styles = StyleSheet.create({
  container: { 
    height: 160,
    marginVertical: 10 
  },
  bannerWrapper: { 
    width: 310, 
    height: 150, 
    marginHorizontal: 8, 
    borderRadius: 15, 
    overflow: 'hidden', 
    backgroundColor: colors.white 
  },
  image: { 
    width: '100%', 
    height: '100%' 
  },
});