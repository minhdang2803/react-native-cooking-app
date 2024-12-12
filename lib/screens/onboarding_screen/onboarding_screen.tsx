import React, { useRef, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, Text, ImageSourcePropType, FlatList, Animated, Pressable, TouchableOpacity } from 'react-native';
import { fontFamilies } from '../../utils/font';
import { OnboardingScreenViewModel } from '../../view_models/onboarding_screen/onboarding_screen_view_model';
import { colorResource } from '../../utils/color_resource';

const { width, height } = Dimensions.get("window")

type OnboardingProps = {
    navigation: any
}



type ContentData = {
    title: string,
    content: string
}



const contentData: ContentData[] = [
    { title: "Hello!", content: "Let's Cook!" },
    { title: "Create!", content: "Your own Recipes!" },
    { title: "Challenge!", content: "Win and get gifts!" },
]


const OnboardingScreen: React.FC<OnboardingProps> = ({ navigation }) => {
    const onboardingScreenViewModel = OnboardingScreenViewModel()


    // const [activeIndex, setActiveIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current

    // Handle flatlist scroll
    const onScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
    );

    const wormIndicator = scrollX.interpolate({
        inputRange: [0, width, width * 2],
        outputRange: [0, 100, 200], // Worm effect translation
        extrapolate: 'clamp',
    });
    // Render page dots
    const RenderDots = () => {
        return (
            <View style={styles.indicatorContainer}>
                {onboardingScreenViewModel.imageData.map((_, index) => {
                    const inputRange = [(index - 1) * width, index * width, (index + 1) * width]
                    const dotWidth = scrollX.interpolate({ inputRange, outputRange: [10, 20, 10], extrapolate: 'clamp' })
                    const opacity = scrollX.interpolate({ inputRange, outputRange: [0.3, 1, 0.3], extrapolate: 'clamp' })
                    return <Animated.View key={index} style={[styles.dot, { width: dotWidth, opacity: opacity, backgroundColor: "#FEE8CC" }]} />
                })}
            </View>
        );
    };
    // Render FlatList Items (images)

    return (
        <View style={styles.stackLayer}>
            <RenderDots />
            <View style={{ height: 16 }} />
            <OnboardingPageView
                onScroll={onScroll}
                navigation={navigation}
            />
        </View >
    );
}

type ImagePageViewProp = {
    onScroll: (...args: any[]) => void
    navigation: any
}

const OnboardingPageView: React.FC<ImagePageViewProp> = (prop) => {
    const onboardingScreenViewModel = OnboardingScreenViewModel()
    const ref = useRef<FlatList>(null)
    return (
        <View>
            <FlatList
                data={onboardingScreenViewModel.imageData}
                horizontal
                pagingEnabled
                ref={ref}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                    let pageIdx = onboardingScreenViewModel.imageData.indexOf(item)
                    let currentContent = contentData[pageIdx];
                    let currentButtonContent = onboardingScreenViewModel.buttonData[pageIdx];
                    return <OnboardingImage image={item} content={currentContent} buttonProps={{
                        label: currentButtonContent,
                        index: pageIdx,
                        onTap: () => { onboardingScreenViewModel.onTapNext(pageIdx, ref, prop.navigation) }
                    }} />
                }}
                onScroll={prop.onScroll}
                onMomentumScrollEnd={(e) => {
                    const contentOffsetX = e.nativeEvent.contentOffset.x;
                    const index = Math.floor(contentOffsetX / 300); // Adjust based on image size
                    onboardingScreenViewModel.onSetIndex(index)
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View >
    )
}/*  */


type OnboardingButtonProp = {
    label: string,
    onTap: () => void,
    index: number,
}
const OnboardingButton: React.FC<OnboardingButtonProp> = ({ label, onTap, index }) => {
    return (
        <TouchableOpacity onPress={onTap}>
            <View style={{
                width: width - 32,
                height: 48,
                justifyContent: 'center',
                backgroundColor: '#FB8C00',
                alignItems: 'center',
                borderRadius: 24,
                flexDirection: "row"
            }}>
                <Text style={{ fontSize: 18, fontFamily: fontFamilies.Roboto.bold }}>{label}</Text>
                <View style={{ width: 5 }} />
                {index > 0 ? <Image source={require("../../../assets/ic_arrow_right.png")
                } style={{
                    height: 15, width: 20
                }} /> : <View />}

            </View>
        </TouchableOpacity>
    )
}

type OnBoardingImageProp = {
    image: ImageSourcePropType
    content: ContentData
    buttonProps: OnboardingButtonProp
}
const OnboardingImage: React.FC<OnBoardingImageProp> = ({ image, content, buttonProps }) => {
    return <View style={{
        flex: 1,
        width: width,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 0
    }}>
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                position: 'relative'
            }}>
            <Text style={{ fontSize: 40, fontFamily: fontFamilies.Roboto.bold }}>
                {content.title}
            </Text>
            <Text style={{ fontSize: 24, fontFamily: fontFamilies.Roboto.bold }}>
                {content.content}
            </Text>
            <View style={{ height: 15 }}></View>
            <Image
                source={image}
                style={{
                    width: width,
                    height: height * (614 / 852)
                }}
                resizeMode='cover'
            />
            <View style={{
                width: width,
                position: 'absolute',
                alignItems: 'center',
                bottom: (42 / 852) * height,

                right: 0, left: 0
            }}>
                <OnboardingButton label={buttonProps.label} onTap={buttonProps.onTap} index={buttonProps.index} />
            </View>
        </View>
    </View >
}



const styles = StyleSheet.create({
    stackLayer: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#FB8C00",
        justifyContent: 'flex-end',
        flexDirection: "column",

    },
    indicatorContainer: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'center',
    },
    dot: {

        height: 10,
        borderRadius: 5,
        margin: 5,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    }
})


export default OnboardingScreen;
