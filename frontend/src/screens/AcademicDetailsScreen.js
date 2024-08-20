// AcademicDetailsScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";

import TitleText from "../components/AppText/TitleText";
import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/Button/AppButton";

function AcademicDetailsScreen({ navigation }) {
  const handleSubmit = () => {
    // Assume form submission logic is here
    // Reset the stack and navigate to the Main screen
    // navigation.dispatch(
    //   CommonActions.reset({
    //     index: 0, // Makes the Main screen the first screen in the stack
    //     routes: [{ name: 'Main' }], // Navigate to the Main screen
    //   })
    // );
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };
  return (
    <View style={styles.container}>
      <TitleText title="Academic Details" />
      <AppTextInput icon="school" placeholder="Institution Name" />
      <AppTextInput icon="school" placeholder="Course" />
      <AppTextInput icon="school" placeholder="year" />
      <AppButton
        title="submit"
        onPress={() => handleSubmit()}
        color="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  
  },
});

export default AcademicDetailsScreen;
