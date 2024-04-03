import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';


function HomeScreen(props) {

  return (
    <ScrollView contentContainerStyle={{flex: 1}} className="flex-1 bg-white">
        <View className="bg-slate-100 justify-center items-center h-screen space-y-4 px-5">
            <Text className="font-semibold">Please navigate to following screens</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Taxi")} className="bg-white pt-3 rounded-3xl p-5">
                <Text>1. Taxi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Profile")} className="bg-white pt-3 rounded-3xl p-5">
                <Text>2. Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Loyalty")} className="bg-white pt-3 rounded-3xl p-5">
                <Text>3. Loyalty</Text>
            </TouchableOpacity>
        </View>
    </ScrollView> 
  );
}

export default HomeScreen