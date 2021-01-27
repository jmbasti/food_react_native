import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

import { Rating } from "../Rating/Rating";
import { colors } from "../../config/colors";

interface ReviewerDetailsProps {}

export const ReviewerDetails: React.FC<ReviewerDetailsProps> = ({}) => {
  return (
    <View style={styles.reviewerStyle}>
      <Image
        style={styles.reviewerImageStyle}
        source={require("../../../assets/reviewer.jpg")}
      />
      <Text style={styles.reviewerTextStyle}>Mina</Text>
      <Text style={styles.scoreStyle}>2.5</Text>
      <Rating value={2.5} />
    </View>
  );
};

const styles = StyleSheet.create({
  reviewerStyle: {
    backgroundColor: `${colors.secondary}`,
    marginTop: -100,
    width: 80,
    height: 150,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    alignItems: "center",
  },
  reviewerImageStyle: {
    marginTop: 7.5,
    width: 65,
    height: 65,
    borderRadius: 32.5,
  },
  reviewerTextStyle: {
    color: "#fff",
    marginTop: 5,
    marginBottom: 5,
  },
  scoreStyle: {
    color: "#fff",
    marginBottom: 7.5,
  },
});
