import React, { useRef, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RecipeArticle } from '../../../models/home_screen_store/model/recipe_article_model';
import { fontFamilies } from '../../../utils/font';
import { fontResource } from '../../../utils/font_resource';
import { colorResource } from '../../../utils/color_resource';




type RecipeComponentProp = {
    recipeArticle: RecipeArticle,
    onPress: () => void,

}

const RecipeComponent: React.FC<RecipeComponentProp> = (prop) => {
    const flatlistRef = useRef<FlatList>(null)
    const [isBookmark, setBookmark] = useState(false)
    const [isLiked, setLike] = useState(false)

    const AuthorComponent = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 12,
                }}>
                <Image
                    source={prop.recipeArticle.author.imageUrl}
                    style={{
                        height: 20, width: 20,
                        shadowColor: "#000000",
                        shadowOpacity: 0.25,
                        shadowOffset: { width: 0, height: 4 },
                        shadowRadius: 0,
                        borderRadius: 360
                    }}
                />
                <View style={{ width: 4 }}></View>
                <Text style={fontResource.labelMedium}>{prop.recipeArticle.author.name}</Text>
                <View style={{ flex: 1 }}></View>
                <TouchableOpacity onPress={() => { setLike(!isLiked) }}>
                    <Image
                        source={isLiked ? require("../../../../assets/ic_like.png") : require("../../../../assets/ic_like_active.png")}
                        style={{ height: 20, width: 20 }}
                    />
                </TouchableOpacity>
            </View>)
    }
    const TitleComponent = () => {
        return (
            <View
                style={{ flex: 1, marginHorizontal: 12, }}>
                <Text
                    numberOfLines={2} style={[fontResource.titleLarge, { textAlign: 'left' }]}>{prop.recipeArticle.title}</Text>
            </View>
        )
    }
    const TagListComponent = () => (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 12,
        }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <ScrollView
                    horizontal
                    style={{ paddingLeft: 12 }}
                    showsHorizontalScrollIndicator={false}
                >
                    {prop.recipeArticle.tag.map((item, index) => {
                        return (<View
                            key={`item_${index}`}
                            style={{
                                backgroundColor: colorResource.primary,
                                borderRadius: 25,
                                paddingHorizontal: 8,
                                paddingVertical: 4,
                                marginRight: index != prop.recipeArticle.tag.length - 1 ? 8 : null

                            }}>
                            <Text
                                numberOfLines={1}
                                style={fontResource.bodyTextExtraSmall}>#{item}</Text>
                        </View>);
                    })}
                </ScrollView>
            </View>
            <View style={{ width: 10 }}></View>
            <TouchableOpacity onPress={() => setBookmark(!isBookmark)}>
                <Image
                    source={isBookmark ? require("../../../../assets/ic_bookmark_active.png") :
                        require("../../../../assets/ic_bookmark.png")}
                    style={{ height: 20, width: 20 }}
                    resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )

    const DescriptionComponent = () => {
        return (
            prop.recipeArticle.description != null ?
                <View style={{ marginHorizontal: 12, marginTop: 8 }}>
                    <Text
                        numberOfLines={3}
                        style={fontResource.bodyTextSmall}
                    >
                        {prop.recipeArticle.description}
                    </Text>
                </View>
                : <View></View>
        )
    }


    return (
        <View style={{
            width: "100%",
            // height: "100%",
            borderRadius: 20,
            backgroundColor: colorResource.border,
            alignItems: 'flex-start',
            shadowOffset: { width: 0, height: 4 },
            shadowColor: "#000000",
            shadowOpacity: 0.25,
            justifyContent: 'flex-start',
            alignSelf: 'center',

        }}>
            <Image
                source={prop.recipeArticle.imageUrl}
                style={{
                    height: 202,
                    width: "100%",
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                }}
                resizeMode='cover'
            />
            <View style={{
                position: 'absolute',
                top: 12, left: 12,
                paddingHorizontal: 8,
                paddingVertical: 4,
                borderRadius: 25,
                backgroundColor: colorResource.border,
            }} >
                <Text >
                    {prop.recipeArticle.cookDuration}
                </Text>
            </View>
            <View style={{ height: 12 }}></View>
            <TagListComponent />
            <View style={{ height: 8 }}></View>
            <TitleComponent />

            <DescriptionComponent />
            <View style={{ height: 8 }}></View>
            <AuthorComponent />
            <View style={{ height: 12 }}></View>
        </View>
    );
}

export default RecipeComponent;
