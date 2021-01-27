import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

interface PickupProps {}

export const Pickup: React.FC<PickupProps> = ({}) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>Pickup Screen</Text>
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
