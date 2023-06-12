import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height / 4.8,
    width: Dimensions.get('window').width / 2.5,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    padding: 3,
  },
  roomName: {
    color: 'orange',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default styles;
