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

import styles from './Messages.styles';
import {is} from 'date-fns/locale';

function Messages({route}) {
  const {roomName} = route.params;

  const textInput = useRef();

  const [message, setMessage] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [messages, setMessageList] = useState([]);

  useEffect(() => {
    firebase
      .app()
      .database(FIREBASE_URL)
      .ref(`/codetalks/rooms/${roomName}/messages`)
      .once('value')
      .then(snapshot => {
        setMessageList([...snapshot.val()]);
      })
      .catch(err => console.log(err));
  }, []);

  const addMessageToTheRoom = () => {
    setIsVisible(!isVisible);
    firebase
      .app()
      .database(FIREBASE_URL)
      .ref(`/codetalks/rooms/${roomName}/messages`)
      .child(messages.length.toString())
      .set(message)
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
          <View key={index} style={styles.scrollContainer}>
            <MessageCard />
          </View>
        ))}
      </ScrollView>
      <TouchableHighlight
        onPress={() => setModalVisible(!modalVisible)}
        style={styles.iconContainer}>
        <Icon name="plus-a" size={30} color="white" />
      </TouchableHighlight>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback
            onPress={() => {
              textInput.current.focus();
            }}>
            <View style={{flex: 1}}>
              <View style={styles.textInputContainer}>
                <TextInput
                  placeholder="Enter your message..."
                  value={message}
                  onChangeText={setMessage}
                  ref={textInput}
                  style={{paddingHorizontal: 15, paddingVertical: 10}}
                  multiline
                />
              </View>
              <View style={styles.sendButtonContainer}>
                <Button title="Ekle" onPress={() => addMessageToTheRoom()} />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <TouchableHighlight
          onPress={() => setModalVisible(!modalVisible)}
          style={styles.iconContainer}>
          <Icon name="minus-a" size={30} color="white" />
        </TouchableHighlight>
      </Modal>
    </View>
  );
}

export default Messages;
