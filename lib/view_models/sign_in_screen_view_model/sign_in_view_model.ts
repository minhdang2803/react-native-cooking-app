import { useRef } from "react"
import useSignInViewStore from "../../models/sign_in_store/sign_in_store"
import { TextInput } from "react-native"

export const SignInViewModel = () => {
    const state = useSignInViewStore((state) => state)    
    const emailRef = useRef<TextInput>(null);
    const passwordRef = useRef<TextInput>(null);

    const onTapSignInWithEmailPassword = () => {
        console.log(`email: ${state.email}, password: ${state.password}, isRememberMe: ${state.isRememberMe}`)
    }

    return {state, onTapSignInWithEmailPassword, emailRef, passwordRef}
}