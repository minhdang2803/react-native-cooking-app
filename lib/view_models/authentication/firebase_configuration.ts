// Import the functions you need from the SDKs you need

import { FirebaseApp, initializeApp } from 'firebase/app';
import {
  Auth,
  getAuth,
  getReactNativePersistence,
  initializeAuth,
  signInWithEmailAndPassword,
  User,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithCredential
} from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constants } from '../../utils/constants';
import { getApps } from "firebase/app";
import { GoogleSignin } from '@react-native-google-signin/google-signin';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUNofPimND5SGBJ5cWQyf0YhFw52kwq3I",
  authDomain: "react-native-cooking.firebaseapp.com",
  projectId: "react-native-cooking",
  storageBucket: "react-native-cooking.firebasestorage.app",
  messagingSenderId: "550577068792",
  appId: "1:550577068792:web:ea19f56d6362709545b90d",
  measurementId: "G-1HPK8TRW26"
};

class AuthViewModel {
  private static instance: AuthViewModel;
  private constructor() {
  }

  public async initDependencies() {
    
    await this.initGoogleServices()
    return this.initFirebase();
  }

  public async initGoogleServices() {
    GoogleSignin.configure({
      iosClientId: '550577068792-6dq8lbe5mpqs09h66di1207ljgjdag0f.apps.googleusercontent.com',
      webClientId: '550577068792-k594cgdafqofkc9ruaosdn3ii63hce64.apps.googleusercontent.com',
        offlineAccess:false,

    });
  }

  public static getInstance(): AuthViewModel {
    if (!AuthViewModel.instance) {
      AuthViewModel.instance = new AuthViewModel();
    }
    return AuthViewModel.instance;
  }
  
  user: (User | null) = null
  isLoggedIn: boolean = false
  firebaseApp: FirebaseApp | null = null
  firebaseAuth: Auth | null = null
  isLoggedInWithSocialProvider: boolean = false
  public async loginWithEmailPassword(email: string, password: string): Promise<(User | null)> {
    try {
      let response = await signInWithEmailAndPassword(this.firebaseAuth!, email, password)
      this.user = response.user
      this.isLoggedIn = true;
      console.log(`Firebase user: ${this.user}`)
      return this.user
    } catch (error) {
      console.log(`loginWithEmailPassword: ${error}`)
      return null
    }
  }
  
  public async signUpWithEmailPassword(email: string, password: string): Promise<User | null> {
    try {
      let response = await createUserWithEmailAndPassword(this.firebaseAuth!, email, password)
      this.user = response.user
      this.isLoggedIn = true;
      console.log(`Firebase user: ${this.user}`)
      return this.user
    }
    catch (error) {
      console.log(`loginWithEmailPassword: ${error}`)
      return null
    }
  }

  public async loginWithGoogle(): Promise<User|null> {
  // Check if your device supports Google Play
    try {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  // Get the users ID token
  const signInResult = await GoogleSignin.signIn();

  // Try the new style of google-sign in result, from v13+ of that module
    let idToken = signInResult.data?.idToken;
    
    if (!idToken) {
      throw new Error('No ID token found');
    }
    // Create a Google credential with the token
    const googleCredential = GoogleAuthProvider.credential(signInResult.data?.idToken);
    // Sign-in the user with the credential
    const signInWithCredentialResponse = signInWithCredential(this.firebaseAuth!, googleCredential)
    this.user = (await signInWithCredentialResponse).user
      return this.user
    }
    catch (error) {
      console.log(`loginWithGoogle: ${error}`)
      throw error
    }
  }

  public async signOut() {
    await signOut(this.firebaseAuth!)
    if (this.isLoggedInWithSocialProvider) {
      await GoogleSignin.revokeAccess()
    }
  }
  public async initFirebase() {
    try {
    
    if(getApps().length == 0)
    {
      this.firebaseApp = await initializeApp(firebaseConfig)
      this.firebaseAuth = initializeAuth(this.firebaseApp, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })
     }
    let json = JSON.parse(await AsyncStorage.getItem(constants.IS_LOGGED_IN) ?? "")
      this.isLoggedIn = json["IS_LOGGED_IN"]  
      if (this.isLoggedIn === undefined) {
        return false;
      }
      return this.isLoggedIn
    }
    catch (error) {
      console.log(`initFirebase: ${error}`)
      return false
    }
  }

}



export const singletonAuthViewModel = AuthViewModel.getInstance()
