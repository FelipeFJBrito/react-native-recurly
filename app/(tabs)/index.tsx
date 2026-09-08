import "@/global.css"
import {FlatList, Image, Text, View} from "react-native";
import {Link} from "expo-router";
import {SafeAreaView as RNSafeAreaView} from "react-native-safe-area-context";
import { styled } from "nativewind";
import images from "@/constants/images";
import {HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS} from "@/constants/data";
import {icons} from '@/constants/icons';
import {formatCurrency} from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import SubscriptionCard from "@/components/SubscriptionCard";
import {useState} from "react";

//this is allowing pass the areview styling from natrivewind
/*
 we have to do this because the SafeAreaView from react-native-safe-area-context is a third party
 is a thirdparty component, and nativewind needs this styled wrapper to enable classname support on it
 */
const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
    const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<string | null>(null);
    return (
        <SafeAreaView className="flex-1 bg-background p-5">

                <FlatList
                    ListHeaderComponent={() => (
                        <>
                            <View className="home-header">
                                <View className="home-user">
                                    <Image source={images.avatar} className="home-avatar" />
                                    <Text className="home-user-name">{HOME_USER.name}</Text>
                                </View>

                                <Image source={icons.add} className="home-add-icon"/>
                            </View>

                            <View className="home-balance-card">
                                <Text className="home-balance-label">Balance</Text>

                                <View className="home-balance-row">
                                    <Text className="home-balance-amount">
                                        {formatCurrency(HOME_BALANCE.amount)}
                                    </Text>
                                    <Text className="home-balance-date">
                                        {dayjs(HOME_BALANCE.nextRenewalDate).format('MM/DD')}
                                    </Text>
                                </View>
                            </View>

                            <View className="mb-5">
                                <ListHeading title="Upcoming"/>

                                <FlatList
                                    data={UPCOMING_SUBSCRIPTIONS}
                                    renderItem={({item}) => (
                                        <UpcomingSubscriptionCard {...item}/>
                                    )}
                                    keyExtractor={(item) => item.id}
                                    horizontal
                                    ListEmptyComponent={
                                        <Text className="home-empty-state">
                                            No Upcoming Subscriptions yet
                                        </Text>
                                    }
                                />
                            </View>

                            <ListHeading title="All Subscription"/>
                        </>
                    )}
                    data={HOME_SUBSCRIPTIONS}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <SubscriptionCard
                            {...item}
                            expanded={expandedSubscriptionId === item.id}
                            onPress={() => setExpandedSubscriptionId((currentId) =>
                                (currentId === item.id ? null : item.id))}
                        />
                    )}
                    extraData={expandedSubscriptionId}
                    ItemSeparatorComponent={() => <View className="h-2"/>}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={
                        <Text className="home-empty-state">
                            No Subscriptions yet.
                        </Text>
                    }
                    contentContainerClassName="pb-25"
                />
        </SafeAreaView>
    );
}