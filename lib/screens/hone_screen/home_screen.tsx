import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { singletonAuthViewModel } from '../../view_models/authentication/firebase_configuration';
import { useNavigation } from '@react-navigation/native';
import { routesName } from '../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constants } from '../../utils/constants';


type HomeScreenProp = {
    navigation: any
}
const HomeScreen: React.FC<HomeScreenProp> = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => {
                singletonAuthViewModel.signOut().then((value) => {
                    navigation.replace(routesName.welcomeScreen)
                    AsyncStorage.removeItem(constants.IS_LOGGED_IN)
                    AsyncStorage.removeItem(constants.TOKEN)
                })
            }}>
                <View>
                    <Text>Home Screen</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({})

export default HomeScreen;
