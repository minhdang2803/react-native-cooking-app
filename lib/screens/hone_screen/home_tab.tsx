import React from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colorResource } from '../../utils/color_resource';
import { singletonAuthViewModel } from '../../view_models/authentication/firebase_configuration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { routesName } from '../routes';
import { constants } from '../../utils/constants';
import { fontResource } from '../../utils/font_resource';
import { fontFamilies } from '../../utils/font';
import SectionTitleComponent from './home_tab_components/section_title_component';
import RecipeComponent from './home_tab_components/recipe_component';
import StoryComponent from './home_tab_components/story_component';

const { width, height } = Dimensions.get("window")
type HomeTapProps = {
    navigation: any
}
const HomeTab: React.FC<HomeTapProps> = ({ navigation }) => {

    const HomeSearchBar = () => {
        return (
            <View style={{
                paddingHorizontal: 16,
                flexDirection: "row", alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: "row", alignItems: 'center',
                    flex: 1,
                }}>
                    <TextInput style={[{
                        backgroundColor: colorResource.border,
                        borderRadius: 16,
                        paddingHorizontal: 40,
                        paddingVertical: 10,
                        flex: 1,
                    }, {
                        fontSize: 16,
                        fontFamily: fontFamilies.Roboto.regular,
                        fontWeight: "400",
                        color: colorResource.textPrimary,
                    }, {
                        shadowColor: "#808080",
                        shadowOpacity: 0.1,
                        shadowOffset: { width: 0, height: 2 },
                        shadowRadius: 4,
                        elevation: 3, //for android
                    },
                    ]}
                        placeholder='Search'
                        placeholderTextColor={colorResource.textPrimary}
                    />
                    <Image
                        style={{ width: 20, height: 20, position: 'absolute', left: 12 }}
                        resizeMode='contain'
                        source={require("../../../assets/ic_search_prefix.png")}
                    />
                    <Image
                        style={{ width: 20, height: 20, position: 'absolute', right: 12 }}
                        resizeMode='contain'
                        source={require("../../../assets/ic_microphone.png")}
                    />
                </View>
                <View style={{ width: 16 }} />
                <View style={[{ backgroundColor: colorResource.border, borderRadius: 14, padding: 10.25 },
                {
                    shadowColor: "#808080",
                    shadowOpacity: 0.1,
                    shadowOffset: { width: 0, height: 2 },
                    shadowRadius: 4,
                    elevation: 3, //for android
                }]}>
                    <Image
                        source={require("../../../assets/ic_filter.png")}
                        style={{ width: 20, height: 20, }}
                    />
                </View>
            </View>
        )
    }

    const HomeScreenPlaceholder = () => {
        return (<TouchableOpacity onPress={() => {
            singletonAuthViewModel.signOut().then((value) => {
                navigation.replace(routesName.welcomeScreen)
                AsyncStorage.removeItem(constants.IS_LOGGED_IN)
                AsyncStorage.removeItem(constants.TOKEN)
            })
        }}>
            <View >
                <Text>Home Screen</Text>
            </View>
        </TouchableOpacity>)
    }

    return (
        <View style={styles.baseViewStyle}>
            <View style={styles.backgroundViewStyle}>
                <HomeSearchBar />
                <View style={{ height: 16 }}></View>
                <SectionTitleComponent title='Snack for the Week' actionTitle='SEE ALL' onPress={() => { }} />
                <View style={{ height: 12 }}></View>
                <View style={{ width: "100%", paddingHorizontal: 16 }}>
                    <RecipeComponent recipeArticle={{
                        tag: ["From Chef", "Challange"],
                        title: "Salmon and baked \nvegetables - Fish Challange",
                        imageUrl: require("../../../assets/images/recipe10_medium.png"),
                        cookDuration: "20 mins",
                        isSaved: false,
                        isFavorite: false,
                        author: {
                            name: "Joe Johnson",
                            imageUrl: require("../../../assets/images/user4_small.png")
                        }
                    }} />
                </View>
                <View style={{ height: 24 }}></View>
                <StoryComponent user={[
                    {
                        name: "Joe Johnson",
                        imageUrl: require("../../../assets/images/user1_small.png")
                    },
                    {
                        name: "Joe Johnson",
                        imageUrl: require("../../../assets/images/user2_small.png")
                    },
                    {
                        name: "Joe Johnson",
                        imageUrl: require("../../../assets/images/user3_small.png")
                    },
                    {
                        name: "Joe Johnson",
                        imageUrl: require("../../../assets/images/user4_small.png")
                    },
                ]} />
                <View style={{ height: 24 }}></View>
                <SectionTitleComponent title='New Snacks' actionTitle='SEE ALL' onPress={() => { }} />
                <View style={{ height: 24 }}></View>
                <SectionTitleComponent title='Snack of the week' actionTitle='SEE ALL' onPress={() => { }} />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    baseViewStyle: {
        width: width,
        height: height,
        flex: 1,
        backgroundColor: colorResource.background,
    },
    backgroundViewStyle: {
        marginTop: 59,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})

export default HomeTab;
