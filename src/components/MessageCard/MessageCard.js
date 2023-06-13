import {View, Text} from 'react-native';
import {formatDistance, subDays} from 'date-fns';

import styles from './MessageCard.styles';

function MessageCard() {
  return (
    <View style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.sender}>anonim</Text>
        <Text style={styles.date}>
          {formatDistance(subDays(new Date(), 3), new Date(), {
            addSuffix: true,
          })}
        </Text>
      </View>
      <View style={styles.down_container}>
        <Text style={styles.message}>Mesajım</Text>
      </View>
    </View>
  );
}

export default MessageCard;
