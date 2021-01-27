import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Card } from "./Card";

interface HorizontalCardSectionProps {}

export const HorizontalCardSection: React.FC<HorizontalCardSectionProps> = ({}) => {
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainerStyle}
      >
        <Card
          title='Special Noodle Soup'
          source={require("../../../assets/frank-zhang-zzFM-Lg29Nc-unsplash.jpg")}
          discount='-30%'
        />
        <Card
          title='Asian Vegetable Rice'
          source={require("../../../assets/drew-taylor-jFu2L04tMBc-unsplash.jpg")}
          discount='-40%'
        />
        <Card
          title='Special Kebab'
          source={require("../../../assets/louis-hansel-shotsoflouis-sQDTlaADDGM-unsplash.jpg")}
          discount='-25%'
        />
        <Card
          title='Magestic Ramen'
          source={require("../../../assets/nagesh-badu-QF5rUIjQ3Ao-unsplash.jpg")}
          discount='-25%'
        />
        <Card
          title='Special Chicken Rice'
          source={require("../../../assets/obi-onyeador-kdB88FBL8bs-unsplash.jpg")}
          discount='-25%'
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  scrollContainerStyle: {
    flexDirection: "row",
    padding: 20,
    paddingLeft: 12,
    paddingTop: 20,
  },
});
