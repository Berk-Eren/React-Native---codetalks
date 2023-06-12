import {useState, useEffect} from 'react';

import {
  View,
  Text,
  Keyboard,
  StatusBar,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';

import auth from '@react-native-firebase/auth';

import styles from './Login.styles';

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');

  useEffect(() => {
    auth().onAuthStateChanged(user => console.log(user));
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="orange" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
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
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Giriş Yap</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                <Text style={styles.backButtonText}>Kayıt Ol</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

export default Login;
