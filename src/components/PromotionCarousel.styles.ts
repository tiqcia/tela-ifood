import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export const styles = StyleSheet.create({
  container: { 
    marginTop: 10, 
    height: 95 
  },
  card: { 
    flexDirection: 'row', 
    width: 250, 
    height: 70, 
    backgroundColor: colors.white, 
    borderRadius: 10, 
    marginRight: 12, 
    alignItems: 'center', 
    overflow: 'hidden', 
    borderWidth: 1, 
    borderColor: colors.border 
  },
  image: { 
    width: 75, 
    height: '100%' 
  },
  info: { 
    flex: 1, 
    paddingHorizontal: 10, 
    justifyContent: 'center' 
  },
  name: { 
    fontSize: 11, 
    fontWeight: '600', 
    color: colors.text 
  },
  detailsRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 2 
  },
  price: { 
    fontSize: 10, 
    fontWeight: 'bold', 
    color: colors.success, 
    marginRight: 4 
  },
  oldPrice: { 
    fontSize: 10, 
    color: colors.textLight, 
    textDecorationLine: 'line-through' 
  },
  time: { 
    fontSize: 10, 
    color: colors.textLight 
  },
  dot: { 
    fontSize: 10, 
    color: colors.textLight 
  },
  delivery: { 
    fontSize: 10, 
    color: colors.success, 
    fontWeight: '600' 
  },
});