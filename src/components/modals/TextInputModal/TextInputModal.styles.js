import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    top: '55%',
    bottom: 80,
    left: 15,
    right: 15,
    position: 'absolute',
    borderRadius: 10,
    backgroundColor: 'yellow',
  },
  iconContainer: {
    backgroundColor: 'black',
    position: 'absolute',
    right: 20,
    bottom: 20,
    padding: 10,
    borderRadius: 50,
  },
  textInputContainer: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  sendButtonContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});

export default styles;
