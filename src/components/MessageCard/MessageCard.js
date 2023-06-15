import {View, Text} from 'react-native';
import {formatDistance, subDays} from 'date-fns';

import auth from '@react-native-firebase/auth';

import styles from './MessageCard.styles';

function MessageCard(props) {
  const username = auth().currentUser.email.split('@')[0];

  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.sender}>{username}</Text>
        <Text style={styles.date}>
          {formatDistance(new Date(props.timestamp), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </View>
      <View style={styles.down_container}>
        <Text style={styles.message}>{props.message}</Text>
      </View>
    </View>
  );
}

export default MessageCard;
