import { Text, TouchableOpacity, Alert } from 'react-native';
import Chevron from 'react-native-vector-icons/Feather'

function ListItem(props) {
  return (
   <TouchableOpacity 
        className="flex flex-row justify-between items-center py-4" 
        onPress={() => Alert.alert(props.emoji)}
        style={{borderBottomWidth: props.borderEnabled ? .5 : 0, borderBottomColor: 'rgba(0,0,0,.10)'}}
  >
        <Text className="text-md text-black">{props.title}</Text>
        <Chevron name="chevron-right" color={'rgba(0,0,0,.30)'} size={24} />
   </TouchableOpacity>
  );
}


export default ListItem