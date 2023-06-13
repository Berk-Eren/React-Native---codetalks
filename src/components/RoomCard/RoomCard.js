import {View, Text, TouchableOpacity} from 'react-native';

import styles from './RoomCard.styles';

function RoomCard(props) {
  const {title, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => onPress()}
      style={styles.container}>
      <Text style={styles.roomName}>{title}</Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
