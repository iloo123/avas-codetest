import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Header from '@components/Header';
import StatsCard from '@components/StatsCard';
import ListItem from '@components/ListItem';
import DriverCard from '@components/DriverCard';

function LoyaltyScreen(props) {

  return (
    <SafeAreaView contentContainerStyle={{flex: 1}} className="flex-1 bg-white">
        <Header title={'Loyalty'} nav={props.navigation} />
        <ScrollView>
            <View className="bg-slate-100">

                <View className="bg-white pt-3 rounded-b-3xl pb-6 px-5">
                    <StatsCard name={"Maumoon Abdul Gayyoom"} level={'Member'} />
                </View>

                <View className="bg-white px-5 rounded-t-3xl mt-[10px] pt-2">
                    <ListItem title="About the program" emoji={"😱"} borderEnabled={true} /> 
                    <ListItem title="View level benefits" emoji={"😱"} borderEnabled={true} />

                    <Text className="text-lg text-black font-semibold pb-1 mt-8 mb-3">Top level drivers</Text>
                    <DriverCard name="Tom Nashoozu" level={"Ultimate"} />
                </View>
            </View>
        </ScrollView>
    </SafeAreaView> 
  );
}

export default LoyaltyScreen