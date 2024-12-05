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
import CreactAccontScreen from './lib/screens/create_account/creact_accont_screen';
import OnboardingScreen from './lib/screens/onboarding_screen/onboarding_screen';
import SignUpScreen from './lib/screens/authentication/login_screen/login_screen';
import SignInScreen from './lib/screens/authentication/sign_up_screen/sign_up_screen';
import { Provider } from 'react-redux';
import { store } from './lib/models/store';



const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='OnboardingScreen'>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="CreactAccontScreen" component={CreactAccontScreen} />
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen name='SignInScreen' component={SignInScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
