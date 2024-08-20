import { View, StyleSheet, ScrollView, FlatList } from "react-native";

import Event from "../components/Event/Event";
import { useState } from "react";

const arrData = [
  {
    id: 1,
    name: "Event Conference 2024",
    dateAndTime: "Sunday, 10 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
  {
    id: 2,
    name: "Event Conference 2024",
    dateAndTime: "Sunday, 14 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
  {
    id: 3,
    name: "Event Conference 2024",
    dateAndTime: "Sunday, 15 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
];

const EventScreen = () => {
   const [event, setEvent] = useState(arrData);
   const [refreshing, setRefreshing] = useState(false);



  return (
    <View style={styles.container}>
      <FlatList
        data={event}
        keyExtractor={(event) => event.id.toString()}
        renderItem={({ item }) => (
          <Event
            title={item.name}
            dateAndTime={item.dateAndTime}
            address={item.address}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
            // DB call occur here

            
            // setEvent([ {
            //   id: 3,
            //   name: "Event Conference 2024",
            //   dateAndTime: "Sunday, 15 April | 10:00 am",
            //   address: "LNCTE BUILDING",
            // }])
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default EventScreen;
