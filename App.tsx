/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './lib/screens/welcome_screen/welcome_screen'
import OnboardingScreen from './lib/screens/onboarding_screen/onboarding_screen';
import SignInScreen from './lib/screens/authentication/sign_in_screen/sign_in_screen';
import SignUpScreen from './lib/screens/authentication/sign_up_screen/sign_up_screen';
import { routesName } from './lib/screens/routes';
import { singletonAuthViewModel } from './lib/view_models/authentication/firebase_configuration';
import HomeScreen from './lib/screens/hone_screen/home_screen';
import { View } from 'react-native';





const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  const [isReady, setIsReady] = useState<boolean>()
  useEffect(() => {
    singletonAuthViewModel.initDependencies().then((value: boolean) => {
      console.log(`inside then: ${value}`)
      setIsReady(value)
    })
    return () => {
    };
  }, []);
  if (isReady === undefined) {
    return <View />
  }
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={
        isReady ? routesName.homeScreen : routesName.onboardingScreen
      }>
        <Stack.Screen name={routesName.onboardingScreen} component={OnboardingScreen} />
        <Stack.Screen name={routesName.welcomeScreen} component={WelcomeScreen} />
        <Stack.Screen name={routesName.SignUpScreen} component={SignUpScreen} />
        <Stack.Screen name={routesName.signInScreen} component={SignInScreen} />
        <Stack.Screen name={routesName.homeScreen} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );

}



export default App;
