import React from 'react';
import { DimensionValue, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colorResource } from '../utils/color_resource';
import { fontFamilies } from '../font';

type CustomButtomProp = {
    title: string
    prefixIcon?: any
    sufixIcon?: any
    width?: DimensionValue,
    height?: DimensionValue
    backgroundColor?: string
    isPrefixIcon?: boolean,
    isSufixIcon?: boolean,
    onPress?: () => void,
}

const CustomButtom: React.FC<CustomButtomProp> = (prop) => {
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
            </View>
        </TouchableOpacity>
    );
}

export default CustomButtom;
