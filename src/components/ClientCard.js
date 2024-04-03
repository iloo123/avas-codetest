import { Text, View, Image } from 'react-native';

function ClientCard(props) {
  return (
      <View className="px-5 bg-white flex flex-row items-center">
          <Image source={require('@images/dua.jpeg')} resizeMode='cover' className="h-12 w-12 rounded-full overflow-hidden"  />
          <View className="pl-5">
              <Text className="text-md pb-1 text-black">{props.name}</Text>
              <Text className="opacity-80 text-slate-400 text-xs">Client</Text>
          </View>
      </View>
  );
}

export default ClientCard