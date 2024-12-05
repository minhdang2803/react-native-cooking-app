import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamilies } from '../../../font';
import CustomTextField from '../../../components/custom_text_field';
import CustomCheckboxWithTitle from '../../../components/custom_checkbox_with_title';
import { colorResource } from '../../../utils/color_resource';
import CustomButtom from '../../../components/custom_buttom';



const { width, height } = Dimensions.get('window')
type NavigationProp = {
    navigation: any
}
const SignInScreen: React.FC<NavigationProp> = ({ navigation }) => {
    const textController = useRef<TextInput>(null)
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <View style={styles.backgroundLayerStyle}>
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
                    prefixTitle='Password'
                    suffixTitle=''
                    placeHolder='Enter your password'
                    textController={textController}
                    isPassword={true}
                />
                <View style={{ height: 16 }} />
                <OptionsBar onPressCheckBox={(isChecked: boolean) => { }} onPressForgotPassword={() => { }} />
                <View style={{ height: 24 }} />
                <CustomButtom title={"Sign In"} />
                <View style={{ height: 12 }} />
                <OrDivider />
                <View style={{ height: 12 }} />
                <CustomButtom
                    title={"Sign In With Google"}
                    isPrefixIcon={true}
                    prefixIcon={require("../../../../assets/ic_google.png")}
                    backgroundColor={colorResource.surface1}
                />
                <View style={{ height: 16 }} />
                <CustomButtom
                    title={"Sign In With Apple"}
                    isPrefixIcon={true}
                    prefixIcon={require("../../../../assets/ic_apple.png")}
                    backgroundColor={colorResource.surface1}
                />
                <View style={{ flex: 1 }} />
                <FooterText onPress={() => { navigation.navigate('SignUpScreen') }} />
                <View style={{ height: 50 }} />
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
                Hi, Welcome Back! 👋
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
                Hello again, you’ve been missed!
            </Text>
        </View>
    )
}

type OptionsBarProps = {
    onPressCheckBox: (isChecked: boolean) => void,
    onPressForgotPassword: () => void,
}
const OptionsBar: React.FC<OptionsBarProps> = (props) => {
    return (

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <CustomCheckboxWithTitle title='Remember Me' onPress={props.onPressCheckBox} />
            <TouchableOpacity onPress={props.onPressForgotPassword}>
                <Text style={{
                    color: colorResource.primary,
                    fontSize: 16,
                    fontWeight: "500",
                    fontFamily: fontFamilies.Roboto.medium
                }}>
                    Forgot Password
                </Text>
            </TouchableOpacity>
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
                >Don’t have an account ? Sign Up</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    safeAreaStyle: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'white',

    },
    backgroundLayerStyle: {
        marginHorizontal: 24,
        flex: 1,
        flexDirection: 'column'
    }
})

export default SignInScreen;