import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export const styles = StyleSheet.create({
  card: { 
    width: '25%', 
    alignItems: 'center',
    marginTop: 2, 
    marginBottom: 20 
  },
  logo: { 
    width: 60, 
    height: 60, 
    borderRadius: 30, 
    backgroundColor: '#DDD', 
    borderWidth: 1, 
    borderColor: colors.border
  },
  name: { 
    fontSize: 11, 
    color: colors.text, 
    textAlign: 'center', 
    marginTop: 10
  },
});