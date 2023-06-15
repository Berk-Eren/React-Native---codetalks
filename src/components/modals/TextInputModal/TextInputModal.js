import {useRef, useState} from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  View,
  Button,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

import styles from './TextInputModal.styles';
import {te} from 'date-fns/locale';

function TextInputModal(props) {
  const textInput = useRef();

  const [text, setText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const {onPressFunction} = props;

  return (
    <>
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
                  value={text}
                  onChangeText={setText}
                  ref={textInput}
                  style={{paddingHorizontal: 15, paddingVertical: 10}}
                  multiline
                />
              </View>
              <View style={styles.sendButtonContainer}>
                <Button
                  title="Ekle"
                  onPress={() => {
                    setText('');
                    onPressFunction(text);
                  }}
                />
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
    </>
  );
}

export default TextInputModal;
