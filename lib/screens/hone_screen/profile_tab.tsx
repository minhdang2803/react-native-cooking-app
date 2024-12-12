import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorResource } from '../../utils/color_resource';
import { singletonAuthViewModel } from '../../view_models/authentication/firebase_configuration';
import { routesName } from '../routes';
import { constants } from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';



const { width, height } = Dimensions.get("window")
type ProfileTapProps = {
    navigation: any
}
const ProfileTab: React.FC<ProfileTapProps> = ({ navigation }) => {

    return (
        <View style={styles.baseViewStyle}>
            <TouchableOpacity onPress={() => {
                singletonAuthViewModel.signOut().then((value) => {
                    navigation.replace(routesName.welcomeScreen)
                    AsyncStorage.removeItem(constants.IS_LOGGED_IN)
                    AsyncStorage.removeItem(constants.TOKEN)
                })
            }}>
                <Text>ProfileTab</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    baseViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colorResource.background,
    }
})

export default ProfileTab;
