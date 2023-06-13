import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    zIndex: 1,
    elevation: -1, // TODO: Check this
    padding: 10,
    backgroundColor: 'orange',
  },
  scrollContainer: {flex: 1, marginVertical: 9},
  modalContainer: {
    top: '50%',
    borderRadius: 10,
    elevation: 10,
    zIndex: 2,
    backgroundColor: 'yellow',
    alignSelf: 'center',
    width: Dimensions.get('screen').width - 20,
    height: Dimensions.get('screen').height / 2.5,
    position: 'absolute',
  },
  iconContainer: {
    backgroundColor: 'black',
    alignSelf: 'flex-end',
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 50,
  },
  textInputContainer: {
    backgroundColor: 'white',
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
});

export default styles;
