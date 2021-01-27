import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { ReviewCard } from "./ReviewCard";

interface ReviewCardSectionProps {}

export const ReviewCardSection: React.FC<ReviewCardSectionProps> = ({}) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
