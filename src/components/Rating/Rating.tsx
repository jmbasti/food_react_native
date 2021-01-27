import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

interface RatingProps {
  value: number;
}

export const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <View style={styles.ratingContainerStyle}>
      <View>
        <FontAwesome
          name={
            value >= 1 ? "star" : value >= 0.5 ? "star-half-full" : "star-o"
          }
          size={15}
          color='#fff'
        />
      </View>
      <View>
        <FontAwesome
          name={
            value >= 2 ? "star" : value >= 1.5 ? "star-half-full" : "star-o"
          }
          size={15}
          color='#fff'
        />
      </View>
      <View>
        <FontAwesome
          name={
            value >= 3 ? "star" : value >= 2.5 ? "star-half-full" : "star-o"
          }
          size={15}
          color='#fff'
        />
      </View>
      <View>
        <FontAwesome
          name={
            value >= 4 ? "star" : value >= 3.5 ? "star-half-full" : "star-o"
          }
          size={15}
          color='#fff'
        />
      </View>
      <View>
        <FontAwesome
          name={
            value >= 5 ? "star" : value >= 4.5 ? "star-half-full" : "star-o"
          }
          size={15}
          color='#fff'
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ratingContainerStyle: {
    flexDirection: "row",
  },
});
