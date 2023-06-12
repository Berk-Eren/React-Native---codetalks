import {View, Text, TouchableOpacity} from 'react-native';

import styles from './RoomCard.styles';

function RoomCard(props) {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.container}>
      <Text style={styles.roomName}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
