import {View, Text} from 'react-native'
import React from 'react'
import {Link} from "expo-router";

const SignUp = () => {
    return (
        <View>
            <Text>Signup</Text>
            <Link href="/(auth)/sign-in">Login</Link>
            <Link href="/">Go to Home</Link>
        </View>
    )
}
export default SignUp
