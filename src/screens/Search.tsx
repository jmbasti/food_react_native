import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

interface SearchProps {}

export const Search: React.FC<SearchProps> = ({}) => {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <Text>Search Screen</Text>
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
