import { StyleSheet } from 'react-native';
import { colors } from './colors';

export const styles = StyleSheet.create({
  mainWrapper: { 
    flex: 1, 
    backgroundColor: colors.white 
  },
  scrollView: { 
    flex: 1, 
    backgroundColor: colors.background, 
    paddingTop: 60 
  },
  addressHeader: { 
    textAlign: 'center', 
    fontWeight: 'bold', 
    marginBottom: 20, 
    fontSize: 16 
  },
  categoryList: { 
    paddingHorizontal: 10 
  },
  categoryRow: { 
    justifyContent: 'space-between', 
    marginBottom: 10 
  },
  sectionHeaderRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 15, 
    marginTop: 15 
  },
  sectionTitle: { 
    fontSize: 14, 
    fontWeight: 'bold', 
  },
  seeMoreLink: { 
    fontSize: 14, 
    color: colors.primary 
  },
    couponSection: { 
        paddingHorizontal: 15, 
        marginTop: 25,
        width: '100%', 
    },
    couponTitle: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: colors.text, 
        marginBottom: 15 
    },
    couponGrid: { 
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        width: '100%',
  },
});