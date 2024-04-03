import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TextInput } from 'react-native';
import Header from '@components/Header';
import DotCircle from '@components/DotCirlce';
import ListItem from '@components/ListItem';
import ClientCard from '@components/ClientCard';
import ProfileCard from '@components/ProfileCard';
import StatsCard from '@components/StatsCard';

function TaxiScreen(props) {

  const [start, onChangeStart] = React.useState("ADK Hospital, Henveiru");
  const [finish, onChangeFinish] = React.useState('Alivaage, Maafannu');

  return (
    <SafeAreaView contentContainerStyle={{flex: 1}} className="flex-1 bg-white">
        <Header title={'Taxi'} nav={props.navigation} />
        <ScrollView>
            <View className="bg-slate-100">

                <View className="bg-white px-5 rounded-b-3xl pb-6">
                    <Text className="font-semibold text-lg text-gray-400 text-center mt-2">Instant Taxi Order</Text>
                    <Text className="font-semibold text-2xl text-black text-center mt-2">$36.20</Text>
                    <View className="bg-slate-200 h-[200px] rounded-2xl mt-4" />
                </View>

                <View className="bg-white px-5 py-6  mt-[10px] rounded-t-3xl flex flex-row ">
                    <View className=" basis-1/3 ">
                        <Image source={require('@images/taxi.png')} className="w-10 h-7" resizeMode='contain' />
                        <Text className="text-md">Taxi order</Text>
                    </View>
                    <View className="basis-1/3 border-r-[1px] border-l-[1px] border-gray-200 pl-3 flex justify-start">
                        <Text className="text-xs  text-slate-400 mt-1 mb-2 opacity-80">Time</Text>
                        <Text className="text-md">16:30 PM</Text>
                    </View>
                    <View className="basis-1/3 pl-3">
                        <Text className="text-xs  text-slate-400 mt-1 mb-2 opacity-80">Distance</Text>
                        <Text className="text-md">3 km</Text>
                    </View>
                </View>

                <View className="px-5 bg-white pt-2 pb-7">
                    <View className="flex flex-row items-center  border-b-[1px] border-gray-200 pb-3">
                        <DotCircle bg_color={'green'} />
                        <View className="pl-5">
                            <Text className="opacity-80 text-slate-400 text-xs">Start address</Text>
                            <TextInput 
                                onChangeText={onChangeStart} 
                                value={start} 
                                className="text-md"
                            />
                        </View>
                    </View>
                     <View className="flex flex-row items-center border-b-[1px] border-gray-200 pb-3 pt-3">
                        <DotCircle bg_color={'black'} />
                        <View className="pl-5">
                            <Text className="opacity-80 text-slate-400 text-xs">Finish address</Text>
                            <TextInput 
                                onChangeText={onChangeFinish} 
                                value={finish} 
                                className="text-md"
                            />
                        </View>
                    </View>
                </View>

                <ClientCard name={"Aishath Dua"} />


                <View className="px-5 bg-white pt-3 pb-6">
                    <ListItem title="Report an Issue" emoji={"😱"} />
                </View>

            </View>
        </ScrollView>
    </SafeAreaView> 
  );
}

export default TaxiScreen