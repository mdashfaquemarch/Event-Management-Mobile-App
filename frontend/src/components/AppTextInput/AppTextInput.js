import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import defaultstyles from "../../config/styles.js";

export default function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.topContainer}>

    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
        name={icon}
        size={30}
        color={colors.medium}
          style={styles.icon}
          />
        )}
      <View style={styles.input}>
      <TextInput style={[defaultstyles.text]} {...otherProps} />
      </View>
    </View>
        </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    // borderWidth:2,
    marginHorizontal: 20
  },
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 10,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
   width: "100%",
  //  borderWidth:2,
   padding:5,
  },
});
