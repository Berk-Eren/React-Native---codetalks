import {useState, useEffect} from 'react';

import {FIREBASE_URL} from '@env';

import {firebase} from '@react-native-firebase/database';

function useMessage(url) {
  const reference = firebase.app().database(FIREBASE_URL).ref(url).push();

  const [error, setError] = useState(null);
  const [isErrorVisible, setErrorVisible] = useState(null);
  const [messages, setMessageList] = useState({});

  useEffect(() => {
    firebase
      .app()
      .database(FIREBASE_URL)
      .ref(url)
      .on('value', snapshot => {
        setMessageList({...snapshot.val()});
      });
  }, []);

  const sentMessage = msg => {
    const messageObj = {
      text: msg,
      timestamp: new Date().toString(),
    };

    reference.set(messageObj).catch(error => {
      setError(error);
      setErrorVisible(true);
    });
  };

  return [messages, error, isErrorVisible, sentMessage];
}

export default useMessage;
