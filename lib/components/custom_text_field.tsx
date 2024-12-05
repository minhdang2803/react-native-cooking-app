import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { fontFamilies } from '../utils/font';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colorResource } from '../utils/color_resource';




type TextFieldWithPreSurfTitleProps = {
    prefixTitle: string,
    suffixTitle: string,
    placeHolder: string,
    textController: React.RefObject<TextInput>
    isPassword: boolean
    onChangeText?: ((text: string) => void) | undefined
}
const CustomTextField: React.FC<TextFieldWithPreSurfTitleProps> = (prop) => {
    const [text, setText] = useState('');
    const clearText = () => {
        setText('');
    }
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const togglePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
    };
    return (
        <View style={{ flexDirection: 'column' }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Text style={innerStyles.prefixText}>{prop.prefixTitle}</Text>
                <Text style={innerStyles.prefixText}>{prop.suffixTitle}</Text>
            </View>
            <View style={{ height: 4 }} />
            <View style={innerStyles.inputContainer}>
                <TextInput
                    style={innerStyles.textInput}
                    placeholder={prop.placeHolder}
                    ref={prop.textController}
                    onChangeText={(text: string) => {
                        setText(text)
                        prop.onChangeText?.(text)
                    }}
                    value={text}
                    secureTextEntry={prop.isPassword ? isPasswordHidden : false} // 
                    placeholderTextColor={colorResource.textSecondary}
                />
                {prop.isPassword ? <TouchableOpacity onPress={togglePasswordVisibility} style={innerStyles.clearButton}>
                    <Icon
                        name={isPasswordHidden ? 'visibility' : 'visibility-off'}
                        size={20}
                        color={colorResource.textSecondary}
                    />
                </TouchableOpacity>
                    : text.length > 0 && (
                        <TouchableOpacity onPress={clearText} style={innerStyles.clearButton}>
                            <Icon name="close" size={20} color={colorResource.textSecondary} />
                        </TouchableOpacity>
                    )}
            </View>
        </View>
    )
}

const innerStyles = StyleSheet.create({
    prefixText: {
        fontSize: 12,
        fontFamily: fontFamilies.Roboto.regular,
        color: '#131313'
    },
    textInput: {
        borderRadius: 20,
        backgroundColor: '#F2F2F2',
        paddingLeft: 16,
        fontSize: 18,
        height: 44,
        fontFamily: fontFamilies.Roboto.regular,
        borderColor: "#F8F8F8",
        borderWidth: 1,
    },
    clearButton: {
        position: 'absolute',
        right: 16,
        top: 0,
        bottom: 0,
        justifyContent: 'center'
    },
    inputContainer: {
        position: "relative",
    },
})

export default CustomTextField;
