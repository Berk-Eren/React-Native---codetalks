import {View, FlatList} from 'react-native';

import RoomCard from '../../components/RoomCard/RoomCard';

import styles from './Rooms.styles';

function Rooms() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        horizontal={false}
        renderItem={item => <RoomCard title={item.item.title} />}
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
