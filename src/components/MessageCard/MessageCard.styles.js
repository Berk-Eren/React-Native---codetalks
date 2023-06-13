import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 14,
    height: 100,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  upper_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  down_container: {},
  sender: {
    fontSize: 17,
    fontWeight: 500,
  },
  date: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: 700,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
