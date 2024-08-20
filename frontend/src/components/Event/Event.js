import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppButton from "../Button/AppButton";

export default function Event({ image, title,dateAndTime,address}) {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image source={
          {
            uri: "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/eda5f55e70a1df4d8c50368fcf829dad?_a=AQAEuiZ"
          }
        }
         style={styles.image}
        />
        <View style={styles.footer}>

          <Text style={styles.dataAndTime}>{dateAndTime}</Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>

          <AppButton title="Book Now"/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: "center",
      },
      box: {
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
        width: 360, // Ensure the box has a consistent width
      },
      image: {
        width: "100%", // Make sure the image takes up the full width of the box
        height: 190,
      },
      footer: {
        marginTop:10,
        padding: 10,
      },
      title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginVertical: 5,
        marginHorizontal: 10,
      },
      dataAndTime: {
        fontSize: 14,
        color: "#666",
        marginHorizontal: 10,
        marginBottom: 5,
      },
      address: {
        fontSize: 14,
        color: "#999",
        marginHorizontal: 10,
        marginBottom: 10,
      },
});
