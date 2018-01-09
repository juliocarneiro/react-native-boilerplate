import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: metrics.headerHeight,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image:{
    marginTop:40,
  },
  icon: {
    color: colors.black,
  },
  title: {
    fontSize: fonts.big,
  },
});

export default styles;
