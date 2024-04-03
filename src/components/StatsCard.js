import { Text, View, Image } from 'react-native';
import InfoIcon from 'react-native-vector-icons/MaterialIcons'

function StatsCard(props) {
  return (
    <View className="bg-slate-100 rounded-2xl px-5 py-5 mt-3">
      <View className=" flex flex-row items-start">
        <View className="flex flex-row items-center">
            <Image source={require('@images/platinum.png')} resizeMode='cover' className="h-14 w-14 rounded-full overflow-clip"  />
            <View className="pl-3">
                <View className="flex flex-row items-center">
                    <Text className="opacity-80 font-semibold text-slate-600 mr-2">Your level</Text>
                    <InfoIcon name="info-outline" color={'rgba(0,0,0, .20)'} size={21} />
                </View>
                <Text className="text-2xl text-black font-semibold">{props.level}</Text>
            </View>
        </View>
      </View>
      <View className="mt-4 flex flex-row items-center justify-center space-x-2" >
       <View className="bg-white basis-1/3 px-2 pt-1 pb-3 rounded-lg">
          <Text className="text-xs text-slate-400 mt-1 mb-1 opacity-80">Quarterly rides</Text>
          <Text className="text-md">98</Text>
       </View>
       <View className="bg-white basis-1/3 px-2 pt-1 pb-3 rounded-lg">
          <Text className="text-xs  text-slate-400 mt-1 mb-1 opacity-80">Cancellation</Text>
          <Text className="text-md">7%</Text>
       </View>
       <View className="bg-white basis-1/3 px-2 pt-1 pb-3 rounded-lg">
          <Text className="text-xs  text-slate-400 mt-1 mb-1 opacity-80">Driver Rating</Text>
          <Text className="text-md">4.97</Text>
       </View>
      </View>
    </View>
    
     
  );
}

export default StatsCard