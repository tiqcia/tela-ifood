import { StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export const styles = StyleSheet.create({
  tabBar: { 
    position: 'absolute', 
    bottom: 0, 
    left: 0, 
    right: 0, 
    height: 65, 
    backgroundColor: colors.white, 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center', 
    borderTopWidth: 1, 
    borderTopColor: colors.border, 
    paddingBottom: 5, 
    elevation: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabItem: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1 
  },
  tabIcon: { 
    width: 22, 
    height: 22, 
    marginBottom: 4, 
    tintColor: colors.textLight 
  },
  tabLabel: { 
    fontSize: 10, 
    color: colors.textLight 
  },
  activeLabel: { 
    color: '#000', 
    fontWeight: 'bold' 
  },
});