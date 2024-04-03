import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Header from '@components/Header';
import ProfileCard from '@components/ProfileCard';
import StatsCard from '@components/StatsCard';
import ListItem from '@components/ListItem';

function ProfileScreen(props) {

  return (
    <SafeAreaView contentContainerStyle={{flex: 1}} className="flex-1 bg-white">
        <Header title={'Profile'} nav={props.navigation} />
        <ScrollView>
            <View className="bg-slate-100">

                <View className="bg-white pt-3 rounded-b-3xl pb-6 px-5">
                    <ProfileCard name={"Maumoon Abdul Gayyoom"} status={'active'} />
                    <StatsCard name={"Maumoon Abdul Gayyoom"} level={'Member'} />
                </View>

                <View className="bg-white px-5 rounded-t-3xl mt-[10px] pt-6">
                    <ListItem title="My Company" emoji={"😱"} borderEnabled={true} /> 
                    <ListItem title="My Vehicles" emoji={"😱"} borderEnabled={true} />
                    <ListItem title="Driver License" emoji={"😱"} borderEnabled={true} />
                    <ListItem title="Account" emoji={"😱"} borderEnabled={true} />
                    <ListItem title="About" emoji={"😱"} borderEnabled={true} />  
                </View>
            </View>
        </ScrollView>
    </SafeAreaView> 
  );
}

export default ProfileScreen