import {useState, useEffect, useRef} from 'react';
import {
  View,
  StatusBar,
  Text,
  Button,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {firebase} from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Fontisto';
import {FIREBASE_URL} from '@env';

import MessageCard from '../../components/MessageCard/MessageCard';

import ErrorModal from '../../components/modals/ErrorModal/ErrorModal';
import TextInputModal from '../../components/modals/TextInputModal/TextInputModal';

import useMessage from '../../hooks/useMessage';

import styles from './Messages.styles';

function Messages({route}) {
  const {roomName} = route.params;

  const [messages, error, isErrorVisible, sentMessage] = useMessage(
    `/codetalks/rooms/${roomName}/messages`,
  );

  // const reference = firebase
  //   .app()
  //   .database(FIREBASE_URL)
  //   .ref(`/codetalks/rooms/${roomName}/messages`)
  //   .push();

  // const [messages, setMessageList] = useState({});

  // useEffect(() => {
  //   firebase
  //     .app()
  //     .database(FIREBASE_URL)
  //     .ref(`/codetalks/rooms/${roomName}/messages`)
  //     .on('value', snapshot => {
  //       setMessageList({...snapshot.val()});
  //     });
  // }, []);

  // const addMessageToTheRoom = msg => {
  //   const messageObj = {
  //     text: msg,
  //     timestamp: new Date().toString(),
  //   };

  //   reference.set(messageObj).catch(error => {
  //     // TODO: Add a custom catch method
  //   });
  // };

  // TODO: ScollView ekle

  return (
    <View style={{flex: 1}}>
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={styles.background}>
        {Object.entries(messages).map(item => (
          <View key={item[0]} style={styles.scrollContainer}>
            <MessageCard
              message={item[1]['text']}
              timestamp={item[1]['timestamp']}
            />
          </View>
        ))}
      </ScrollView>
      <TextInputModal onPressFunction={sentMessage} />
    </View>
  );
  return (
    <View style={{flex: 1}}>
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={styles.background}>
        {Object.entries(messages).map(item => (
          <View key={item[0]} style={styles.scrollContainer}>
            <MessageCard
              message={item[1]['text']}
              timestamp={item[1]['timestamp']}
            />
          </View>
        ))}
      </ScrollView>
      <ErrorModal isVisible={error} />
      <TextInputModal onPressFunction={sentMessage} />
    </View>
  );
}

export default Messages;
