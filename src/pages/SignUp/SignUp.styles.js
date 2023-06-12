import {StyleSheet} from 'react-native';

const commonStyle = StyleSheet.create({
  backgroundColor: {
    orange: {backgroundColor: 'orange'},
  },
  buttonStyle: {
    padding: 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  inputTextStyle: {
    marginTop: 5,
    paddingTop: 15,
    paddingLeft: 15,
    paddingBottom: 15,
    fontSize: 18,
  },
  buttonTextStyle: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
  },
  flexBorder: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

const styles = StyleSheet.create({
  container: {
    ...commonStyle.backgroundColor.orange,
    flex: 1,
  },
  innerContainer: {marginHorizontal: 10, flex: 1},
  inputContainer: {
    flex: 1,
    ...commonStyle.flexBorder,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundTextContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  inputButtonContainer: {
    flex: 3,
  },
  backgroundText: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'center',
  },
  textInput: {
    ...commonStyle.inputTextStyle,
    borderBottomColor: 'white',
    borderBottomWidth: 0.9,
  },
  signUpButton: {
    ...commonStyle.buttonStyle,
    backgroundColor: 'green',
  },
  backButton: {
    ...commonStyle.buttonStyle,
    backgroundColor: 'white',
  },
  signUpButtonText: {
    ...commonStyle.buttonTextStyle,
    color: 'white',
    alignSelf: 'center',
  },
  backButtonText: {
    ...commonStyle.buttonTextStyle,
    color: 'orange',
    alignSelf: 'center',
  },
});

export default styles;
