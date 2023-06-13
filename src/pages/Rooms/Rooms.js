import {useState, useEffect} from 'react';

import {View, FlatList, StatusBar} from 'react-native';
import database from '@react-native-firebase/database';
import {firebase} from '@react-native-firebase/database';

import RoomCard from '../../components/RoomCard/RoomCard';

import styles from './Rooms.styles';

function Rooms({navigation}) {
  const [roomList, setRoomList] = useState([]);

  const goToMessagePageOf = title => {
    navigation.navigate('Messages', {
      roomName: title,
    });
  };

  useEffect(() => {
    firebase
      .app()
      .database()
      .ref('/codetalks/rooms')
      .once('value')
      .then(snapshot => {
        setRoomList([...Object.keys(snapshot.val())]);
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
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default Rooms;
