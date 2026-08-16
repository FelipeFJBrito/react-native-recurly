import "@/global.css"
import { Text } from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

//this is allowing pass the areview styling from natrivewind
/*
 we have to do this because the SafeAreaView from react-native-safe-area-context is a third party
 is a thirdparty component, and nativewind needs this styled wrapper to enable classname support on it
 */
const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text className="text-5xl text-blue-500 font-sans-extrabold">Home</Text>


            <Link href="/onboarding" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to onboarding</Link>
            <Link href="/(auth)/sign-in" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to sign-in </Link>
            <Link href="/(auth)/sign-up" className="mt-4 font-sans-bold rounded bg-primary text-white p-4">Go to sign-up</Link>


        </SafeAreaView>
    );
}