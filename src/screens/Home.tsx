import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { StackNavProps } from "../types/StackScreenProps";
//
import { TitleBar } from "../components/TitleBar/TitleBar";
import { HorizontalCardSection } from "../components/HorizontalCard/HorizontalCardSection";
import { ReviewCardSection } from "../components/ReviewCard/ReviewCardSection";

interface HomeProps {}

export function Home({ navigation, route }: StackNavProps<"Home">) {
  return (
    <SafeAreaView style={styles.containerStyle}>
      <TitleBar />
      <HorizontalCardSection />
      <ReviewCardSection />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: "#fff",
  },
});
