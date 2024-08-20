// LoginScreen.js
import React from "react";
import { View, StyleSheet } from "react-native";

import AppTextInput from "../components/AppTextInput/AppTextInput";
import AppButton from "../components/Button/AppButton";
import TitleText from "../components/AppText/TitleText";

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TitleText title="Login" />
      <AppTextInput icon="email" placeholder="email" />
      <AppTextInput
        placeholder="password"
        icon="onepassword"
        secureTextEntry={true}
      />
      <AppButton
        title="Login"
        onPress={() =>
          navigation.reset({ index: 0, routes: [{ name: "Main" }] })
        }
      />
      <AppButton
        title="Signup"
        onPress={() => navigation.navigate("Signup")}
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

export default LoginScreen;
