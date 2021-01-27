import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StatusBar, SafeAreaView } from "react-native";

import { Location } from "../screens/Location";
import { HomeStack } from "./HomeStack";

const Stack = createStackNavigator();

interface MainStackProps {}

export const MainStack: React.FC<MainStackProps> = ({}) => {
  return (
    <Stack.Navigator mode='modal' initialRouteName='Home' headerMode='none'>
      <Stack.Screen
        name='Home'
        component={HomeStack}
        options={{ header: () => null }}
      ></Stack.Screen>
      <Stack.Screen name='Location' component={Location}></Stack.Screen>
    </Stack.Navigator>
  );
};
