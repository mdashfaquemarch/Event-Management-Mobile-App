import { StatusBar } from "expo-status-bar";
import { StyleSheet, Switch, Text, TextInput, View } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack'
import navigationTheme from "./navigation/navigationTheme";
import AppNavigator from "./navigation/AppNavigator";
import { useState } from "react";
import AppTextInput from "./components/AppTextInput/AppTextInput";
import AuthStack from "./navigation/AuthStack";

// export default function App() {
//   const [firstName, setFirstName] = useState("");

//   const [isNew, setIsNew] = useState(false);

//   return (
//     // <NavigationContainer theme={navigationTheme}>
//     //    {/* we conditional render this when user logged in */}
//     //   {/* <AuthNavigator /> */}
//     //   <AppNavigator />
//     // </NavigationContainer>
//     <>
//       {/* <Text>{firstName}</Text>
//         <TextInput
//            secureTextEntry={true}
//           clearButtonMode="always"
//            keyboardType="numeric"
//           onChangeText={(text) => setFirstName(text)}
//           placeholder="First name"
//           style={{
//             borderBottomColor: "#ccc",
//             borderBottomWidth: 1,
//           }}
//         /> */}

//       {/* <View style={{flex: 1, justifyContent: "center",alignItems: "center"}}>
//         <AppTextInput placeholder="Username" icon="email"/>
//       <Switch  value={isNew} onValueChange={(newValue) => setIsNew(newValue)} />
//       </View> */}

//       <NavigationContainer theme={navigationTheme}>
//         {/* we conditional render this when user logged in */}
//         {/* <AuthNavigator /> */}
//         <AppNavigator />
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({});

const RootStack = createStackNavigator();

export default function App() {
  // Assume a state for authentication (replace with real auth logic)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavigationContainer theme={navigationTheme}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated === true ? (
          <RootStack.Screen name="Home" component={AppNavigator} />
        ) : (
          <RootStack.Screen name="Auth" component={AuthStack} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
