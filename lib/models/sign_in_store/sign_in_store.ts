import { create } from "zustand";
interface SignInViewState{
    email: string,
    password: string,
    isRememberMe: boolean
    onTapSignIn: ( email: string,
    password: string,
        isRememberMe: boolean) => void
    onSetPassword: (password: string)=>void,
onSetEmail: (email: string)=>void,
onSetIsRememberMe: (isRememberMe: boolean)=>void,
}

const useSignInViewStore = create<SignInViewState>((set) => ({
    email: '',
    password: '',
    isRememberMe: false,
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
    } 
}))



export default useSignInViewStore