/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './lib/screens/welcome_screen/welcome_screen'
import OnboardingScreen from './lib/screens/onboarding_screen/onboarding_screen';
import SignInScreen from './lib/screens/authentication/sign_in_screen/sign_in_screen';
import SignUpScreen from './lib/screens/authentication/sign_up_screen/sign_up_screen';
import { routesName } from './lib/screens/routes';



const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {

  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnboardingScreen'>
        <Stack.Screen name={routesName.onboardingScreen} component={OnboardingScreen} />
        <Stack.Screen name={routesName.welcomeScreen} component={WelcomeScreen} />
        <Stack.Screen name={routesName.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={routesName.signInScreen} component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}



export default App;
