import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Button, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontFamilies } from '../../utils/font';


const windowWidth = Dimensions.get('window')


type WelcomeProps = {
    navigation: any;
};
const WelcomeScreen: React.FC<WelcomeProps> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <StackView navigation={navigation} />
            </View>
        </SafeAreaView>

    );
}

const StackView: React.FC<WelcomeProps> = ({ navigation }) => {
    return <View style={styles.baseLayer}>
        <BackgroundImage />
        <Content navigation={navigation} />
    </View>
}

const BackgroundImage = () => {
    return (
        <Image
            source={require('../../../assets/home_bg.png')}
            style={styles.image}
            resizeMode='cover'
        />
    )
}
const Content: React.FC<WelcomeProps> = ({ navigation }) => {
    return (
        <View style={styles.column}>
            <View style={{ height: windowWidth.height * (147 / 852) }}></View>
            <Text style={styles.header1}>
                Snacking Time
            </Text>
            <Text style={styles.header2}>
                Cooking App
            </Text>
            <View style={{ height: windowWidth.height * (447 / 852) }}></View>
            <CreateAccountButton navigation={navigation} />
            <CreateDivider />
            <CreateSignInButton navigation={navigation} />
        </View >
    )
}

const CreateAccountButton: React.FC<WelcomeProps> = () => {
    const innerStyles = StyleSheet.create({
        buttonLayer: {
            width: windowWidth.width - 32,
            height: 48,
            backgroundColor: "#FB8C00",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 24,
        },
        text: {
            color: "#131313",
            fontSize: 18,
            fontFamily: fontFamilies.Roboto.medium,
        }

    })
    return (<View style={innerStyles.buttonLayer}>
        <TouchableOpacity>
            <Text style={innerStyles.text}>Create Account</Text>
        </TouchableOpacity>
    </View>)
}


const CreateSignInButton: React.FC<WelcomeProps> = ({ navigation }) => {
    const innerStyles = StyleSheet.create({
        buttonLayer: {
            width: windowWidth.width - 32,
            height: 48,
            backgroundColor: "#FEE8CC",
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 24,
        },
        text: {
            color: "#131313",
            fontSize: 18,
            fontFamily: fontFamilies.Roboto.medium,
        }

    })
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <View style={innerStyles.buttonLayer}>
                <Text style={innerStyles.text}>Sign In</Text>
            </View>
        </TouchableOpacity>)
}

const CreateDivider = () => {
    return <View style={styles.divider}>
        <View style={{ height: 2, flex: 1, backgroundColor: "#fff" }}>
        </View>
        <Text style={{ color: "#fff", marginHorizontal: 16 }}>Or</Text>
        <View style={{ height: 2, flex: 1, backgroundColor: "#fff" }}>
        </View>
    </View >
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: windowWidth.width,
        height: windowWidth.height,
    },
    column: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: windowWidth.height,
        width: windowWidth.width
    },
    baseLayer: {
        width: windowWidth.width,
        height: windowWidth.height,
        backgroundColor: "#FB8C00",
        alignItems: 'center',
        // justifyContent: 'center',
    },
    header1: {
        fontSize: 40,
        fontWeight: '500',
    },
    header2: {
        fontSize: 24,
        fontWeight: '500',
    },
    image: {
        height: windowWidth.height - windowWidth.height * (277 / 856),
        width: "100%",
        position: 'absolute', // Enable absolute positioning
        left: 0,
        right: 0,
        bottom: 0,
    },
    divider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical: 9,
    }
});


// const styles = StyleSheet.create({})

export default WelcomeScreen

