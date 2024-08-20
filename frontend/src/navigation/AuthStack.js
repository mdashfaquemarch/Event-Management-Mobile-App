import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// screens

import LoginScreen from '../screens/LoginScreeen.js';
import SignupScreen from '../screens/SignupScreen.js';
import AcademicDetailsScreen from '../screens/AcademicDetailsScreen.js';

// navigation
import AppNavigator from './AppNavigator.js';


const Stack = createStackNavigator();

function AuthStack() {
  return (
    
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="AcademicDetails" component={AcademicDetailsScreen} />
          {/* After authentication, navigate to the bottom tab navigator */}
        <Stack.Screen name="Main" component={AppNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
   
  );
}

export default AuthStack;
