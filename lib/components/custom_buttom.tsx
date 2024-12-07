import React from 'react';
import { ActivityIndicator, ActivityIndicatorComponent, DimensionValue, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colorResource } from '../utils/color_resource';
import { fontFamilies } from '../utils/font';

type CustomButtomProp = {
    title: string
    prefixIcon?: any
    sufixIcon?: any
    width?: DimensionValue,
    height?: DimensionValue
    backgroundColor?: string
    isPrefixIcon?: boolean,
    isSufixIcon?: boolean,
    isLoading?: boolean,
    onPress?: () => void,
}

const CustomButtom: React.FC<CustomButtomProp> = (prop) => {
    const LoadingDoneContent = () => {
        return (<View
            style={{
                justifyContent: "center",
                alignItems: 'center',
                flexDirection: 'row'
            }}>
            {
                prop.isPrefixIcon ?
                    <Image
                        source={prop.prefixIcon}
                        style={{ width: 18, height: 18, marginRight: 4 }}
                        resizeMode='contain'
                    />
                    : <View />
            }
            <Text
                style={{
                    fontWeight: "600",
                    fontFamily: fontFamilies.Roboto.bold,
                    fontSize: 18,

                }}
            >{prop.title}</Text>
            {
                prop.isSufixIcon ?
                    <Image
                        source={prop.sufixIcon}
                        style={{ width: 18, height: 18, marginLeft: 4 }}
                        resizeMode='contain'
                    />
                    : <View />
            }
        </View>)
    }
    return (
        <TouchableOpacity
            onPress={prop.onPress}>
            <View style={{
                backgroundColor: prop.backgroundColor ?? colorResource.primary,
                justifyContent: "center",
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 24,
                width: prop.width,
                height: prop.height,
                flexDirection: 'row'
            }}>
                {prop.isLoading === true ? <ActivityIndicator size="small" color="black" style={{
                    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
                }} /> : <LoadingDoneContent />}

            </View>
        </TouchableOpacity>
    );
}

export default CustomButtom;
