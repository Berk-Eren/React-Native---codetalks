import {useState, useEffect} from 'react';

import {View, FlatList, StatusBar} from 'react-native';

import {firebase} from '@react-native-firebase/database';
import {FIREBASE_URL} from '@env';

import RoomCard from '../../components/RoomCard/RoomCard';
import TextInputModal from '../../components/modals/TextInputModal/TextInputModal';

import styles from './Rooms.styles';

function Rooms({navigation}) {
  const [roomList, setRoomList] = useState([]);

  const reference = firebase
    .app()
    .database(FIREBASE_URL)
    .ref(`/codetalks/rooms`);

  const addRoom = roomName => {
    reference
      .child(roomName)
      .set('')
      .catch(error => {
        // TODO: Add a custom catch method
      });
  };

  const goToMessagePageOf = title => {
    navigation.navigate('Messages', {
      roomName: title,
    });
  };

  useEffect(() => {
    firebase
      .app()
      .database(FIREBASE_URL)
      .ref('/codetalks/rooms')
      .on('value', snapshot => {
        if (snapshot.val()) setRoomList([...Object.keys(snapshot.val())]);
      });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar animated barStyle="dark-content" backgroundColor="white" />
      <FlatList
        data={roomList}
        numColumns={2}
        horizontal={false}
        renderItem={item => (
          <RoomCard
            onPress={() => goToMessagePageOf(item.item)}
            title={item.item}
          />
        )}
        style={styles.flatList}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        ItemSeparatorComponent={() => <View style={{margin: 10}} />}
        keyExtractor={item => item}
      />
      <TextInputModal onPressFunction={addRoom} />
    </View>
  );
}

export default Rooms;
