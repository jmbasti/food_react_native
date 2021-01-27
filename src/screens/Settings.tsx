import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface SettingsProps {}

export const Settings: React.FC<SettingsProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>Settings Screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
