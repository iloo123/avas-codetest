// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Screens
import TaxiScreen from "@screens/Taxi"
import ProfileScreen from '@screens/Profile';
import HomeScreen from '@screens/Home';
import LoyaltyScreen from '@screens/Loyalty';

const Stack = createNativeStackNavigator();


function RootStack() {
  return (
    <Stack.Navigator
      headerMode='none'
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Taxi" component={TaxiScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Loyalty" component={LoyaltyScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}