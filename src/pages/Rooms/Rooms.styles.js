import {StyleSheet} from 'react-native';

const commonStyles = StyleSheet.create({
  backgroundColor: {
    backgroundColor: 'white',
  },
});

const styles = StyleSheet.create({
  container: {
    ...commonStyles.backgroundColor,
    flex: 1,
  },
  flatList: {
    ...commonStyles.backgroundColor,
    margin: 10,
    padding: 5,
    paddingHorizontal: 20,
  },
});

export default styles;
