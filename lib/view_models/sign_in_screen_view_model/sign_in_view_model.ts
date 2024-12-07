import { useRef } from "react"
import {useSignInViewStore} from "../../models/sign_in_store/sign_in_store"
import { TextInput } from "react-native"
import {singletonAuthViewModel} from '../authentication/firebase_configuration'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { routesName } from "../../screens/routes"
import { constants } from "../../utils/constants"
import { User } from "firebase/auth"
export const SignInViewModel = () => {
  //Zustand states
  const email = useSignInViewStore((state) => state.email);
  const password = useSignInViewStore((state) => state.password);
  const isRememberMe = useSignInViewStore((state) => state.isRememberMe);
  const onResetState = useSignInViewStore((state) => state.onResetState); 
  const onSetEmail = useSignInViewStore((state) => state.onSetEmail); 
  const onSetPassword = useSignInViewStore((state) => state.onSetPassword); 
  const onSetIsRememberMe = useSignInViewStore((state) => state.onSetIsRememberMe); 
  const isLoadingApple = useSignInViewStore((state) => state.isLoadingApple)
  const setLoadingApple = useSignInViewStore((state) => state.setLoadingApple)
  const isLoadingGoogle = useSignInViewStore((state) => state.isLoadingGoogle)
  const setLoadingGoogle = useSignInViewStore((state) => state.setLoadingGoogle)
  const isLoading = useSignInViewStore((state) => state.isLoading)
  const setLoading = useSignInViewStore((state) => state.setLoading)
  // References to Textfields
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  // Authentication firebase
  const authViewModel = singletonAuthViewModel;


  ///Methods
  const dispose = () => {
      onResetState()
  }
  const initState = () => { }
  
  const onTapSignInWithEmailPassword = async (navigation: any) => {
    let currentEmail = useSignInViewStore.getState().email
    let currentPassword= useSignInViewStore.getState().password
    try {
      setLoading(true)
      let loginResponse = await authViewModel.loginWithEmailPassword(currentEmail, currentPassword) 
      if (loginResponse !== null) {
        await writeDataAndNavigate(loginResponse,navigation)
      }
    } catch (error) {
      console.log(`SignInViewModel - onTapSignInWithEmailPassword - error:${error}`)
    }
    finally {
      setLoading(false)  
    }
  }


  const onTapSignInWithGoogle = async (navigation: any) => {
    try { 
      setLoadingGoogle(true)
      let loginResponse = await authViewModel.loginWithGoogle()
      if (loginResponse !== null) {
        await writeDataAndNavigate(loginResponse,navigation)
      }
    } catch (error) {
      console.log(`SignInViewModel - onTapSignInWithGoogle - error:${error}`)
    }
    finally {
      setLoadingGoogle(false)
    }
  }

  
  const writeDataAndNavigate = async (user: User, navigation: any) => {
        //Save token to SharedPreferences
        let token = await user.getIdToken()
        await AsyncStorage.setItem(constants.TOKEN, token)
        //Set App State to isLoggedIn
        await AsyncStorage.setItem(constants.IS_LOGGED_IN, JSON.stringify({ "IS_LOGGED_IN": true }));
        //Navigate to Home Screen
        navigation.navigate(routesName.homeScreen)
    }

  return {
    email,
    password,
    isRememberMe,
    isLoading,
    setLoading,
    onSetEmail,
    onSetPassword,
    onSetIsRememberMe,
    onResetState,
    onTapSignInWithEmailPassword,
    emailRef,
    passwordRef,
    dispose,
    initState,
    isLoadingApple,
setLoadingApple,
isLoadingGoogle,
setLoadingGoogle,onTapSignInWithGoogle,
  }
}