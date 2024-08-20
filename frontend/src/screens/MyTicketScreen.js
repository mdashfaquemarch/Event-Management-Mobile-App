import { View, FlatList } from "react-native";
import React, { useState } from "react";
import Ticket from "../components/Ticket/Ticket";

const arrData = [
  {
    id: 1,
    title: "Event Conference 2024",
    dateAndTime: "Sunday, 10 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
  {
    id: 2,
    title: "Event Conference 2024",
    dateAndTime: "Sunday, 14 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
  {
    id: 3,
    title: "Event Conference 2024",
    dateAndTime: "Sunday, 15 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
  {
    id: 4,
    title: "Event Conference 2024",
    dateAndTime: "Sunday, 15 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
  {
    id: 5,
    title: "Event Conference 2024",
    dateAndTime: "Sunday, 15 April | 10:00 am",
    address: "LNCTE BUILDING",
  },
];

const MyTicketScreen = () => {
  const [myTicket, setMyTicket] = useState(arrData);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <View>
      <FlatList
        data={myTicket}
        keyExtractor={(myTicket) => myTicket.id}
        renderItem={({ item }) =>
        <Ticket 
          title={item.title}
          dateAndTime={item.dateAndTime}
          address={item.address}
        />}
        refreshing={refreshing}
        onRefresh={() => {
          // DB call on refreshing goes here
        }}
      />
    </View>
  );
};

export default MyTicketScreen;
