import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

interface OrdersProps {}

export const Orders: React.FC<OrdersProps> = ({}) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>Orders Screen</Text>
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
