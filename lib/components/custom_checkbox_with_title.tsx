import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colorResource } from '../utils/color_resource';
import BouncyCheckbox from 'react-native-bouncy-checkbox';





type CheckBoxTitleProps = {
    onPress?: (isChecked: boolean) => void
    title: string
}
const CustomCheckboxWithTitle: React.FC<CheckBoxTitleProps> = (props) => {
    const innerStyles = StyleSheet.create({
        container: {
            flexDirection: 'row',
        },
    });
    const [checked, setChecked] = useState(false);
    return (
        <View style={innerStyles.container}>
            <BouncyCheckbox onPress={(isChecked: boolean) => {
                setChecked(isChecked)
                props.onPress?.(isChecked)
            }}
                fillColor={colorResource.primary}
                unFillColor="#FFFFFF"
                iconStyle={{
                    borderColor: colorResource.primary, height: 18, width: 18, borderRadius: 2, borderWidth: 2,
                    margin: 0,
                    padding: 0,
                }}
                innerIconStyle={{
                    borderColor: colorResource.primary, borderRadius: 2, height: 18, width: 18,
                    margin: 0,
                    padding: 0,
                }}
                textStyle={{ color: colorResource.textPrimary }}
                textComponent={
                    <Text style={{ color: colorResource.textPrimary, marginLeft: 4 }}>{props.title}</Text>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({})

export default CustomCheckboxWithTitle;