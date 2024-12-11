import React from 'react';
import { Dimensions, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { singletonAuthViewModel } from '../../view_models/authentication/firebase_configuration';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { routesName } from '../routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { constants } from '../../utils/constants';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeTab from './home_tab';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons
import ProfileTab from './profile_tab';
import { colorResource } from '../../utils/color_resource';
import RecipeTab from './recipe_tab';
import MenuTab from './menu_tab';
import { fontFamilies } from '../../utils/font';


const { width, height } = Dimensions.get("window")
type HomeScreenProp = {
    navigation: any
}
type TabIconComponentProp = {
    iconUrl: any
    color: string
}

let icons: Map<string, any> = new Map([
    ["homeTabActive", require(`../../../assets/ic_home_active.png`)],
    ["homeTab", require(`../../../assets/ic_home.png`)],
    ["profileTabActive", require(`../../../assets/ic_profile_active.png`)],
    ["profileTab", require(`../../../assets/ic_profile.png`)],
    ["recipeTabActive", require(`../../../assets/ic_buy_active.png`)],
    ["recipeTab", require(`../../../assets/ic_buy.png`)],
    ["buyTabActive", require(`../../../assets/ic_document_active.png`)],
    ["buyTab", require(`../../../assets/ic_document.png`)],

])


const HomeScreen: React.FC<HomeScreenProp> = ({ navigation }) => {
    const TabIconComponent: React.FC<TabIconComponentProp> = ({ iconUrl, color }) => {
        return (
            <Image
                source={iconUrl}
                resizeMode='contain'
                style={{ tintColor: color, height: 24, width: 24, alignItems: 'center' }}
            />
        )
    }

    const FAB = () => {
        return (<TouchableOpacity style={{
            borderRadius: 30,
            backgroundColor: colorResource.primary,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 22, // Adjust as per your tab bar height
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 3,
            elevation: 5,
        }}>
            <Ionicons name="add" size={35} color="black" style={{ margin: 10.75 }} />
        </TouchableOpacity>)
    }
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: string;
                    if (route.name === 'Home') {
                        iconName = focused ? "homeTabActive" : "homeTab"
                    } else if (route.name === 'Profile') {
                        iconName = focused ? "profileTabActive" : "profileTab"
                    }
                    else if (route.name === "List") {
                        iconName = focused ? "recipeTabActive" : "recipeTab"
                    }
                    else {
                        iconName = focused ? "buyTabActive" : "buyTab"
                    }
                    let icon = icons.get(iconName)
                    return <TabIconComponent color={color} iconUrl={icon} />

                },
                tabBarLabelStyle: {
                    marginTop: 4,
                    fontFamily: fontFamilies.Roboto.medium,
                    fontSize: 10,
                    fontWeight: '500',
                    alignItems: 'center'
                },
                tabBarActiveTintColor: colorResource.primary,
                tabBarInactiveTintColor: colorResource.textPrimary,
                headerShown: false, // Hides header if not needed
            })}
        >
            <Tab.Screen name='Home' component={HomeTab} />
            <Tab.Screen name='List' component={RecipeTab} />
            <Tab.Screen
                name="FAB"
                component={() => null} // Placeholder for the FAB
                options={{
                    tabBarButton: () => <FAB />
                }}
            />
            <Tab.Screen name='Menu' component={MenuTab} />
            <Tab.Screen name='Profile' component={ProfileTab} />
        </Tab.Navigator>
    )
}

export default HomeScreen;
