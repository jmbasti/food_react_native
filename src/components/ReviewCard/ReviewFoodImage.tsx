import React, { useRef, useEffect } from "react";
import { StyleSheet, View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

interface ReviewFoodImageProps {}

export const ReviewFoodImage: React.FC<ReviewFoodImageProps> = ({}) => {
  return (
    <View>
      <ScrollView
        style={styles.imagesContainerStyle}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        <Image
          style={{ width: width, height: "100%" }}
          source={require("../../../assets/obi-onyeador-kdB88FBL8bs-unsplash.jpg")}
        />
        <Image
          style={{ width: width, height: "100%" }}
          source={require("../../../assets/louis-hansel-shotsoflouis-sQDTlaADDGM-unsplash.jpg")}
        />
        <Image
          style={{ width: width, height: "100%" }}
          source={require("../../../assets/nagesh-badu-QF5rUIjQ3Ao-unsplash.jpg")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imagesContainerStyle: {
    height: 185,
    borderRadius: 10,
    overflow: "hidden",
  },
});
