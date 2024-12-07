import { create } from "zustand";
interface SignInViewState{
    email: string,
    password: string,
    isRememberMe: boolean,
    isLoading: boolean
    isLoadingGoogle: boolean,
    isLoadingApple:boolean,
    setLoading: (isLoading :boolean)=>void,
    setLoadingGoogle: (isLoading :boolean)=>void,
    setLoadingApple: (isLoading :boolean)=>void,
    onTapSignIn: (
        email: string,
        password: string,
        isRememberMe: boolean,
    ) => void,
    onSetPassword: (password: string)=>void,
    onSetEmail: (email: string)=>void,
    onSetIsRememberMe: (isRememberMe: boolean) => void,
    onResetState: () => void,
}

export const useSignInViewStore = create<SignInViewState>((set) => ({
    email: '',
    password: '',
    isRememberMe: false,
    isLoading: false,
    isLoadingApple: false,
    isLoadingGoogle:false,
    setLoading: (isLoading: boolean) => {
        set((state)=>({isLoading : isLoading}))
    },
    setLoadingGoogle: (isLoading: boolean) => {
        set((state)=>({isLoadingGoogle : isLoading}))
    },
    setLoadingApple: (isLoading: boolean) => {
        set((state)=>({isLoadingApple : isLoading}))
    },
    onSetPassword: (password: string) => {
        set((state) => ({password:password}))
    },
    onSetEmail: (email: string) => {
        set((state) => ({email:email}))
    },
    onSetIsRememberMe: (isRememberMe: boolean) => {
        set((state) => ({isRememberMe:isRememberMe}))
    },
    onTapSignIn: (email: string, password: string, isRememberMe: boolean) => {
        set((state) => ({
            email: email,
            password: password,
            isRememberMe: isRememberMe,
        }))
    },
    onResetState: () => {
        set((state) => ({ email:'', password:'', isRememberMe:false}))
    }
}))