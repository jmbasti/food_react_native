import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import { Octicons } from "@expo/vector-icons";
// Screens
import { MainStack } from "./src/navigator/MainStack";
import { Search } from "./src/screens/Search";
import { Pickup } from "./src/screens/Pickup";
import { Orders } from "./src/screens/Orders";
import { FoodHub } from "./src/screens/FoobHub";
// CONFIG
import { colors } from "./src/config/colors";
//  TYPES
import { TabParamList } from "./src/types/TabScreenProps";

const Tab = createBottomTabNavigator<TabParamList>();

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Search") {
              iconName = "search";
            } else if (route.name === "Pick Up") {
              iconName = "briefcase";
            } else if (route.name === "Orders") {
              iconName = "clippy";
            } else if (route.name === "Food Hub") {
              iconName = "request-changes";
            }

            return (
              <Octicons
                name={iconName}
                size={30}
                color={focused ? colors.activeColor : colors.inActiveColor}
              />
            );
          },
        })}
      >
        <Tab.Screen name='Home' component={MainStack}></Tab.Screen>
        <Tab.Screen name='Search' component={Search}></Tab.Screen>
        <Tab.Screen name='Pick Up' component={Pickup}></Tab.Screen>
        <Tab.Screen name='Orders' component={Orders}></Tab.Screen>
        <Tab.Screen name='Food Hub' component={FoodHub}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};
