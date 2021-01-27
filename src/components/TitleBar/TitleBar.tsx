import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
//
import { Octicons } from "@expo/vector-icons";
//

import { colors } from "../../config/colors";
import { Address } from "./Address";

interface TitleBarProps {}

export const TitleBar: React.FC<TitleBarProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerStyle}>
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => navigation.navigate("Profile")}
      >
        <Octicons name='person' size={24} color={colors.primary} />
      </TouchableOpacity>
      <Address />
      <TouchableOpacity
        style={styles.iconStyle}
        onPress={() => navigation.navigate("Settings")}
      >
        <Octicons name='settings' size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconStyle: {
    height: 32,
    width: 32,
    borderRadius: 16,
    borderColor: `${colors.primary}`,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
