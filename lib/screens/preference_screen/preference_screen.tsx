import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamilies } from '../../utils/font';
import { colorResource } from '../../utils/color_resource';
import { preferenceItems, PreferencesItemModel } from "../../models/preferences_screen_store/preference_item_model"
import CustomButtom from '../../components/custom_buttom';
import { useNavigation } from '@react-navigation/native';
import { routesName } from '../routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const { width, height } = Dimensions.get('window')
type PreferenceScreenProp = {
    navigation: any
}
const PreferenceScreen: React.FC<PreferenceScreenProp> = ({ navigation }) => {
    const SkipButtonComponent = () => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate(routesName.homeScreen)
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    marginHorizontal: 25,
                    marginTop: 12,
                }}>
                    <Text style={{
                        fontSize: 16,
                        fontFamily: fontFamilies.Roboto.medium,
                        fontWeight: '500',
                        color: colorResource.textPrimary
                    }}>SKIP</Text>
                </View>
            </TouchableOpacity>
        )
    }


    const TitleComponent = () => {
        return (
            <View style={{
                flexDirection: 'column',
                paddingHorizontal: 55,
                alignItems: 'center'
            }}>
                <Text style={{
                    color: colorResource.textPrimary,
                    fontSize: 48,
                    fontWeight: 'bold',
                    fontFamily: fontFamilies.Roboto.bold
                }}>Preferences!</Text>
                <Text style={{
                    color: colorResource.textPrimary,
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: fontFamilies.Roboto.regular
                }}>What do you prefer in food?</Text>
            </View>
        )
    }

    const PreferenceItemsComponent: React.FC<PreferencesItemModel> = ({ name, imageUrl }) => {
        return (
            <View style={{
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'flex-end',
                alignSelf: 'center',
                height: 120,

            }}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: "absolute",
                    zIndex: 2,
                    left: 0, right: 0,
                    bottom: 8,
                }}>
                    <Image
                        style={{ width: 96, height: 96 }}
                        source={imageUrl}
                        resizeMode='contain'
                    />
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '600',
                        color: colorResource.textPrimary,
                        fontFamily: fontFamilies.Roboto.regular,
                        lineHeight: 16,
                    }}>{name}</Text>
                </View>
                <View style={{
                    width: (width - 116 - 24) / 2,
                    alignItems: 'center',
                }}>
                    <View style={{
                        height: 79,
                        width: "90%",
                        borderRadius: 10,
                        borderBlockColor: colorResource.border,
                        shadowColor: 'black',
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        elevation: 4,
                        shadowOffset: { width: 0, height: 4 },
                        backgroundColor: colorResource.surface0dot5,
                    }}>
                    </View>
                </View>
            </View>
        )
    }


    const PreferencesGridViewComponent = () => {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <FlatList
                    data={preferenceItems}
                    scrollEnabled={true}
                    pagingEnabled
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    contentContainerStyle={{ gap: 15 }}
                    columnWrapperStyle={{ gap: 10 }}
                    renderItem={({ item }) => {
                        return <PreferenceItemsComponent name={item.name} imageUrl={item.imageUrl} />
                    }}
                />
            </View>
        )
    }


    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={styles.backgroundLayerStyle}>
                <SkipButtonComponent />
                <View style={{ height: 44 }}></View>
                {TitleComponent()}
                <View style={{ height: 8 }}></View>
                <PreferencesGridViewComponent />
                <View style={{ height: 16 }}></View>
                <View style={{ alignItems: 'center' }}>
                    <CustomButtom title="Let's Go" width={width - 32} onPress={() => {
                        navigation.navigate(routesName.homeScreen)
                    }} />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        width: width,


        height: height,
        backgroundColor: 'white',

    },
    backgroundLayerStyle: {
        flex: 1,
        flexDirection: 'column'
    }
})

export default PreferenceScreen;
