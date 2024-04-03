import { Text, View, Image } from 'react-native';

function ProfileCard(props) {
  return (
    <View className=" bg-white flex flex-row items-start">

        <Image source={require('@images/mau.jpg')} resizeMode='cover' className="h-16 w-16 rounded-full overflow-hidden"  />
        <View className="pl-4 flex items-start">
            <View>
                <Text className="text-lg text-black font-semibold pb-1 font-mono">{props.name}</Text>
            </View>
            <View className="bg-slate-100 rounded-full px-2">
                <Text className="text-xs p-1 rounded-full text-black">Subscription is {props.status}</Text>
            </View>
        </View>
      
    </View>
     
  );
}

export default ProfileCard