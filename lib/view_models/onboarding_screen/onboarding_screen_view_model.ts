import { Animated, Dimensions, FlatList, ImageSourcePropType } from 'react-native';
import useOnboardingScreenStore from '../../models/onboarding_store/onboarding_store';
import { routesName } from '../../screens/routes';


export const OnboardingScreenViewModel = () => {
    const imageData: ImageSourcePropType[] = [
    require("../../../assets/onboarding_first.png"),
    require("../../../assets/onboarding_second.png"),
    require("../../../assets/onboarding_third.png")
]
    const state = useOnboardingScreenStore((state) => state)
    const onTapNext = (index: number,ref:React.RefObject<FlatList<any>>, navigation: any) => {
        if (index < 2) {
            ref.current?.scrollToIndex({animated:true, index:index+1})
            state.onSetIndex(index+1)
        }
        else {
            navigation.navigate(routesName.welcomeScreen)
        }
    }

    const onSetIndex = (index: number) => {
        state.onSetIndex(index);
    }
    return{state, onTapNext, onSetIndex, imageData}
}

