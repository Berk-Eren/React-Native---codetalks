import {useState, useEffect, useRef} from 'react';
import {
  View,
  StatusBar,
  Text,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ScrollView,
} from 'react-native';

import {firebase} from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/Fontisto';

import MessageCard from '../../components/MessageCard/MessageCard';

import styles from './Messages.styles';
import {is} from 'date-fns/locale';

function Messages({route}) {
  const {roomName} = route.params;

  const textInput = useRef();

  const [isVisible, setIsVisible] = useState(false);
  const [messages, setMessageList] = useState([]);

  useEffect(() => {
    firebase
      .app()
      .database
      // TODO: .env olarak çağır
      ()
      .ref(`/codetalks/rooms/${roomName}/messages`)
      .once('value')
      .then(snapshot => {
        console.log(snapshot.val());
        setMessageList([...snapshot.val()]);
      });
  }, []);

  const addMessageToTheRoom = (msg = 'hEllo') => {
    setIsVisible(!isVisible);
    firebase
      .app()
      .database()
      .ref(`/codetalks/rooms/${roomName}/messages`)
      .child(messages.length.toString())
      .set(msg)
      .then(() => {
        setMessageList([...messages, msg]);
      })
      .catch(error => {
        // TODO: Add a custom catch method
      });
  };

  // TODO: ScollView ekle
  return (
    <View style={{flex: 1}}>
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      <ScrollView style={styles.background}>
        {messages.map((item, index) => (
          <View style={styles.scrollContainer}>
            <MessageCard key={index} />
          </View>
        ))}
        <TouchableHighlight
          onPress={() => addMessageToTheRoom()}
          style={styles.iconContainer}>
          <Icon name="plus-a" size={30} color="white" />
        </TouchableHighlight>
      </ScrollView>
      <View style={styles.modalContainer}>
        <TouchableWithoutFeedback
          onPress={() => {
            textInput.focus();
          }}>
          <View style={styles.textInputContainer}>
            <TextInput
              placeholder="Enter your message..."
              ref={textInput}
              style={{paddingHorizontal: 15, paddingVertical: 10}}
              multiline
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

export default Messages;
