import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export const styles = StyleSheet.create({
  categoryCard: { 
    backgroundColor: colors.surface, 
    width: 80, 
    height: 75, 
    borderRadius: 12, 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 10, 
    marginBottom: 10 
  },
  categoryImage: { 
    width: 45, 
    height: 45, 
    marginBottom: 5 
  },
  categoryLabel: { 
    fontSize: 10, 
    fontWeight: '600', 
    color: colors.text, 
    textAlign: 'center' 
  },
});