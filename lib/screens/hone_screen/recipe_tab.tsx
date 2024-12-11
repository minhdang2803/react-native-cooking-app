import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorResource } from '../../utils/color_resource';



const { width, height } = Dimensions.get("window")
type ProfileTapProps = {
    navigation: any
}
const RecipeTab: React.FC<ProfileTapProps> = ({ navigation }) => {
    return (
        <View style={styles.baseViewStyle}>
            <Text>RecipeTab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    baseViewStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colorResource.background,
    }
})

export default RecipeTab;
