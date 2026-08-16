import {View, Text} from 'react-native'
import React from 'react'
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";

//this is allowing pass the areview styling from natrivewind
/*
 we have to do this because the SafeAreaView from react-native-safe-area-context is a third party
 is a thirdparty component, and nativewind needs this styled wrapper to enable classname support on it
 */
const SafeAreaView = styled(RNSafeAreaView);

const Insights = () => {
    return (
        <SafeAreaView className="flex-1 bg-background p-5">
            <Text>
                Insights
            </Text>
        </SafeAreaView>
    )
}
export default Insights
