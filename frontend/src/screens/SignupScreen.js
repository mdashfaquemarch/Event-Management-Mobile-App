// SignupScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";

import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/Button/AppButton";
import TitleText from "../components/AppText/TitleText";

function SignupScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TitleText title="Signup" />

      <AppTextInput
        placeholder="full Name" 
       icon="account"
        />
      <AppTextInput icon="email" placeholder="email" />
      <AppTextInput
        placeholder="Password"
        icon="onepassword"
        secureTextEntry={true}
      />
      <AppButton
        title="next"
        onPress={() => navigation.navigate("AcademicDetails")}
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

export default SignupScreen;
