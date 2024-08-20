import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

// screens
import EventScreen from "../screens/EventScreen";
import MyTicketScreen from "../screens/MyTicketScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
     initialRouteName="EventScreen"
    screenOptions={{
        tabBarStyle: {
            height: 70,
            paddingVertical:10,
          },
          tabBarLabelStyle: {
            paddingBottom: 5, // Adjust the padding for the label
            fontSize: 12, // Adjust the font size of the label
          },
    }}
    
    >
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="My Tickets"
        component={MyTicketScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Entypo name="ticket" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="setting" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
