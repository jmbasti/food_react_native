import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

interface FoodHubProps {}

export const FoodHub: React.FC<FoodHubProps> = ({}) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>FoodHub Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
