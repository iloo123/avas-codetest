import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackArrowIcon from 'react-native-vector-icons/Ionicons'

function Header(props) {
  return (
    <View className="flex flex-row items-center justify-between bg-white px-5 pb-3">
        <TouchableOpacity  
            className="bg-white w-12 h-12 justify-center items-center rounded-full"
            style={styles.buttonShadow}
            onPress={() => props.nav.goBack()} 
        >
            <BackArrowIcon name="arrow-back-sharp" color={'black'} size={24} />
        </TouchableOpacity>
        <Text className="text-lg font-semibold">
          {props.title}
        </Text>
        <View className="w-12 h-12">
          { /* Right Nav Button can be implemented here */ }
        </View>
    </View>
  );
}

styles = StyleSheet.create({
  buttonShadow: {
    shadowColor: "rgba(0,0,0,.20)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 2,
  }
})

export default Header