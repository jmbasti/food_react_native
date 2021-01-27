import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../config/colors";

interface AddressProps {}

export const Address: React.FC<AddressProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.containerStyle}
      onPress={() => navigation.navigate("Location")}
    >
      <MaterialIcons name='location-on' size={24} color={colors.primary} />
      <Text style={styles.textStyles}>123 Smith Rd</Text>
      <MaterialIcons
        name='keyboard-arrow-down'
        size={24}
        color={colors.primary}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textStyles: {
    color: "#918f8f",
  },
});
