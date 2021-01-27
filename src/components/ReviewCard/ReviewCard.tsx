import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  Text,
  ScrollView,
} from "react-native";

import { ReviewFoodImage } from "./ReviewFoodImage";
import { ReviewFlagImage } from "./ReviewFlagImage";
import { ReviewerDetails } from "./ReviewerDetails";
import { ReviewIcons } from "./ReviewIcons";
import { ReviewFoodTitle } from "./ReviewFoodTitle";

const width = Dimensions.get("screen").width;

interface ReviewCardProps {}

export const ReviewCard: React.FC<ReviewCardProps> = ({}) => {
  return (
    <View style={styles.reviewCardContainer}>
      <ReviewFoodImage />
      <ReviewFoodTitle />
      <View style={styles.detailsStyle}>
        <ReviewerDetails />
        <ReviewIcons />
        <ReviewFlagImage />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewCardContainer: {
    width: width - 30,
    height: 250,
    backgroundColor: "#ddd",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 15,

    borderRadius: 10,
  },

  detailsStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
  },
});
