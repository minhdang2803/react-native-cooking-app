import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontResource } from '../../../utils/font_resource';
import { fontFamilies } from '../../../utils/font';
import { colorResource } from '../../../utils/color_resource';



type SectionTitleComponentProp = {
    title: string
    actionTitle?: string,
    onPress?: () => void
}
const SectionTitleComponent: React.FC<SectionTitleComponentProp> = (prop) => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: "100%",
            paddingHorizontal: 16
        }}>
            <Text style={fontResource.titleSmall
            }>{prop.title}</Text>
            <TouchableOpacity onPress={prop.onPress}>
                <Text style={fontResource.labelLarge}>{prop.actionTitle}</Text>
            </TouchableOpacity>
        </View >
    );
}
export default SectionTitleComponent;
