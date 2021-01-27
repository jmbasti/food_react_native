import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>Profile Screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
