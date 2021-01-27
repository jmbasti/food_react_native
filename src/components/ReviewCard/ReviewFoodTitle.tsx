import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ReviewFoodTitleProps {}

export const ReviewFoodTitle: React.FC<ReviewFoodTitleProps> = ({}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={{ color: "white" }}>Special Chicken Rice</Text>
      <MaterialCommunityIcons
        name='repeat'
        size={24}
        color='white'
        style={{ marginLeft: 10 }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    position: "absolute",
    flexDirection: "row",
    right: 15,
    top: 150,
  },
});
