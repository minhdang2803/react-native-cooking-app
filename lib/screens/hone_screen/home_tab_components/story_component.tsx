import React from 'react';
import { FlatList, Image, ScrollView, StyleSheet, View } from 'react-native';
import { colorResource } from '../../../utils/color_resource';
import Icon from 'react-native-vector-icons/MaterialIcons';


type StoryComponentProp = {
    user: AuthorModel[]
}

const StoryComponent: React.FC<StoryComponentProp> = (prop) => {
    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View key={"Spacer1"} style={{ width: 16 }} />
            <View
                key={"add function"}
                style={{
                    backgroundColor: colorResource.primary,
                    borderRadius: 360, width: 84, height: 84,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 12,
                }}>
                <View style={{
                    backgroundColor: "white", opacity: 0.15, borderRadius: 360,
                    position: 'absolute', left: 20, right: 20, bottom: 20, top: 20,
                }} />
                <Icon
                    name='add'
                    size={40}
                    style={{
                        color: colorResource.textPrimary,
                        position: 'absolute',
                    }}>
                </Icon>
            </View>
            {prop.user.map((item, index) => {
                
                return (<View
                    key={`story_${index}`}
                    style={{
                        borderRadius: 360,
                        padding: 4,
                        borderColor: colorResource.primary,
                        borderWidth: 1,
                        marginRight: index != prop.user.length - 1 ? 12 : null
                    }}>
                    <Image
                        source={item.imageUrl}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 360,
                            padding: 5,
                        }}
                    /></View>)
            })}

        </ScrollView>
    );
}

const styles = StyleSheet.create({})

export default StoryComponent;
