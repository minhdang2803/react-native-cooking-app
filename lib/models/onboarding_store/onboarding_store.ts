import { create } from "zustand";
import OnboardingScreen from "../../screens/onboarding_screen/onboarding_screen";

interface OnboardingScreenState{
    pageIndex: number,
    onSetIndex: (index: number) => void,
}



const useOnboardingScreenStore = create<OnboardingScreenState>((set) => ({
    pageIndex: 0,
    onSetIndex: (index: number) => {
        set((state)=>({pageIndex:index}))
    }
}))

export default useOnboardingScreenStore;
