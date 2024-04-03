import { View } from 'react-native';

function DotCircle(props) {
  return (
   <View className="flex justify-center items-center w-4 h-4 opacity-70 rounded-full" style={{ backgroundColor: props.bg_color }}>
       <View className="w-2 h-2 bg-white rounded-full" />
   </View>
  );
}

export default DotCircle