import { Text, TouchableOpacity, Alert, Image, View } from 'react-native';
import Chevron from 'react-native-vector-icons/Feather'

function DriverCard(props) {
  return (
   <TouchableOpacity 
        className="flex flex-row justify-between items-center py-4 border-[1px] border-gray-200 pl-3  rounded-md" 
        onPress={() => {}}
  >

        <View className="flex flex-row items-center">
            <Image source={require('@images/tom.webp')} resizeMode='cover' className="h-14 w-14 rounded-full"  />
            <View className="pl-3">
                <Text className="opacity-80 text-md text-black mr-2">{props.name}</Text>
                <Text className="text-xs text-slate-400 mt-1">{props.level}</Text>
            </View>
        </View>

        {(props.level === 'Ultimate') ? 
            <Image source={require('@images/ultimate.png')} resizeMode='contain' className="h-14 w-14 rounded-full"  />
            :
         (props.level === 'Gold') ?   
           <Image source={require('@images/gold.png')} resizeMode='contain' className="h-14 w-14"  />
            :
           <Image source={require('@images/platinum.png')} resizeMode='contain' className="h-14 w-14"  />
        }
   </TouchableOpacity>
  );
}


export default DriverCard