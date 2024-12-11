import { StyleProp, TextStyle } from "react-native";
import { fontFamilies } from "./font";
import { colorResource } from "./color_resource";

export const fontResource  = {
    headlineLarge: {
        
        fontSize: 40,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "bold",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    headlineMedium: {
        
        fontSize: 32,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "bold",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    headlineSmall: {
        
        fontSize: 24,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "bold",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    titleLarge: {
        fontSize: 24,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    titleMedium: {
        
        fontSize: 20,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    titleSmall: {
        
        fontSize: 18,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    titleExtraSmall: {
        
        fontSize: 16,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    labelLarge: {
        
        fontSize: 18,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    labelMedium: {
        
        fontSize: 16,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    labelSmall: {
        
        fontSize: 12,
        fontFamily: fontFamilies.Roboto.bold,
        fontWeight: "600",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    bodyTextExtraLarge: {
        
        fontSize: 20,
        fontFamily: fontFamilies.Roboto.regular,
        fontWeight: "400",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    bodyTextLarge: {
        
        fontSize: 18,
        fontFamily: fontFamilies.Roboto.regular,
        fontWeight: "400",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    bodyTextMedium: {
        
        fontSize: 16,
        fontFamily: fontFamilies.Roboto.regular,
        fontWeight: "400",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
    bodyTextSmall: {
        
        fontSize: 14,
        fontFamily: fontFamilies.Roboto.regular,
        fontWeight: "400",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
        bodyTextExtraSmall: {
        
        fontSize: 12,
        fontFamily: fontFamilies.Roboto.regular,
        fontWeight: "400",
        color: colorResource.textPrimary,
    } as StyleProp<TextStyle>,
}