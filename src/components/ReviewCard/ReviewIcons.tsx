import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ReviewIconsProps {}

export const ReviewIcons: React.FC<ReviewIconsProps> = ({}) => {
  return (
    <>
      <View style={styles.truckStyle}>
        <MaterialCommunityIcons name='truck-fast' size={24} color='#777' />
        <Text style={styles.truckTextStyle}>$1.50</Text>
      </View>
      <View style={styles.clockStyle}>
        <MaterialCommunityIcons name='clock-fast' size={24} color='#777' />
        <Text style={styles.clockTextStyle}>60 min</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  truckStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  truckTextStyle: {
    color: "#777",
    marginLeft: 5,
  },
  clockStyle: { flexDirection: "row", alignItems: "center" },
  clockTextStyle: {
    color: "#777",
    marginLeft: 5,
  },
});
