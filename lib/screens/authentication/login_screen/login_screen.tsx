import React, { useRef, useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { fontFamilies } from '../../../font';
import { colorResource } from '../../../utils/color_resource';
import CustomButtom from '../../../components/custom_buttom';
import CustomTextField from '../../../components/custom_text_field';
import CustomCheckboxWithTitle from '../../../components/custom_checkbox_with_title';




const { width, height } = Dimensions.get("window")

type NavigationProp = {
    navigation: any
}


const SignUpScreen: React.FC<NavigationProp> = ({ navigation }) => {
    const textController = useRef<TextInput>(null)


    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.backgroundLayer} >
                <View style={{ height: height * (131 / 852) }} />
                <PrimaryTitle />
                <View style={{ height: 4 }} />
                <SecondaryTitle />
                <View style={{ height: 16 }} />
                <CustomTextField
                    prefixTitle='Email'
                    suffixTitle='Sign in with Email'
                    placeHolder='example@gmail.com'
                    textController={textController}
                    isPassword={false}
                />
                <View style={{ height: 12 }} />
                <CustomTextField
                    prefixTitle='Phone'
                    suffixTitle='Sign in with phone number'
                    placeHolder='Enter your phone'
                    textController={textController}
                    isPassword={false}
                />
                <View style={{ height: 12 }} />
                <CustomTextField
                    prefixTitle='Password'
                    suffixTitle=''
                    placeHolder='Enter your password'
                    textController={textController}
                    isPassword={true}
                />
                <View style={{ height: 16 }} />
                <CustomCheckboxWithTitle title='Remember Me' onPress={(isChecked: boolean) => { }} />
                <View style={{ height: 24 }} />
                <CustomButtom title={"Sign Up"} />
                <View style={{ height: 12 }} />
                <OrDivider />
                <View style={{ height: 12 }} />
                <CustomButtom
                    title={"Sign Up With Google"}
                    isPrefixIcon={true}
                    prefixIcon={require("../../../../assets/ic_google.png")}
                    backgroundColor={colorResource.surface1}
                />
                <View style={{ height: 16 }} />
                <CustomButtom
                    title={"Sign Up With Apple"}
                    isPrefixIcon={true}
                    prefixIcon={require("../../../../assets/ic_apple.png")}
                    backgroundColor={colorResource.surface1}
                />
                <View style={{ height: 95 }} />
                <FooterText onPress={() => { navigation.navigate('SignInScreen') }} />
            </View>
        </SafeAreaView>
    );
}

const PrimaryTitle = () => {
    return (
        <View style={{ width: "100%" }}>
            <Text style={{
                fontFamily: fontFamilies.Roboto.regular,
                fontWeight: '600',
                color: "#131313",
                fontSize: 24,
            }}>
                Create an account
            </Text>
        </View>
    )
}

const SecondaryTitle = () => {
    return (
        <View style={{ width: "100%" }}>
            <Text style={{
                fontFamily: fontFamilies.Roboto.regular,
                fontWeight: '400',
                color: "#131313",
                fontSize: 14,
            }}>
                Start cooking like a chief right now
            </Text>
        </View>
    )
}


const OrDivider = () => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ height: 2, backgroundColor: colorResource.border, marginRight: 16, flex: 1 }} />
            <Text style={{
                color: colorResource.border,
                fontFamily: fontFamilies.Roboto.regular,
                fontSize: 16,

            }}>Or</Text>
            <View style={{ height: 2, backgroundColor: colorResource.border, marginLeft: 16, flex: 1 }} />
        </View>
    )
}


type FooterTextProp = {
    onPress?: () => void
}
const FooterText: React.FC<FooterTextProp> = (prop) => {
    return (
        <TouchableOpacity onPress={prop.onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{
                        fontSize: 14,
                        fontFamily: fontFamilies.Roboto.medium,
                    }}
                >Already have an account? Sign in</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: width,
        height: height,
        flexDirection: 'column',
        backgroundColor: "white"
    },
    backgroundLayer: {
        marginHorizontal: 24,
    }
})

export default SignUpScreen;
