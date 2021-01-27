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

interface LocationProps {}

export const Location: React.FC<LocationProps> = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>Location Screen</Text>
      <Button title='Go back' onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
