import {useState} from 'react';

import {
  View,
  Text,
  Keyboard,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import auth from '@react-native-firebase/auth';

import styles from './SignUp.styles';

function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  /*return (
    <ScrollView style={{backgroundColor: 'orange'}}>
      <StatusBar backgroundColor="orange" />
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onLongPress={() => {}}
        onPress={event => {
          Keyboard.dismiss();
        }}>
        <View style={{borderColor: 'black', borderWidth: 1, flex: 1}}></View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );*/

  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword(email, password1)
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <>
      <TouchableWithoutFeedback
        touchSoundDisabled
        onLongPress={() => {}}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <View style={styles.backgroundTextContainer}>
              <Text style={styles.backgroundText}>codetalks</Text>
            </View>
            <View style={styles.inputButtonContainer}>
              <View style={styles.inputContainer}>
                <TextInput
                  autoCorrect
                  inputMode="email"
                  autoComplete="email"
                  keyboardType="email-address"
                  multiline={false}
                  value={email}
                  onChangeText={setEmail}
                  placeholderTextColor="white"
                  placeholder="e-postanızı giriniz.."
                  style={styles.textInput}
                />
                <TextInput
                  secureTextEntry
                  maxLength={15}
                  multiline={false}
                  value={password1}
                  onChangeText={setPassword1}
                  placeholderTextColor="white"
                  placeholder="şifrenizi giriniz.."
                  style={styles.textInput}
                />
                <TextInput
                  secureTextEntry
                  maxLength={15}
                  multiline={false}
                  value={password2}
                  onChangeText={setPassword2}
                  placeholderTextColor="white"
                  placeholder="şifrenizi tekrar giriniz.."
                  style={styles.textInput}
                />
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={() => signUp()}>
                  <Text style={styles.signUpButtonText}>Kayıt Ol</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.backButton}
                  onPress={() => {
                    navigation.navigate('Login');
                  }}>
                  <Text style={styles.backButtonText}>Geri</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

export default SignUp;
