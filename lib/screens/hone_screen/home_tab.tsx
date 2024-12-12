import React, { useRef, useState } from 'react';
import { Animated, Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colorResource } from '../../utils/color_resource';
import { singletonAuthViewModel } from '../../view_models/authentication/firebase_configuration';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { routesName } from '../routes';
import { constants } from '../../utils/constants';
import { fontFamilies } from '../../utils/font';
import SectionTitleComponent from './home_tab_components/section_title_component';
import RecipeComponent from './home_tab_components/recipe_component';
import StoryComponent from './home_tab_components/story_component';
import { HomeTabViewModel } from '../../view_models/home_screen/home_tab_view_model';

const { width, height } = Dimensions.get("window")
type HomeTapProps = {
    navigation: any
}
const HomeTab: React.FC<HomeTapProps> = ({ navigation }) => {
    const homeTabViewModel = HomeTabViewModel()
    const HomeSearchBar = () => {
        return (
            <View style={{
                paddingHorizontal: 16,
                flexDirection: "row", alignItems: 'center',
            }}>
                <View style={{
                    flexDirection: "row", alignItems: 'center',
                    flexGrow: 1,
                    flexShrink: 1
                }}>
                    <TextInput style={[{
                        backgroundColor: colorResource.border,
                        borderRadius: 16,
                        paddingHorizontal: 40,
                        paddingVertical: 10,
                        flexGrow: 1,
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

    const SnacksListComponent = () => {
        return (
            <FlatList
                data={homeTabViewModel.snacks}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={{ paddingBottom: 24, }}
                contentContainerStyle={{ alignItems: 'stretch' }}
                keyExtractor={(item, index) => item.imageUrl}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{
                            width: 250,
                            paddingRight: 16,
                            paddingLeft: index === 0 ? 16 : null
                        }}>
                            <RecipeComponent recipeArticle={item} onPress={() => { }} />
                        </View>
                    )
                }
                }
            />
        )
    }


    const SnacksForTheWeekComponent = () => {
        const scrollX = useRef(new Animated.Value(0)).current

        // Handle flatlist scroll
        const onScroll = Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
        );
        return (
            <View>
                <FlatList
                    data={homeTabViewModel.snacks}
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    style={{ paddingBottom: 12, paddingTop: 12, }}
                    keyExtractor={(item) => item.imageUrl}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ width: width, paddingHorizontal: 16, }}>
                                <RecipeComponent recipeArticle={item}
                                    onPress={() => { }} />
                            </View>
                        )
                    }
                    }
                    onScroll={onScroll}
                />
                <View style={{
                    flexDirection: 'row',
                    width: width,
                    justifyContent: 'center',
                }}>
                    {homeTabViewModel.snacks.map((item, index) => {
                        const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                        const dotWidth = scrollX.interpolate({
                            inputRange,
                            outputRange: [10, 20, 10],
                            extrapolate: 'clamp'
                        })
                        const opacity = scrollX.interpolate({
                            inputRange,
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        })
                        return <Animated.View key={index.toString()} style={[styles.dot, { width: dotWidth, opacity: opacity, backgroundColor: colorResource.primary }]} />
                    })}
                </View>
            </View>
        )
    }


    return (
        <View style={styles.baseViewStyle}>
            <View style={styles.backgroundViewStyle}>
                <ScrollView
                    horizontal={false}
                    contentContainerStyle={{ flexGrow: 1, width: width }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <HomeSearchBar />
                    <View style={{ height: 16 }}></View>
                    <View style={{ height: 12 }}></View>
                    <View style={{ width: "100%", paddingHorizontal: 16, }}>
                        <RecipeComponent
                            onPress={() => { }}
                            recipeArticle={{
                                tag: ["From Chef", "Challange", "Challange", "Challange", "Challange"],
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
                    <StoryComponent user={homeTabViewModel.user} />
                    <View style={{ height: 24 }}></View>
                    <SectionTitleComponent title='New Snacks' actionTitle='SEE ALL' onPress={() => { }} />
                    <View style={{ height: 12 }}></View>
                    <SnacksListComponent />
                    <SectionTitleComponent title='Snacks for the week' actionTitle='SEE ALL' onPress={() => { }} />
                    <SnacksForTheWeekComponent />
                    <View style={{ height: 24 }}></View>
                    <SectionTitleComponent title='New Diet' actionTitle='SEE ALL' onPress={() => { }} />
                    <View style={{ height: 12 }}></View>
                    <View style={{ width: "100%", paddingHorizontal: 16, }}>
                        <RecipeComponent
                            onPress={() => { }}
                            onPressStartDiet={() => { }}
                            recipeArticle={{
                                tag: ["From Chef", "Challange", "Challange", "Challange", "Challange"],
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
                    <SectionTitleComponent title='All List' />
                    <View style={{ height: 32 }}></View>
                </ScrollView>
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
    },
    dot: {
        height: 10,
        borderRadius: 5,
        margin: 5,
    }
})

export default HomeTab;
