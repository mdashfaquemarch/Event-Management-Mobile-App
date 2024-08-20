import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Ticket({title, dateAndTime, address}) {
  return (
    <View style={{justifyContent: "center",alignItems: "center",marginVertical: 10}}>
       <Pressable>
          <View style={styles.container}>
           <View style={styles.boxOne}>
                  <View><Text style={styles.title}>{title}</Text></View>
                  <View><Text>{dateAndTime}</Text></View>
                  <View><Text>{address}</Text></View>
           </View>
           <View style={styles.boxTwo}>
                <Text style={styles.text}>Available</Text>
           </View>
           </View>
           </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 10,
      overflow: "hidden",
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      width: 360, // Ensure the box has a consistent width\
      padding: 10
    },
    boxOne: {
      marginVertical: 10
    },
    boxTwo: {
      borderLeftWidth: 2,
      borderStyle: "dotted", 
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
    },
    text: {
      fontSize: 16,
      fontWeight: "bold",
      color: "green"
    }
})