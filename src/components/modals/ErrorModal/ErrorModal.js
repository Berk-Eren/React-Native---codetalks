import {useState, useEffect} from 'react';

import {View, Text} from 'react-native';

import Modal from 'react-native-modal';

import styles from './ErrorModal.styles';

function ErrorModal(props) {
  const {errorMessage} = props;

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    errorMessage ? setIsVisible(true) : setIsVisible(false);
  }, [errorMessage]);

  return (
    <Modal isVisible={isVisible}>
      <View>
        <Text>Hello</Text>
      </View>
    </Modal>
  );
}

export default ErrorModal;
