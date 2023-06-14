import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    elevation: -1, // TODO: Check this
    padding: 10,
    backgroundColor: 'orange',
  },
  scrollContainer: {flex: 1, marginVertical: 9},
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
